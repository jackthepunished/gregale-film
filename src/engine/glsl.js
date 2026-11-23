
// Shared GLSL chunks. Hashes are sine-free so they render the same on every GPU (and on SwiftShader).
export const NOISE = /* glsl */ `
float hash11(float p){p=fract(p*.1031);p*=p+33.33;p*=p+p;return fract(p);}
float hash21(vec2 p){vec3 p3=fract(vec3(p.xyx)*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}
float hash31(vec3 p3){p3=fract(p3*.1031);p3+=dot(p3,p3.zyx+31.32);return fract((p3.x+p3.y)*p3.z);}
vec3 hash33(vec3 p3){p3=fract(p3*vec3(.1031,.1030,.0973));p3+=dot(p3,p3.yxz+33.33);return fract((p3.xxy+p3.yxx)*p3.zyx);}
vec2 hash22(vec2 p){vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));p3+=dot(p3,p3.yzx+33.33);return fract((p3.xx+p3.yz)*p3.zy);}
float vnoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float vnoise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(mix(hash31(i),hash31(i+vec3(1,0,0)),f.x),mix(hash31(i+vec3(0,1,0)),hash31(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(hash31(i+vec3(0,0,1)),hash31(i+vec3(1,0,1)),f.x),mix(hash31(i+vec3(0,1,1)),hash31(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm2(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*vnoise(p);p=p*2.03+vec2(17.1,9.2);a*=.5;}return s/.9375;}
float fbm3(vec3 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*vnoise3(p);p=p*2.03+vec3(17.1,9.2,5.7);a*=.5;}return s/.9375;}
// x: distance to the nearest cell point, y: that cell's random value
vec2 cell3(vec3 p){vec3 i=floor(p),f=fract(p);float md=9.,id=0.;
  for(int z=-1;z<=1;z++)for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec3 g=vec3(float(x),float(y),float(z));
    vec3 r=g+hash33(i+g)-f;float d=dot(r,r);if(d<md){md=d;id=hash31(i+g+.5);}}
  return vec2(sqrt(md),id);}
vec2 cell2(vec2 p){vec2 i=floor(p),f=fract(p);float md=9.,id=0.;
  for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 g=vec2(float(x),float(y));
    vec2 r=g+hash22(i+g)-f;float d=dot(r,r);if(d<md){md=d;id=hash21(i+g+.5);}}
  return vec2(sqrt(md),id);}
`;

// Uniforms every surface material shares (declared once; values live on the engine's G object).
export const COMMON_UNIFORMS = /* glsl */ `
uniform float uTime;      // seconds in the shot
uniform float uTime2;     // the same, held for two frames (anything drawn 'on twos')
uniform vec2 uRes;        // render target size in px
uniform vec3 uSunV;       // sun direction, view space
uniform vec3 uSunW;       // sun direction, world space
uniform vec3 uFogColor;   // distance haze
uniform vec3 uFogSun;     // haze colour when looking toward the sun
uniform vec4 uFog;        // x density, y height-fog base (world y), z height falloff, w max amount
uniform vec2 uNearFar;
uniform vec3 uAmb;        // (Gregale) ambient: every surface is multiplied by it (1 by day, a dark blue by night); lights are added after
`;

export const VERT_COMMON = /* glsl */ `
out vec3 vObj; out vec3 vWorld; out vec3 vNv; out vec3 vNw; out vec3 vNo; out vec3 vViewPos; out vec2 vUv;
#ifdef USE_INSTANCING_COLOR
out vec3 vICol;
#endif
`;

// Default vertex main. A material may inject code at the DISPLACE hook: it sees/edits `pos` and `nrm`.
export const vertMain = (displace = '') => /* glsl */ `
void main(){
  vec3 pos = position; vec3 nrm = normal; vUv = uv;
  ${displace}
  vec4 lp = vec4(pos,1.);
  #ifdef USE_INSTANCING
    lp = instanceMatrix*lp; nrm = mat3(instanceMatrix)*nrm;
  #endif
  #ifdef USE_INSTANCING_COLOR
    vICol = instanceColor;
  #endif
  vObj = lp.xyz; vNo = normalize(nrm);
  vec4 wp = modelMatrix*lp; vWorld = wp.xyz;
  vec4 mv = viewMatrix*wp; vViewPos = mv.xyz;
  vNv = normalize(normalMatrix*nrm);
  vNw = normalize(mat3(modelMatrix)*nrm);
  gl_Position = projectionMatrix*mv;
}`;

// Camera-facing quads (flowers, spray, petals, glows). The mesh is a unit PlaneGeometry; an instance's
// translation places it and its X scale sizes it. The hook sees/edits `off` (the corner offset in view
// units), `ctr` (centre, object space) and `spin` (radians, in-plane).
export const billboardMain = (displace = '') => /* glsl */ `
void main(){
  vUv = uv; vec4 ctr = vec4(0.,0.,0.,1.); float sc = 1.; float spin = 0.;
  #ifdef USE_INSTANCING
    ctr = instanceMatrix*ctr; sc = length(instanceMatrix[0].xyz);
  #endif
  #ifdef USE_INSTANCING_COLOR
    vICol = instanceColor;
  #endif
  vec2 off = position.xy*sc*length(modelMatrix[0].xyz);
  ${displace}
  float cs = cos(spin), sn = sin(spin); off = vec2(off.x*cs-off.y*sn, off.x*sn+off.y*cs);
  vObj = ctr.xyz; vec4 wp = modelMatrix*ctr; vWorld = wp.xyz;
  vec4 mv = viewMatrix*wp; mv.xy += off; vViewPos = mv.xyz;
  vNv = vec3(0.,0.,1.); vNw = vec3(0.,1.,0.); vNo = vec3(0.,1.,0.);
  gl_Position = projectionMatrix*mv;
}`;

// three defines USE_INSTANCING_COLOR for the vertex stage only; the fragment stage gets USE_COLOR.
export const FRAG_DEFS = /* glsl */ `
#ifdef USE_COLOR
#define USE_INSTANCING_COLOR
#endif
`;
export const FRAG_COMMON = /* glsl */ `
in vec3 vObj; in vec3 vWorld; in vec3 vNv; in vec3 vNw; in vec3 vNo; in vec3 vViewPos; in vec2 vUv;   // vNo: the normal in object space
#ifdef USE_INSTANCING_COLOR
in vec3 vICol;
#endif
layout(location=0) out vec4 oColor;
layout(location=1) out vec4 oAux;   // rgb: view normal *.5+.5, a: ink id (0 = never inked)
float linDepth(float d){float z=d*2.-1.;return 2.*uNearFar.x*uNearFar.y/(uNearFar.y+uNearFar.x-z*(uNearFar.y-uNearFar.x));}
float fogAmount(){
  float d=length(vViewPos);
  float f=1.-exp(-d*uFog.x);
  float h=exp(-max(vWorld.y-uFog.y,0.)*uFog.z);
  return clamp(f*mix(.45,1.,h),0.,uFog.w);
}
vec3 fogTint(){
  float s=max(dot(normalize(vViewPos),uSunV),0.);
  return mix(uFogColor,uFogSun,pow(s,5.));
}
vec3 applyFog(vec3 c){return mix(c*uAmb,fogTint(),fogAmount());}   // (Gregale) c*uAmb: the ambient
`;
