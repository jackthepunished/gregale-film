var Gu="187",sm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ku=0,hl=1,Hu=2,am=3,om=0,Ys=1,Wu=2,_s=3,xs=0,tn=1,Cn=2,Ui=0,Zs=1,ul=2,dl=3,fl=4,Vu=5,lm=6,vs=100,Xu=101,qu=102,Yu=103,Zu=104,Ju=200,$u=201,Ku=202,Qu=203,ju=204,td=205,ed=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,hd=0,ud=1,dd=2,pl=3,fd=4,pd=5,md=6,gd=7,_d=0,xd=1,vd=2,In=0,ml=1,gl=2,_l=3,xl=4,vl=5,yl=6,Sl=7,cm="attached",hm="detached",um=300,Js=301,ys=302,ma=303,ga=304,yd=1000,_a=1001,Sd=1002,oi=1003,Md=1004,dm=1004,$s=1005,fm=1005,ln=1006,xa=1007,pm=1007,li=1008,mm=1008,Sn=1009,bd=1010,Td=1011,Ks=1012,Ml=1013,ci=1014,Zn=1015,Pn=1016,bl=1017,Tl=1018,Fi=1020,Ad=35902,Ed=35899,wd=1021,Rd=1022,Jn=1023,Ss=1026,hi=1027,Cd=1028,Al=1029,Oi=1030,El=1031,gm=1032,wl=1033,va=33776,ya=33777,Sa=33778,Ma=33779,Rl=35840,Cl=35841,Il=35842,Pl=35843,Ll=36196,Nl=37492,Dl=37496,Ul=37488,Fl=37489,ba=37490,Ol=37491,Bl=37808,zl=37809,Gl=37810,kl=37811,Hl=37812,Wl=37813,Vl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,Jl=37819,$l=37820,Kl=37821,Ql=36492,jl=36494,tc=36495,ec=36283,nc=36284,Ta=36285,ic=36286,_m=2200,xm=2201,vm=2202,ym=2300,Sm=2301,Mm=2302,bm=2303,Tm=2400,Am=2401,Em=2402,wm=2500,Rm=2501,sc=0,rc=1,Aa=2,Cm=3200,Im=3201,Pm=3202,Lm=3203,ac=0,Id=1,Bi="",Pd="srgb",oc="srgb-linear",lc="linear",ge="srgb",Nm="",Dm="rg",Um="ga",Fm=0,Om=7680,Bm=7681,zm=7682,Gm=7683,km=34055,Hm=34056,Wm=5386,Vm=512,Xm=513,qm=514,Ym=515,Zm=516,Jm=517,$m=518,Km=519,Ld=512,Nd=513,Dd=514,cc=515,Ud=516,Fd=517,hc=518,uc=519,Qm=35044,jm=35048,tg=35040,eg=35045,ng=35049,ig=35041,sg=35046,rg=35050,ag=35042,og="100",dc="300 es",fc=2000,lg=2001,cg={COMPUTE:"compute",RENDER:"render"},hg={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},ug={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},dg={TEXTURE_COMPARE:"depthTextureCompare"},fg={NONE:0,SHARED:1,FULL:2};function pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}var mg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function cs(t,e){return new mg[t](e)}function Od(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ds(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Bd(){let t=ds("canvas");return t.style.display="block",t}var Eh={},ri=null;function gg(t){ri=t}function _g(){return ri}function Ws(...t){let e="THREE."+t.shift();if(ri)ri("log",e,...t);else console.log(e,...t)}function zd(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function gt(...t){t=zd(t);let e="THREE."+t.shift();if(ri)ri("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Ut(...t){t=zd(t);let e="THREE."+t.shift();if(ri)ri("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Vn(...t){let e=t.join(" ");if(e in Eh)return;Eh[e]=!0,gt(...t)}function Gd(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var kd={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class cn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=1234567,Li=Math.PI/180,Ni=180/Math.PI;function hn(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[t&255]+ke[t>>8&255]+ke[t>>16&255]+ke[t>>24&255]+"-"+ke[e&255]+ke[e>>8&255]+"-"+ke[e>>16&15|64]+ke[e>>24&255]+"-"+ke[n&63|128]+ke[n>>8&255]+"-"+ke[n>>16&255]+ke[n>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function pc(t,e){return(t%e+e)%e}function xg(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function vg(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function Gs(t,e,n){return(1-n)*t+n*e}function yg(t,e,n,i){return Gs(t,e,1-Math.exp(-n*i))}function Sg(t,e=1){return e-Math.abs(pc(t,e*2)-e)}function Mg(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function bg(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function Tg(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ag(t,e){return t+Math.random()*(e-t)}function Eg(t){return t*(0.5-Math.random())}function wg(t){if(t!==void 0)wh=t;let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rg(t){return t*Li}function Cg(t){return t*Ni}function Ig(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Pg(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function mc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lg(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*m,l*f,o*c);break;case"YXY":t.set(l*f,o*h,l*m,o*c);break;case"ZYZ":t.set(l*m,l*f,o*h,o*c);break;default:gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ea(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ii(t,e){if(e.constructor===Float32Array)return t;let n=Ea(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Ve(t,e){if(e.constructor===Float32Array)return t;let n=Ea(e);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var gc={DEG2RAD:Li,RAD2DEG:Ni,generateUUID:hn,clamp:Wt,euclideanModulo:pc,mapLinear:xg,inverseLerp:vg,lerp:Gs,damp:yg,pingpong:Sg,smoothstep:Mg,smootherstep:bg,randInt:Tg,randFloat:Ag,randFloatSpread:Eg,seededRandom:wg,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Ig,ceilPowerOfTwo:Pg,floorPowerOfTwo:mc,setQuaternionFromProperEuler:Lg,normalize:Ve,denormalize:Ii};class et{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r+0],d=s[r+1],f=s[r+2],m=s[r+3];if(h!==m||o!==u||l!==d||c!==f){let x=o*u+l*d+c*f+h*m;if(x<0)u=-u,d=-d,f=-f,m=-m,x=-x;let g=1-a;if(x<0.9995){let p=Math.acos(x),y=Math.sin(p);g=Math.sin(g*p)/y,a=Math.sin(a*p)/y,o=o*g+u*a,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a}else{o=o*g+u*a,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a;let p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],u=s[r+1],d=s[r+2],f=s[r+3];return t[e]=a*f+c*h+o*d-l*u,t[e+1]=o*f+c*u+l*h-a*d,t[e+2]=l*f+c*d+a*u-o*h,t[e+3]=c*f-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),u=o(n/2),d=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=u*c*h+l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h-u*d*f;break;case"YXZ":this._x=u*c*h+l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h+u*d*f;break;case"ZXY":this._x=u*c*h-l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h-u*d*f;break;case"ZYX":this._x=u*c*h-l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h+u*d*f;break;case"YZX":this._x=u*c*h+l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h-u*d*f;break;case"XZY":this._x=u*c*h-l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h+u*d*f;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=n+a+h;if(u>0){let d=0.5/Math.sqrt(u+1);this._w=0.25/d,this._x=(c-o)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(c-o)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(o+c)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Mo=new C,Rh=new Xe;class Yt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],f=n[8],m=i[0],x=i[3],g=i[6],p=i[1],y=i[4],S=i[7],v=i[2],A=i[5],w=i[8];return s[0]=r*m+a*p+o*v,s[3]=r*x+a*y+o*A,s[6]=r*g+a*S+o*w,s[1]=l*m+c*p+h*v,s[4]=l*x+c*y+h*A,s[7]=l*g+c*S+h*w,s[2]=u*m+d*p+f*v,s[5]=u*x+d*y+f*A,s[8]=u*g+d*S+f*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,u=a*o-c*s,d=l*s-r*o,f=e*h+n*u+i*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return t[0]=h*m,t[1]=(i*l-c*n)*m,t[2]=(a*n-i*r)*m,t[3]=u*m,t[4]=(c*e-i*o)*m,t[5]=(i*s-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Vn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bo.makeScale(t,e)),this}rotate(t){return Vn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return Vn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var bo=new Yt,Ch=new Yt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ih=new Yt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Ng(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=us(s.r),s.g=us(s.g),s.b=us(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Ch,fromXYZ:Ih,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Ch,fromXYZ:Ih,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var ee=Ng();function Xn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function us(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Wi;class _c{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Wi===void 0)Wi=ds("canvas");Wi.width=t.width,Wi.height=t.height;let i=Wi.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Xn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Xn(e[n]/255)*255);else e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Dg=0;class xn{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width||0,e.height||0,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(To(i[r].image));else s.push(To(i[r]))}else s=To(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function To(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return _c.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return gt("Texture: Unable to serialize Texture."),{}}class Hd extends xn{constructor(t=null){Vn('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.');super(t);this.isSource=!0}}var Ug=0,Ao=new C;class ye extends cn{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=ye.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=hn(),this.name="",this.source=new xn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ao).x}get height(){return this.source.getSize(Ao).y}get depth(){return this.source.getSize(Ao).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){gt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=300;ye.DEFAULT_ANISOTROPY=1;class pe{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],f=o[9],m=o[2],x=o[6],g=o[10];if(Math.abs(c-u)<0.01&&Math.abs(h-m)<0.01&&Math.abs(f-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+m)<0.1&&Math.abs(f+x)<0.1&&Math.abs(l+d+g-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,S=(d+1)/2,v=(g+1)/2,A=(c+u)/4,w=(h+m)/4,_=(f+x)/4;if(y>S&&y>v)if(y<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(y),i=A/n,s=w/n;else if(S>v)if(S<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(S),n=A/i,s=_/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=w/s,i=_/s;return this.set(n,i,s,e),this}let p=Math.sqrt((x-f)*(x-f)+(h-m)*(h-m)+(u-c)*(u-c));if(Math.abs(p)<0.001)p=1;return this.x=(x-f)/p,this.y=(h-m)/p,this.z=(u-c)/p,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wa extends cn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new ye({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.mipmapsAutoUpdate!==void 0)e.mipmapsAutoUpdate=t.mipmapsAutoUpdate;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new xn(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends wa{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Qs extends ye{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wd extends en{constructor(t=1,e=1,n=1,i={}){super(t,e,i);this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Qs(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class js extends ye{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Vd extends en{constructor(t=1,e=1,n=1,i={}){super(t,e,i);this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new js(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Xt{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,h,u,d,f,m,x){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,h,u,d,f,m,x)}set(t,e,n,i,s,r,a,o,l,c,h,u,d,f,m,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=f,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),r=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let u=r*c,d=r*h,f=a*c,m=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=d+f*l,e[5]=u-m*l,e[9]=-a*o,e[2]=m-u*l,e[6]=f+d*l,e[10]=r*o}else if(t.order==="YXZ"){let u=o*c,d=o*h,f=l*c,m=l*h;e[0]=u+m*a,e[4]=f*a-d,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=d*a-f,e[6]=m+u*a,e[10]=r*o}else if(t.order==="ZXY"){let u=o*c,d=o*h,f=l*c,m=l*h;e[0]=u-m*a,e[4]=-r*h,e[8]=f+d*a,e[1]=d+f*a,e[5]=r*c,e[9]=m-u*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let u=r*c,d=r*h,f=a*c,m=a*h;e[0]=o*c,e[4]=f*l-d,e[8]=u*l+m,e[1]=o*h,e[5]=m*l+u,e[9]=d*l-f,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let u=r*o,d=r*l,f=a*o,m=a*l;e[0]=o*c,e[4]=m-u*h,e[8]=f*h+d,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=d*h+f,e[10]=u-m*h}else if(t.order==="XZY"){let u=r*o,d=r*l,f=a*o,m=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=u*h+m,e[5]=r*c,e[9]=d*h-f,e[2]=f*h-d,e[6]=a*c,e[10]=m*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fg,t,Og)}lookAt(t,e,n){let i=this.elements;if(nn.subVectors(t,e),nn.lengthSq()===0)nn.z=1;if(nn.normalize(),jn.crossVectors(n,nn),jn.lengthSq()===0){if(Math.abs(n.z)===1)nn.x+=0.0001;else nn.z+=0.0001;nn.normalize(),jn.crossVectors(n,nn)}return jn.normalize(),Mr.crossVectors(nn,jn),i[0]=jn.x,i[4]=Mr.x,i[8]=nn.x,i[1]=jn.y,i[5]=Mr.y,i[9]=nn.y,i[2]=jn.z,i[6]=Mr.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],f=n[2],m=n[6],x=n[10],g=n[14],p=n[3],y=n[7],S=n[11],v=n[15],A=i[0],w=i[4],_=i[8],M=i[12],E=i[1],D=i[5],P=i[9],F=i[13],X=i[2],I=i[6],H=i[10],q=i[14],O=i[3],rt=i[7],k=i[11],J=i[15];return s[0]=r*A+a*E+o*X+l*O,s[4]=r*w+a*D+o*I+l*rt,s[8]=r*_+a*P+o*H+l*k,s[12]=r*M+a*F+o*q+l*J,s[1]=c*A+h*E+u*X+d*O,s[5]=c*w+h*D+u*I+d*rt,s[9]=c*_+h*P+u*H+d*k,s[13]=c*M+h*F+u*q+d*J,s[2]=f*A+m*E+x*X+g*O,s[6]=f*w+m*D+x*I+g*rt,s[10]=f*_+m*P+x*H+g*k,s[14]=f*M+m*F+x*q+g*J,s[3]=p*A+y*E+S*X+v*O,s[7]=p*w+y*D+S*I+v*rt,s[11]=p*_+y*P+S*H+v*k,s[15]=p*M+y*F+S*q+v*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14],f=t[3],m=t[7],x=t[11],g=t[15],p=o*d-l*u,y=a*d-l*h,S=a*u-o*h,v=r*d-l*c,A=r*u-o*c,w=r*h-a*c;return e*(m*p-x*y+g*S)-n*(f*p-x*v+g*A)+i*(f*y-m*v+g*w)-s*(f*S-m*A+x*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],f=t[12],m=t[13],x=t[14],g=t[15],p=e*a-n*r,y=e*o-i*r,S=e*l-s*r,v=n*o-i*a,A=n*l-s*a,w=i*l-s*o,_=c*m-h*f,M=c*x-u*f,E=c*g-d*f,D=h*x-u*m,P=h*g-d*m,F=u*g-d*x,X=p*F-y*P+S*D+v*E-A*M+w*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/X;return t[0]=(a*F-o*P+l*D)*I,t[1]=(i*P-n*F-s*D)*I,t[2]=(m*w-x*A+g*v)*I,t[3]=(u*A-h*w-d*v)*I,t[4]=(o*E-r*F-l*M)*I,t[5]=(e*F-i*E+s*M)*I,t[6]=(x*S-f*w-g*y)*I,t[7]=(c*w-u*S+d*y)*I,t[8]=(r*P-a*E+l*_)*I,t[9]=(n*E-e*P-s*_)*I,t[10]=(f*A-m*S+g*p)*I,t[11]=(h*S-c*A-d*p)*I,t[12]=(a*M-r*D-o*_)*I,t[13]=(e*D-n*M+i*_)*I,t[14]=(m*y-f*v-x*p)*I,t[15]=(c*v-h*y+u*p)*I,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,h=a+a,u=s*l,d=s*c,f=s*h,m=r*c,x=r*h,g=a*h,p=o*l,y=o*c,S=o*h,{x:v,y:A,z:w}=n;return i[0]=(1-(m+g))*v,i[1]=(d+S)*v,i[2]=(f-y)*v,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(u+g))*A,i[6]=(x+p)*A,i[7]=0,i[8]=(f+y)*w,i[9]=(x-p)*w,i[10]=(1-(u+m))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Vi.set(i[0],i[1],i[2]).length(),a=Vi.set(i[4],i[5],i[6]).length(),o=Vi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;pn.copy(this);let l=1/r,c=1/a,h=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(o)f=s/(r-s),m=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),m=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),f,m;if(o)f=1/(r-s),m=r/(r-s);else if(a===2000)f=-2/(r-s),m=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),m=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Vi=new C,pn=new Xt,Fg=new C(0,0,0),Og=new C(1,1,1),jn=new C,Mr=new C,nn=new C,Ph=new Xt,Lh=new Xe;class yn{constructor(t=0,e=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,d),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,d),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Wt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,d);break;case"XZY":if(this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,d),this._y=0;break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class tr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Bg=0,Nh=new C,Xi=new Xe,On=new Xt,br=new C,ws=new C,zg=new C,Gg=new Xe,Dh=new C(1,0,0),Uh=new C(0,1,0),Fh=new C(0,0,1),Oh={type:"added"},kg={type:"removed"},qi={type:"childadded",child:null},Eo={type:"childremoved",child:null};class le extends cn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();let t=new C,e=new yn,n=new Xe,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Yt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Dh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)br.copy(t);else br.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)On.lookAt(ws,br,this.up);else On.lookAt(br,ws,this.up);if(this.quaternion.setFromRotationMatrix(On),i)On.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(On),this.quaternion.premultiply(Xi.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Ut("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),qi.child=t,this.dispatchEvent(qi),qi.child=null;else Ut("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(kg),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld);return t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,zg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Gg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),u=r(t.skeletons),d=r(t.animations),f=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(u.length>0)n.skeletons=u;if(d.length>0)n.animations=d;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}le.DEFAULT_UP=new C(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pi extends le{constructor(){super();this.isGroup=!0,this.type="Group"}}var Hg={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let m of t.hand.values()){let x=e.getJointPose(m,n),g=this._getHandJoint(l,m);if(x!==null)g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius;g.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=0.02,f=0.005;if(l.inputState.pinching&&u>d+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&u<=d-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Hg)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function wo(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=pc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=wo(r,s,t+0.3333333333333333),this.g=wo(r,s,t),this.b=wo(r,s,t-0.3333333333333333)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Xd[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else gt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return ee.workingToColorSpace(He.copy(this),t),Math.round(Wt(He.r*255,0,255))*65536+Math.round(Wt(He.g*255,0,255))*256+Math.round(Wt(He.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(He.copy(this),e);let{r:n,g:i,b:s}=He,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t="srgb"){ee.workingToColorSpace(He.copy(this),t);let{r:e,g:n,b:i}=He;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Tr);let n=Gs(ti.h,Tr.h,e),i=Gs(ti.s,Tr.s,e),s=Gs(ti.l,Tr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var He=new At;At.NAMES=Xd;class Ra{constructor(t,e=0.00025){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new Ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ca{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new Ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xc extends le{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var mn=new C,Bn=new C,Ro=new C,zn=new C,Yi=new C,Zi=new C,Bh=new C,Co=new C,Io=new C,Po=new C,Lo=new pe,No=new pe,Do=new pe;class je{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mn.subVectors(i,e),Bn.subVectors(n,e),Ro.subVectors(t,e);let r=mn.dot(mn),a=mn.dot(Bn),o=mn.dot(Ro),l=Bn.dot(Bn),c=Bn.dot(Ro),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,d=(l*o-a*c)*u,f=(r*c-a*o)*u;return s.set(1-d-f,f,d)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,zn)===null)return!1;return zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,zn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,zn.x),o.addScaledVector(r,zn.y),o.addScaledVector(a,zn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Lo.setScalar(0),No.setScalar(0),Do.setScalar(0),Lo.fromBufferAttribute(t,e),No.fromBufferAttribute(t,n),Do.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Lo,s.x),r.addScaledVector(No,s.y),r.addScaledVector(Do,s.z),r}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),Bn.subVectors(t,e),mn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),mn.cross(Bn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Yi.subVectors(i,n),Zi.subVectors(s,n),Co.subVectors(t,n);let o=Yi.dot(Co),l=Zi.dot(Co);if(o<=0&&l<=0)return e.copy(n);Io.subVectors(t,i);let c=Yi.dot(Io),h=Zi.dot(Io);if(c>=0&&h<=c)return e.copy(i);let u=o*h-c*l;if(u<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),e.copy(n).addScaledVector(Yi,r);Po.subVectors(t,s);let d=Yi.dot(Po),f=Zi.dot(Po);if(f>=0&&d<=f)return e.copy(s);let m=d*l-o*f;if(m<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(Zi,a);let x=c*f-d*h;if(x<=0&&h-c>=0&&d-f>=0)return Bh.subVectors(s,i),a=(h-c)/(h-c+(d-f)),e.copy(i).addScaledVector(Bh,a);let g=1/(x+m+u);return r=m*g,a=u*g,e.copy(n).addScaledVector(Yi,r).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Be{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,gn);else gn.fromBufferAttribute(s,r);gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Ar.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Ar.copy(n.boundingBox)}Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),Er.subVectors(this.max,Rs),Ji.subVectors(t.a,Rs),$i.subVectors(t.b,Rs),Ki.subVectors(t.c,Rs),ei.subVectors($i,Ji),ni.subVectors(Ki,$i),vi.subVectors(Ji,Ki);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];if(!Uo(e,Ji,$i,Ki,Er))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Ji,$i,Ki,Er))return!1;return wr.crossVectors(ei,ni),e=[wr.x,wr.y,wr.z],Uo(e,Ji,$i,Ki,Er)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(gn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Gn=[new C,new C,new C,new C,new C,new C,new C,new C],gn=new C,Ar=new Be,Ji=new C,$i=new C,Ki=new C,ei=new C,ni=new C,vi=new C,Rs=new C,Er=new C,wr=new C,yi=new C;function Uo(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){yi.fromArray(t,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=n.dot(yi),h=i.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wn=Wg();function Wg(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;if(c<-27)i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24;else if(c<-14)i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1;else if(c<=15)i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13;else if(c<128)i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24;else i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;while((c&8388608)===0)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)if(l!==32)o[l]=1024;return{floatView:e,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Qe(t){if(Math.abs(t)>65504)gt("DataUtils.toHalfFloat(): Value out of range.");t=Wt(t,-65504,65504),Wn.floatView[0]=t;let e=Wn.uint32View[0],n=e>>23&511;return Wn.baseTable[n]+((e&8388607)>>Wn.shiftTable[n])}function Bs(t){let e=t>>10;return Wn.uint32View[0]=Wn.mantissaTable[Wn.offsetTable[e]+(t&1023)]+Wn.exponentTable[e],Wn.floatView[0]}class qd{static toHalfFloat(t){return Qe(t)}static fromHalfFloat(t){return Bs(t)}}var Ae=new C,Rr=new et,Vg=0;class ce extends cn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?Ea(t):void 0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=this._denormalize(e);return e}setX(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=this._denormalize(e);return e}setY(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=this._denormalize(e);return e}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=this._denormalize(e);return e}setW(t,e){if(this.normalized)e=this._normalize(e);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ii(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ve(t,this.array)}}class Yd extends ce{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Zd extends ce{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Jd extends ce{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class $d extends ce{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Ia extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kd extends ce{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Pa extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qd extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n);this.isFloat16BufferAttribute=!0}getX(t){let e=Bs(this.array[t*this.itemSize]);if(this.normalized)e=Ii(e,this.array);return e}setX(t,e){if(this.normalized)e=Ve(e,this.array);return this.array[t*this.itemSize]=Qe(e),this}getY(t){let e=Bs(this.array[t*this.itemSize+1]);if(this.normalized)e=Ii(e,this.array);return e}setY(t,e){if(this.normalized)e=Ve(e,this.array);return this.array[t*this.itemSize+1]=Qe(e),this}getZ(t){let e=Bs(this.array[t*this.itemSize+2]);if(this.normalized)e=Ii(e,this.array);return e}setZ(t,e){if(this.normalized)e=Ve(e,this.array);return this.array[t*this.itemSize+2]=Qe(e),this}getW(t){let e=Bs(this.array[t*this.itemSize+3]);if(this.normalized)e=Ii(e,this.array);return e}setW(t,e){if(this.normalized)e=Ve(e,this.array);return this.array[t*this.itemSize+3]=Qe(e),this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Ve(e,this.array),n=Ve(n,this.array);return this.array[t+0]=Qe(e),this.array[t+1]=Qe(n),this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array);return this.array[t+0]=Qe(e),this.array[t+1]=Qe(n),this.array[t+2]=Qe(i),this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),s=Ve(s,this.array);return this.array[t+0]=Qe(e),this.array[t+1]=Qe(n),this.array[t+2]=Qe(i),this.array[t+3]=Qe(s),this}}class Et extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Xg=new Be,Cs=new C,Fo=new C;class De{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Xg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Fo)),this.expandByPoint(Cs.copy(t.center).sub(Fo));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var qg=0,on=new Xt,Oo=new le,Qi=new C,sn=new Be,Is=new Be,Ne=new C;class Jt extends cn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((pg(t))?Pa:Ia)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Be;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(sn.setFromBufferAttribute(s),this.morphTargetsRelative)Ne.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ne);else this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new De;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Is.setFromBufferAttribute(a),this.morphTargetsRelative)Ne.addVectors(sn.min,Is.min),sn.expandByPoint(Ne),Ne.addVectors(sn.max,Is.max),sn.expandByPoint(Ne);else sn.expandByPoint(Is.min),sn.expandByPoint(Is.max)}sn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ne.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ne.fromBufferAttribute(a,l),o)Qi.fromBufferAttribute(t,l),Ne.add(Qi);i=Math.max(i,n.distanceToSquared(Ne))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let M=0;M<n.count;M++)a[M]=new C,o[M]=new C;let c=new C,h=new C,u=new C,d=new et,f=new et,m=new et,x=new C,g=new C;function p(M,E,D){l[M]=l[E]=l[D]=1,c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,D),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,D),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);if(!isFinite(P))return;x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[M].add(x),a[E].add(x),a[D].add(x),o[M].add(g),o[E].add(g),o[D].add(g)}let y=this.groups;if(y.length===0)y=[{start:0,count:t.count}];for(let M=0,E=y.length;M<E;++M){let D=y[M],{start:P,count:F}=D;for(let X=P,I=P+F;X<I;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let S=new C,v=new C,A=new C,w=new C;function _(M){A.fromBufferAttribute(i,M),w.copy(A);let E=a[M];S.copy(E),S.sub(A.multiplyScalar(A.dot(E))).normalize(),v.crossVectors(w,E);let P=v.dot(o[M])<0?-1:1;r.setXYZW(M,S.x,S.y,S.z,P)}for(let M=0,E=n.count;M<E;++M)if(l[M])_(M);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new C,s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){let f=t.getX(u+0),m=t.getX(u+1),x=t.getX(u+2);i.fromBufferAttribute(e,f),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,u=new l.constructor(o.length*c),d=0,f=0;for(let m=0,x=o.length;m<x;m++){if(a.isInterleavedBufferAttribute)d=o[m]*a.data.stride+a.offset;else d=o[m]*c;for(let g=0;g<c;g++)u[f++]=l[d++]}return new ce(u,c,h)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Jt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let u=l[c],d=t(u,n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];c.push(d.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};let e=zh(this.array);if(t.arrayBuffers[e]===void 0)t.arrayBuffers[e]=this.array.slice(0).buffer;let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};let e=zh(this.array);if(t.arrayBuffers[e]===void 0)t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function zh(t){if(t.buffer._uuid===void 0)t.buffer._uuid=hn();if(t.byteOffset===0&&t.byteLength===t.buffer.byteLength)return t.buffer._uuid;return t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}var Je=new C;class qn{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Ea(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=this._denormalize(n);return n}setComponent(t,e,n){if(this.normalized)n=this._normalize(n);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=this._normalize(e);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=this._denormalize(e);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=this._denormalize(e);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=this._denormalize(e);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=this._denormalize(e);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=this._normalize(e),n=this._normalize(n);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new qn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ii(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ve(t,this.data.array)}}var Bo=new C,Yg=new C,Zg=new Yt;class An{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Bo.subVectors(n,e).cross(Yg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Bo),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zg.getNormalMatrix(t),i=this.coplanarPoint(Bo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Jg=0;class Ue extends cn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){gt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new At().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.diffuseRoughness!==void 0)this.diffuseRoughness=t.diffuseRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum;if(t.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1];if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new An().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new et().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale);if(t.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null;if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class La extends Ue{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var ji,Ps=new C,ts=new C,es=new C,ns=new et,Ls=new et,jd=new Xt,Cr=new C,Ns=new C,Ir=new C,Gh=new et,zo=new et,kh=new et;class vc extends le{constructor(t=new La){super();if(this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Jt;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new zi(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new qn(n,3,0,!1)),ji.setAttribute("uv",new qn(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new et(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(ts.setFromMatrixScale(this.matrixWorld),jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)ts.multiplyScalar(-es.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Pr(Cr.set(-0.5,-0.5,0),es,r,ts,i,s),Pr(Ns.set(0.5,-0.5,0),es,r,ts,i,s),Pr(Ir.set(0.5,0.5,0),es,r,ts,i,s),Gh.set(0,0),zo.set(1,0),kh.set(1,1);let a=t.ray.intersectTriangle(Cr,Ns,Ir,!1,Ps);if(a===null){if(Pr(Ns.set(-0.5,0.5,0),es,r,ts,i,s),zo.set(0,1),a=t.ray.intersectTriangle(Cr,Ir,Ns,!1,Ps),a===null)return}let o=t.ray.origin.distanceTo(Ps);if(o<t.near||o>t.far)return;e.push({distance:o,point:Ps.clone(),uv:je.getInterpolation(Ps,Cr,Ns,Ir,Gh,zo,kh,new et),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Pr(t,e,n,i,s,r){if(ns.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)Ls.x=r*ns.x-s*ns.y,Ls.y=s*ns.x+r*ns.y;else Ls.copy(ns);t.copy(e),t.x+=Ls.x,t.y+=Ls.y,t.applyMatrix4(jd)}var Lr=new C,Hh=new C;class yc extends le{constructor(){super();this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let s=e[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,s;for(s=0;s<i.length;s++)if(e<i[s].distance)break;return i.splice(s,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let s=e[n].distance;if(e[n].object.visible)s-=s*e[n].hysteresis;if(t<s)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Lr.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Lr);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){Lr.setFromMatrixPosition(t.matrixWorld),Hh.setFromMatrixPosition(this.matrixWorld);let n=Lr.distanceTo(Hh)/t.zoom;e[0].object.visible=!0;let i,s;for(i=1,s=e.length;i<s;i++){let r=e[i].distance;if(e[i].object.visible)r-=r*e[i].hysteresis;if(n>=r)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}this._currentLevel=i-1;for(;i<s;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,s=n.length;i<s;i++){let r=n[i];e.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return e}}var kn=new C,Go=new C,Nr=new C,Dr=new C;class Gi{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Go.copy(t).add(e).multiplyScalar(0.5),Nr.copy(e).sub(t).normalize(),Dr.copy(this.origin).sub(Go);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Nr),a=Dr.dot(this.direction),o=-Dr.dot(Nr),l=Dr.lengthSq(),c=Math.abs(1-r*r),h,u,d,f;if(c>0)if(h=r*o-a,u=r*a-o,f=s*c,h>=0)if(u>=-f)if(u<=f){let m=1/c;h*=m,u*=m,d=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u=-s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else if(u<=-f)h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else if(u<=f)h=0,u=Math.min(Math.max(-s,-o),s),d=u*(u+2*o)+l;else h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(Go).addScaledVector(Nr,u);return d}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l;else n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l;if(c>=0)s=(t.min.y-u.y)*c,r=(t.max.y-u.y)*c;else s=(t.max.y-u.y)*c,r=(t.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h;else a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,h=t.x-r.x,u=t.y-r.y,d=t.z-r.z,f=e.x-r.x,m=e.y-r.y,x=e.z-r.z,g=n.x-r.x,p=n.y-r.y,y=n.z-r.z,S=Math.abs(o),v=Math.abs(l),A=Math.abs(c),w,_,M,E,D,P,F,X,I,H,q,O;if(S>=v&&S>=A)if(M=o,P=h,I=f,O=g,o>=0)w=l,_=c,E=u,D=d,F=m,X=x,H=p,q=y;else w=c,_=l,E=d,D=u,F=x,X=m,H=y,q=p;else if(v>=A)if(M=l,P=u,I=m,O=p,l>=0)w=c,_=o,E=d,D=h,F=x,X=f,H=y,q=g;else w=o,_=c,E=h,D=d,F=f,X=x,H=g,q=y;else if(M=c,P=d,I=x,O=y,c>=0)w=o,_=l,E=h,D=u,F=f,X=m,H=g,q=p;else w=l,_=o,E=u,D=h,F=m,X=f,H=p,q=g;if(M===0)return null;let rt=w/M,k=_/M,J=1/M,nt=E-rt*P,yt=D-k*P,Z=F-rt*I,it=X-k*I,Tt=H-rt*O,Ct=q-k*O,Ft=Tt*it-Ct*Z,xt=nt*Ct-yt*Tt,ne=Z*yt-it*nt;if(i){if(Ft<0||xt<0||ne<0)return null}else if((Ft<0||xt<0||ne<0)&&(Ft>0||xt>0||ne>0))return null;let Vt=Ft+xt+ne;if(Vt===0)return null;let Bt=J*(Ft*P+xt*I+ne*O);if(Vt>0?Bt<0:Bt>0)return null;return this.at(Bt/Vt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends Ue{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Wh=new Xt,Si=new Gi,Ur=new De,Vh=new C,Fr=new C,Or=new C,Br=new C,ko=new C,zr=new C,Xh=new C,Gr=new C;class Re extends le{constructor(t=new Jt,e=new ui){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){zr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(ko.fromBufferAttribute(h,t),r)zr.addScaledVector(ko,c);else zr.addScaledVector(ko.sub(e),c)}e.add(zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Si.copy(t.ray).recast(t.near),Ur.containsPoint(Si.origin)===!1){if(Si.intersectSphere(Ur,Vh)===null)return;if(Si.origin.distanceToSquared(Vh)>(t.far-t.near)**2)return}if(Wh.copy(s).invert(),Si.copy(t.ray).applyMatrix4(Wh),n.boundingBox!==null){if(Si.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Si)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:u,drawRange:d}=s;if(a!==null)if(Array.isArray(r))for(let f=0,m=u.length;f<m;f++){let x=u[f],g=r[x.materialIndex],p=Math.max(x.start,d.start),y=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let S=p,v=y;S<v;S+=3){let A=a.getX(S),w=a.getX(S+1),_=a.getX(S+2);if(i=kr(this,g,t,n,l,c,h,A,w,_),i)i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=f,g=m;x<g;x+=3){let p=a.getX(x),y=a.getX(x+1),S=a.getX(x+2);if(i=kr(this,r,t,n,l,c,h,p,y,S),i)i.faceIndex=Math.floor(x/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,m=u.length;f<m;f++){let x=u[f],g=r[x.materialIndex],p=Math.max(x.start,d.start),y=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let S=p,v=y;S<v;S+=3){let A=S,w=S+1,_=S+2;if(i=kr(this,g,t,n,l,c,h,A,w,_),i)i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,e.push(i)}}else{let f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let x=f,g=m;x<g;x+=3){let p=x,y=x+1,S=x+2;if(i=kr(this,r,t,n,l,c,h,p,y,S),i)i.faceIndex=Math.floor(x/3),e.push(i)}}}}function $g(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Gr.copy(o),Gr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Gr);if(c<n.near||c>n.far)return null;return{distance:c,point:Gr.clone(),object:t}}function kr(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Fr),t.getVertexPosition(l,Or),t.getVertexPosition(c,Br);let h=$g(t,e,n,i,Fr,Or,Br,Xh);if(h){let u=new C;if(je.getBarycoord(Xh,Fr,Or,Br,u),s)h.uv=je.getInterpolatedAttribute(s,o,l,c,u,new et);if(r)h.uv1=je.getInterpolatedAttribute(r,o,l,c,u,new et);if(a){if(h.normal=je.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let d={a:o,b:l,c,normal:new C,materialIndex:0};je.getNormal(Fr,Or,Br,d.normal),h.face=d,h.barycoord=u}return h}var Ds=new pe,qh=new pe,Yh=new pe,Kg=new pe,Zh=new Xt,Hr=new C,Ho=new De,Jh=new Xt,Wo=new Gi;class Sc extends Re{constructor(t,e){super(t,e);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xt,this.bindMatrixInverse=new Xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;if(this.boundingBox===null)this.boundingBox=new Be;this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Hr),this.boundingBox.expandByPoint(Hr)}computeBoundingSphere(){let t=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new De;this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Hr),this.boundingSphere.expandByPoint(Hr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;if(n===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),t.ray.intersectsSphere(Ho)===!1)return;if(Jh.copy(i).invert(),Wo.copy(t.ray).applyMatrix4(Jh),this.boundingBox!==null){if(Wo.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(t,e,Wo)}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){if(this.skeleton=t,e===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld;this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new pe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();if(s!==1/0)t.multiplyScalar(s);else t.set(1,0,0,0);e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else gt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;if(qh.fromBufferAttribute(i.attributes.skinIndex,t),Yh.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4)Ds.copy(e),e.set(0,0,0,0);else Ds.set(e.x,e.y,e.z,1),e.set(0,0,0);Ds.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=Yh.getComponent(s);if(r!==0){let a=qh.getComponent(s);Zh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Kg.copy(Ds).applyMatrix4(Zh),r)}}if(e.isVector4)e.w=Ds.w;return e.applyMatrix4(this.bindMatrixInverse)}}class Na extends le{constructor(){super();this.isBone=!0,this.type="Bone"}}class rn extends ye{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,h,u){super(null,r,a,o,l,c,i,s,h,u);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var $h=new Xt,Qg=new Xt;class Da{constructor(t=[],e=[]){this.uuid=hn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){gt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Xt;if(this.bones[t])n.copy(this.bones[t].matrixWorld).invert();this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];if(n)n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];if(n){if(n.parent&&n.parent.isBone)n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld);else n.matrix.copy(n.matrixWorld);n.matrix.decompose(n.position,n.quaternion,n.scale)}}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){let a=t[s]?t[s].matrixWorld:Qg;$h.multiplyMatrices(a,e[s]),$h.toArray(n,s*16)}if(i!==null)i.needsUpdate=!0}clone(){return new Da(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new rn(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],r=e[s];if(r===void 0)gt("Skeleton: No bone found with UUID:",s),r=new Na;this.bones.push(r),this.boneInverses.push(new Xt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let r=e[i];t.bones.push(r.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}}class wn extends ce{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var is=new Xt,Kh=new Xt,Wr=[],Qh=new Be,jg=new Xt,Us=new Re,Fs=new De;class Mc extends Re{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jg)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Be;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Qh.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(Qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new De;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Fs.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,is),Kh.multiplyMatrices(n,is),Us.matrixWorld=Kh,Us.raycast(t,Wr);for(let r=0,a=Wr.length;r<a;r++){let o=Wr[r];o.instanceId=s,o.object=this,e.push(o)}Wr.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new rn(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Mi=new De,t_=new et(0.5,0.5),Vr=new C;class ai{constructor(t=new An,e=new An,n=new An,i=new An,s=new An,r=new An){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],S=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,g-f,v-p).normalize(),i[1].setComponents(l+r,d+c,g+f,v+p).normalize(),i[2].setComponents(l+a,d+h,g+m,v+y).normalize(),i[3].setComponents(l-a,d-h,g-m,v-y).normalize(),n)i[4].setComponents(o,u,x,S).normalize(),i[5].setComponents(l-o,d-u,g-x,v-S).normalize();else if(i[4].setComponents(l-o,d-u,g-x,v-S).normalize(),e===2000)i[5].setComponents(l+o,d+u,g+x,v+S).normalize();else if(e===2001)i[5].setComponents(o,u,x,S).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);let e=t_.distanceTo(t.center);return Mi.radius=0.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vr.x=i.normal.x>0?t.max.x:t.min.x,Vr.y=i.normal.y>0?t.max.y:t.min.y,Vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var jh=new Xt;class nr{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];if(jh.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new ai;n[i].setFromProjectionMatrix(jh,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++){if(e[i]===void 0)e[i]=new ai;e[i].copy(n[i])}return this._count=t._count,this}clone(){return new nr().copy(this)}}function Vo(t,e){return t-e}function e_(t,e){return t.z-e.z}function n_(t,e){return e.z-t.z}class tf{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let s=this.pool,r=this.list;if(this.index>=s.length)s.push({start:-1,count:-1,z:-1,index:-1});let a=s[this.index];r.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}var Ke=new Xt,i_=new At(1,1,1),s_=new ai,r_=new nr,Xr=new Be,bi=new De,Xo=new C,tu=new C,eu=new C,a_=new C,qo=new tf,We=new Re,qr=[];function o_(t,e,n=0){let i=e.itemSize;if(t.isInterleavedBufferAttribute||t.array.constructor!==e.array.constructor){let s=t.count;for(let r=0;r<s;r++)for(let a=0;a<i;a++)e.setComponent(r+n,a,t.getComponent(r,a))}else e.array.set(t.array,n*i);e.needsUpdate=!0}function bn(t,e){if(t.constructor!==e.constructor){let n=Math.min(t.length,e.length);for(let i=0;i<n;i++)e[i]=t[i]}else{let n=Math.min(t.length,e.length);e.set(new t.constructor(t.buffer,0,n))}}class bc extends Re{constructor(t,e,n=e*2,i){super(new Jt,i);this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new rn(e,t,t,1023,1015);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new rn(e,t,t,1029,1014);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new rn(e,t,t,1023,1015);n.colorSpace=ee.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in t.attributes){let r=t.getAttribute(s),{array:a,itemSize:o,normalized:l}=r,c=new a.constructor(n*o),h=new ce(c,o,l);e.setAttribute(s,h)}if(t.getIndex()!==null){let s=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new ce(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(Boolean(t.getIndex())!==Boolean(e.getIndex()))throw Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),s=e.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Be;let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,Ke),this.getBoundingBoxAt(s,Xr).applyMatrix4(Ke),t.union(Xr)}}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new De;let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,Ke),this.getBoundingSphereAt(s,bi).applyMatrix4(Ke),t.union(bi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;if(this._availableInstanceIds.length>0)this._availableInstanceIds.sort(Vo),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n;else i=this._instanceInfo.length,this._instanceInfo.push(n);let s=this._matricesTexture;Ke.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;let r=this._colorsTexture;if(r)i_.toArray(r.image.data,i*4),r.needsUpdate=!0;return this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let r=t.getIndex();if(r!==null)i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?r.count:n;if(i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;if(this._availableGeometryIds.length>0)this._availableGeometryIds.sort(Vo),o=this._availableGeometryIds.shift(),s[o]=i;else o=this._geometryCount,this._geometryCount++,s.push(i);return this.setGeometryAt(o,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,o}setGeometryAt(t,e){if(t>=this._geometryCount)throw Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),r=e.getIndex(),a=this._geometryInfo[t];if(i&&r.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let{vertexStart:o,reservedVertexCount:l}=a;a.vertexCount=e.getAttribute("position").count;for(let c in n.attributes){let h=e.getAttribute(c),u=n.getAttribute(c);o_(h,u,o);let d=h.itemSize;for(let f=h.count,m=l;f<m;f++){let x=o+f;for(let g=0;g<d;g++)u.setComponent(x,g,0)}u.needsUpdate=!0,u.addUpdateRange(o*d,l*d)}if(i){let{indexStart:c,reservedIndexCount:h}=a;a.indexCount=e.getIndex().count;for(let u=0;u<r.count;u++)s.setX(c+u,o+r.getX(u));for(let u=r.count,d=h;u<d;u++)s.setX(c+u,o);s.needsUpdate=!0,s.addUpdateRange(c,a.reservedIndexCount)}if(a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null)a.boundingBox=e.boundingBox.clone();if(a.boundingSphere=null,e.boundingSphere!==null)a.boundingSphere=e.boundingSphere.clone();return this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)if(n[i].active&&n[i].geometryIndex===t)this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((r,a)=>a).sort((r,a)=>n[r].vertexStart-n[a].vertexStart),s=this.geometry;for(let r=0,a=n.length;r<a;r++){let o=i[r],l=n[o];if(l.active===!1)continue;if(s.index!==null){if(l.indexStart!==e){let{indexStart:c,vertexStart:h,reservedIndexCount:u}=l,d=s.index,f=d.array,m=t-h;for(let x=c;x<c+u;x++)f[x]=f[x]+m;d.array.copyWithin(e,c,c+u),d.addUpdateRange(e,u),d.needsUpdate=!0,l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){let{vertexStart:c,reservedVertexCount:h}=l,u=s.attributes;for(let d in u){let f=u[d],{array:m,itemSize:x}=f;m.copyWithin(t*x,c*x,(c+h)*x),f.addUpdateRange(t*x,h*x),f.needsUpdate=!0}l.vertexStart=t}t+=l.reservedVertexCount,l.start=s.index?l.indexStart:l.vertexStart}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let s=new Be,r=n.index,a=n.attributes.position;for(let o=i.start,l=i.start+i.count;o<l;o++){let c=o;if(r)c=r.getX(c);s.expandByPoint(Xo.fromBufferAttribute(a,c))}i.boundingBox=s}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let s=new De;this.getBoundingBoxAt(t,Xr),Xr.getCenter(s.center);let r=n.index,a=n.attributes.position,o=0;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;if(r)h=r.getX(h);Xo.fromBufferAttribute(a,h),o=Math.max(o,s.center.distanceToSquared(Xo))}s.radius=Math.sqrt(o),i.boundingSphere=s}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){if(this.validateInstanceId(t),this._colorsTexture===null)this._initColorsTexture();return e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){if(this.validateInstanceId(t),this._colorsTexture===null)if(e.isVector4)return e.set(1,1,1,1);else return e.setRGB(1,1,1);else return e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){if(this.validateInstanceId(t),this._instanceInfo[t].visible===e)return this;return this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;e.sort(Vo);while(e[e.length-1]===n.length-1)n.pop(),e.pop();if(t<n.length)throw Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),s=new Int32Array(t);bn(this._multiDrawCounts,i),bn(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s;let r=new Int32Array(t),a=new Int32Array(t),o=new Int32Array(t);bn(this._mergedDrawCounts,r),bn(this._mergedDrawStarts,a),bn(this._mergedDrawInstanceCounts,o),this._mergedDrawCounts=r,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=o,this._maxInstanceCount=t;let l=this._indirectTexture,c=this._matricesTexture,h=this._colorsTexture;if(l.dispose(),this._initIndirectTexture(),bn(l.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),bn(c.image.data,this._matricesTexture.image.data),h)h.dispose(),this._initColorsTexture(),bn(h.image.data,this._colorsTexture.image.data);if(this._previousMatricesTexture!==null)this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null}setGeometrySize(t,e){let n=[...this._geometryInfo].filter((a)=>a.active);if(Math.max(...n.map((a)=>a.vertexStart+a.reservedVertexCount))>t)throw Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index){if(Math.max(...n.map((o)=>o.indexStart+o.reservedIndexCount))>e)throw Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`)}let s=this.geometry;if(s.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized)this._geometryInitialized=!1,this.geometry=new Jt,this._initializeGeometry(s);let r=this.geometry;if(s.index)bn(s.index.array,r.index.array);for(let a in s.attributes)bn(s.attributes[a].array,r.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,r=this.geometry;if(We.material=this.material,We.geometry.index=r.index,We.geometry.attributes=r.attributes,We.geometry.boundingBox===null)We.geometry.boundingBox=new Be;if(We.geometry.boundingSphere===null)We.geometry.boundingSphere=new De;for(let a=0,o=n.length;a<o;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,c=i[l];We.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(a,We.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,We.geometry.boundingBox),this.getBoundingSphereAt(l,We.geometry.boundingSphere),We.raycast(t,qr);for(let h=0,u=qr.length;h<u;h++){let d=qr[h];d.object=this,d.batchId=a,e.push(d)}qr.length=0}We.material=null,We.geometry.index=null,We.geometry.attributes={},We.geometry.setDrawRange(0,1/0)}copy(t){if(super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map((e)=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map((e)=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null)this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice();else this._colorsTexture=null;return this}dispose(){if(super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null)this._colorsTexture.dispose(),this._colorsTexture=null;if(this._previousMatricesTexture!==null)this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let s=e.getIndex(),r=s===null?1:s.array.BYTES_PER_ELEMENT,a=1;if(n.wireframe)a=2,r=e.attributes.position.count>65535?4:2;let o=this._instanceInfo,l=this._multiDrawStarts,c=this._multiDrawCounts,h=this._mergedDrawStarts,u=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,f=this._geometryInfo,m=this.perObjectFrustumCulled,x=this._indirectTexture,g=x.image.data,p=t.isArrayCamera?r_:s_;if(m)if(t.isArrayCamera)p.setFromArrayCamera(t);else Ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),p.setFromProjectionMatrix(Ke,t.coordinateSystem,t.reversedDepth);let y=0,S=0;if(this.sortObjects){Ke.copy(this.matrixWorld).invert(),tu.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Ke),eu.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(Ke);for(let w=0,_=o.length;w<_;w++)if(o[w].visible&&o[w].active){let M=o[w].geometryIndex;this.getMatrixAt(w,Ke),this.getBoundingSphereAt(M,bi).applyMatrix4(Ke);let E=!1;if(m)E=!p.intersectsSphere(bi);if(!E){let D=f[M],P=a_.subVectors(bi.center,tu).dot(eu);qo.push(D.start,D.count,P,w)}}let v=qo.list,A=this.customSort;if(A===null)v.sort(n.transparent?n_:e_);else A.call(this,v,t);for(let w=0,_=v.length;w<_;w++){let M=v[w],E=M.start*r*a,D=M.count*a;if(i==="merged")if(S>0&&h[S-1]===E&&u[S-1]===D)d[S-1]++;else h[S]=E,u[S]=D,d[S]=1,S++;else l[y]=E,c[y]=D;g[y]=M.index,y++}qo.reset()}else for(let v=0,A=o.length;v<A;v++)if(o[v].visible&&o[v].active){let w=o[v].geometryIndex,_=!1;if(m)this.getMatrixAt(v,Ke),this.getBoundingSphereAt(w,bi).applyMatrix4(Ke),_=!p.intersectsSphere(bi);if(!_){let M=f[w],E=M.start*r*a,D=M.count*a;if(i==="merged")if(S>0&&h[S-1]===E&&u[S-1]===D)d[S-1]++;else h[S]=E,u[S]=D,d[S]=1,S++;else l[y]=E,c[y]=D;g[y]=v,y++}}x.needsUpdate=!0,this._multiDrawCount=y,this._mergedDrawCount=S,this._multiDrawBytesPerElement=r,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,s){if(t.isWebGPURenderer===!0){if(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)this._indirectTexture.needsUpdate=!0}else this._updateDrawParameters(n,i,s)}onBeforeShadow(t,e,n,i,s,r){if(t.isWebGPURenderer!==!0)this._updateDrawParameters(i,s,r)}}class qe extends Ue{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var ua=new C,da=new C,nu=new Xt,Os=new Gi,Yr=new De,Yo=new C,iu=new C;class Yn extends le{constructor(t=new Jt,e=new qe){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ua.fromBufferAttribute(e,i-1),da.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ua.distanceTo(da);t.setAttribute("lineDistance",new Et(n,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,t.ray.intersectsSphere(Yr)===!1)return;nu.copy(i).invert(),Os.copy(t.ray).applyMatrix4(nu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,x=f-1;m<x;m+=l){let g=c.getX(m),p=c.getX(m+1),y=Zr(this,t,Os,o,g,p,m);if(y)e.push(y)}if(this.isLineLoop){let m=c.getX(f-1),x=c.getX(d),g=Zr(this,t,Os,o,m,x,f-1);if(g)e.push(g)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,x=f-1;m<x;m+=l){let g=Zr(this,t,Os,o,m,m+1,m);if(g)e.push(g)}if(this.isLineLoop){let m=Zr(this,t,Os,o,f-1,d,f-1);if(m)e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zr(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(ua.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),n.distanceSqToSegment(ua,da,Yo,iu)>i)return;Yo.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Yo);if(c<e.near||c>e.far)return;return{distance:c,point:iu.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var su=new C,ru=new C;class Mn extends Yn{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)su.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+su.distanceTo(ru);t.setAttribute("lineDistance",new Et(n,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tc extends Yn{constructor(t,e){super(t,e);this.isLineLoop=!0,this.type="LineLoop"}}class Ua extends Ue{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var au=new Xt,rl=new Gi,Jr=new De,$r=new C;class Ac extends le{constructor(t=new Jt,e=new Ua){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,t.ray.intersectsSphere(Jr)===!1)return;au.copy(i).invert(),rl.copy(t.ray).applyMatrix4(au);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null){let u=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let f=u,m=d;f<m;f++){let x=l.getX(f);$r.fromBufferAttribute(h,x),ou($r,x,o,i,t,e,this)}}else{let u=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let f=u,m=d;f<m;f++)$r.fromBufferAttribute(h,f),ou($r,f,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ou(t,e,n,i,s,r,a){let o=rl.distanceSqToPoint(t);if(o<n){let l=new C;rl.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ec extends ye{constructor(t,e,n,i,s=1006,r=1006,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let c=this;function h(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=t.requestVideoFrameCallback(h)}if("requestVideoFrameCallback"in t)this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;if("requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA)this.needsUpdate=!0}dispose(){if(this._requestVideoFrameCallbackId!==0)this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0;super.dispose()}}class ef extends Ec{constructor(t,e,n,i,s,r,a,o){super({},t,e,n,i,s,r,a,o);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class nf extends ye{constructor(t,e){super({width:t,height:e});this.isFramebufferTexture=!0,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new xn(Object.assign({},t.image)),this}}class ir extends ye{constructor(t=[],e,n,i,s,r,a,o,l,c,h,u){super(null,r,a,o,l,c,i,s,h,u);this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class sf extends ir{constructor(t,e,n,i,s,r){super(t,e,n,s,r);this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=1001,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends ir{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,301);this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Ms extends ye{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class af extends ye{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class of extends ye{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let c=t?t.parentNode:null;if(c!==null&&"requestPaint"in c)c.onpaint=()=>{this.needsUpdate=!0},c.requestPaint()}dispose(){let t=this.image?this.image.parentNode:null;if(t!==null&&"onpaint"in t)t.onpaint=null;super.dispose()}}class di extends ye{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Fa extends di{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Oa extends ye{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $n extends Jt{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=0,d=0;f("z","y","x",-1,-1,n,e,t,r,s,0),f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,1,t,n,e,i,r,2),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,n,i,s,4),f("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2));function f(m,x,g,p,y,S,v,A,w,_,M){let E=S/w,D=v/_,P=S/2,F=v/2,X=A/2,I=w+1,H=_+1,q=0,O=0,rt=new C;for(let k=0;k<H;k++){let J=k*D-F;for(let nt=0;nt<I;nt++){let yt=nt*E-P;rt[m]=yt*p,rt[x]=J*y,rt[g]=X,l.push(rt.x,rt.y,rt.z),rt[m]=0,rt[x]=0,rt[g]=A>0?1:-1,c.push(rt.x,rt.y,rt.z),h.push(nt/w),h.push(1-k/_),q+=1}}for(let k=0;k<_;k++)for(let J=0;J<w;J++){let nt=u+J+I*k,yt=u+J+I*(k+1),Z=u+(J+1)+I*(k+1),it=u+(J+1)+I*k;o.push(nt,yt,it),o.push(yt,Z,it),O+=6}a.addGroup(d,O,M),d+=O,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ba extends Jt{constructor(t=1,e=1,n=4,i=8,s=1){super();this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],a=[],o=[],l=[],c=e/2,h=Math.PI/2*t,u=e,d=2*h+u,f=n*2+s,m=i+1,x=new C,g=new C;for(let p=0;p<=f;p++){let y=0,S=0,v=0,A=0;if(p<=n){let M=p/n,E=M*Math.PI/2;S=-c-t*Math.cos(E),v=t*Math.sin(E),A=-t*Math.cos(E),y=M*h}else if(p<=n+s){let M=(p-n)/s;S=-c+M*e,v=t,A=0,y=h+M*u}else{let M=(p-n-s)/n,E=M*Math.PI/2;S=c+t*Math.sin(E),v=t*Math.cos(E),A=t*Math.sin(E),y=h+u+M*h}let w=Math.max(0,Math.min(1,y/d)),_=0;if(p===0)_=0.5/i;else if(p===f)_=-0.5/i;for(let M=0;M<=i;M++){let E=M/i,D=E*Math.PI*2,P=Math.sin(D),F=Math.cos(D);g.x=-v*F,g.y=S,g.z=v*P,a.push(g.x,g.y,g.z),x.set(-v*F,A,v*P),x.normalize(),o.push(x.x,x.y,x.z),l.push(E+_,w)}if(p>0){let M=(p-1)*m;for(let E=0;E<i;E++){let D=M+E,P=M+E+1,F=p*m+E,X=p*m+E+1;r.push(D,P,F),r.push(P,X,F)}}}this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class za extends Jt{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new C,c=new et;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let h=0,u=3;h<=e;h++,u+=3){let d=n+h/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[u]/t+1)/2,c.y=(r[u+1]/t+1)/2,o.push(c.x,c.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class sr extends Jt{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],u=[],d=[],f=0,m=[],x=n/2,g=0;if(p(),r===!1){if(t>0)y(!0);if(e>0)y(!1)}this.setIndex(c),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function p(){let S=new C,v=new C,A=0,w=(e-t)/n;for(let _=0;_<=s;_++){let M=[],E=_/s,D=E*(e-t)+t;for(let P=0;P<=i;P++){let F=P/i,X=F*o+a,I=Math.sin(X),H=Math.cos(X);v.x=D*I,v.y=-E*n+x,v.z=D*H,h.push(v.x,v.y,v.z),S.set(I,w,H).normalize(),u.push(S.x,S.y,S.z),d.push(F,1-E),M.push(f++)}m.push(M)}for(let _=0;_<i;_++)for(let M=0;M<s;M++){let E=m[M][_],D=m[M+1][_],P=m[M+1][_+1],F=m[M][_+1];if(t>0||M!==0)c.push(E,D,F),A+=3;if(e>0||M!==s-1)c.push(D,P,F),A+=3}l.addGroup(g,A,0),g+=A}function y(S){let v=f,A=new et,w=new C,_=0,M=S===!0?t:e,E=S===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,x*E,0),u.push(0,E,0),d.push(0.5,0.5),f++;let D=f;for(let P=0;P<=i;P++){let X=P/i*o+a,I=Math.cos(X),H=Math.sin(X);w.x=M*H,w.y=x*E,w.z=M*I,h.push(w.x,w.y,w.z),u.push(0,E,0),A.x=I*0.5+0.5,A.y=H*0.5*E+0.5,d.push(A.x,A.y),f++}for(let P=0;P<i;P++){let F=v+P,X=D+P;if(S===!0)c.push(X,X+1,F);else c.push(X+1,X,F);_+=3}l.addGroup(g,_,S===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rr extends sr{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new rr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fi extends Jt{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(p){let y=new C,S=new C,v=new C;for(let A=0;A<e.length;A+=3)d(e[A+0],y),d(e[A+1],S),d(e[A+2],v),o(y,S,v,p)}function o(p,y,S,v){let A=v+1,w=[];for(let _=0;_<=A;_++){w[_]=[];let M=p.clone().lerp(S,_/A),E=y.clone().lerp(S,_/A),D=A-_;for(let P=0;P<=D;P++)if(P===0&&_===A)w[_][P]=M;else w[_][P]=M.clone().lerp(E,P/D)}for(let _=0;_<A;_++)for(let M=0;M<2*(A-_)-1;M++){let E=Math.floor(M/2);if(M%2===0)u(w[_][E+1]),u(w[_+1][E]),u(w[_][E]);else u(w[_][E+1]),u(w[_+1][E+1]),u(w[_+1][E])}}function l(p){let y=new C;for(let S=0;S<s.length;S+=3)y.x=s[S+0],y.y=s[S+1],y.z=s[S+2],y.normalize().multiplyScalar(p),s[S+0]=y.x,s[S+1]=y.y,s[S+2]=y.z}function c(){let p=new C;for(let y=0;y<s.length;y+=3){p.x=s[y+0],p.y=s[y+1],p.z=s[y+2];let S=x(p)/2/Math.PI+0.5,v=g(p)/Math.PI+0.5;r.push(S,1-v)}f(),h()}function h(){for(let p=0;p<r.length;p+=6){let y=r[p+0],S=r[p+2],v=r[p+4],A=Math.max(y,S,v),w=Math.min(y,S,v);if(A>0.9&&w<0.1){if(y<0.2)r[p+0]+=1;if(S<0.2)r[p+2]+=1;if(v<0.2)r[p+4]+=1}}}function u(p){s.push(p.x,p.y,p.z)}function d(p,y){let S=p*3;y.x=t[S+0],y.y=t[S+1],y.z=t[S+2]}function f(){let p=new C,y=new C,S=new C,v=new C,A=new et,w=new et,_=new et;for(let M=0,E=0;M<s.length;M+=9,E+=6){p.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),A.set(r[E+0],r[E+1]),w.set(r[E+2],r[E+3]),_.set(r[E+4],r[E+5]),v.copy(p).add(y).add(S).divideScalar(3);let D=x(v);m(A,E+0,p,D),m(w,E+2,y,D),m(_,E+4,S,D)}}function m(p,y,S,v){if(v<0&&p.x===1)r[y]=p.x-1;if(S.x===0&&S.z===0)r[y]=v/2/Math.PI+0.5}function x(p){return Math.atan2(p.z,-p.x)}function g(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.vertices,t.indices,t.radius,t.detail)}}class Ga extends fi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e);this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ga(t.radius,t.detail)}}var Kr=new C,Qr=new C,Zo=new C,jr=new je;class wc extends Jt{constructor(t=null,e=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(Li*e),r=t.getIndex(),a=t.getAttribute("position"),o=r?r.count:a.count,l=[0,0,0],c=["a","b","c"],h=[,,,],u=new Map,d=[];for(let f=0;f<o;f+=3){if(r)l[0]=r.getX(f),l[1]=r.getX(f+1),l[2]=r.getX(f+2);else l[0]=f,l[1]=f+1,l[2]=f+2;let{a:m,b:x,c:g}=jr;if(m.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),jr.getNormal(Zo),h[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let p=0;p<3;p++){let y=(p+1)%3,S=h[p],v=h[y],A=jr[c[p]],w=jr[c[y]],_=`${S}_${v}`,M=`${v}_${S}`,E=u.get(M);if(E){if(Zo.dot(E.normal)<=s)d.push(A.x,A.y,A.z),d.push(w.x,w.y,w.z);u.set(M,null)}else if(!u.has(_))u.set(_,{index0:l[p],index1:l[y],normal:Zo.clone()})}}for(let f of u.values())if(f){let{index0:m,index1:x}=f;Kr.fromBufferAttribute(a,m),Qr.fromBufferAttribute(a,x),d.push(Kr.x,Kr.y,Kr.z),d.push(Qr.x,Qr.y,Qr.z)}this.setAttribute("position",new Et(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],u=n[i+1]-c,d=(r-c)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new et:new C);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,i=[],s=[],r=[],a=new C,o=new Xt;for(let d=0;d<=t;d++){let f=d/t;i[d]=this.getTangentAt(f,new C)}s[0]=new C,r[0]=new C;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(h<=l)l=h,n.set(0,1,0);if(u<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Wt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(o.makeRotationAxis(a,f))}r[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Wt(s[0].dot(s[t]),-1,1));if(d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)d=-d;for(let f=1;f<=t;f++)s[f].applyMatrix4(o.makeRotationAxis(i[f],d*f)),r[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class ar extends un{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new et){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=o-this.aX,d=l-this.aY;o=u*c-d*h+this.aX,l=u*h+d*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Rc extends ar{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var lu=new C,cu=new C,Jo=new Cc,$o=new Cc,Ko=new Cc;class Ic extends un{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else cu.subVectors(i[0],i[1]).add(i[0]),l=cu;let h=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else lu.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=lu;if(this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?0.5:0.25,f=Math.pow(l.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(c),d);if(m<0.0001)m=1;if(f<0.0001)f=m;if(x<0.0001)x=m;Jo.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,f,m,x),$o.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,f,m,x),Ko.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,f,m,x)}else if(this.curveType==="catmullrom")Jo.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),$o.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),Ko.initCatmullRom(l.z,h.z,u.z,c.z,this.tension);return n.set(Jo.calc(o),$o.calc(o),Ko.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hu(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function l_(t,e){let n=1-t;return n*n*e}function c_(t,e){return 2*(1-t)*t*e}function h_(t,e){return t*t*e}function ks(t,e,n,i){return l_(t,e)+c_(t,n)+h_(t,i)}function u_(t,e){let n=1-t;return n*n*n*e}function d_(t,e){let n=1-t;return 3*n*n*t*e}function f_(t,e){return 3*(1-t)*t*t*e}function p_(t,e){return t*t*t*e}function Hs(t,e,n,i,s){return u_(t,e)+d_(t,n)+f_(t,i)+p_(t,s)}class ka extends un{constructor(t=new et,e=new et,n=new et,i=new et){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Hs(t,i.x,s.x,r.x,a.x),Hs(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pc extends un{constructor(t=new C,e=new C,n=new C,i=new C){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Hs(t,i.x,s.x,r.x,a.x),Hs(t,i.y,s.y,r.y,a.y),Hs(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ha extends un{constructor(t=new et,e=new et){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lc extends un{constructor(t=new C,e=new C){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wa extends un{constructor(t=new et,e=new et,n=new et){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ks(t,i.x,s.x,r.x),ks(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Va extends un{constructor(t=new C,e=new C,n=new C){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ks(t,i.x,s.x,r.x),ks(t,i.y,s.y,r.y),ks(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xa extends un{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(hu(a,o.x,l.x,c.x,h.x),hu(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new et().fromArray(i))}return this}}var fa=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Ic,CubicBezierCurve:ka,CubicBezierCurve3:Pc,EllipseCurve:ar,LineCurve:Ha,LineCurve3:Lc,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Va,SplineCurve:Xa});class Nc extends un{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new fa[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class fs extends Nc{constructor(t){super();if(this.type="Path",this.currentPoint=new et,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ha(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Wa(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new ka(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Xa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new ar(t,e,n,i,s,r,a,o);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bs extends fs{constructor(t){super(t);this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new fs().fromJSON(i))}return this}}function m_(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=lf(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=y_(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let h=o,u=l;for(let d=n;d<s;d+=n){let f=t[d],m=t[d+1];if(f<o)o=f;if(m<l)l=m;if(f>h)h=f;if(m>u)u=m}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Vs(r,a,n,o,l,c,0),a}function lf(t,e,n,i,s){let r;if(s===P_(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=uu(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=uu(a/i|0,t[a],t[a+1],r);if(r&&ps(r,r.next))qs(r),r=r.next;return r}function Di(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(ps(n,n.next)||ve(n.prev,n,n.next)===0)){if(qs(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Vs(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)A_(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?__(t,i,s,r):g_(t)){e.push(l.i,t.i,c.i),qs(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)Vs(Di(t),e,n,i,s,r,1);else if(a===1)t=x_(Di(t),e),Vs(t,e,n,i,s,r,2);else if(a===2)v_(t,e,n,i,s,r);break}}}function g_(t){let e=t.prev,n=t,i=t.next;if(ve(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=i.next;while(m!==e){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&zs(s,o,r,l,a,c,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function __(t,e,n,i){let s=t.prev,r=t,a=t.next;if(ve(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),g=Math.max(h,u,d),p=al(f,m,e,n,i),y=al(x,g,e,n,i),{prevZ:S,nextZ:v}=t;while(S&&S.z>=p&&v&&v.z<=y){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&zs(o,h,l,u,c,d,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;if(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&zs(o,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}while(S&&S.z>=p){if(S.x>=f&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&zs(o,h,l,u,c,d,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;S=S.prevZ}while(v&&v.z<=y){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&zs(o,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function x_(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!ps(i,s)&&hf(i,n,n.next,s)&&Xs(i,s)&&Xs(s,i))e.push(i.i,n.i,s.i),qs(n),qs(n.next),n=t=s;n=n.next}while(n!==t);return Di(n)}function v_(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&R_(a,o)){let l=uf(a,o);a=Di(a,a.next),l=Di(l,l.next),Vs(a,e,n,i,s,r,0),Vs(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function y_(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=lf(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(w_(c))}s.sort(S_);for(let r=0;r<s.length;r++)n=M_(s[r],n);return n}function S_(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function M_(t,e){let n=b_(t,e);if(!n)return e;let i=uf(n,t);return Di(i,i.next),Di(n,n.next)}function b_(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(ps(t,n))return n;do{if(ps(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let u=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>r){if(r=u,a=n.x<n.next.x?n:n.next,u===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&cf(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let u=Math.abs(s-n.y)/(i-n.x);if(Xs(n,t)&&(u<h||u===h&&(n.x>a.x||n.x===a.x&&T_(a,n))))a=n,h=u}n=n.next}while(n!==o);return a}function T_(t,e){return ve(t.prev,t,e.prev)<0&&ve(e.next,t,t.next)<0}function A_(t,e,n,i){let s=t;do{if(s.z===0)s.z=al(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,E_(s)}function E_(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function al(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function w_(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function cf(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function zs(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&cf(t,e,n,i,s,r,a,o)}function R_(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!C_(t,e)&&(Xs(t,e)&&Xs(e,t)&&I_(t,e)&&(ve(t.prev,t,e.prev)||ve(t,e.prev,e))||ps(t,e)&&ve(t.prev,t,t.next)>0&&ve(e.prev,e,e.next)>0)}function ve(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ps(t,e){return t.x===e.x&&t.y===e.y}function hf(t,e,n,i){let s=ea(ve(t,e,n)),r=ea(ve(t,e,i)),a=ea(ve(n,i,t)),o=ea(ve(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&ta(t,n,e))return!0;if(r===0&&ta(t,i,e))return!0;if(a===0&&ta(n,t,i))return!0;if(o===0&&ta(n,e,i))return!0;return!1}function ta(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ea(t){return t>0?1:t<0?-1:0}function C_(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&hf(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Xs(t,e){return ve(t.prev,t,t.next)<0?ve(t,e,t.next)>=0&&ve(t,t.prev,e)>=0:ve(t,e,t.prev)<0||ve(t,t.next,e)<0}function I_(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function uf(t,e){let n=ol(t.i,t.x,t.y),i=ol(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function uu(t,e,n,i){let s=ol(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function qs(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function ol(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function P_(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class df{static triangulate(t,e,n=2){return m_(t,e,n)}}class vn{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return vn.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];du(t),fu(n,t);let r=t.length;e.forEach(du);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,fu(n,e[o]);let a=df.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function du(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function fu(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class qa extends Jt{constructor(t=new bs([new et(0.5,0.5),new et(-0.5,0.5),new et(-0.5,-0.5),new et(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new Et(i,3)),this.setAttribute("uv",new Et(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:0.2,f=e.bevelSize!==void 0?e.bevelSize:d-0.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:L_,y,S=!1,v,A,w,_;if(g){y=g.getSpacedPoints(c),S=!0,u=!1;let j=g.isCatmullRomCurve3?g.closed:!1;v=g.computeFrenetFrames(c,j),A=new C,w=new C,_=new C}if(!u)x=0,d=0,f=0,m=0;let M=a.extractPoints(l),{shape:E,holes:D}=M;if(!vn.isClockWise(E)){E=E.reverse();for(let j=0,ot=D.length;j<ot;j++){let ht=D[j];if(vn.isClockWise(ht))D[j]=ht.reverse()}}function F(j){let Rt=j[0];for(let wt=1;wt<=j.length;wt++){let kt=wt%j.length,Ot=j[kt],jt=Ot.x-Rt.x,te=Ot.y-Rt.y,he=jt*jt+te*te,U=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(Rt.x),Math.abs(Rt.y)),Ee=0.000000000000000000010000000000000001*U*U;if(he<=Ee){j.splice(kt,1),wt--;continue}Rt=Ot}}F(E),D.forEach(F);let X=D.length,I=E;for(let j=0;j<X;j++){let ot=D[j];E=E.concat(ot)}function H(j,ot,ht){if(!ot)Ut("ExtrudeGeometry: vec does not exist");return j.clone().addScaledVector(ot,ht)}let q=E.length;function O(j,ot,ht){let Rt,wt,kt,Ot=j.x-ot.x,jt=j.y-ot.y,te=ht.x-j.x,he=ht.y-j.y,U=Ot*Ot+jt*jt,Ee=Ot*he-jt*te;if(Math.abs(Ee)>Number.EPSILON){let $t=Math.sqrt(U),Me=Math.sqrt(te*te+he*he),_t=ot.x-jt/$t,de=ot.y+Ot/$t,Ht=ht.x-he/Me,qt=ht.y+te/Me,we=((Ht-_t)*he-(qt-de)*te)/(Ot*he-jt*te);Rt=_t+Ot*we-j.x,wt=de+jt*we-j.y;let R=Rt*Rt+wt*wt;if(R<=2)return new et(Rt,wt);else kt=Math.sqrt(R/2)}else{let $t=!1;if(Ot>Number.EPSILON){if(te>Number.EPSILON)$t=!0}else if(Ot<-Number.EPSILON){if(te<-Number.EPSILON)$t=!0}else if(Math.sign(jt)===Math.sign(he))$t=!0;if($t)Rt=-jt,wt=Ot,kt=Math.sqrt(U);else Rt=Ot,wt=jt,kt=Math.sqrt(U/2)}return new et(Rt/kt,wt/kt)}let rt=[];for(let j=0,ot=I.length,ht=ot-1,Rt=j+1;j<ot;j++,ht++,Rt++){if(ht===ot)ht=0;if(Rt===ot)Rt=0;rt[j]=O(I[j],I[ht],I[Rt])}let k=[],J,nt=rt.concat();for(let j=0,ot=X;j<ot;j++){let ht=D[j];J=[];for(let Rt=0,wt=ht.length,kt=wt-1,Ot=Rt+1;Rt<wt;Rt++,kt++,Ot++){if(kt===wt)kt=0;if(Ot===wt)Ot=0;J[Rt]=O(ht[Rt],ht[kt],ht[Ot])}k.push(J),nt=nt.concat(J)}let yt;if(x===0)yt=vn.triangulateShape(I,D);else{let j=[],ot=[];for(let ht=0;ht<x;ht++){let Rt=ht/x,wt=d*Math.cos(Rt*Math.PI/2),kt=f*Math.sin(Rt*Math.PI/2)+m;for(let Ot=0,jt=I.length;Ot<jt;Ot++){let te=H(I[Ot],rt[Ot],kt);if(xt(te.x,te.y,-wt),Rt===0)j.push(te)}for(let Ot=0,jt=X;Ot<jt;Ot++){let te=D[Ot];J=k[Ot];let he=[];for(let U=0,Ee=te.length;U<Ee;U++){let $t=H(te[U],J[U],kt);if(xt($t.x,$t.y,-wt),Rt===0)he.push($t)}if(Rt===0)ot.push(he)}}yt=vn.triangulateShape(j,ot)}let Z=yt.length,it=f+m;for(let j=0;j<q;j++){let ot=u?H(E[j],nt[j],it):E[j];if(!S)xt(ot.x,ot.y,0);else w.copy(v.normals[0]).multiplyScalar(ot.x),A.copy(v.binormals[0]).multiplyScalar(ot.y),_.copy(y[0]).add(w).add(A),xt(_.x,_.y,_.z)}for(let j=1;j<=c;j++)for(let ot=0;ot<q;ot++){let ht=u?H(E[ot],nt[ot],it):E[ot];if(!S)xt(ht.x,ht.y,h/c*j);else w.copy(v.normals[j]).multiplyScalar(ht.x),A.copy(v.binormals[j]).multiplyScalar(ht.y),_.copy(y[j]).add(w).add(A),xt(_.x,_.y,_.z)}for(let j=x-1;j>=0;j--){let ot=j/x,ht=d*Math.cos(ot*Math.PI/2),Rt=f*Math.sin(ot*Math.PI/2)+m;for(let wt=0,kt=I.length;wt<kt;wt++){let Ot=H(I[wt],rt[wt],Rt);xt(Ot.x,Ot.y,h+ht)}for(let wt=0,kt=D.length;wt<kt;wt++){let Ot=D[wt];J=k[wt];for(let jt=0,te=Ot.length;jt<te;jt++){let he=H(Ot[jt],J[jt],Rt);if(!S)xt(he.x,he.y,h+ht);else xt(he.x,he.y+y[c-1].y,y[c-1].x+ht)}}}Tt(),Ct();function Tt(){let j=i.length/3;if(u){let ot=0,ht=q*ot;for(let Rt=0;Rt<Z;Rt++){let wt=yt[Rt];ne(wt[2]+ht,wt[1]+ht,wt[0]+ht)}ot=c+x*2,ht=q*ot;for(let Rt=0;Rt<Z;Rt++){let wt=yt[Rt];ne(wt[0]+ht,wt[1]+ht,wt[2]+ht)}}else{for(let ot=0;ot<Z;ot++){let ht=yt[ot];ne(ht[2],ht[1],ht[0])}for(let ot=0;ot<Z;ot++){let ht=yt[ot];ne(ht[0]+q*c,ht[1]+q*c,ht[2]+q*c)}}n.addGroup(j,i.length/3-j,0)}function Ct(){let j=i.length/3,ot=0;Ft(I,ot),ot+=I.length;for(let ht=0,Rt=D.length;ht<Rt;ht++){let wt=D[ht];Ft(wt,ot),ot+=wt.length}n.addGroup(j,i.length/3-j,1)}function Ft(j,ot){let ht=j.length;while(--ht>=0){let Rt=ht,wt=ht-1;if(wt<0)wt=j.length-1;for(let kt=0,Ot=c+x*2;kt<Ot;kt++){let jt=q*kt,te=q*(kt+1),he=ot+Rt+jt,U=ot+wt+jt,Ee=ot+wt+te,$t=ot+Rt+te;Vt(he,U,Ee,$t)}}}function xt(j,ot,ht){o.push(j),o.push(ot),o.push(ht)}function ne(j,ot,ht){Bt(j),Bt(ot),Bt(ht);let Rt=i.length/3,wt=p.generateTopUV(n,i,Rt-3,Rt-2,Rt-1);re(wt[0]),re(wt[1]),re(wt[2])}function Vt(j,ot,ht,Rt){Bt(j),Bt(ot),Bt(Rt),Bt(ot),Bt(ht),Bt(Rt);let wt=i.length/3,kt=p.generateSideWallUV(n,i,wt-6,wt-3,wt-2,wt-1);re(kt[0]),re(kt[1]),re(kt[3]),re(kt[1]),re(kt[2]),re(kt[3])}function Bt(j){i.push(o[j*3+0]),i.push(o[j*3+1]),i.push(o[j*3+2])}function re(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return N_(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new fa[i.type]().fromJSON(i);return new qa(n,t.options)}}var L_={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new et(r,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];if(Math.abs(o-h)<Math.abs(a-c))return[new et(a,1-l),new et(c,1-u),new et(d,1-m),new et(x,1-p)];else return[new et(o,1-l),new et(h,1-u),new et(f,1-m),new et(g,1-p)]}};function N_(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class Ya extends fi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ya(t.radius,t.detail)}}class Za extends Jt{constructor(t=[new et(0,-0.5),new et(0.5,0),new et(0,0.5)],e=12,n=0,i=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Wt(i,0,Math.PI*2);let s=[],r=[],a=[],o=[],l=[],c=1/e,h=new C,u=new et,d=new C,f=new C,m=new C,x=0,g=0;for(let p=0;p<=t.length-1;p++)switch(p){case 0:x=t[p+1].x-t[p].x,g=t[p+1].y-t[p].y,d.x=g*1,d.y=-x,d.z=g*0,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case t.length-1:m.normalize(),o.push(m.x,m.y,m.z);break;default:x=t[p+1].x-t[p].x,g=t[p+1].y-t[p].y,d.x=g*1,d.y=-x,d.z=g*0,f.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(f)}for(let p=0;p<=e;p++){let y=n+p*c*i,S=Math.sin(y),v=Math.cos(y);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*S,h.y=t[A].y,h.z=t[A].x*v,r.push(h.x,h.y,h.z),u.x=p/e,u.y=A/(t.length-1),a.push(u.x,u.y);let w=o[3*A+0]*S,_=o[3*A+1],M=o[3*A+0]*v;l.push(w,_,M)}}for(let p=0;p<e;p++)for(let y=0;y<t.length-1;y++){let S=y+p*t.length,v=S,A=S+t.length,w=S+t.length+1,_=S+1;s.push(v,A,_),s.push(w,_,A)}this.setIndex(s),this.setAttribute("position",new Et(r,3)),this.setAttribute("uv",new Et(a,2)),this.setAttribute("normal",new Et(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.points,t.segments,t.phiStart,t.phiLength)}}class or extends fi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e);this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class Ts extends Jt{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,u=e/o,d=[],f=[],m=[],x=[];for(let g=0;g<c;g++){let p=g*u-r;for(let y=0;y<l;y++){let S=y*h-s;f.push(S,-p,0),m.push(0,0,1),x.push(y/a),x.push(1-g/o)}}for(let g=0;g<o;g++)for(let p=0;p<a;p++){let y=p+l*g,S=p+l*(g+1),v=p+1+l*(g+1),A=p+1+l*g;d.push(y,S,A),d.push(S,v,A)}this.setIndex(d),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(m,3)),this.setAttribute("uv",new Et(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ja extends Jt{constructor(t=0.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let a=[],o=[],l=[],c=[],h=t,u=(e-t)/i,d=new C,f=new et;for(let m=0;m<=i;m++){for(let x=0;x<=n;x++){let g=s+x/n*r;d.x=h*Math.cos(g),d.y=h*Math.sin(g),o.push(d.x,d.y,d.z),l.push(0,0,1),f.x=(d.x/e+1)/2,f.y=(d.y/e+1)/2,c.push(f.x,f.y)}h+=u}for(let m=0;m<i;m++){let x=m*(n+1);for(let g=0;g<n;g++){let p=g+x,y=p,S=p+n+1,v=p+n+2,A=p+1;a.push(y,S,A),a.push(S,v,A)}}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $a extends Jt{constructor(t=new bs([new et(0,0.5),new et(-0.5,-0.5),new et(0.5,-0.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0;this.setIndex(n),this.setAttribute("position",new Et(i,3)),this.setAttribute("normal",new Et(s,3)),this.setAttribute("uv",new Et(r,2));function l(c){let h=i.length/3,u=c.extractPoints(e),{shape:d,holes:f}=u;if(vn.isClockWise(d)===!1)d=d.reverse();for(let x=0,g=f.length;x<g;x++){let p=f[x];if(vn.isClockWise(p)===!0)f[x]=p.reverse()}let m=vn.triangulateShape(d,f);for(let x=0,g=f.length;x<g;x++){let p=f[x];d=d.concat(p)}for(let x=0,g=d.length;x<g;x++){let p=d[x];i.push(p.x,p.y,0),s.push(0,0,1),r.push(p.x,p.y)}for(let x=0,g=m.length;x<g;x++){let p=m[x],y=p[0]+h,S=p[1]+h,v=p[2]+h;n.push(y,S,v),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return D_(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new $a(n,t.curveSegments)}}function D_(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class lr extends Jt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],h=new C,u=new C,d=[],f=[],m=[],x=[];for(let g=0;g<=n;g++){let p=[],y=g/n,S=r+y*a,v=t*Math.cos(S),A=Math.sqrt(t*t-v*v),w=0;if(g===0&&r===0)w=0.5/e;else if(g===n&&o===Math.PI)w=-0.5/e;for(let _=0;_<=e;_++){let M=_/e,E=i+M*s;h.x=-A*Math.cos(E),h.y=v,h.z=A*Math.sin(E),f.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),x.push(M+w,1-y),p.push(l++)}c.push(p)}for(let g=0;g<n;g++)for(let p=0;p<e;p++){let y=c[g][p+1],S=c[g][p],v=c[g+1][p],A=c[g+1][p+1];if(g!==0||r>0)d.push(y,S,A);if(g!==n-1||o<Math.PI)d.push(S,v,A)}this.setIndex(d),this.setAttribute("position",new Et(f,3)),this.setAttribute("normal",new Et(m,3)),this.setAttribute("uv",new Et(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ka extends fi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e);this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ka(t.radius,t.detail)}}class Qa extends Jt{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new C,d=new C,f=new C;for(let m=0;m<=n;m++){let x=r+m/n*a;for(let g=0;g<=i;g++){let p=g/i*s;d.x=(t+e*Math.cos(x))*Math.cos(p),d.y=(t+e*Math.cos(x))*Math.sin(p),d.z=e*Math.sin(x),l.push(d.x,d.y,d.z),u.x=t*Math.cos(p),u.y=t*Math.sin(p),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),h.push(g/i),h.push(m/n)}}for(let m=1;m<=n;m++)for(let x=1;x<=i;x++){let g=(i+1)*m+x-1,p=(i+1)*(m-1)+x-1,y=(i+1)*(m-1)+x,S=(i+1)*m+x;o.push(g,p,S),o.push(p,y,S)}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ja extends Jt{constructor(t=1,e=0.4,n=64,i=8,s=2,r=3){super();this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C,f=new C,m=new C,x=new C,g=new C;for(let y=0;y<=n;++y){let S=y/n*s*Math.PI*2;p(S,s,r,t,d),p(S+0.01,s,r,t,f),x.subVectors(f,d),g.addVectors(f,d),m.crossVectors(x,g),g.crossVectors(m,x),m.normalize(),g.normalize();for(let v=0;v<=i;++v){let A=v/i*Math.PI*2,w=-e*Math.cos(A),_=e*Math.sin(A);h.x=d.x+(w*g.x+_*m.x),h.y=d.y+(w*g.y+_*m.y),h.z=d.z+(w*g.z+_*m.z),o.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(y/n),c.push(v/i)}}for(let y=1;y<=n;y++)for(let S=1;S<=i;S++){let v=(i+1)*(y-1)+(S-1),A=(i+1)*y+(S-1),w=(i+1)*y+S,_=(i+1)*(y-1)+S;a.push(v,A,_),a.push(A,w,_)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2));function p(y,S,v,A,w){let _=Math.cos(y),M=Math.sin(y),E=v/S*y,D=Math.cos(E);w.x=A*(2+D)*0.5*_,w.y=A*(2+D)*M*0.5,w.z=A*Math.sin(E)*0.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class to extends Jt{constructor(t=new Va(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new C,o=new C,l=new et,c=new C,h=[],u=[],d=[],f=[];m(),this.setIndex(f),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function m(){for(let y=0;y<e;y++)x(y);x(s===!1?e:0),p(),g()}function x(y){c=t.getPointAt(y/e,c);let S=r.normals[y],v=r.binormals[y];for(let A=0;A<=i;A++){let w=A/i*Math.PI*2,_=Math.sin(w),M=-Math.cos(w);o.x=M*S.x+_*v.x,o.y=M*S.y+_*v.y,o.z=M*S.z+_*v.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let S=1;S<=i;S++){let v=(i+1)*(y-1)+(S-1),A=(i+1)*y+(S-1),w=(i+1)*y+S,_=(i+1)*(y-1)+S;f.push(v,A,_),f.push(A,w,_)}}function p(){for(let y=0;y<=e;y++)for(let S=0;S<=i;S++)l.x=y/e,l.y=S/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new to(new fa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Dc extends Jt{constructor(t=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new C,s=new C;if(t.index!==null){let r=t.attributes.position,{index:a,groups:o}=t;if(o.length===0)o=[{start:0,count:a.count,materialIndex:0}];for(let l=0,c=o.length;l<c;++l){let h=o[l],{start:u,count:d}=h;for(let f=u,m=u+d;f<m;f+=3)for(let x=0;x<3;x++){let g=a.getX(f+x),p=a.getX(f+(x+1)%3);if(i.fromBufferAttribute(r,g),s.fromBufferAttribute(r,p),pu(i,s,n)===!0)e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z)}}}else{let r=t.attributes.position;for(let a=0,o=r.count/3;a<o;a++)for(let l=0;l<3;l++){let c=3*a+l,h=3*a+(l+1)%3;if(i.fromBufferAttribute(r,c),s.fromBufferAttribute(r,h),pu(i,s,n)===!0)e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z)}}this.setAttribute("position",new Et(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function pu(t,e,n){let i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;if(n.has(i)===!0||n.has(s)===!0)return!1;else return n.add(i),n.add(s),!0}var mu=Object.freeze({__proto__:null,BoxGeometry:$n,CapsuleGeometry:Ba,CircleGeometry:za,ConeGeometry:rr,CylinderGeometry:sr,DodecahedronGeometry:Ga,EdgesGeometry:wc,ExtrudeGeometry:qa,IcosahedronGeometry:Ya,LatheGeometry:Za,OctahedronGeometry:or,PlaneGeometry:Ts,PolyhedronGeometry:fi,RingGeometry:Ja,ShapeGeometry:$a,SphereGeometry:lr,TetrahedronGeometry:Ka,TorusGeometry:Qa,TorusKnotGeometry:ja,TubeGeometry:to,WireframeGeometry:Dc});class Uc extends Ue{constructor(t){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new At(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function ki(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(gu(s))if(s.isRenderTargetTexture)gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(gu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Ye(t){let e={};for(let n=0;n<t.length;n++){let i=ki(t[n]);for(let s in i)e[s]=i[s]}return e}function gu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function U_(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fc(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return ee.workingColorSpace}var ff={clone:ki,merge:Ye},F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ue{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=U_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class eo extends Ln{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class no extends Ue{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oc extends no{constructor(t){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){if(this._anisotropy>0!==t>0)this.version++;this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){if(this._clearcoat>0!==t>0)this.version++;this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){if(this._diffuseRoughness>0!==t>0)this.version++;this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){if(this._iridescence>0!==t>0)this.version++;this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){if(this._dispersion>0!==t>0)this.version++;this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){if(this._retroreflectivity>0!==t>0)this.version++;this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){if(this._sheen>0!==t>0)this.version++;this._sheen=t}get transmission(){return this._transmission}set transmission(t){if(this._transmission>0!==t>0)this.version++;this._transmission=t}get iridescenceThicknessRange(){return Vn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Vn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Bc extends Ue{constructor(t){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zc extends Ue{constructor(t){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new At(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Gc extends Ue{constructor(t){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class kc extends Ue{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class io extends Ue{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class so extends Ue{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hc extends Ue{constructor(t){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new At(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wc extends qe{constructor(t){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function _n(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function hs(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}function pf(t){function e(s,r){return t[s]-t[r]}let n=t.length,i=Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(e),i}function ll(t,e,n){let i=t.length,s=new t.constructor(i);for(let r=0,a=0;a!==i;++r){let o=n[r]*e;for(let l=0;l!==e;++l)s[a++]=t[o+l]}return s}function mf(t,e,n,i){let s=1,r=t[0];while(r!==void 0&&r[i]===void 0)r=t[s++];if(r===void 0)return;let a=r[i];if(a===void 0)return;if(Array.isArray(a))do{if(a=r[i],a!==void 0)e.push(r.time),n.push(...a);r=t[s++]}while(r!==void 0);else if(a.toArray!==void 0)do{if(a=r[i],a!==void 0)e.push(r.time),a.toArray(n,n.length);r=t[s++]}while(r!==void 0);else do{if(a=r[i],a!==void 0)e.push(r.time),n.push(a);r=t[s++]}while(r!==void 0)}function B_(t,e,n,i,s=30){let r=t.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*s;if(m<n||m>=i)continue;u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}if(u.length===0)continue;c.times=_n(u,c.times.constructor),c.values=_n(d,c.values.constructor),a.push(c)}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)if(o>r.tracks[l].times[0])o=r.tracks[l].times[0];for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function z_(t,e=0,n=t,i=30){if(i<=0)i=30;let s=n.tracks.length,r=e/i;for(let a=0;a<s;++a){let o=n.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=t.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)h=u/3;let d=0,f=c.getValueSize();if(c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)d=f/3;let m=o.times.length-1,x;if(r<=o.times[0]){let p=h,y=u-h;x=o.values.slice(p,y)}else if(r>=o.times[m]){let p=m*u+h,y=p+u-h;x=o.values.slice(p,y)}else{let p=o.createInterpolant();p.evaluate(r),x=p.resultBuffer.slice()}if(l==="quaternion")new Xe().fromArray(x).normalize().conjugate().toArray(x);let g=c.times.length;for(let p=0;p<g;++p){let y=p*f+d;if(l==="quaternion")Xe.multiplyQuaternionsFlat(c.values,y,x,0,c.values,y);else{let S=f-d*2;for(let v=0;v<S;++v)c.values[y+v]-=x[v]}}}return t.blendMode=2501,t}class gf{static convertArray(t,e){return _n(t,e)}static isTypedArray(t){return Od(t)}static hasTangents(t){return hs(t)}static getKeyframeOrder(t){return pf(t)}static sortedArray(t,e,n){return ll(t,e,n)}static flattenJSON(t,e,n,i){mf(t,e,n,i)}static subclip(t,e,n,i,s=30){return B_(t,e,n,i,s)}static makeClipAdditive(t,e=0,n=t,i=30){return z_(t,e,n,i)}}class Hi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let r;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}r=e.length;break n}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break e}r=n,n=0;break n}break t}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Vc extends Hi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(n-e)/(i-e),m=f*f,x=m*f,g=-u*x+2*u*m-u*f,p=(1+u)*x+(-1.5-2*u)*m+(-0.5+u)*f+1,y=(-1-d)*x+(1.5+d)*m+0.5*f,S=d*x-d*m;for(let v=0;v!==a;++v)s[v]=g*r[c+v]+p*r[l+v]+y*r[o+v]+S*r[h+v];return s}}class ro extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*h+r[o+u]*c;return s}}class Xc extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class qc extends Hi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let f=(n-e)/(i-e),m=1-f;for(let x=0;x!==a;++x)s[x]=r[l+x]*m+r[o+x]*f;return s}let u=a*2,d=t-1;for(let f=0;f!==a;++f){let m=r[l+f],x=r[o+f],g=d*u+f*2,p=h[g],y=h[g+1],S=t*u+f*2,v=c[S],A=c[S+1],w=k_(n,e,p,v,i);s[f]=_f(w,m,y,A,x)}return s}}function _f(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function G_(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function k_(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=_f(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=G_(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class an{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_n(e,this.TimeBufferType),this.values=_n(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_n(t.times,Array),values:_n(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(hs(t.settings))n.settings={inTangents:_n(t.settings.inTangents,Array),outTangents:_n(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qc(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;if(hs(this.settings))_u(this.settings.inTangents,t),_u(this.settings.outTangents,t)}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(hs(this.settings))xu(this.settings.inTangents,t),xu(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Ut("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Ut("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Ut("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Ut("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Od(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let h=a*n,u=h-n,d=h+n;for(let f=0;f!==n;++f){let m=e[h+f];if(m!==e[u+f]||m!==e[d+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,u=r*n;for(let d=0;d!==n;++d)e[u+d]=e[h+d]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,hs(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function _u(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function xu(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=2301;class pi extends an{constructor(t,e,n){super(t,e,n)}}pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=2300;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends an{constructor(t,e,n,i){super(t,e,n,i)}}ao.prototype.ValueTypeName="color";class cr extends an{constructor(t,e,n,i){super(t,e,n,i)}}cr.prototype.ValueTypeName="number";class Yc extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Xe.slerpFlat(s,0,r,l-a,r,l,o);return s}}class hr extends an{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}}hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;class mi extends an{constructor(t,e,n){super(t,e,n)}}mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=2300;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;class oo extends an{constructor(t,e,n,i){super(t,e,n,i)}}oo.prototype.ValueTypeName="vector";class ms{constructor(t="",e=-1,n=[],i=2500){if(this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=hn(),this.userData={},this.duration<0)this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(W_(n[r]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,r=n.length;s!==r;++s)e.push(an.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,r=[];for(let a=0;a<s;a++){let o=[],l=[];o.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let c=pf(o);if(o=ll(o,1,c),l=ll(l,1,c),!i&&o[0]===0)o.push(s),l.push(l[0]);r.push(new cr(".morphTargetInfluences["+e[a].name+"]",o,l).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.name.match(s);if(c&&c.length>1){let h=c[1],u=i[h];if(!u)i[h]=u=[];u.push(l)}}let r=[];for(let a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function H_(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cr;case"vector":case"vector2":case"vector3":case"vector4":return oo;case"color":return ao;case"quaternion":return hr;case"bool":case"boolean":return pi;case"string":return mi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function W_(t){if(t.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=H_(t.type);if(t.times===void 0){let i=[],s=[];mf(t.keys,i,s,"value"),t.times=i,t.values=s}let n;if(e.parse!==void 0)n=e.parse(t);else n=new e(t.name,t.times,t.values,t.interpolation);if(hs(t.settings))n.settings={inTangents:_n(t.settings.inTangents,Float32Array),outTangents:_n(t.settings.outTangents,Float32Array)};return n}var En={enabled:!1,files:{},add:function(t,e){if(this.enabled===!1)return;if(vu(t))return;this.files[t]=e},get:function(t){if(this.enabled===!1)return;if(vu(t))return;return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function vu(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch(e){return!1}}class lo{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],f=l[h+1];if(d.global)d.lastIndex=0;if(d.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var xf=new lo;class $e{constructor(t){if(this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}$e.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hn={};class vf extends Error{constructor(t,e){super(t);this.response=e}}class Rn extends $e{constructor(t){super(t);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){if(t===void 0)t="";if(this.path!==void 0)t=this.path+t;t=this.manager.resolveURL(t);let s=En.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{if(e)e(s);this.manager.itemEnd(t)},0);return}if(Hn[t]!==void 0){Hn[t].push({onLoad:e,onProgress:n,onError:i});return}Hn[t]=[],Hn[t].push({onLoad:e,onProgress:n,onError:i});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(r).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)gt("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=Hn[t],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,f=d!==0,m=0,x=new ReadableStream({start(g){p();function p(){h.read().then(({done:y,value:S})=>{if(y)g.close();else{m+=S.byteLength;let v=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:d});for(let A=0,w=c.length;A<w;A++){let _=c[A];if(_.onProgress)_.onProgress(v)}g.enqueue(S),p()}},(y)=>{g.error(y)})}}});return new Response(x)}else throw new vf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();else{let h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then((f)=>d.decode(f))}}}).then((l)=>{En.add(`file:${t}`,l);let c=Hn[t];delete Hn[t];for(let h=0,u=c.length;h<u;h++){let d=c[h];if(d.onLoad)d.onLoad(l)}}).catch((l)=>{let c=Hn[t];if(c===void 0)throw this.manager.itemError(t),l;delete Hn[t];for(let h=0,u=c.length;h<u;h++){let d=c[h];if(d.onError)d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yf extends $e{constructor(t){super(t)}load(t,e,n,i){let s=this,r=new Rn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(o){if(i)i(o);else Ut(o);s.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=ms.parse(t[n]);e.push(i)}return e}}class Sf extends $e{constructor(t){super(t)}load(t,e,n,i){let s=this,r=[],a=new ir,o=new Rn(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(s.withCredentials);let l=0;function c(h){o.load(t[h],function(u){let d=s.parse(u,!0);if(r[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6){if(d.mipmapCount===1)a.minFilter=1006;if(a.image=r,a.format=d.format,a.needsUpdate=!0,e)e(a)}},n,i)}if(Array.isArray(t))for(let h=0,u=t.length;h<u;++h)c(h);else o.load(t,function(h){let u=s.parse(h,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let f=0;f<d;f++){r[f]={mipmaps:[]};for(let m=0;m<u.mipmapCount;m++)r[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+m]),r[f].format=u.format,r[f].width=u.width,r[f].height=u.height}a.image=r}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;if(u.mipmapCount===1)a.minFilter=1006;if(a.format=u.format,a.needsUpdate=!0,e)e(a)},n,i);return a}}var ss=new WeakMap;class gs extends $e{constructor(t){super(t)}load(t,e,n,i){if(this.path!==void 0)t=this.path+t;t=this.manager.resolveURL(t);let s=this,r=En.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){if(e)e(r);s.manager.itemEnd(t)},0);else{let h=ss.get(r);if(h===void 0)h=[],ss.set(r,h);h.push({onLoad:e,onError:i})}return r}let a=ds("img");function o(){if(c(),e)e(this);let h=ss.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];if(d.onLoad)d.onLoad(this)}ss.delete(this),s.manager.itemEnd(t)}function l(h){if(c(),i)i(h);En.remove(`image:${t}`);let u=ss.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];if(f.onError)f.onError(h)}ss.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}if(a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)a.crossOrigin=this.crossOrigin}return En.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Mf extends $e{constructor(t){super(t)}load(t,e,n,i){let s=new Ms;s.colorSpace="srgb";let r=new gs(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function o(l){r.load(t[l],function(c){if(s.images[l]=c,a++,a===6){if(s.needsUpdate=!0,e)e(s)}},void 0,i)}for(let l=0;l<t.length;++l)o(l);return s}}class bf extends $e{constructor(t){super(t)}load(t,e,n,i){let s=this,r=new rn,a=new Rn(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(o){let l;try{l=s.parse(o)}catch(c){if(i!==void 0)i(c);else Ut(c);return}if(s._applyTexData(r,l),e)e(r,l)},n,i),r}createDataTexture(t){let e=new rn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){if(e.image!==void 0)t.image=e.image;else if(e.data!==void 0)t.image.width=e.width,t.image.height=e.height,t.image.data=e.data;if(t.wrapS=e.wrapS!==void 0?e.wrapS:1001,t.wrapT=e.wrapT!==void 0?e.wrapT:1001,t.magFilter=e.magFilter!==void 0?e.magFilter:1006,t.minFilter=e.minFilter!==void 0?e.minFilter:1006,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.mipmaps!==void 0)t.mipmaps=e.mipmaps,t.minFilter=1008;if(e.mipmapCount===1)t.minFilter=1006;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;t.needsUpdate=!0}}class Tf extends $e{constructor(t){super(t)}load(t,e,n,i){let s=new ye,r=new gs(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){if(s.image=a,s.needsUpdate=!0,e!==void 0)e(s)},n,i),s}}class Kn extends le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Zc extends Kn{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var Qo=new Xt,yu=new C,Su=new C;class ur{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(yu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var na=new C,ia=new Xe,Tn=new C;class dr extends le{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(na,ia,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(na,ia,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(na,ia,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(na,ia,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var ii=new C,Mu=new et,bu=new et;class Oe extends dr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Ni*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Li*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(Li*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Mu,bu),e.subVectors(bu,Mu)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Li*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Af extends ur{constructor(){super(new Oe(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ni*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;if(n!==e.fov||i!==e.aspect||s!==e.far)e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix();super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Jc extends Kn{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Af}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);if(e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture)e.object.map=this.map.toJSON(t).uuid;return e.object.shadow=this.shadow.toJSON(),e}}class Ef extends ur{constructor(){super(new Oe(90,1,0.5,500));this.isPointLightShadow=!0}}class $c extends Kn{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ef}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class fr extends dr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class wf extends ur{constructor(){super(new fr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Kc extends Kn{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new wf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Qc extends Kn{constructor(t,e){super(t,e);this.isAmbientLight=!0,this.type="AmbientLight"}}class jc extends Kn{constructor(t,e,n=10,i=10){super(t,e);this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class co{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let{x:n,y:i,z:s}=t,r=this.coefficients;return e.copy(r[0]).multiplyScalar(0.282095),e.addScaledVector(r[1],0.488603*i),e.addScaledVector(r[2],0.488603*s),e.addScaledVector(r[3],0.488603*n),e.addScaledVector(r[4],1.092548*(n*i)),e.addScaledVector(r[5],1.092548*(i*s)),e.addScaledVector(r[6],0.315392*(3*s*s-1)),e.addScaledVector(r[7],1.092548*(n*s)),e.addScaledVector(r[8],0.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let{x:n,y:i,z:s}=t,r=this.coefficients;return e.copy(r[0]).multiplyScalar(0.886227),e.addScaledVector(r[1],1.023328*i),e.addScaledVector(r[2],1.023328*s),e.addScaledVector(r[3],1.023328*n),e.addScaledVector(r[4],0.858086*n*i),e.addScaledVector(r[5],0.858086*i*s),e.addScaledVector(r[6],0.743125*s*s-0.247708),e.addScaledVector(r[7],0.858086*n*s),e.addScaledVector(r[8],0.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let{x:n,y:i,z:s}=t;e[0]=0.282095,e[1]=0.488603*i,e[2]=0.488603*s,e[3]=0.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=0.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=0.546274*(n*n-i*i)}}class th extends Kn{constructor(t=new co,e=1){super(void 0,e);this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}var Tu={};class ho extends $e{constructor(t){super(t);this.textures={}}load(t,e,n,i){let s=this,r=new Rn(s.manager);r.setPriority(s.priority),r.setCache(s.cache),r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(o){if(i)i(o);else Ut(o);s.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return ho.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:Uc,SpriteMaterial:La,RawShaderMaterial:eo,ShaderMaterial:Ln,PointsMaterial:Ua,MeshPhysicalMaterial:Oc,MeshStandardMaterial:no,MeshPhongMaterial:Bc,MeshToonMaterial:zc,MeshNormalMaterial:Gc,MeshLambertMaterial:kc,MeshDepthMaterial:io,MeshDistanceMaterial:so,MeshBasicMaterial:ui,MeshMatcapMaterial:Hc,LineDashedMaterial:Wc,LineBasicMaterial:qe,Material:Ue,...Tu}[t],i;if(n===void 0)Vn(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new Ue;else i=new n;return i}static registerMaterial(t,e){Tu[t]=e}}class pa{static extractUrlBase(t){let e=t.lastIndexOf("/");if(e===-1)return"./";return t.slice(0,e+1)}static resolveURL(t,e){if(typeof t!=="string"||t==="")return"";if(/^https?:\/\//i.test(e)&&/^\//.test(t))e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(t))return t;if(/^data:.*,.*$/i.test(t))return t;if(/^blob:.*$/i.test(t))return t;return e+t}}class eh extends Jt{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class nh extends $e{constructor(t){super(t)}load(t,e,n,i){let s=this,r=new Rn(s.manager);r.setPriority(s.priority),r.setCache(s.cache),r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(o){if(i)i(o);else Ut(o);s.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(d,f){if(e[f]!==void 0)return e[f];let x=d.interleavedBuffers[f],g=s(d,x.buffer),p=cs(x.type,g),y=new zi(p,x.stride);if(y.uuid=x.uuid,x.usage!==void 0)y.setUsage(x.usage);return e[f]=y,y}function s(d,f){if(n[f]!==void 0)return n[f];let x=d.arrayBuffers[f],g=new Uint32Array(x).buffer;return n[f]=g,g}let r=t.isInstancedBufferGeometry?new eh:new Jt,a=t.data.index;if(a!==void 0){let d=cs(a.type,a.array);r.setIndex(new ce(d,1))}let o=t.data.attributes;for(let d in o){let f=o[d],m;if(f.isInterleavedBufferAttribute){let x=i(t.data,f.data);m=new qn(x,f.itemSize,f.offset,f.normalized)}else{let x=cs(f.type,f.array);m=new(f.isInstancedBufferAttribute?wn:ce)(x,f.itemSize,f.normalized)}if(f.name!==void 0)m.name=f.name;if(f.usage!==void 0)m.setUsage(f.usage);if(f.gpuType!==void 0)m.gpuType=f.gpuType;r.setAttribute(d,m)}let l=t.data.morphAttributes;if(l)for(let d in l){let f=l[d],m=[];for(let x=0,g=f.length;x<g;x++){let p=f[x],y;if(p.isInterleavedBufferAttribute){let S=i(t.data,p.data);y=new qn(S,p.itemSize,p.offset,p.normalized)}else{let S=cs(p.type,p.array);y=new ce(S,p.itemSize,p.normalized)}if(p.name!==void 0)y.name=p.name;if(p.usage!==void 0)y.setUsage(p.usage);if(p.gpuType!==void 0)y.gpuType=p.gpuType;m.push(y)}r.morphAttributes[d]=m}if(t.data.morphTargetsRelative)r.morphTargetsRelative=!0;let h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let d=0,f=h.length;d!==f;++d){let m=h[d];r.addGroup(m.start,m.count,m.materialIndex)}let u=t.data.boundingSphere;if(u!==void 0)r.boundingSphere=new De().fromJSON(u);if(t.name)r.name=t.name;if(t.userData)r.userData=t.userData;return r}}var jo={};class Rf extends $e{constructor(t){super(t)}load(t,e,n,i){let s=this,r=this.path===""?pa.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||r;let a=new Rn(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){let l=null;try{l=JSON.parse(o)}catch(h){if(i!==void 0)i(h);Ut("ObjectLoader: Can't parse "+t+".",h.message);return}let c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry"){if(i!==void 0)i(Error("THREE.ObjectLoader: Can't load "+t));Ut("ObjectLoader: Can't load "+t);return}s.parse(l,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?pa.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let s=new Rn(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let r=await s.loadAsync(t,e),a;try{a=JSON.parse(r)}catch(l){throw Error("THREE.ObjectLoader: Can't parse "+t+". "+l.message)}let o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,i),r=this.parseImages(t.images,function(){if(e!==void 0)e(l)}),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,s,o,a,n),c=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,c),this.bindLightTargets(l),e!==void 0){let h=!1;for(let u in r)if(r[u].data instanceof HTMLImageElement){h=!0;break}if(h===!1)e(l)}return l}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),s=await this.parseImagesAsync(t.images),r=this.parseTextures(t.textures,s),a=this.parseMaterials(t.materials,r),o=this.parseObject(t.object,i,a,r,e),l=this.parseSkeletons(t.skeletons,o);return this.bindSkeletons(o,l),this.bindLightTargets(o),o}static registerGeometry(t,e){jo[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let s=new bs().fromJSON(t[n]);e[s.uuid]=s}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(s){if(s.isBone)i[s.uuid]=s}),t!==void 0)for(let s=0,r=t.length;s<r;s++){let a=new Da().fromJSON(t[s],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new nh;for(let s=0,r=t.length;s<r;s++){let a,o=t[s];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(o);break;default:if(o.type in mu)a=mu[o.type].fromJSON(o,e);else if(o.type in jo)a=jo[o.type].fromJSON(o,e);else gt(`ObjectLoader: Unknown geometry type "${o.type}". Use .registerGeometry() before starting the deserialization process.`)}if(a.uuid=o.uuid,o.name!==void 0)a.name=o.name;if(o.userData!==void 0)a.userData=o.userData;n[o.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let s=new ho;s.setTextures(e);for(let r=0,a=t.length;r<a;r++){let o=t[r];if(n[o.uuid]===void 0)n[o.uuid]=s.parse(o);i[o.uuid]=n[o.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],s=ms.parse(i);e[s.uuid]=s}return e}parseImages(t,e){let n=this,i={},s;function r(o){return o=n.manager.resolveURL(o),n.manager.itemStart(o),s.load(o,function(){n.manager.itemEnd(o)},void 0,function(){n.manager.itemError(o),n.manager.itemEnd(o)})}function a(o){if(typeof o==="string"){let l=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return r(c)}else if(o.data)return{data:cs(o.type,o.data),width:o.width,height:o.height};else return null}if(t!==void 0&&t.length>0){let o=new lo(e);s=new gs(o),s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin);for(let l=0,c=t.length;l<c;l++){let h=t[l],u=h.url;if(Array.isArray(u)){let d=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=a(x);if(g!==null)if(g instanceof HTMLImageElement)d.push(g);else d.push(new rn(g.data,g.width,g.height))}i[h.uuid]=new xn(d)}else{let d=a(h.url);i[h.uuid]=new xn(d)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function s(r){if(typeof r==="string"){let a=r,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(o)}else if(r.data)return{data:cs(r.type,r.data),width:r.width,height:r.height};else return null}if(t!==void 0&&t.length>0){i=new gs(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let r=0,a=t.length;r<a;r++){let o=t[r],l=o.url;if(Array.isArray(l)){let c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=await s(d);if(f!==null)if(f instanceof HTMLImageElement)c.push(f);else c.push(new rn(f.data,f.width,f.height))}n[o.uuid]=new xn(c)}else{let c=await s(o.url);n[o.uuid]=new xn(c)}}}return n}parseTextures(t,e){function n(s,r){if(typeof s==="number")return s;return gt("ObjectLoader.parseTexture: Constant should be in numeric form.",s),r[s]}let i={};if(t!==void 0)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(a.image===void 0)gt('ObjectLoader: No "image" specified for',a.uuid);if(e[a.image]===void 0)gt("ObjectLoader: Undefined image",a.image);let o=e[a.image],l=o.data,c;if(Array.isArray(l)){if(c=new Ms,l.length===6)c.needsUpdate=!0}else{if(l&&l.data)c=new rn;else c=new ye;if(l)c.needsUpdate=!0}if(c.source=o,c.uuid=a.uuid,a.name!==void 0)c.name=a.name;if(a.mapping!==void 0)c.mapping=n(a.mapping,V_);if(a.channel!==void 0)c.channel=a.channel;if(a.offset!==void 0)c.offset.fromArray(a.offset);if(a.repeat!==void 0)c.repeat.fromArray(a.repeat);if(a.center!==void 0)c.center.fromArray(a.center);if(a.rotation!==void 0)c.rotation=a.rotation;if(a.wrap!==void 0)c.wrapS=n(a.wrap[0],Au),c.wrapT=n(a.wrap[1],Au);if(a.format!==void 0)c.format=a.format;if(a.internalFormat!==void 0)c.internalFormat=a.internalFormat;if(a.type!==void 0)c.type=a.type;if(a.colorSpace!==void 0)c.colorSpace=a.colorSpace;if(a.minFilter!==void 0)c.minFilter=n(a.minFilter,Eu);if(a.magFilter!==void 0)c.magFilter=n(a.magFilter,Eu);if(a.anisotropy!==void 0)c.anisotropy=a.anisotropy;if(a.flipY!==void 0)c.flipY=a.flipY;if(a.generateMipmaps!==void 0)c.generateMipmaps=a.generateMipmaps;if(a.mipmapsAutoUpdate!==void 0)c.mipmapsAutoUpdate=a.mipmapsAutoUpdate;if(a.premultiplyAlpha!==void 0)c.premultiplyAlpha=a.premultiplyAlpha;if(a.unpackAlignment!==void 0)c.unpackAlignment=a.unpackAlignment;if(a.compareFunction!==void 0)c.compareFunction=a.compareFunction;if(a.normalized!==void 0)c.normalized=a.normalized;if(a.userData!==void 0)c.userData=a.userData;i[a.uuid]=c}return i}parseObject(t,e,n,i,s){let r;function a(u){if(e[u]===void 0)gt("ObjectLoader: Undefined geometry",u);return e[u]}function o(u){if(u===void 0)return;if(Array.isArray(u)){let d=[];for(let f=0,m=u.length;f<m;f++){let x=u[f];if(n[x]===void 0)gt("ObjectLoader: Undefined material",x);d.push(n[x])}return d}if(n[u]===void 0)gt("ObjectLoader: Undefined material",u);return n[u]}function l(u){if(i[u]===void 0)gt("ObjectLoader: Undefined texture",u);return i[u]}let c,h;switch(t.type){case"Scene":if(r=new xc,t.background!==void 0)if(Number.isInteger(t.background))r.background=new At(t.background);else r.background=l(t.background);if(t.environment!==void 0)r.environment=l(t.environment);if(t.fog!==void 0){if(t.fog.type==="Fog")r.fog=new Ca(t.fog.color,t.fog.near,t.fog.far);else if(t.fog.type==="FogExp2")r.fog=new Ra(t.fog.color,t.fog.density);if(t.fog.name!=="")r.fog.name=t.fog.name}if(t.backgroundBlurriness!==void 0)r.backgroundBlurriness=t.backgroundBlurriness;if(t.backgroundIntensity!==void 0)r.backgroundIntensity=t.backgroundIntensity;if(t.backgroundRotation!==void 0)r.backgroundRotation.fromArray(t.backgroundRotation);if(t.environmentIntensity!==void 0)r.environmentIntensity=t.environmentIntensity;if(t.environmentRotation!==void 0)r.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":if(r=new Oe(t.fov,t.aspect,t.near,t.far),t.focus!==void 0)r.focus=t.focus;if(t.zoom!==void 0)r.zoom=t.zoom;if(t.filmGauge!==void 0)r.filmGauge=t.filmGauge;if(t.filmOffset!==void 0)r.filmOffset=t.filmOffset;if(t.view!==void 0)r.view=Object.assign({},t.view);break;case"OrthographicCamera":if(r=new fr(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0)r.zoom=t.zoom;if(t.view!==void 0)r.view=Object.assign({},t.view);break;case"AmbientLight":r=new Qc(t.color,t.intensity);break;case"DirectionalLight":r=new Kc(t.color,t.intensity),r.target=t.target||"";break;case"PointLight":r=new $c(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":r=new jc(t.color,t.intensity,t.width,t.height);break;case"SpotLight":if(r=new Jc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),r.target=t.target||"",t.map!==void 0)r.map=l(t.map);break;case"HemisphereLight":r=new Zc(t.color,t.groundColor,t.intensity);break;case"LightProbe":let u=new co().fromArray(t.sh);r=new th(u,t.intensity);break;case"SkinnedMesh":if(c=a(t.geometry),h=o(t.material),r=new Sc(c,h),t.bindMode!==void 0)r.bindMode=t.bindMode;if(t.bindMatrix!==void 0)r.bindMatrix.fromArray(t.bindMatrix);if(t.skeleton!==void 0)r.skeleton=t.skeleton;break;case"Mesh":c=a(t.geometry),h=o(t.material),r=new Re(c,h);break;case"InstancedMesh":c=a(t.geometry),h=o(t.material);let{count:d,instanceMatrix:f,instanceColor:m}=t;if(r=new Mc(c,h,d),r.instanceMatrix=new wn(new Float32Array(f.array),16),m!==void 0)r.instanceColor=new wn(new Float32Array(m.array),m.itemSize);break;case"BatchedMesh":if(c=a(t.geometry),h=o(t.material),r=new bc(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,h),r.geometry=c,r.perObjectFrustumCulled=t.perObjectFrustumCulled,r.sortObjects=t.sortObjects,r._drawRanges=t.drawRanges,r._reservedRanges=t.reservedRanges,r._geometryInfo=t.geometryInfo.map((x)=>{let g=null,p=null;if(x.boundingBox!==void 0)g=new Be().fromJSON(x.boundingBox);if(x.boundingSphere!==void 0)p=new De().fromJSON(x.boundingSphere);return{...x,boundingBox:g,boundingSphere:p}}),r._instanceInfo=t.instanceInfo,r._availableInstanceIds=t.availableInstanceIds,r._availableGeometryIds=t.availableGeometryIds,r._nextIndexStart=t.nextIndexStart,r._nextVertexStart=t.nextVertexStart,r._geometryCount=t.geometryCount,r._maxInstanceCount=t.maxInstanceCount,r._maxVertexCount=t.maxVertexCount,r._maxIndexCount=t.maxIndexCount,r._geometryInitialized=t.geometryInitialized,r._matricesTexture=l(t.matricesTexture.uuid),r._indirectTexture=l(t.indirectTexture.uuid),t.colorsTexture!==void 0)r._colorsTexture=l(t.colorsTexture.uuid);if(t.boundingSphere!==void 0)r.boundingSphere=new De().fromJSON(t.boundingSphere);if(t.boundingBox!==void 0)r.boundingBox=new Be().fromJSON(t.boundingBox);break;case"LOD":r=new yc;break;case"Line":r=new Yn(a(t.geometry),o(t.material));break;case"LineLoop":r=new Tc(a(t.geometry),o(t.material));break;case"LineSegments":r=new Mn(a(t.geometry),o(t.material));break;case"PointCloud":case"Points":r=new Ac(a(t.geometry),o(t.material));break;case"Sprite":if(r=new vc(o(t.material)),t.center!==void 0)r.center.fromArray(t.center);break;case"Group":r=new Pi;break;case"Bone":r=new Na;break;default:r=new le}if(r.uuid=t.uuid,t.name!==void 0)r.name=t.name;if(t.pivot!==void 0)r.pivot=new C().fromArray(t.pivot);if(t.matrix!==void 0){if(r.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0)r.matrixAutoUpdate=t.matrixAutoUpdate;if(r.matrixAutoUpdate){if(r.matrix.decompose(r.position,r.quaternion,r.scale),r.pivot!==null)r.position.copy(r.pivot).applyMatrix4(r.matrix).sub(r.pivot)}}else{if(t.position!==void 0)r.position.fromArray(t.position);if(t.rotation!==void 0)r.rotation.fromArray(t.rotation);if(t.quaternion!==void 0)r.quaternion.fromArray(t.quaternion);if(t.scale!==void 0)r.scale.fromArray(t.scale)}if(t.up!==void 0)r.up.fromArray(t.up);if(t.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);if(t.morphTargetInfluences!==void 0)r.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.castShadow!==void 0)r.castShadow=t.castShadow;if(t.receiveShadow!==void 0)r.receiveShadow=t.receiveShadow;if(t.shadow){if(t.shadow.intensity!==void 0)r.shadow.intensity=t.shadow.intensity;if(t.shadow.bias!==void 0)r.shadow.bias=t.shadow.bias;if(t.shadow.normalBias!==void 0)r.shadow.normalBias=t.shadow.normalBias;if(t.shadow.radius!==void 0)r.shadow.radius=t.shadow.radius;if(t.shadow.blurSamples!==void 0)r.shadow.blurSamples=t.shadow.blurSamples;if(t.shadow.focus!==void 0)r.shadow.focus=t.shadow.focus;if(t.shadow.aspect!==void 0)r.shadow.aspect=t.shadow.aspect;if(t.shadow.mapSize!==void 0)r.shadow.mapSize.fromArray(t.shadow.mapSize);if(t.shadow.mapType!==void 0)r.shadow.mapType=t.shadow.mapType;if(t.shadow.camera!==void 0)r.shadow.camera=this.parseObject(t.shadow.camera)}if(t.visible!==void 0)r.visible=t.visible;if(t.frustumCulled!==void 0)r.frustumCulled=t.frustumCulled;if(t.renderOrder!==void 0)r.renderOrder=t.renderOrder;if(t.static!==void 0)r.static=t.static;if(t.userData!==void 0)r.userData=t.userData;if(t.layers!==void 0)r.layers.mask=t.layers;if(t.children!==void 0){let u=t.children;for(let d=0;d<u.length;d++)r.add(this.parseObject(u[d],e,n,i,s))}if(t.animations!==void 0){let u=t.animations;for(let d=0;d<u.length;d++){let f=u[d];r.animations.push(s[f])}}if(t.type==="LOD"){if(t.autoUpdate!==void 0)r.autoUpdate=t.autoUpdate;let u=t.levels;for(let d=0;d<u.length;d++){let f=u[d],m=r.getObjectByProperty("uuid",f.object);if(m!==void 0)r.addLevel(m,f.distance,f.hysteresis)}}return r}bindSkeletons(t,e){if(Object.keys(e).length===0)return;t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];if(i===void 0)gt("ObjectLoader: No skeleton found with UUID:",n.skeleton);else n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);if(i!==void 0)e.target=i;else e.target=new le}})}}var V_={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304},Au={RepeatWrapping:1000,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Eu={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008},tl=new WeakMap;class Cf extends $e{constructor(t){super(t);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")gt("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")gt("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){if(t===void 0)t="";if(this.path!==void 0)t=this.path+t;t=this.manager.resolveURL(t);let s=this,r=En.get(`image-bitmap:${t}`);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then((l)=>{if(tl.has(r)===!0){if(i)i(tl.get(r));s.manager.itemError(t),s.manager.itemEnd(t)}else{if(e)e(l);s.manager.itemEnd(t)}});return}setTimeout(function(){if(e)e(r);s.manager.itemEnd(t)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){if(En.add(`image-bitmap:${t}`,l),e)e(l);return s.manager.itemEnd(t),l}).catch(function(l){if(i)i(l);tl.set(o,l),En.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});En.add(`image-bitmap:${t}`,o),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var sa;class uo{static getContext(){if(sa===void 0)sa=new(window.AudioContext||window.webkitAudioContext);return sa}static setContext(t){sa=t}}class If extends $e{constructor(t){super(t)}load(t,e,n,i){let s=this,r=new Rn(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{let l=o.slice(0),c=uo.getContext(),h=t+"#decode";s.manager.itemStart(h),c.decodeAudioData(l,function(u){e(u),s.manager.itemEnd(h)}).catch(function(u){a(u),s.manager.itemEnd(h)})}catch(l){a(l)}},n,i);function a(o){if(i)i(o);else Ut(o);s.manager.itemError(t)}}}var wu=new Xt,Ru=new Xt,Ti=new Xt;class Pf{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=0.064,this.cameraL=new Oe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Oe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Ti.copy(t.projectionMatrix);let i=e.eyeSep/2,s=i*e.near/e.focus,r=e.near*Math.tan(Li*e.fov*0.5)/e.zoom,a,o;Ru.elements[12]=-i,wu.elements[12]=i,a=-r*e.aspect+s,o=r*e.aspect+s,Ti.elements[0]=2*e.near/(o-a),Ti.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(Ti),a=-r*e.aspect-s,o=r*e.aspect-s,Ti.elements[0]=2*e.near/(o-a),Ti.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(Ti)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Ru),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(wu),this.cameraR.matrixWorldNeedsUpdate=!0}}var rs=-90,as=1;class pr extends le{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Oe(rs,as,t,e);i.layers=this.layers,this.add(i);let s=new Oe(rs,as,t,e);s.layers=this.layers,this.add(s);let r=new Oe(rs,as,t,e);r.layers=this.layers,this.add(r);let a=new Oe(rs,as,t,e);a.layers=this.layers,this.add(a);let o=new Oe(rs,as,t,e);o.layers=this.layers,this.add(o);let l=new Oe(rs,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;if(t.isWebGLRenderer===!0)x=t.state.buffers.depth.getReversed();else x=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),x&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.mipmapsAutoUpdate=m,t.setRenderTarget(n,5,i),x&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(h,u,d),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ih extends Oe{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class sh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){if(this._document=t,t.hidden!==void 0)this._pageVisibilityHandler=X_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function X_(){if(this._document.hidden===!1)this.reset()}var Ai=new C,el=new Xe,q_=new C,Ei=new C,wi=new C;class Lf extends le{constructor(){super();this.type="AudioListener",this.context=uo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new sh}getInput(){return this.gain}removeFilter(){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null;return this}getFilter(){return this.filter}setFilter(t){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination);else this.gain.disconnect(this.context.destination);return this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,0.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ai,el,q_),Ei.set(0,0,-1).applyQuaternion(el),wi.set(0,1,0).applyQuaternion(el),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ai.x,n),e.positionY.linearRampToValueAtTime(Ai.y,n),e.positionZ.linearRampToValueAtTime(Ai.z,n),e.forwardX.linearRampToValueAtTime(Ei.x,n),e.forwardY.linearRampToValueAtTime(Ei.y,n),e.forwardZ.linearRampToValueAtTime(Ei.z,n),e.upX.linearRampToValueAtTime(wi.x,n),e.upY.linearRampToValueAtTime(wi.y,n),e.upZ.linearRampToValueAtTime(wi.z,n)}else e.setPosition(Ai.x,Ai.y,Ai.z),e.setOrientation(Ei.x,Ei.y,Ei.z,wi.x,wi.y,wi.z)}}class rh extends le{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){if(this.buffer=t,this.sourceType="buffer",this.autoplay)this.play();return this}play(t=0){if(this.isPlaying===!0){gt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){gt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){gt("Audio: this Audio has no playback control.");return}if(this.isPlaying===!0){if(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0)this._progress=this._progress%(this.duration||this.buffer.duration);this.source.stop(),this.source.onended=null,this.isPlaying=!1}return this}stop(t=0){if(this.hasPlaybackControl===!1){gt("Audio: this Audio has no playback control.");return}if(this._progress=0,this.source!==null)this.source.stop(this.context.currentTime+t),this.source.onended=null;return this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected===!1)return;if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){if(!t)t=[];if(this._connected===!0)this.disconnect(),this.filters=t.slice(),this.connect();else this.filters=t.slice();return this}setDetune(t){if(this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0)this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,0.01);return this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){gt("Audio: this Audio has no playback control.");return}if(this.playbackRate=t,this.isPlaying===!0)this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,0.01);return this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){if(this.hasPlaybackControl===!1)return gt("Audio: this Audio has no playback control."),!1;return this.loop}setLoop(t){if(this.hasPlaybackControl===!1){gt("Audio: this Audio has no playback control.");return}if(this.loop=t,this.isPlaying===!0)this.source.loop=this.loop;return this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,0.01),this}copy(t,e){if(super.copy(t,e),t.sourceType!=="buffer")return gt("Audio: Audio source type cannot be copied."),this;return this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this}clone(t){return new this.constructor(this.listener).copy(this,t)}}var Ri=new C,Cu=new Xe,Y_=new C,Ci=new C;class Nf extends rh{constructor(t){super(t);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ri,Cu,Y_),Ci.set(0,0,1).applyQuaternion(Cu);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ri.x,n),e.positionY.linearRampToValueAtTime(Ri.y,n),e.positionZ.linearRampToValueAtTime(Ri.z,n),e.orientationX.linearRampToValueAtTime(Ci.x,n),e.orientationY.linearRampToValueAtTime(Ci.y,n),e.orientationZ.linearRampToValueAtTime(Ci.z,n)}else e.setPosition(Ri.x,Ri.y,Ri.z),e.setOrientation(Ci.x,Ci.y,Ci.z)}}class Df{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class ah{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,r;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=e}else{r+=e;let a=e/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let o=e*this._origIndex;this._mixBufferRegion(n,i,o,1-s,e)}if(r>0)this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let o=e,l=e+e;o!==l;++o)if(n[o]!==n[o+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,r=i;s!==r;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=0.5)for(let r=0;r!==s;++r)t[e+r]=t[n+r]}_slerp(t,e,n,i){Xe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let r=this._workIndex*s;Xe.multiplyQuaternionsFlat(t,r,t,e,t,n),Xe.slerpFlat(t,e,t,e,t,r,i)}_lerp(t,e,n,i,s){let r=1-i;for(let a=0;a!==s;++a){let o=e+a;t[o]=t[o]*r+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let r=0;r!==s;++r){let a=e+r;t[a]=t[a]+t[n+r]*i}}}var oh="\\[\\]\\.:\\/",Z_=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",J_="[^"+oh.replace("\\.","")+"]",$_=/((?:WC+[\/:])*)/.source.replace("WC",lh),K_=/(WCOD+)?/.source.replace("WCOD",J_),Q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),j_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),t0=new RegExp("^"+$_+K_+Q_+j_+"$"),e0=["material","materials","bones","map"];class Uf{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new oe(t,e,n);else return new oe.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z_,"")}static parseTrackName(t){let e=t0.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(e0.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=oe.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=Uf;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ff{constructor(){this.isAnimationObjectGroup=!0,this.uuid=hn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,r=s.length,a=void 0,o=t.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){let u=arguments[c],d=u.uuid,f=e[d];if(f===void 0){f=o++,e[d]=f,t.push(u);for(let m=0,x=r;m!==x;++m)s[m].push(new oe(u,n[m],i[m]))}else if(f<l){a=t[f];let m=--l,x=t[m];e[x.uuid]=f,t[f]=x,e[d]=m,t[m]=u;for(let g=0,p=r;g!==p;++g){let y=s[g],S=y[m],v=y[f];if(y[f]=S,v===void 0)v=new oe(u,n[g],i[g]);y[m]=v}}else if(t[f]!==a)Ut("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let r=0,a=arguments.length;r!==a;++r){let o=arguments[r],l=o.uuid,c=e[l];if(c!==void 0&&c>=s){let h=s++,u=t[h];e[u.uuid]=c,t[c]=u,e[l]=h,t[h]=o;for(let d=0,f=i;d!==f;++d){let m=n[d],x=m[h],g=m[c];m[c]=x,m[h]=g}}}this.nCachedObjects_=s}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,r=t.length;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0)if(delete e[c],h<s){let u=--s,d=t[u],f=--r,m=t[f];if(h!==u)e[d.uuid]=h;if(t[h]=d,u!==f)e[m.uuid]=u;t[u]=m,t.pop();for(let x=0,g=i;x!==g;++x){let p=n[x],y=p[u],S=p[f];p[h]=y,p[u]=S,p.pop()}}else{let u=--r,d=t[u];if(h!==u)e[d.uuid]=h;t[h]=d,t.pop();for(let f=0,m=i;f!==m;++f){let x=n[f];x[h]=x[u],x.pop()}}}this.nCachedObjects_=s}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],s=this._bindings;if(i!==void 0)return s[i];let r=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=Array(l);i=s.length,n[t]=i,r.push(t),a.push(e),s.push(h);for(let u=c,d=o.length;u!==d;++u){let f=o[u];h[u]=new oe(f,t,e)}return h}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length-1,o=r[a],l=i[a];e[l]=n,r[n]=o,r.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class ch{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,r=s.length,a=Array(r),o={endingStart:2400,endingEnd:2400};for(let l=0;l!==r;++l){let c=s[l].createInterpolant(null);a[l]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,s=t._clip.duration,r=s/i,a=i/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;if(t!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t);return this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,r=this.timeScale,a=this._timeScaleInterpolant;if(a===null)a=i._lendControlInterpolant(),this._timeScaleInterpolant=a;let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,o[1]=s+n,l[0]=t/r,l[1]=e/r,this}stopWarping(){let t=this._timeScaleInterpolant;if(t!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let o=(t-s)*n;if(o<0||n===0)e=0;else this._startTime=null,e=n*o}e*=this._updateTimeScale(t);let r=this._updateTime(e),a=this._updateWeight(t);if(a>0){let o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case 2501:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(r),l[c].accumulateAdditive(a);break;case 2500:default:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(r),l[c].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];if(e*=i,t>n.parameterPositions[1]){if(this.stopFading(),i===0)this.enabled=!1}}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];if(e*=i,t>n.parameterPositions[1]){if(e===0)this.paused=!0;else{if(this._restoreTimeScale!==null)e=this._restoreTimeScale;this.timeScale=e}this.stopWarping()}}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,r=n===2202;if(t===0){if(s===-1)return i;return r&&(s&1)===1?e-i:i}if(n===2200){if(s===-1)this._loopCount=0,this._setEndings(!0,!0,!1);t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1)if(t>=0)s=0,this._setEndings(!0,this.repetitions===0,r);else this._setEndings(this.repetitions===0,!0,r);if(i>=e||i<0){let a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);let o=this.repetitions-s;if(o<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1})}else{if(o===1){let l=t<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;if(n)i.endingStart=2401,i.endingEnd=2401;else{if(t)i.endingStart=this.zeroSlopeAtStart?2401:2400;else i.endingStart=2402;if(e)i.endingEnd=this.zeroSlopeAtEnd?2401:2400;else i.endingEnd=2402}}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,r=this._weightInterpolant;if(r===null)r=i._lendControlInterpolant(),this._weightInterpolant=r;let a=r.parameterPositions,o=r.sampleValues;return a[0]=s,o[0]=e,a[1]=s+t,o[1]=n,this}}var n0=new Float32Array(1);class Of extends cn{constructor(t){super();if(this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,{_propertyBindings:r,_interpolants:a}=t,o=n.uuid,l=this._bindingsByRootAndName,c=l[o];if(c===void 0)c={},l[o]=c;for(let h=0;h!==s;++h){let u=i[h],d=u.name,f=c[d];if(f!==void 0)++f.referenceCount,r[h]=f;else{if(f=r[h],f!==void 0){if(f._cacheIndex===null)++f.referenceCount,this._addInactiveBinding(f,o,d);continue}let m=e&&e._propertyBindings[h].binding.parsedPath;f=new ah(oe.create(n,d,m),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,o,d),r[h]=f}a[h].resultBuffer=f.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];if(s.useCount++===0)this._lendBinding(s),s.saveOriginalState()}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];if(--s.useCount===0)s.restoreOriginalState(),this._takeBackBinding(s)}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{let a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),r.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,r=this._actionsByClip,a=r[s],o=a.knownActions,l=o[o.length-1],c=t._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),t._byClipCacheIndex=null;let h=a.actionByRoot,u=(t._localRoot||this._root).uuid;if(delete h[u],o.length===0)delete r[s];this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];if(--s.referenceCount===0)this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,r=i[e];if(r===void 0)r={},i[e]=r;r[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],o=e[e.length-1],l=t._cacheIndex;if(o._cacheIndex=l,e[l]=o,e.pop(),delete a[s],Object.keys(a).length===0)delete r[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];if(n===void 0)n=new ro(new Float32Array(2),new Float32Array(2),1,n0),n.__cacheIndex=e,t[e]=n;return n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,r=typeof t==="string"?ms.findByName(i,t):t,a=r!==null?r.uuid:t,o=this._actionsByClip[a],l=null;if(n===void 0)if(r!==null)n=r.blendMode;else n=2500;if(o!==void 0){let h=o.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;if(l=o.knownActions[0],r===null)r=l._clip}if(r===null)return null;let c=new ch(this,r,e,n);return this._bindAction(c,l),this._addInactiveAction(c,a,s),c}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t==="string"?ms.findByName(n,t):t,r=s?s.uuid:t,a=this._actionsByClip[r];if(a!==void 0)return a.actionByRoot[i]||null;return null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,r);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let r=s.knownActions;for(let a=0,o=r.length;a!==o;++a){let l=r[a];this._deactivateAction(l);let c=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,e[c]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let r in n){let a=n[r].actionByRoot,o=a[e];if(o!==void 0)this._deactivateAction(o),this._removeInactiveAction(o)}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);if(n!==null)this._deactivateAction(n),this._removeInactiveAction(n)}}class Bf extends wa{constructor(t=1,e=1,n=1,i={}){super(t,e,i);this.isRenderTarget3D=!0,this.depth=n;for(let s=0;s<this.textures.length;s++){let r=new js(null,t,e,n);r.isRenderTargetTexture=!0,r.renderTarget=this,this.textures[s]=r}this._setTextureOptions(i)}}class hh{constructor(t){this.value=t}clone(){return new hh(this.value.clone===void 0?this.value:this.value.clone())}}var i0=0;class zf extends cn{constructor(){super();this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:i0++}),this.name="",this.usage=35044,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);if(e!==-1)this.uniforms.splice(e,1);return this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Array.isArray(s))this.uniforms.push(s.map((r)=>r.clone()));else this.uniforms.push(s.clone())}return this}clone(){return new this.constructor().copy(this)}}class Gf extends zi{constructor(t,e,n=1){super(t,e);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class kf{constructor(t,e,n,i,s,r=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=r,this.version=0}set needsUpdate(t){if(t===!0)this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}var Iu=new Xt;class Hf{constructor(t,e,n=0,i=1/0){this.ray=new Gi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Ut("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Iu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(t,e=!0,n=[]){return cl(t,this,n,e),n.sort(Pu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)cl(t[i],this,n,e);return n.sort(Pu),n}}function Pu(t,e){return t.distance-e.distance}function cl(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)cl(r[a],e,n,!0)}}class Wf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,gt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}class Vf{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class Xf{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class qf{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}var Lu=new et;class uh{constructor(t=new et(1/0,1/0),e=new et(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Lu.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Lu).distanceTo(t)}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}var Nu=new C,ra=new C,os=new C,ls=new C,nl=new C,s0=new C,r0=new C;class Yf{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Nu.subVectors(t,this.start),ra.subVectors(this.end,this.start);let n=ra.dot(ra);if(n===0)return 0;let s=ra.dot(Nu)/n;if(e)s=Wt(s,0,1);return s}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=s0,n=r0){let s,r,a=this.start,o=t.start,l=this.end,c=t.end;os.subVectors(l,a),ls.subVectors(c,o),nl.subVectors(a,o);let h=os.dot(os),u=ls.dot(ls),d=ls.dot(nl);if(h<=0.00000000000000010000000000000001&&u<=0.00000000000000010000000000000001)return e.copy(a),n.copy(o),e.distanceToSquared(n);if(h<=0.00000000000000010000000000000001)s=0,r=d/u,r=Wt(r,0,1);else{let f=os.dot(nl);if(u<=0.00000000000000010000000000000001)r=0,s=Wt(-f/h,0,1);else{let m=os.dot(ls),x=h*u-m*m;if(x!==0)s=Wt((m*d-f*u)/x,0,1);else s=0;if(r=(m*s+d)/u,r<0)r=0,s=Wt(-f/h,0,1);else if(r>1)r=1,s=Wt((m-f)/h,0,1)}}return e.copy(a).addScaledVector(os,s),n.copy(o).addScaledVector(ls,r),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}var Du=new C;class Zf extends le{constructor(t,e){super();this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new Jt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,a=1,o=32;r<o;r++,a++){let l=r/o*Math.PI*2,c=a/o*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}n.setAttribute("position",new Et(i,3));let s=new qe({fog:!1,toneMapped:!1});this.cone=new Mn(n,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent)this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld);else this.matrix.copy(this.light.matrixWorld);this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1000,e=t*Math.tan(this.light.angle);if(this.cone.scale.set(e,e,t),Du.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Du),this.color!==void 0)this.cone.material.color.set(this.color);else this.cone.material.color.copy(this.light.color)}}var si=new C,aa=new Xt,il=new Xt;class Jf extends Mn{constructor(t){let e=$f(t),n=new Jt,i=[],s=[];for(let l=0;l<e.length;l++){let c=e[l];if(c.parent&&c.parent.isBone)i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0)}n.setAttribute("position",new Et(i,3)),n.setAttribute("color",new Et(s,3));let r=new qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,r);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new At(255),o=new At(65280);this.setColors(a,o)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");il.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<e.length;s++){let a=e[s];if(a.parent&&a.parent.isBone)aa.multiplyMatrices(il,a.matrixWorld),si.setFromMatrixPosition(aa),i.setXYZ(r,si.x,si.y,si.z),aa.multiplyMatrices(il,a.parent.matrixWorld),si.setFromMatrixPosition(aa),i.setXYZ(r+1,si.x,si.y,si.z),r+=2}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,t.r,t.g,t.b),i.setXYZ(s+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function $f(t){let e=[];if(t.isBone===!0)e.push(t);for(let n=0;n<t.children.length;n++)e.push(...$f(t.children[n]));return e}class Kf extends Re{constructor(t,e,n){let i=new lr(e,4,2),s=new ui({wireframe:!0,fog:!1,toneMapped:!1});super(i,s);this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){if(this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0)this.material.color.set(this.color);else this.material.color.copy(this.light.color)}}var a0=new C,Uu=new At,Fu=new At;class Qf extends le{constructor(t,e,n){super();this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new or(e);if(i.rotateY(Math.PI*0.5),this.material=new ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0)this.material.vertexColors=!0;let s=i.getAttribute("position"),r=new Float32Array(s.count*3);i.setAttribute("color",new ce(r,3)),this.add(new Re(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");Uu.copy(this.light.color),Fu.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let s=n<i/2?Uu:Fu;e.setXYZ(n,s.r,s.g,s.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(a0.setFromMatrixPosition(this.light.matrixWorld).negate())}}class jf extends Mn{constructor(t=10,e=10,n=4473924,i=8947848){n=new At(n),i=new At(i);let s=e/2,r=t/e,a=t/2,o=[],l=[];for(let u=0,d=0,f=-a;u<=e;u++,f+=r){o.push(-a,0,f,a,0,f),o.push(f,0,-a,f,0,a);let m=u===s?n:i;m.toArray(l,d),d+=3,m.toArray(l,d),d+=3,m.toArray(l,d),d+=3,m.toArray(l,d),d+=3}let c=new Jt;c.setAttribute("position",new Et(o,3)),c.setAttribute("color",new Et(l,3));let h=new qe({vertexColors:!0,toneMapped:!1});super(c,h);this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class tp extends Mn{constructor(t=10,e=16,n=8,i=64,s=4473924,r=8947848){s=new At(s),r=new At(r);let a=[],o=[];if(e>1)for(let h=0;h<e;h++){let u=h/e*(Math.PI*2),d=Math.sin(u)*t,f=Math.cos(u)*t;a.push(0,0,0),a.push(d,0,f);let m=h&1?s:r;o.push(m.r,m.g,m.b),o.push(m.r,m.g,m.b)}for(let h=0;h<n;h++){let u=h&1?s:r,d=t-t/n*h;for(let f=0;f<i;f++){let m=f/i*(Math.PI*2),x=Math.sin(m)*d,g=Math.cos(m)*d;a.push(x,0,g),o.push(u.r,u.g,u.b),m=(f+1)/i*(Math.PI*2),x=Math.sin(m)*d,g=Math.cos(m)*d,a.push(x,0,g),o.push(u.r,u.g,u.b)}}let l=new Jt;l.setAttribute("position",new Et(a,3)),l.setAttribute("color",new Et(o,3));let c=new qe({vertexColors:!0,toneMapped:!1});super(l,c);this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}var Ou=new C,oa=new C,Bu=new C;class ep extends le{constructor(t,e,n){super();if(this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0)e=1;let i=new Jt;i.setAttribute("position",new Et([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let s=new qe({fog:!1,toneMapped:!1});this.lightPlane=new Yn(i,s),this.add(this.lightPlane),i=new Jt,i.setAttribute("position",new Et([0,0,0,0,0,1],3)),this.targetLine=new Yn(i,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){if(this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ou.setFromMatrixPosition(this.light.matrixWorld),oa.setFromMatrixPosition(this.light.target.matrixWorld),Bu.subVectors(oa,Ou),this.lightPlane.lookAt(oa),this.color!==void 0)this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color);else this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color);this.targetLine.lookAt(oa),this.targetLine.scale.z=Bu.length()}}var la=new C,Se=new dr;class np extends Mn{constructor(t){let e=new Jt,n=new qe({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],r={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,m){o(f),o(m)}function o(f){if(i.push(0,0,0),s.push(0,0,0),r[f]===void 0)r[f]=[];r[f].push(i.length/3-1)}e.setAttribute("position",new Et(i,3)),e.setAttribute("color",new Et(s,3));super(e,n);if(this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix)this.camera.updateProjectionMatrix();this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update();let l=new At(16755200),c=new At(16711680),h=new At(43775),u=new At(16777215),d=new At(3355443);this.setColors(l,c,h,u,d)}setColors(t,e,n,i,s){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,s,r;if(Se.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,r=0;else if(this.camera.coordinateSystem===2000)s=-1,r=1;else if(this.camera.coordinateSystem===2001)s=0,r=1;else throw Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);be("c",e,t,Se,0,0,s),be("t",e,t,Se,0,0,r),be("n1",e,t,Se,-1,-1,s),be("n2",e,t,Se,1,-1,s),be("n3",e,t,Se,-1,1,s),be("n4",e,t,Se,1,1,s),be("f1",e,t,Se,-1,-1,r),be("f2",e,t,Se,1,-1,r),be("f3",e,t,Se,-1,1,r),be("f4",e,t,Se,1,1,r),be("u1",e,t,Se,0.7,1.1,s),be("u2",e,t,Se,-0.7,1.1,s),be("u3",e,t,Se,0,2,s),be("cf1",e,t,Se,-1,0,r),be("cf2",e,t,Se,1,0,r),be("cf3",e,t,Se,0,-1,r),be("cf4",e,t,Se,0,1,r),be("cn1",e,t,Se,-1,0,s),be("cn2",e,t,Se,1,0,s),be("cn3",e,t,Se,0,-1,s),be("cn4",e,t,Se,0,1,s),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function be(t,e,n,i,s,r,a){la.set(s,r,a).unproject(i);let o=e[t];if(o!==void 0){let l=n.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],la.x,la.y,la.z)}}var ca=new Be;class ip extends Mn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new Jt;s.setIndex(new ce(n,1)),s.setAttribute("position",new ce(i,3));super(s,new qe({color:e,toneMapped:!1}));this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0)ca.setFromObject(this.object);if(ca.isEmpty())return;let{min:t,max:e}=ca,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class sp extends Mn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Jt;s.setIndex(new ce(n,1)),s.setAttribute("position",new Et(i,3));super(s,new qe({color:e,toneMapped:!1}));this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;if(e.isEmpty())return;e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(0.5),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class rp extends Yn{constructor(t,e=1,n=16776960){let i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new Jt;r.setAttribute("position",new Et(s,3)),r.computeBoundingSphere();super(r,new qe({color:i,toneMapped:!1}));this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new Jt;o.setAttribute("position",new Et(a,3)),o.computeBoundingSphere(),this.add(new Re(o,new ui({color:i,opacity:0.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(0.5*this.size,0.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var zu=new C,ha,sl;class ap extends le{constructor(t=new C(0,0,1),e=new C(0,0,0),n=1,i=16776960,s=n*0.2,r=s*0.2){super();if(this.type="ArrowHelper",ha===void 0)ha=new Jt,ha.setAttribute("position",new Et([0,0,0,0,1,0],3)),sl=new rr(0.5,1,5,1),sl.translate(0,-0.5,0);this.position.copy(e),this.line=new Yn(ha,new qe({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Re(sl,new ui({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,r)}setDirection(t){if(t.y>0.99999)this.quaternion.set(0,0,0,1);else if(t.y<-0.99999)this.quaternion.set(1,0,0,0);else{zu.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(zu,e)}}setLength(t,e=t*0.2,n=e*0.2){this.line.scale.set(1,Math.max(0.0001,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class op extends Mn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],i=new Jt;i.setAttribute("position",new Et(e,3)),i.setAttribute("color",new Et(n,3));let s=new qe({vertexColors:!0,toneMapped:!1});super(i,s);this.type="AxesHelper"}setColors(t,e,n){let i=new At,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class lp{constructor(){this.type="ShapePath",this.color=new At,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new fs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,r){return this.currentPath.bezierCurveTo(t,e,n,i,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(o,l){let c=!1,h=l.length;for(let u=0,d=h-1;u<h;d=u++){let f=l[u],m=l[d];if(f.y>o.y!==m.y>o.y&&o.x<(m.x-f.x)*(o.y-f.y)/(m.y-f.y)+f.x)c=!c}return c}function e(o,l){let c=l.getCenter(new et);if(t(c,o))return c;let h=c.y,u=[],d=o.length;for(let f=0;f<d;f++){let m=o[f],x=o[(f+1)%d];if(m.y>h!==x.y>h){let g=m.x+(h-m.y)*(x.x-m.x)/(x.y-m.y);u.push(g)}}if(u.length>1)u.sort((f,m)=>f-m),c.x=(u[0]+u[1])/2;return c}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";if(n!=="nonzero"&&n!=="evenodd")gt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero";let i=n==="nonzero"?(o)=>o!==0:(o)=>(o&1)!==0,s=[];for(let o of this.subPaths){let l=o.getPoints();if(l.length<3)continue;let c=vn.area(l);if(c===0)continue;let h=new uh;for(let u=0;u<l.length;u++)h.expandByPoint(l[u]);s.push({subPath:o,points:l,boundingBox:h,interiorPoint:e(l,h),absArea:Math.abs(c),winding:c<0?-1:1,container:null,exclude:!1,role:null})}s.sort((o,l)=>l.absArea-o.absArea);for(let o=0;o<s.length;o++){let l=s[o],c=0;for(let h=o-1;h>=0;h--){let u=s[h];if(!u.boundingBox.containsBox(l.boundingBox))continue;if(!t(l.interiorPoint,u.points))continue;l.container=u.exclude?u.container:u,c=u.winding,l.winding+=c;break}if(i(l.winding)===i(c))l.exclude=!0}for(let o of s){if(o.exclude)continue;o.role=o.container===null||o.container.role==="hole"?"outer":"hole"}let r=[],a=new Map;for(let o of s){if(o.exclude||o.role!=="outer")continue;let l=new bs;l.curves=o.subPath.curves,r.push(l),a.set(o,l)}for(let o of s){if(o.exclude||o.role!=="hole")continue;let l=a.get(o.container);if(!l)continue;let c=new fs;c.curves=o.subPath.curves,l.holes.push(c)}return r}}class cp extends cn{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(this.domElement!==null)this.disconnect();this.domElement=t}disconnect(){}dispose(){}update(){}}function o0(t,e){let n=t.image&&t.image.width?t.image.width/t.image.height:1;if(n>e)t.repeat.x=1,t.repeat.y=n/e,t.offset.x=0,t.offset.y=(1-t.repeat.y)/2;else t.repeat.x=e/n,t.repeat.y=1,t.offset.x=(1-t.repeat.x)/2,t.offset.y=0;return t}function l0(t,e){let n=t.image&&t.image.width?t.image.width/t.image.height:1;if(n>e)t.repeat.x=e/n,t.repeat.y=1,t.offset.x=(1-t.repeat.x)/2,t.offset.y=0;else t.repeat.x=1,t.repeat.y=n/e,t.offset.x=0,t.offset.y=(1-t.repeat.y)/2;return t}function c0(t){return t.repeat.x=1,t.repeat.y=1,t.offset.x=0,t.offset.y=0,t}function fo(t,e,n,i){let s=h0(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function h0(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}class hp{static contain(t,e){return o0(t,e)}static cover(t,e){return l0(t,e)}static fill(t){return c0(t)}static getByteLength(t,e,n,i){return fo(t,e,n,i)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)gt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Lp(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function u0(t){let e=new WeakMap;function n(o,l){let{array:c,usage:h}=o,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=t.HALF_FLOAT;else f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let{array:h,updateRanges:u}=l;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];if(x.start<=m.start+m.count+1)m.count=Math.max(m.count,x.start+x.count-m.start);else++d,u[d]=x}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:d0,alphahash_pars_fragment:f0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:x0,aomap_pars_fragment:v0,batching_pars_vertex:y0,batching_vertex:S0,begin_vertex:M0,beginnormal_vertex:b0,bsdfs:T0,iridescence_fragment:A0,bumpmap_pars_fragment:E0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:I0,color_fragment:P0,color_pars_fragment:L0,color_pars_vertex:N0,color_vertex:D0,common:U0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:z0,emissivemap_pars_fragment:G0,colorspace_fragment:k0,colorspace_pars_fragment:H0,envmap_fragment:W0,envmap_common_pars_fragment:V0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ix,envmap_vertex:Y0,fog_vertex:Z0,fog_pars_vertex:J0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:j0,lights_lambert_fragment:tx,lights_lambert_pars_fragment:ex,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ax,lights_phong_pars_fragment:ox,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:hx,lights_fragment_maps:ux,lights_fragment_end:dx,lightprobes_pars_fragment:fx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:_x,map_fragment:xx,map_pars_fragment:vx,map_particle_fragment:yx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:bx,morphinstance_vertex:Tx,morphcolor_vertex:Ax,morphnormal_vertex:Ex,morphtarget_pars_vertex:wx,morphtarget_vertex:Rx,normal_fragment_begin:Cx,normal_fragment_maps:Ix,normal_pars_fragment:Px,normal_pars_vertex:Lx,normal_vertex:Nx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Bx,opaque_fragment:zx,packing:Gx,premultiplied_alpha_fragment:kx,project_vertex:Hx,dithering_fragment:Wx,dithering_pars_fragment:Vx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:Zx,shadowmap_vertex:Jx,shadowmask_pars_fragment:$x,skinbase_vertex:Kx,skinning_pars_vertex:Qx,skinning_vertex:jx,skinnormal_vertex:tv,specularmap_fragment:ev,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:sv,transmission_fragment:rv,transmission_pars_fragment:av,uv_pars_fragment:ov,uv_pars_vertex:lv,uv_vertex:cv,worldpos_vertex:hv,background_vert:uv,background_frag:dv,backgroundCube_vert:fv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:xv,distance_vert:vv,distance_frag:yv,equirect_vert:Sv,equirect_frag:Mv,linedashed_vert:bv,linedashed_frag:Tv,meshbasic_vert:Av,meshbasic_frag:Ev,meshlambert_vert:wv,meshlambert_frag:Rv,meshmatcap_vert:Cv,meshmatcap_frag:Iv,meshnormal_vert:Pv,meshnormal_frag:Lv,meshphong_vert:Nv,meshphong_frag:Dv,meshphysical_vert:Uv,meshphysical_frag:Fv,meshtoon_vert:Ov,meshtoon_frag:Bv,points_vert:zv,points_frag:Gv,shadow_vert:kv,shadow_frag:Hv,sprite_vert:Wv,sprite_frag:Vv},vt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new et(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ye([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ye([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ye([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ye([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ye([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new At(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ye([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ye([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ye([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ye([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ye([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ye([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Ye([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Ye([vt.lights,vt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Dn.physical={uniforms:Ye([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var po={r:0,b:0,g:0},Xv=new Xt,Np=new Yt;Np.set(-1,0,0,0,1,0,0,0,1);function qv(t,e,n,i,s,r){let a=new At(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function m(y){let S=!1,v=f(y);if(v===null)g(a,o);else if(v&&v.isColor)g(v,1),S=!0;let A=t.xr.getEnvironmentBlendMode();if(A==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(A==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||S)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function x(y,S){let v=f(S);if(v&&v.isCubeTexture){if(c===void 0)c=new Re(new $n(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ki(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Np);if(c.material.toneMapped=ee.getTransfer(v.colorSpace)!==ge,h!==v||u!==v.version||d!==t.toneMapping)c.material.needsUpdate=!0,h=v,u=v.version,d=t.toneMapping;c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new Re(new Ts(2,2),new Ln({name:"BackgroundMaterial",uniforms:ki(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),h!==v||u!==v.version||d!==t.toneMapping)l.material.needsUpdate=!0,h=v,u=v.version,d=t.toneMapping;l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)}}function g(y,S){y.getRGB(po,Fc(t)),n.buffers.color.setClear(po.r,po.g,po.b,S,r)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:x,dispose:p}}function Yv(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(P,F,X,I,H){let q=!1,O=u(P,I,X,F);if(r!==O)r=O,c(r.object);if(q=f(P,I,X,H),q)m(P,I,X,H);if(H!==null)e.update(H,t.ELEMENT_ARRAY_BUFFER);if(q||a){if(a=!1,v(P,F,X,I),H!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer)}}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function u(P,F,X,I){let H=I.wireframe===!0,q=i[F.id];if(q===void 0)q={},i[F.id]=q;let O=P.isInstancedMesh===!0?P.id:0,rt=q[O];if(rt===void 0)rt={},q[O]=rt;let k=rt[X.id];if(k===void 0)k={},rt[X.id]=k;let J=k[H];if(J===void 0)J=d(l()),k[H]=J;return J}function d(P){let F=[],X=[],I=[];for(let H=0;H<n;H++)F[H]=0,X[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,F,X,I){let H=r.attributes,q=F.attributes,O=0,rt=X.getAttributes();for(let k in rt)if(rt[k].location>=0){let nt=H[k],yt=q[k];if(yt===void 0){if(k==="instanceMatrix"&&P.instanceMatrix)yt=P.instanceMatrix;if(k==="instanceColor"&&P.instanceColor)yt=P.instanceColor}if(nt===void 0)return!0;if(nt.attribute!==yt)return!0;if(yt&&nt.data!==yt.data)return!0;O++}if(r.attributesNum!==O)return!0;if(r.index!==I)return!0;return!1}function m(P,F,X,I){let H={},q=F.attributes,O=0,rt=X.getAttributes();for(let k in rt)if(rt[k].location>=0){let nt=q[k];if(nt===void 0){if(k==="instanceMatrix"&&P.instanceMatrix)nt=P.instanceMatrix;if(k==="instanceColor"&&P.instanceColor)nt=P.instanceColor}let yt={};if(yt.attribute=nt,nt&&nt.data)yt.data=nt.data;H[k]=yt,O++}r.attributes=H,r.attributesNum=O,r.index=I}function x(){let P=r.newAttributes;for(let F=0,X=P.length;F<X;F++)P[F]=0}function g(P){p(P,0)}function p(P,F){let X=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;if(X[P]=1,I[P]===0)t.enableVertexAttribArray(P),I[P]=1;if(H[P]!==F)t.vertexAttribDivisor(P,F),H[P]=F}function y(){let P=r.newAttributes,F=r.enabledAttributes;for(let X=0,I=F.length;X<I;X++)if(F[X]!==P[X])t.disableVertexAttribArray(X),F[X]=0}function S(P,F,X,I,H,q,O){if(O===!0)t.vertexAttribIPointer(P,F,X,H,q);else t.vertexAttribPointer(P,F,X,I,H,q)}function v(P,F,X,I){x();let H=I.attributes,q=X.getAttributes(),O=F.defaultAttributeValues;for(let rt in q){let k=q[rt];if(k.location>=0){let J=H[rt];if(J===void 0){if(rt==="instanceMatrix"&&P.instanceMatrix)J=P.instanceMatrix;if(rt==="instanceColor"&&P.instanceColor)J=P.instanceColor}if(J!==void 0){let nt=J.normalized,yt=J.itemSize,Z=e.get(J);if(Z===void 0)continue;let{buffer:it,type:Tt,bytesPerElement:Ct}=Z,Ft=Tt===t.INT||Tt===t.UNSIGNED_INT||J.gpuType===Ml;if(J.isInterleavedBufferAttribute){let xt=J.data,ne=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,Vt=J.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Bt=0;Bt<k.locationSize;Bt++)p(k.location+Bt,xt.meshPerAttribute);if(P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=xt.meshPerAttribute*xt.count}else for(let Bt=0;Bt<k.locationSize;Bt++)g(k.location+Bt);t.bindBuffer(t.ARRAY_BUFFER,it);for(let Bt=0;Bt<k.locationSize;Bt++)S(k.location+Bt,yt/k.locationSize,Tt,nt,ne*Ct,(Vt+yt/k.locationSize*Bt)*Ct,Ft)}else{if(J.isInstancedBufferAttribute){for(let xt=0;xt<k.locationSize;xt++)p(k.location+xt,J.meshPerAttribute);if(P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=J.meshPerAttribute*J.count}else for(let xt=0;xt<k.locationSize;xt++)g(k.location+xt);t.bindBuffer(t.ARRAY_BUFFER,it);for(let xt=0;xt<k.locationSize;xt++)S(k.location+xt,yt/k.locationSize,Tt,nt,yt*Ct,yt/k.locationSize*xt*Ct,Ft)}}else if(O!==void 0){let nt=O[rt];if(nt!==void 0)switch(nt.length){case 2:t.vertexAttrib2fv(k.location,nt);break;case 3:t.vertexAttrib3fv(k.location,nt);break;case 4:t.vertexAttrib4fv(k.location,nt);break;default:t.vertexAttrib1fv(k.location,nt)}}}}y()}function A(){E();for(let P in i){let F=i[P];for(let X in F){let I=F[X];for(let H in I){let q=I[H];for(let O in q)h(q[O].object),delete q[O];delete I[H]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let F=i[P.id];for(let X in F){let I=F[X];for(let H in I){let q=I[H];for(let O in q)h(q[O].object),delete q[O];delete I[H]}}delete i[P.id]}function _(P){for(let F in i){let X=i[F];for(let I in X){let H=X[I];if(H[P.id]===void 0)continue;let q=H[P.id];for(let O in q)h(q[O].object),delete q[O];delete H[P.id]}}}function M(P){for(let F in i){let X=i[F],I=P.isInstancedMesh===!0?P.id:0,H=X[I];if(H===void 0)continue;for(let q in H){let O=H[q];for(let rt in O)h(O[rt].object),delete O[rt];delete H[q]}if(delete X[I],Object.keys(X).length===0)delete i[F]}}function E(){if(D(),a=!0,r===s)return;r=s,c(r.object)}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Zv(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){if(h===0)return;t.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jv(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){if(_!==Jn&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(_){let M=_===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(_!==Sn&&_!==Zn&&!M&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&u===!1;if(n.reversedDepthBuffer===!0&&u===!1)gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&u===!0)gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:A,samples:w}}function $v(t){let e=this,n=null,i=0,s=!1,r=!1,a=new An,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,f){let{clippingPlanes:m,clipIntersection:x,clipShadows:g}=u,p=t.get(u);if(!s||m===null||m.length===0||r&&!g)if(r)h(null);else c();else{let y=r?0:i,S=y*4,v=p.clippingState||null;l.value=v,v=h(m,d,S,f);for(let A=0;A!==S;++A)v[A]=n[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;if(o.getNormalMatrix(y),g===null||g.length<p)g=new Float32Array(p);for(let S=0,v=f;S!==x;++S,v+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}class _o extends en{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ms(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $n(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Ui});s.uniforms.tEquirect.value=e;let r=new Re(i,s),a=e.minFilter;if(e.minFilter===li)e.minFilter=ln;return new pr(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var up=256,Kv=3,Qv=20,Dp=256,Up=16,jv=3,ty=new C,ey=new At;class go{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pr(1,10,null),this._boxMesh=new Re(new $n(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=ty}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(e>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:u,autoClearDepth:d,autoClearStencil:f}=o,m=t.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,m===null)t.background=o.getClearColor(ey);let x=new pr(n,i,c);if(x.position.copy(a),x.update(o,t),o.autoClear=h,o.autoClearColor=u,o.autoClearDepth=d,o.autoClearStencil=f,t.background=m,e>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,e);return this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(up,mc(t))}_fromTexture(t,e){if(t.mapping===Js||t.mapping===ys)this._setSize(t.image.length===0?up:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=dp(t,!1,!1),n=Math.log2(t)-Kv;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==e||t&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=dp(e,!0,t)}return this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;if(t.mapping===Js||t.mapping===ys){if(this._cubemapMaterial===null)this._cubemapMaterial=pp();e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=fp();e=this._equirectMaterial}e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){if(this._ggxMaterial===null)this._ggxMaterial=ny(),this._integrationMaterial=iy();let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Up);for(let r=0;r<=n;r++){let a=go.lodToRoughness(r,n);if(r>n-jv)s.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let o=a>0?Math.log2(e)+0.5*Math.log2(6/(Dp*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){if(this._blurMaterial===null)this._blurMaterial=sy();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}}function dp(t,e,n){return new _o(t,{minFilter:li,generateMipmaps:e,type:Pn,colorSpace:oc,depthBuffer:n})}function xr(t,e,n){return new Ln({name:t,uniforms:e,vertexShader:Qt.cube_vert,fragmentShader:n,side:tn,blending:Ui,depthTest:!1,depthWrite:!1})}function ny(){return xr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Dp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iy(){return xr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Up}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sy(){return xr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function fp(){return xr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function pp(){return xr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ry(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,f=!1){if(d===null||d===void 0)return null;if(f)return a(d);return r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ma||f===ga)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new _o(m.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===ma||f===ga,x=f===Js||f===ys;if(m||x){let g=n.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p){if(i===null)i=new go(t);return g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture}else if(g!==void 0)return g.texture;else{let y=d.image;if(m&&y&&y.height>0||x&&y&&l(y)){if(i===null)i=new go(t);return g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",h),g.texture}else return null}}}return d}function o(d,f){if(f===ma)d.mapping=Js;else if(f===ga)d.mapping=ys;return d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)if(d[x]!==void 0)f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);if(m!==void 0)e.delete(f),m.dispose()}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=n.get(f);if(m!==void 0)n.delete(f),m.dispose()}function u(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:u}}function ay(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Vn("WebGLRenderer: "+i+" extension not supported.");return s}}}function oy(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((m)=>delete s[m]);function o(m){l(m.target)}function l(m){if(m.index!==null)e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);if(x)e.remove(x),r.delete(m);if(i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0)delete m._maxInstanceCount;n.memory.geometries--}function c(m,x){if(s[x.id]!==void 0)return x;return x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),n.memory.geometries++,x}function h(m){let x=m.attributes;for(let g in x)e.update(x[g],t.ARRAY_BUFFER)}function u(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,v=new(g.count>=65535?Pa:Ia)(Math.ceil(y/3)*6,1),A=v.array;if(x!==null){let _=x.array;p=x.version;for(let M=0,E=0;M<y;M+=3){let D=_[M+0],P=_[M+1],F=_[M+2];A[E++]=D,A[E++]=P,A[E++]=P,A[E++]=F,A[E++]=F,A[E++]=D}}else{p=g.version;for(let _=0,M=0;_<y;_+=3){let E=_+0,D=_+1,P=_+2;A[M++]=E,A[M++]=D,A[M++]=D,A[M++]=P,A[M++]=P,A[M++]=E}}v.version=p;let w=r.get(m);if(w)e.remove(w);r.set(m,v)}function d(m){let x=r.get(m);if(x){let g=m.index;if(g!==null){if(x.version<g.version)u(m)}}else u(m);return r.get(m)}function f(){for(let m in s){let x=s[m].deref();if(x!==void 0)l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function ly(t,e,n){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){t.drawElements(i,d,r,u*a),n.update(d,i,1)}function c(u,d,f){if(f===0)return;t.drawElementsInstanced(i,d,r,u*a,f),n.update(d,i,f)}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];n.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cy(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function hy(t,e,n){let i=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let E=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",E)};if(d!==void 0)d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;if(f===!0)S=1;if(m===!0)S=2;if(x===!0)S=3;let v=o.attributes.position.count*S,A=1;if(v>e.maxTextureSize)A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize;let w=new Float32Array(v*A*4*u),_=new Qs(w,v,A,u);_.type=Zn,_.needsUpdate=!0;let M=S*4;for(let D=0;D<u;D++){let P=g[D],F=p[D],X=y[D],I=v*A*4*D;for(let H=0;H<P.count;H++){let q=H*M;if(f===!0)s.fromBufferAttribute(P,H),w[I+q+0]=s.x,w[I+q+1]=s.y,w[I+q+2]=s.z,w[I+q+3]=0;if(m===!0)s.fromBufferAttribute(F,H),w[I+q+4]=s.x,w[I+q+5]=s.y,w[I+q+6]=s.z,w[I+q+7]=0;if(x===!0)s.fromBufferAttribute(X,H),w[I+q+8]=s.x,w[I+q+9]=s.y,w[I+q+10]=s.z,w[I+q+11]=X.itemSize===4?s.w:1}}d={count:u,texture:_,size:new et(v,A)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function uy(t,e,n,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h)e.update(d),r.set(d,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==h)f.update(),r.set(f,h)}return d}function o(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var dy={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[xl]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[Sl]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function fy(t,e,n,i,s,r){let a=new en(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Jt;h.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Et([0,2,0,0,2,0],2));let u=new eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Re(h,u),f=new fr(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,y=null,S=[],v=!1;this.setSize=function(A,w){if(a.setSize(A,w),o!==null)o.setSize(A,w);if(l!==null)l.setSize(A,w);for(let _=0;_<S.length;_++){let M=S[_];if(M.setSize)M.setSize(A,w)}},this.setEffects=function(A){S=A,v=S.length>0&&S[0].isRenderPass===!0;let{width:w,height:_}=a;if(S.length>0&&o===null)o=new en(w,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new en(w,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1});let M=s===!0&&S.some((E)=>E.needsDepthTexture===!0);if(M!==(a.depthTexture!==null)){if(M===!0&&c===null){if(c=new di(w,_),r===!0)c.format=hi,c.type=Fi}a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M}for(let E=0;E<S.length;E++){let D=S[E];if(D.setSize)D.setSize(w,_);if(M&&D.needsDepthTexture===!0&&D.setDepthTexture)D.setDepthTexture(c)}},this.begin=function(A,w){if(g)return!1;if(A.toneMapping===In&&S.length===0)return!1;if(y=w,w!==null){let{width:_,height:M}=w;if(a.width!==_||a.height!==M)this.setSize(_,M)}if(v===!1)A.setRenderTarget(a);return p=A.toneMapping,A.toneMapping=In,!0},this.hasRenderPass=function(){return v},this.end=function(A,w){A.toneMapping=p,g=!0;let _=a,M=o;for(let E=0;E<S.length;E++){let D=S[E];if(D.enabled===!1)continue;if(D.render(A,M,_,w),D.needsSwap!==!1)_=M,M=M===o?l:o}if(m!==A.outputColorSpace||x!==A.toneMapping){if(m=A.outputColorSpace,x=A.toneMapping,u.defines={},ee.getTransfer(m)===ge)u.defines.SRGB_TRANSFER="";let E=dy[x];if(E)u.defines[E]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(y),A.render(d,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();h.dispose(),u.dispose()}}var Fp=new ye,Op=new di(1,1),Bp=new Fa(1),zp=new Qs,Gp=new js,kp=new Ms,mp=[],gp=[],_p=new Float32Array(16),xp=new Float32Array(9),vp=new Float32Array(4);function As(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=mp[s];if(r===void 0)r=new Float32Array(s),mp[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ce(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ie(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xo(t,e){let n=gp[e];if(n===void 0)n=new Int32Array(e),gp[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function py(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function my(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ce(n,e))return;t.uniform2fv(this.addr,e),Ie(n,e)}}function gy(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ce(n,e))return;t.uniform3fv(this.addr,e),Ie(n,e)}}function _y(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ce(n,e))return;t.uniform4fv(this.addr,e),Ie(n,e)}}function xy(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ce(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ie(n,e)}else{if(Ce(n,i))return;vp.set(i),t.uniformMatrix2fv(this.addr,!1,vp),Ie(n,i)}}function vy(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ce(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ie(n,e)}else{if(Ce(n,i))return;xp.set(i),t.uniformMatrix3fv(this.addr,!1,xp),Ie(n,i)}}function yy(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ce(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ie(n,e)}else{if(Ce(n,i))return;_p.set(i),t.uniformMatrix4fv(this.addr,!1,_p),Ie(n,i)}}function Sy(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function My(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ce(n,e))return;t.uniform2iv(this.addr,e),Ie(n,e)}}function by(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ce(n,e))return;t.uniform3iv(this.addr,e),Ie(n,e)}}function Ty(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ce(n,e))return;t.uniform4iv(this.addr,e),Ie(n,e)}}function Ay(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Ey(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ce(n,e))return;t.uniform2uiv(this.addr,e),Ie(n,e)}}function wy(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ce(n,e))return;t.uniform3uiv(this.addr,e),Ie(n,e)}}function Ry(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ce(n,e))return;t.uniform4uiv(this.addr,e),Ie(n,e)}}function vo(t){if(t.version===0)t.compareFunction=uc,t.needsUpdate=!0;return t}function Cy(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)r=vo(Op);else r=Fp;n.setTexture2D(e||r,s)}function Iy(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Gp,s)}function Py(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_CUBE_SHADOW)r=vo(Bp);else r=kp;n.setTextureCube(e||r,s)}function Ly(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||zp,s)}function Ny(t){switch(t){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return xy;case 35675:return vy;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return by;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ey;case 36295:return wy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Dy(t,e){t.uniform1fv(this.addr,e)}function Uy(t,e){let n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function Fy(t,e){let n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function Oy(t,e){let n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function By(t,e){let n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zy(t,e){let n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Gy(t,e){let n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ky(t,e){t.uniform1iv(this.addr,e)}function Hy(t,e){t.uniform2iv(this.addr,e)}function Wy(t,e){t.uniform3iv(this.addr,e)}function Vy(t,e){t.uniform4iv(this.addr,e)}function Xy(t,e){t.uniform1uiv(this.addr,e)}function qy(t,e){t.uniform2uiv(this.addr,e)}function Yy(t,e){t.uniform3uiv(this.addr,e)}function Zy(t,e){t.uniform4uiv(this.addr,e)}function Jy(t,e,n){let i=this.cache,s=e.length,r=xo(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Ie(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=vo(Op);else a=Fp;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function $y(t,e,n){let i=this.cache,s=e.length,r=xo(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Ie(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Gp,r[a])}function Ky(t,e,n){let i=this.cache,s=e.length,r=xo(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Ie(i,r);let a;if(this.type===t.SAMPLER_CUBE_SHADOW)a=vo(Bp);else a=kp;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function Qy(t,e,n){let i=this.cache,s=e.length,r=xo(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Ie(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||zp,r[a])}function jy(t){switch(t){case 5126:return Dy;case 35664:return Uy;case 35665:return Fy;case 35666:return Oy;case 35674:return By;case 35675:return zy;case 35676:return Gy;case 5124:case 35670:return ky;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Vy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Qy}}class Hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ny(e.type)}}class Wp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jy(e.type)}}class Vp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var dh=/(\w+)(\])?(\[|\.)?/g;function yp(t,e){t.seq.push(e),t.map[e.id]=e}function tS(t,e,n){let i=t.name,s=i.length;dh.lastIndex=0;while(!0){let r=dh.exec(i),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){yp(n,c===void 0?new Hp(o,t,e):new Wp(o,t,e));break}else{let u=n.map[o];if(u===void 0)u=new Vp(o),yp(n,u);n=u}}}class _r{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);tS(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Sp(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var eS=37297,nS=0;function iS(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Mp=new Yt;function sS(t){ee._getMatrix(Mp,ee.workingColorSpace,t);let e=`mat3( ${Mp.elements.map((n)=>n.toFixed(4))} )`;switch(ee.getTransfer(t)){case lc:return[e,"LinearTransferOETF"];case ge:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bp(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+iS(t.getShaderSource(e),o)}else return r}function rS(t,e){let n=sS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var aS={[ml]:"Linear",[gl]:"Reinhard",[_l]:"Cineon",[xl]:"ACESFilmic",[yl]:"AgX",[Sl]:"Neutral",[vl]:"Custom"};function oS(t,e){let n=aS[e];if(n===void 0)return gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var mo=new C;function lS(){ee.getLuminanceCoefficients(mo);let t=mo.x.toFixed(4),e=mo.y.toFixed(4),n=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function cS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function hS(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function uS(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function gr(t){return t!==""}function Tp(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ap(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(t){return t.replace(dS,fS)}function fS(t,e){let n=Qt[e];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ph(n)}var pS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(t){return t.replace(pS,mS)}function mS(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var gS={[Ys]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function _S(t){return gS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xS={[ys]:"ENVMAP_MODE_REFRACTION"};function vS(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return xS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yS={[_d]:"ENVMAP_BLENDING_MULTIPLY",[xd]:"ENVMAP_BLENDING_MIX",[vd]:"ENVMAP_BLENDING_ADD"};function SS(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return yS[t.combine]||"ENVMAP_BLENDING_NONE"}function MS(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=_S(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=vS(n),u=SS(n),d=cS(n),f=hS(r),m=s.createProgram(),x,g,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(gr).join(`
`),x.length>0)x+=`
`;if(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(gr).join(`
`),g.length>0)g+=`
`}else x=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),g=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==In?"#define TONE_MAPPING":"",n.toneMapping!==In?Qt.tonemapping_pars_fragment:"",n.toneMapping!==In?oS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,rS("linearToOutputTexel",n.outputColorSpace),lS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gr).join(`
`);if(a=ph(a),a=Tp(a,n),a=Ap(a,n),o=ph(o),o=Tp(o,n),o=Ap(o,n),a=Ep(a),o=Ep(o),n.isRawShaderMaterial!==!0)p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g;let y=p+x+a,S=p+g+o,v=Sp(s,s.VERTEX_SHADER,y),A=Sp(s,s.FRAGMENT_SHADER,S);if(s.attachShader(m,v),s.attachShader(m,A),n.index0AttributeName!==void 0)s.bindAttribLocation(m,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(m,0,"position");s.linkProgram(m);function w(D){if(t.debug.checkShaderErrors){let P=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(v)||"",X=s.getShaderInfoLog(A)||"",I=P.trim(),H=F.trim(),q=X.trim(),O=!0,rt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,m,v,A);else{let k=bp(s,v,"vertex"),J=bp(s,A,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+k+`
`+J)}else if(I!=="")gt("WebGLProgram: Program Info Log:",I);else if(H===""||q==="")rt=!1;if(rt)D.diagnostics={runnable:O,programLog:I,vertexShader:{log:H,prefix:x},fragmentShader:{log:q,prefix:g}}}s.deleteShader(v),s.deleteShader(A),_=new _r(s,m),M=uS(s,m)}let _;this.getUniforms=function(){if(_===void 0)w(this);return _};let M;this.getAttributes=function(){if(M===void 0)w(this);return M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(E===!1)E=s.getProgramParameter(m,eS);return E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=A,this}var bS=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new qp(t),e.set(t,n);return n}}class qp{constructor(t){this.id=bS++,this.code=t,this.usedTimes=0}}function TS(t){return t===Oi||t===ba||t===Ta}function AS(t,e,n,i,s,r){let a=new tr,o=new Xp,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function m(_,M,E,D,P,F){let X=D.fog,I=P.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||H,q),rt=d[_.type],k=i.precision;if(_.precision!==null){if(k=i.getMaxPrecision(_.precision),k!==_.precision)gt("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead.")}let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,nt=J!==void 0?J.length:0,yt=0;if(I.morphAttributes.position!==void 0)yt=1;if(I.morphAttributes.normal!==void 0)yt=2;if(I.morphAttributes.color!==void 0)yt=3;let Z,it,Tt,Ct;if(rt){let Mt=Dn[rt];Z=Mt.vertexShader,it=Mt.fragmentShader}else{Z=_.vertexShader,it=_.fragmentShader;let Mt=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,Mt,fe),Tt=Mt.id,Ct=fe.id}let Ft=t.getRenderTarget(),xt=t.state.buffers.depth.getReversed(),ne=P.isInstancedMesh===!0,Vt=P.isBatchedMesh===!0,Bt=!!_.map,re=!!_.matcap,j=!!O,ot=j&&O.isPMREMTexture===!0,ht=!!_.aoMap,Rt=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,kt=!!_.normalMap,Ot=!!_.displacementMap,jt=!!_.emissiveMap,te=!!_.metalnessMap,he=!!_.roughnessMap,U=_.anisotropy>0,Ee=_.clearcoat>0,$t=_.diffuseRoughness>0,Me=_.dispersion>0,_t=_.retroreflectivity>0,de=_.iridescence>0,Ht=_.sheen>0,qt=_.transmission>0,we=U&&!!_.anisotropyMap,R=Ee&&!!_.clearcoatMap,b=Ee&&!!_.clearcoatNormalMap,B=Ee&&!!_.clearcoatRoughnessMap,st=$t&&!!_.diffuseRoughnessMap,tt=de&&!!_.iridescenceMap,ct=de&&!!_.iridescenceThicknessMap,ft=Ht&&!!_.sheenColorMap,V=Ht&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ut=!!_.specularColorMap,L=!!_.specularIntensityMap,K=qt&&!!_.transmissionMap,Y=qt&&!!_.thicknessMap,at=!!_.gradientMap,lt=!!_.alphaMap,mt=_.alphaTest>0,zt=!!_.alphaHash,Dt=!!_.extensions,St=In;if(_.toneMapped){if(Ft===null||Ft.isXRRenderTarget===!0)St=t.toneMapping}let Gt=ot?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Kt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:it,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:Ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:Vt,batchingColor:Vt&&P._colorsTexture!==null,instancing:ne,instancingColor:ne&&P.instanceColor!==null,instancingMorph:ne&&P.morphTexture!==null,outputColorSpace:Ft===null?t.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:re,envMap:j,envMapMode:j&&O.mapping,envMapPMREM:ot,envMapMaxLod:ot?Gt.length-1:null,envMapSize:ot?Gt[0].width:null,aoMap:ht,lightMap:Rt,bumpMap:wt,normalMap:kt,displacementMap:Ot,emissiveMap:jt,normalMapObjectSpace:kt&&_.normalMapType===Id,normalMapTangentSpace:kt&&_.normalMapType===ac,packedNormalMap:kt&&_.normalMapType===ac&&TS(_.normalMap.format),metalnessMap:te,roughnessMap:he,anisotropy:U,anisotropyMap:we,clearcoat:Ee,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:B,diffuseRoughness:$t,diffuseRoughnessMap:st,dispersion:Me,retroreflection:_t,iridescence:de,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:Ht,sheenColorMap:ft,sheenRoughnessMap:V,specularMap:Q,specularColorMap:ut,specularIntensityMap:L,transmission:qt,transmissionMap:K,thicknessMap:Y,gradientMap:at,opaque:_.transparent===!1&&_.blending===Zs&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:mt,alphaHash:zt,combine:_.combine,mapUv:Bt&&f(_.map.channel),aoMapUv:ht&&f(_.aoMap.channel),lightMapUv:Rt&&f(_.lightMap.channel),bumpMapUv:wt&&f(_.bumpMap.channel),normalMapUv:kt&&f(_.normalMap.channel),displacementMapUv:Ot&&f(_.displacementMap.channel),emissiveMapUv:jt&&f(_.emissiveMap.channel),metalnessMapUv:te&&f(_.metalnessMap.channel),roughnessMapUv:he&&f(_.roughnessMap.channel),anisotropyMapUv:we&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:V&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:ut&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(kt||U),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Bt||lt),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&kt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:yt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter((Mt)=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&E.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===ge,decodeVideoTextureEmissive:jt&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Dt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&_.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function x(_){let M=[];if(_.shaderID)M.push(_.shaderID);else M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let E in _.defines)M.push(E),M.push(_.defines[E]);if(_.isRawShaderMaterial===!1)g(M,_),p(M,_),M.push(t.outputColorSpace);return M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){if(a.disableAll(),M.instancing)a.enable(0);if(M.instancingColor)a.enable(1);if(M.instancingMorph)a.enable(2);if(M.matcap)a.enable(3);if(M.envMap)a.enable(4);if(M.normalMapObjectSpace)a.enable(5);if(M.normalMapTangentSpace)a.enable(6);if(M.clearcoat)a.enable(7);if(M.iridescence)a.enable(8);if(M.alphaTest)a.enable(9);if(M.vertexColors)a.enable(10);if(M.vertexAlphas)a.enable(11);if(M.vertexUv1s)a.enable(12);if(M.vertexUv2s)a.enable(13);if(M.vertexUv3s)a.enable(14);if(M.vertexTangents)a.enable(15);if(M.anisotropy)a.enable(16);if(M.alphaHash)a.enable(17);if(M.batching)a.enable(18);if(M.dispersion)a.enable(19);if(M.retroreflection)a.enable(24);if(M.diffuseRoughness)a.enable(25);if(M.batchingColor)a.enable(20);if(M.gradientMap)a.enable(21);if(M.packedNormalMap)a.enable(22);if(M.vertexNormals)a.enable(23);if(_.push(a.mask),a.disableAll(),M.fog)a.enable(0);if(M.useFog)a.enable(1);if(M.flatShading)a.enable(2);if(M.logarithmicDepthBuffer)a.enable(3);if(M.reversedDepthBuffer)a.enable(4);if(M.skinning)a.enable(5);if(M.morphTargets)a.enable(6);if(M.morphNormals)a.enable(7);if(M.morphColors)a.enable(8);if(M.premultipliedAlpha)a.enable(9);if(M.shadowMapEnabled)a.enable(10);if(M.doubleSided)a.enable(11);if(M.flipSided)a.enable(12);if(M.useDepthPacking)a.enable(13);if(M.dithering)a.enable(14);if(M.transmission)a.enable(15);if(M.sheen)a.enable(16);if(M.opaque)a.enable(17);if(M.pointsUvs)a.enable(18);if(M.decodeVideoTexture)a.enable(19);if(M.decodeVideoTextureEmissive)a.enable(20);if(M.alphaToCoverage)a.enable(21);if(M.numLightProbeGrids>0)a.enable(22);if(M.hasPositionAttribute)a.enable(23);_.push(a.mask)}function y(_){let M=d[_.type],E;if(M){let D=Dn[M];E=ff.clone(D.uniforms)}else E=_.uniforms;return E}function S(_,M){let E=h.get(M);if(E!==void 0)++E.usedTimes;else E=new MS(t,M,_,s),c.push(E),h.set(M,E);return E}function v(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:w}}function ES(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function wS(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Rp(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Cp(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d){let f=0;if(d.isInstancedMesh)f+=2;if(d.isSkinnedMesh)f+=1;return f}function o(d,f,m,x,g,p){let y=t[e];if(y===void 0)y={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},t[e]=y;else y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=p;return e++,y}function l(d,f,m,x,g,p,y){if(y.reversedDepth===!0)g=-g;let S=o(d,f,m,x,g,p);if(m.transmission>0)i.push(S);else if(m.transparent===!0)s.push(S);else n.push(S)}function c(d,f,m,x,g,p){let y=o(d,f,m,x,g,p);if(m.transmission>0)i.unshift(y);else if(m.transparent===!0)s.unshift(y);else n.unshift(y)}function h(d,f){if(n.length>1)n.sort(d||wS);if(i.length>1)i.sort(f||Rp);if(s.length>1)s.sort(f||Rp)}function u(){for(let d=e,f=t.length;d<f;d++){let m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function RS(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Cp,t.set(i,[a]);else if(s>=r.length)a=new Cp,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function CS(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new C,color:new At};break;case"SpotLight":n={position:new C,direction:new C,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new C,halfWidth:new C,halfHeight:new C};break}return t[e.id]=n,n}}}function IS(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var PS=0;function LS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NS(t){let e=new CS,n=IS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new Xt,a=new Xt;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,S=0,v=0,A=0,w=0,_=0,M=0,E=0,D=0;c.sort(LS);for(let F=0,X=c.length;F<X;F++){let I=c[F],{color:H,intensity:q,distance:O}=I,rt=null;if(I.shadow&&I.shadow.map)if(I.shadow.map.texture.format===Oi)rt=I.shadow.map.texture;else rt=I.shadow.map.depthTexture||I.shadow.map.texture;if(I.isAmbientLight)h+=H.r*q,u+=H.g*q,d+=H.b*q;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],q);D++}else if(I.isSunLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,nt=n.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[m]=nt,i.sunShadowMap[m]=rt;let yt=J.getViewportCount();for(let Z=0;Z<yt;Z++)i.sunShadowMatrix[x+Z]=J.getMatrix(Z),i.sunShadowCascade[x+Z]=J._cascadeData[Z];x+=yt,m++}i.sun[f]=k,f++}else if(I.isDirectionalLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,nt=n.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,i.directionalShadow[g]=nt,i.directionalShadowMap[g]=rt,i.directionalShadowMatrix[g]=I.shadow.matrix,A++}i.directional[g]=k,g++}else if(I.isSpotLight){let k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(H).multiplyScalar(q),k.distance=O,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[y]=k;let J=I.shadow;if(I.map){if(i.spotLightMap[M]=I.map,M++,J.updateMatrices(I),I.castShadow)E++}if(i.spotLightMatrix[y]=J.matrix,I.castShadow){let nt=n.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,i.spotShadow[y]=nt,i.spotShadowMap[y]=rt,_++}y++}else if(I.isRectAreaLight){let k=e.get(I);k.color.copy(H).multiplyScalar(q),k.halfWidth.set(I.width*0.5,0,0),k.halfHeight.set(0,I.height*0.5,0),i.rectArea[S]=k,S++}else if(I.isPointLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let J=I.shadow,nt=n.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,nt.shadowCameraNear=J.camera.near,nt.shadowCameraFar=J.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=I.shadow.matrix,w++}i.point[p]=k,p++}else if(I.isHemisphereLight){let k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(q),k.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[v]=k,v++}}if(S>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2;else i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;if(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==A||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==M||P.numLightProbes!==D)i.sun.length=f,i.directional.length=g,i.spot.length=y,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-E,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=D,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=A,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=M,P.numLightProbes=D,i.version=PS++}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(v.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(v.width*0.5,0,0),A.halfHeight.set(0,v.height*0.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Ip(t){let e=new NS(t),n=[],i=[],s=[];function r(u){h.camera=u,n.length=0,i.length=0,s.length=0}function a(u){if(u.isLightProbeGrid)s.push(u);else n.push(u)}function o(u){i.push(u)}function l(){e.setup(n),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(n,u)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function DS(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Ip(t),e.set(s,[o]);else if(r>=a.length)o=new Ip(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],BS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Pp=new Xt,mr=new C,fh=new C;function zS(t,e,n){let i=new ai,s=new et,r=new et,a=new pe,o=new io,l=new so,c={},h=n.maxTextureSize,u={[xs]:tn,[tn]:xs,[Cn]:Cn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:US,fragmentShader:FS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Jt;m.setAttribute("position",new ce(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new Re(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(w,_,M){if(g.enabled===!1)return;if(g.autoUpdate===!1&&g.needsUpdate===!1)return;if(w.length===0)return;if(this.type===Wu)gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys;let E=t.getRenderTarget(),D=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;if(F.setBlending(Ui),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let X=p!==this.type;if(X)_.traverse(function(I){if(I.material)if(Array.isArray(I.material))I.material.forEach((H)=>H.needsUpdate=!0);else I.material.needsUpdate=!0});for(let I=0,H=w.length;I<H;I++){let q=w[I],O=q.shadow;if(O===void 0){gt("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let rt=O.getFrameExtents();if(s.multiply(rt),r.copy(O.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,O.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,O.mapSize.y=r.y}let k=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=k,O.map===null||X===!0){if(O.map!==null){if(O.map.depthTexture!==null)O.map.depthTexture.dispose(),O.map.depthTexture=null;O.map.dispose()}if(this.type===_s){if(q.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new en(s.x,s.y,{format:Oi,type:Pn,minFilter:ln,magFilter:ln,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new di(s.x,s.y,Zn),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=Ss,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=oi,O.map.depthTexture.magFilter=oi}else{if(q.isPointLight)O.map=new _o(s.x),O.map.depthTexture=new Fa(s.x,ci);else O.map=new en(s.x,s.y),O.map.depthTexture=new di(s.x,s.y,ci);if(O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=Ss,this.type===Ys)O.map.depthTexture.compareFunction=k?hc:cc,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln;else O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=oi,O.map.depthTexture.magFilter=oi}O.camera.updateProjectionMatrix()}if(O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y))O.map.setSize(s.x,s.y);let J=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();if(q.isPointLight!==!0)O.updateMatrices(q,M);let nt=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let yt=0;yt<J;yt++){let Z=O.getCamera(yt);if(q.isPointLight){let{camera:it,matrix:Tt}=O,Ct=q.distance||it.far;if(Ct!==it.far)it.far=Ct,it.updateProjectionMatrix();mr.setFromMatrixPosition(q.matrixWorld),it.position.copy(mr),fh.copy(it.position),fh.add(OS[yt]),it.up.copy(BS[yt]),it.lookAt(fh),it.updateMatrixWorld(),Tt.makeTranslation(-mr.x,-mr.y,-mr.z),Pp.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Pp,it.coordinateSystem,it.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,yt),t.clear();else{if(yt===0)t.setRenderTarget(O.map),t.clear();let it=O.getViewport(yt);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),F.viewport(a)}i=O.getFrustum(yt),v(_,M,Z,q,nt,this.type)}if(O.isPointLightShadow!==!0&&this.type===_s)y(O,M);O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(E,D,P)};function y(w,_){let M=e.update(x);if(d.defines.VSM_SAMPLES!==w.blurSamples)d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new en(s.x,s.y,{format:Oi,type:Pn});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(_,null,M,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(_,null,M,f,x,null)}function S(w,_,M,E){let D=null,P=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)D=P;else if(D=M.isPointLight===!0?l:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=D.uuid,X=_.uuid,I=c[F];if(I===void 0)I={},c[F]=I;let H=I[X];if(H===void 0)H=D.clone(),I[X]=H,_.addEventListener("dispose",A);D=H}if(D.visible=_.visible,D.wireframe=_.wireframe,E===_s)D.side=_.shadowSide!==null?_.shadowSide:_.side;else D.side=_.shadowSide!==null?_.shadowSide:u[_.side];if(D.alphaMap=_.alphaMap,D.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,D.map=_.map,D.clipShadows=_.clipShadows,D.clippingPlanes=_.clippingPlanes,D.clipIntersection=_.clipIntersection,D.displacementMap=_.displacementMap,D.displacementScale=_.displacementScale,D.displacementBias=_.displacementBias,D.wireframeLinewidth=_.wireframeLinewidth,D.linewidth=_.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let F=t.properties.get(D);F.light=M}return D}function v(w,_,M,E,D,P){if(w.visible===!1)return;if(w.layers.test(D)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&P===_s)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=e.update(w),H=w.material;if(Array.isArray(H)){let q=I.groups;for(let O=0,rt=q.length;O<rt;O++){let k=q[O],J=H[k.materialIndex];if(J&&J.visible){let nt=S(w,J,E,P);w.onBeforeShadow(t,w,_,M,I,nt,k),t.renderBufferDirect(M,null,I,nt,w,k),w.onAfterShadow(t,w,_,M,I,nt,k)}}}else if(H.visible){let q=S(w,H,E,P);w.onBeforeShadow(t,w,_,M,I,q,null),t.renderBufferDirect(M,null,I,q,w,null),w.onAfterShadow(t,w,_,M,I,q,null)}}}let X=w.children;for(let I=0,H=X.length;I<H;I++)v(X[I],_,M,E,D,P)}function A(w){w.target.removeEventListener("dispose",A);for(let M in c){let E=c[M],D=w.target.uuid;if(D in E)E[D].dispose(),delete E[D]}}}function GS(t,e){function n(){let L=!1,K=new pe,Y=null,at=new pe(0,0,0,0);return{setMask:function(lt){if(Y!==lt&&!L)t.colorMask(lt,lt,lt,lt),Y=lt},setLocked:function(lt){L=lt},setClear:function(lt,mt,zt,Dt,St){if(St===!0)lt*=Dt,mt*=Dt,zt*=Dt;if(K.set(lt,mt,zt,Dt),at.equals(K)===!1)t.clearColor(lt,mt,zt,Dt),at.copy(K)},reset:function(){L=!1,Y=null,at.set(-1,0,0,0)}}}function i(){let L=!1,K=!1,Y=null,at=null,lt=null;return{setReversed:function(mt){if(K!==mt){let zt=e.get("EXT_clip_control");if(mt)zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT);else zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);K=mt;let Dt=lt;lt=null,this.setClear(Dt)}},getReversed:function(){return K},setTest:function(mt){if(mt)xt(t.DEPTH_TEST);else ne(t.DEPTH_TEST)},setMask:function(mt){if(Y!==mt&&!L)t.depthMask(mt),Y=mt},setFunc:function(mt){if(K)mt=kd[mt];if(at!==mt){switch(mt){case hd:t.depthFunc(t.NEVER);break;case ud:t.depthFunc(t.ALWAYS);break;case dd:t.depthFunc(t.LESS);break;case pl:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case pd:t.depthFunc(t.GEQUAL);break;case md:t.depthFunc(t.GREATER);break;case gd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}at=mt}},setLocked:function(mt){L=mt},setClear:function(mt){if(lt!==mt){if(lt=mt,K)mt=1-mt;t.clearDepth(mt)}},reset:function(){L=!1,Y=null,at=null,lt=null,K=!1}}}function s(){let L=!1,K=null,Y=null,at=null,lt=null,mt=null,zt=null,Dt=null,St=null;return{setTest:function(Gt){if(!L)if(Gt)xt(t.STENCIL_TEST);else ne(t.STENCIL_TEST)},setMask:function(Gt){if(K!==Gt&&!L)t.stencilMask(Gt),K=Gt},setFunc:function(Gt,Kt,Mt){if(Y!==Gt||at!==Kt||lt!==Mt)t.stencilFunc(Gt,Kt,Mt),Y=Gt,at=Kt,lt=Mt},setOp:function(Gt,Kt,Mt){if(mt!==Gt||zt!==Kt||Dt!==Mt)t.stencilOp(Gt,Kt,Mt),mt=Gt,zt=Kt,Dt=Mt},setLocked:function(Gt){L=Gt},setClear:function(Gt){if(St!==Gt)t.clearStencil(Gt),St=Gt},reset:function(){L=!1,K=null,Y=null,at=null,lt=null,mt=null,zt=null,Dt=null,St=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,S=null,v=null,A=null,w=null,_=null,M=new At(0,0,0),E=0,D=!1,P=null,F=null,X=null,I=null,H=null,q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,rt=0,k=t.getParameter(t.VERSION);if(k.indexOf("WebGL")!==-1)rt=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=rt>=1;else if(k.indexOf("OpenGL ES")!==-1)rt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=rt>=2;let J=null,nt={},yt=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),it=new pe().fromArray(yt),Tt=new pe().fromArray(Z);function Ct(L,K,Y,at){let lt=new Uint8Array(4),mt=t.createTexture();t.bindTexture(L,mt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let zt=0;zt<Y;zt++)if(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)t.texImage3D(K,0,t.RGBA,1,1,at,0,t.RGBA,t.UNSIGNED_BYTE,lt);else t.texImage2D(K+zt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,lt);return mt}let Ft={};Ft[t.TEXTURE_2D]=Ct(t.TEXTURE_2D,t.TEXTURE_2D,1),Ft[t.TEXTURE_CUBE_MAP]=Ct(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[t.TEXTURE_2D_ARRAY]=Ct(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ft[t.TEXTURE_3D]=Ct(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(t.DEPTH_TEST),a.setFunc(pl),wt(!1),kt(hl),xt(t.CULL_FACE),ht(Ui);function xt(L){if(h[L]!==!0)t.enable(L),h[L]=!0}function ne(L){if(h[L]!==!1)t.disable(L),h[L]=!1}function Vt(L,K){if(d[L]!==K){if(t.bindFramebuffer(L,K),d[L]=K,L===t.DRAW_FRAMEBUFFER)d[t.FRAMEBUFFER]=K;if(L===t.FRAMEBUFFER)d[t.DRAW_FRAMEBUFFER]=K;return!0}return!1}function Bt(L,K){let Y=m,at=!1;if(L){if(Y=f.get(K),Y===void 0)Y=[],f.set(K,Y);let lt=L.textures;if(Y.length!==lt.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let mt=0,zt=lt.length;mt<zt;mt++)Y[mt]=t.COLOR_ATTACHMENT0+mt;Y.length=lt.length,at=!0}}else if(Y[0]!==t.BACK)Y[0]=t.BACK,at=!0;if(at)t.drawBuffers(Y)}function re(L){if(x!==L)return t.useProgram(L),x=L,!0;return!1}let j={[vs]:t.FUNC_ADD,[Xu]:t.FUNC_SUBTRACT,[qu]:t.FUNC_REVERSE_SUBTRACT};j[Yu]=t.MIN,j[Zu]=t.MAX;let ot={[Ju]:t.ZERO,[$u]:t.ONE,[Ku]:t.SRC_COLOR,[ju]:t.SRC_ALPHA,[rd]:t.SRC_ALPHA_SATURATE,[id]:t.DST_COLOR,[ed]:t.DST_ALPHA,[Qu]:t.ONE_MINUS_SRC_COLOR,[td]:t.ONE_MINUS_SRC_ALPHA,[sd]:t.ONE_MINUS_DST_COLOR,[nd]:t.ONE_MINUS_DST_ALPHA,[ad]:t.CONSTANT_COLOR,[od]:t.ONE_MINUS_CONSTANT_COLOR,[ld]:t.CONSTANT_ALPHA,[cd]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(L,K,Y,at,lt,mt,zt,Dt,St,Gt){if(L===Ui){if(g===!0)ne(t.BLEND),g=!1;return}if(g===!1)xt(t.BLEND),g=!0;if(L!==Vu){if(L!==p||Gt!==D){if(y!==vs||A!==vs)t.blendEquation(t.FUNC_ADD),y=vs,A=vs;if(Gt)switch(L){case Zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ul:t.blendFunc(t.ONE,t.ONE);break;case dl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fl:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ut("WebGLState: Invalid blending: ",L);break}else switch(L){case Zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ul:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dl:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",L);break}S=null,v=null,w=null,_=null,M.set(0,0,0),E=0,p=L,D=Gt}return}if(lt=lt||K,mt=mt||Y,zt=zt||at,K!==y||lt!==A)t.blendEquationSeparate(j[K],j[lt]),y=K,A=lt;if(Y!==S||at!==v||mt!==w||zt!==_)t.blendFuncSeparate(ot[Y],ot[at],ot[mt],ot[zt]),S=Y,v=at,w=mt,_=zt;if(Dt.equals(M)===!1||St!==E)t.blendColor(Dt.r,Dt.g,Dt.b,St),M.copy(Dt),E=St;p=L,D=!1}function Rt(L,K){L.side===Cn?ne(t.CULL_FACE):xt(t.CULL_FACE);let Y=L.side===tn;if(K)Y=!Y;wt(Y),L.blending===Zs&&L.transparent===!1?ht(Ui):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let at=L.stencilWrite;if(o.setTest(at),at)o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass);jt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function wt(L){if(P!==L){if(L)t.frontFace(t.CW);else t.frontFace(t.CCW);P=L}}function kt(L){if(L!==ku){if(xt(t.CULL_FACE),L!==F)if(L===hl)t.cullFace(t.BACK);else if(L===Hu)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else ne(t.CULL_FACE);F=L}function Ot(L){if(L!==X){if(O)t.lineWidth(L);X=L}}function jt(L,K,Y){if(L){if(xt(t.POLYGON_OFFSET_FILL),I!==K||H!==Y){if(I=K,H=Y,a.getReversed())K=-K,Y=-Y;t.polygonOffset(K,Y)}}else ne(t.POLYGON_OFFSET_FILL)}function te(L){if(L)xt(t.SCISSOR_TEST);else ne(t.SCISSOR_TEST)}function he(L){if(L===void 0)L=t.TEXTURE0+q-1;if(J!==L)t.activeTexture(L),J=L}function U(L,K,Y){if(Y===void 0)if(J===null)Y=t.TEXTURE0+q-1;else Y=J;let at=nt[Y];if(at===void 0)at={type:void 0,texture:void 0},nt[Y]=at;if(at.type!==L||at.texture!==K){if(J!==Y)t.activeTexture(Y),J=Y;t.bindTexture(L,K||Ft[L]),at.type=L,at.texture=K}}function Ee(){let L=nt[J];if(L!==void 0&&L.type!==void 0)t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0}function $t(){try{t.compressedTexImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function Me(){try{t.compressedTexImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function _t(){try{t.texSubImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function de(){try{t.texSubImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function Ht(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function qt(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function we(){try{t.texStorage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function R(){try{t.texStorage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function b(){try{t.texImage2D(...arguments)}catch(L){Ut("WebGLState:",L)}}function B(){try{t.texImage3D(...arguments)}catch(L){Ut("WebGLState:",L)}}function st(L){if(u[L]!==void 0)return u[L];else return t.getParameter(L)}function tt(L,K){if(u[L]!==K)t.pixelStorei(L,K),u[L]=K}function ct(L){if(it.equals(L)===!1)t.scissor(L.x,L.y,L.z,L.w),it.copy(L)}function ft(L){if(Tt.equals(L)===!1)t.viewport(L.x,L.y,L.z,L.w),Tt.copy(L)}function V(L,K){let Y=c.get(K);if(Y===void 0)Y=new WeakMap,c.set(K,Y);let at=Y.get(L);if(at===void 0)at=t.getUniformBlockIndex(K,L.name),t.uniformBlockBinding(K,at,at),Y.set(L,at)}function Q(L,K,Y){let lt=c.get(K).get(L);if(l[lt]!==Y)t.bindBufferBase(t.UNIFORM_BUFFER,lt,Y),l[lt]=Y}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,nt={},d={},l={},f=new WeakMap,m=[],x=null,g=!1,p=null,y=null,S=null,v=null,A=null,w=null,_=null,M=new At(0,0,0),E=0,D=!1,P=null,F=null,X=null,I=null,H=null,it.set(0,0,t.canvas.width,t.canvas.height),Tt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:ne,bindFramebuffer:Vt,drawBuffers:Bt,useProgram:re,setBlending:ht,setMaterial:Rt,setFlipSided:wt,setCullFace:kt,setLineWidth:Ot,setPolygonOffset:jt,setScissorTest:te,activeTexture:he,bindTexture:U,unbindTexture:Ee,compressedTexImage2D:$t,compressedTexImage3D:Me,texImage2D:b,texImage3D:B,pixelStorei:tt,getParameter:st,updateUBOMapping:V,uniformBlockBinding:Q,texStorage2D:we,texStorage3D:R,texSubImage2D:_t,texSubImage3D:de,compressedTexSubImage2D:Ht,compressedTexSubImage3D:qt,scissor:ct,viewport:ft,reset:ut}}function kS(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry((R)=>m.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function p(R,b){return g?new OffscreenCanvas(R,b):ds("canvas")}function y(R,b,B){let st=1,tt=we(R);if(tt.width>B||tt.height>B)st=B/Math.max(tt.width,tt.height);if(st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ct=Math.floor(st*tt.width),ft=Math.floor(st*tt.height);if(d===void 0)d=p(ct,ft);let V=b?p(ct,ft):d;return V.width=ct,V.height=ft,V.getContext("2d").drawImage(R,0,0,ct,ft),gt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+ft+")."),V}else{if("data"in R)gt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+").");return R}return R}function S(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function A(R){if(R.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(R.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function w(R,b,B,st,tt,ct=!1){if(R!==null){if(t[R]!==void 0)return t[R];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ft;if(st){if(ft=e.get("EXT_texture_norm16"),!ft)gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let V=b;if(b===t.RED){if(B===t.FLOAT)V=t.R32F;if(B===t.HALF_FLOAT)V=t.R16F;if(B===t.UNSIGNED_BYTE)V=t.R8;if(B===t.UNSIGNED_SHORT&&ft)V=ft.R16_EXT;if(B===t.SHORT&&ft)V=ft.R16_SNORM_EXT}if(b===t.RED_INTEGER){if(B===t.UNSIGNED_BYTE)V=t.R8UI;if(B===t.UNSIGNED_SHORT)V=t.R16UI;if(B===t.UNSIGNED_INT)V=t.R32UI;if(B===t.BYTE)V=t.R8I;if(B===t.SHORT)V=t.R16I;if(B===t.INT)V=t.R32I}if(b===t.RG){if(B===t.FLOAT)V=t.RG32F;if(B===t.HALF_FLOAT)V=t.RG16F;if(B===t.UNSIGNED_BYTE)V=t.RG8;if(B===t.UNSIGNED_SHORT&&ft)V=ft.RG16_EXT;if(B===t.SHORT&&ft)V=ft.RG16_SNORM_EXT}if(b===t.RG_INTEGER){if(B===t.UNSIGNED_BYTE)V=t.RG8UI;if(B===t.UNSIGNED_SHORT)V=t.RG16UI;if(B===t.UNSIGNED_INT)V=t.RG32UI;if(B===t.BYTE)V=t.RG8I;if(B===t.SHORT)V=t.RG16I;if(B===t.INT)V=t.RG32I}if(b===t.RGB_INTEGER){if(B===t.UNSIGNED_BYTE)V=t.RGB8UI;if(B===t.UNSIGNED_SHORT)V=t.RGB16UI;if(B===t.UNSIGNED_INT)V=t.RGB32UI;if(B===t.BYTE)V=t.RGB8I;if(B===t.SHORT)V=t.RGB16I;if(B===t.INT)V=t.RGB32I}if(b===t.RGBA_INTEGER){if(B===t.UNSIGNED_BYTE)V=t.RGBA8UI;if(B===t.UNSIGNED_SHORT)V=t.RGBA16UI;if(B===t.UNSIGNED_INT)V=t.RGBA32UI;if(B===t.BYTE)V=t.RGBA8I;if(B===t.SHORT)V=t.RGBA16I;if(B===t.INT)V=t.RGBA32I}if(b===t.RGB){if(B===t.UNSIGNED_SHORT&&ft)V=ft.RGB16_EXT;if(B===t.SHORT&&ft)V=ft.RGB16_SNORM_EXT;if(B===t.UNSIGNED_INT_5_9_9_9_REV)V=t.RGB9_E5;if(B===t.UNSIGNED_INT_10F_11F_11F_REV)V=t.R11F_G11F_B10F}if(b===t.RGBA){let Q=ct?lc:ee.getTransfer(tt);if(B===t.FLOAT)V=t.RGBA32F;if(B===t.HALF_FLOAT)V=t.RGBA16F;if(B===t.UNSIGNED_BYTE)V=Q===ge?t.SRGB8_ALPHA8:t.RGBA8;if(B===t.UNSIGNED_SHORT&&ft)V=ft.RGBA16_EXT;if(B===t.SHORT&&ft)V=ft.RGBA16_SNORM_EXT;if(B===t.UNSIGNED_SHORT_4_4_4_4)V=t.RGBA4;if(B===t.UNSIGNED_SHORT_5_5_5_1)V=t.RGB5_A1}if(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)e.get("EXT_color_buffer_float");return V}function _(R,b){let B;if(R){if(b===null||b===ci||b===Fi)B=t.DEPTH24_STENCIL8;else if(b===Zn)B=t.DEPTH32F_STENCIL8;else if(b===Ks)B=t.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(b===null||b===ci||b===Fi)B=t.DEPTH_COMPONENT24;else if(b===Zn)B=t.DEPTH_COMPONENT32F;else if(b===Ks)B=t.DEPTH_COMPONENT16;return B}function M(R,b){if(S(R)===!0||R.isFramebufferTexture&&R.minFilter!==oi&&R.minFilter!==ln)return Math.log2(Math.max(b.width,b.height))+1;else if(R.mipmaps.length>0)return R.mipmaps.length;else if(R.isCompressedTexture&&Array.isArray(R.image))return b.mipmaps.length;else return 1}function E(R){let b=new WeakRef(R);i.get(R).__ref=b,m.add(b),x.register(R,b,b)}function D(R){let b=i.get(R).__ref;if(b===void 0)return;m.delete(b),x.unregister(b)}function P(R){X(R.target)}function F(R){I(R.target)}function X(R){if(R.removeEventListener("dispose",P),D(R),q(R),R.isVideoTexture)h.delete(R);if(R.isHTMLTexture)u.delete(R)}function I(R){R.removeEventListener("dispose",F),D(R),rt(R)}function H(){for(let R of m){let b=R.deref();if(b===void 0)continue;if(b.isRenderTarget===!0)I(b);else X(b)}m.clear(),u.clear()}function q(R){let b=i.get(R);if(b.__webglInit===void 0)return;let B=R.source,st=f.get(B);if(st){let tt=st[b.__cacheKey];if(tt.usedTimes--,tt.usedTimes===0)O(R);if(Object.keys(st).length===0)f.delete(B)}i.remove(R)}function O(R){let b=i.get(R);t.deleteTexture(b.__webglTexture);let B=R.source,st=f.get(B);delete st[b.__cacheKey],a.memory.textures--}function rt(R){let b=i.get(R);if(b.__depthDisposeCallback)b.__depthDisposeCallback();let B=R.depthTexture;if(B&&B.renderTarget===R)X(B);if(R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ct=0;ct<b.__webglFramebuffer[tt].length;ct++)t.deleteFramebuffer(b.__webglFramebuffer[tt][ct]);else t.deleteFramebuffer(b.__webglFramebuffer[tt]);if(b.__webglDepthbuffer)t.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)t.deleteFramebuffer(b.__webglFramebuffer[tt]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer)t.deleteRenderbuffer(b.__webglDepthbuffer);if(b.__webglMultisampledFramebuffer)t.deleteFramebuffer(b.__webglMultisampledFramebuffer);if(b.__webglColorRenderbuffer){for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)if(b.__webglColorRenderbuffer[tt])t.deleteRenderbuffer(b.__webglColorRenderbuffer[tt])}if(b.__webglDepthRenderbuffer)t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=R.textures;for(let tt=0,ct=st.length;tt<ct;tt++){let ft=i.get(st[tt]);if(ft.__webglTexture)t.deleteTexture(ft.__webglTexture),a.memory.textures--;i.remove(st[tt])}i.remove(R)}let k=0;function J(){k=0}function nt(){return k}function yt(R){k=R}function Z(){let R=k;if(R>=s.maxTextures)gt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures);return k+=1,R}function it(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Tt(R,b){let B=i.get(R);if(R.isVideoTexture)Ht(R);if(R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let st=R.image;if(st===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(B,R,b);return}}else if(R.isExternalTexture)B.__webglTexture=R.sourceTexture?R.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function Ct(R,b){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Rt(B,R,b);return}else if(R.isExternalTexture)B.__webglTexture=R.sourceTexture?R.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function Ft(R,b){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Rt(B,R,b);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function xt(R,b){let B=i.get(R);if(R.version>0&&B.__version!==R.version){wt(B,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}let ne={[yd]:t.REPEAT,[_a]:t.CLAMP_TO_EDGE,[Sd]:t.MIRRORED_REPEAT},Vt={[oi]:t.NEAREST,[Md]:t.NEAREST_MIPMAP_NEAREST,[$s]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[xa]:t.LINEAR_MIPMAP_NEAREST,[li]:t.LINEAR_MIPMAP_LINEAR},Bt={[Ld]:t.NEVER,[uc]:t.ALWAYS,[Nd]:t.LESS,[cc]:t.LEQUAL,[Dd]:t.EQUAL,[hc]:t.GEQUAL,[Ud]:t.GREATER,[Fd]:t.NOTEQUAL};function re(R,b){if(b.type===Zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ln||b.magFilter===xa||b.magFilter===$s||b.magFilter===li||b.minFilter===ln||b.minFilter===xa||b.minFilter===$s||b.minFilter===li))gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(R,t.TEXTURE_WRAP_S,ne[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ne[b.wrapT]),R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)t.texParameteri(R,t.TEXTURE_WRAP_R,ne[b.wrapR]);if(t.texParameteri(R,t.TEXTURE_MAG_FILTER,Vt[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Vt[b.minFilter]),b.compareFunction)t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Bt[b.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===oi)return;if(b.minFilter!==$s&&b.minFilter!==li)return;if(b.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function j(R,b){let B=!1;if(R.__webglInit===void 0)R.__webglInit=!0,b.addEventListener("dispose",P),E(b);let st=b.source,tt=f.get(st);if(tt===void 0)tt={},f.set(st,tt);let ct=it(b);if(ct!==R.__cacheKey){if(tt[ct]===void 0)tt[ct]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0;tt[ct].usedTimes++;let ft=tt[R.__cacheKey];if(ft!==void 0){if(tt[R.__cacheKey].usedTimes--,ft.usedTimes===0)O(b)}R.__cacheKey=ct,R.__webglTexture=tt[ct].texture}return B}function ot(R,b,B){return Math.floor(Math.floor(R/B)/b)}function ht(R,b,B,st){let ct=R.updateRanges;if(ct.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,B,st,b.data);else{ct.sort((L,K)=>L.start-K.start);let ft=0;for(let L=1;L<ct.length;L++){let K=ct[ft],Y=ct[L],at=K.start+K.count,lt=ot(Y.start,b.width,4),mt=ot(K.start,b.width,4);if(Y.start<=at+1&&lt===mt&&ot(Y.start+Y.count-1,b.width,4)===lt)K.count=Math.max(K.count,Y.start+Y.count-K.start);else++ft,ct[ft]=Y}ct.length=ft+1;let V=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ut=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let L=0,K=ct.length;L<K;L++){let Y=ct[L],at=Math.floor(Y.start/4),lt=Math.ceil(Y.count/4),mt=at%b.width,zt=Math.floor(at/b.width),Dt=lt,St=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(t.UNPACK_SKIP_ROWS,zt),n.texSubImage2D(t.TEXTURE_2D,0,mt,zt,Dt,1,B,st,b.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,V),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ut)}}function Rt(R,b,B){let st=t.TEXTURE_2D;if(b.isDataArrayTexture||b.isCompressedArrayTexture)st=t.TEXTURE_2D_ARRAY;if(b.isData3DTexture)st=t.TEXTURE_3D;let tt=j(R,b),ct=b.source;n.bindTexture(st,R.__webglTexture,t.TEXTURE0+B);let ft=i.get(ct);if(ct.version!==ft.__version||tt===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let St=ee.getPrimaries(ee.workingColorSpace),Gt=b.colorSpace===Bi?null:ee.getPrimaries(b.colorSpace),Kt=b.colorSpace===Bi||St===Gt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=y(b.image,!1,s.maxTextureSize);Q=qt(b,Q);let ut=r.convert(b.format,b.colorSpace),L=r.convert(b.type),K=w(b.internalFormat,ut,L,b.normalized,b.colorSpace,b.isVideoTexture);re(st,b);let Y,at=b.mipmaps,lt=b.isVideoTexture!==!0,mt=ft.__version===void 0||tt===!0,zt=ct.dataReady,Dt=M(b,Q);if(b.isDepthTexture){if(K=_(b.format===hi,b.type),mt)if(lt)n.texStorage2D(t.TEXTURE_2D,1,K,Q.width,Q.height);else n.texImage2D(t.TEXTURE_2D,0,K,Q.width,Q.height,0,ut,L,null)}else if(b.isDataTexture)if(at.length>0){if(lt&&mt)n.texStorage2D(t.TEXTURE_2D,Dt,K,at[0].width,at[0].height);for(let St=0,Gt=at.length;St<Gt;St++)if(Y=at[St],lt){if(zt)n.texSubImage2D(t.TEXTURE_2D,St,0,0,Y.width,Y.height,ut,L,Y.data)}else n.texImage2D(t.TEXTURE_2D,St,K,Y.width,Y.height,0,ut,L,Y.data);b.generateMipmaps=!1}else if(lt){if(mt)n.texStorage2D(t.TEXTURE_2D,Dt,K,Q.width,Q.height);if(zt)ht(b,Q,ut,L)}else n.texImage2D(t.TEXTURE_2D,0,K,Q.width,Q.height,0,ut,L,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){if(lt&&mt)n.texStorage3D(t.TEXTURE_2D_ARRAY,Dt,K,at[0].width,at[0].height,Q.depth);for(let St=0,Gt=at.length;St<Gt;St++)if(Y=at[St],b.format!==Jn)if(ut!==null)if(lt){if(zt)if(b.layerUpdates.size>0){let Kt=fo(Y.width,Y.height,b.format,b.type);for(let Mt of b.layerUpdates){let fe=Y.data.subarray(Mt*Kt/Y.data.BYTES_PER_ELEMENT,(Mt+1)*Kt/Y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,St,0,0,Mt,Y.width,Y.height,1,ut,fe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,St,0,0,0,Y.width,Y.height,Q.depth,ut,Y.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,St,K,Y.width,Y.height,Q.depth,0,Y.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(lt){if(zt)n.texSubImage3D(t.TEXTURE_2D_ARRAY,St,0,0,0,Y.width,Y.height,Q.depth,ut,L,Y.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,St,K,Y.width,Y.height,Q.depth,0,ut,L,Y.data);if(b.layerUpdates.size>0)b.clearLayerUpdates()}else{if(lt&&mt)n.texStorage2D(t.TEXTURE_2D,Dt,K,at[0].width,at[0].height);for(let St=0,Gt=at.length;St<Gt;St++)if(Y=at[St],b.format!==Jn)if(ut!==null)if(lt){if(zt)n.compressedTexSubImage2D(t.TEXTURE_2D,St,0,0,Y.width,Y.height,ut,Y.data)}else n.compressedTexImage2D(t.TEXTURE_2D,St,K,Y.width,Y.height,0,Y.data);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(lt){if(zt)n.texSubImage2D(t.TEXTURE_2D,St,0,0,Y.width,Y.height,ut,L,Y.data)}else n.texImage2D(t.TEXTURE_2D,St,K,Y.width,Y.height,0,ut,L,Y.data)}else if(b.isDataArrayTexture)if(lt){if(mt)n.texStorage3D(t.TEXTURE_2D_ARRAY,Dt,K,Q.width,Q.height,Q.depth);if(zt)if(b.layerUpdates.size>0){let St=fo(Q.width,Q.height,b.format,b.type);for(let Gt of b.layerUpdates){let Kt=Q.data.subarray(Gt*St/Q.data.BYTES_PER_ELEMENT,(Gt+1)*St/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Gt,Q.width,Q.height,1,ut,L,Kt)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,L,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,K,Q.width,Q.height,Q.depth,0,ut,L,Q.data);else if(b.isData3DTexture)if(lt){if(mt)n.texStorage3D(t.TEXTURE_3D,Dt,K,Q.width,Q.height,Q.depth);if(zt)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,L,Q.data)}else n.texImage3D(t.TEXTURE_3D,0,K,Q.width,Q.height,Q.depth,0,ut,L,Q.data);else if(b.isFramebufferTexture){if(mt)if(lt)n.texStorage2D(t.TEXTURE_2D,Dt,K,Q.width,Q.height);else{let St=Q.width,Gt=Q.height;for(let Kt=0;Kt<Dt;Kt++)n.texImage2D(t.TEXTURE_2D,Kt,K,St,Gt,0,ut,L,null),St>>=1,Gt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){let St=t.canvas;if(!St.hasAttribute("layoutsubtree"))St.setAttribute("layoutsubtree","true");if(Q.parentNode!==St){St.appendChild(Q),u.add(b),St.onpaint=(Gt)=>{let Kt=Gt.changedElements;for(let Mt of u)if(Kt.includes(Mt.image))Mt.needsUpdate=!0},St.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{let{RGBA:Kt,RGBA:Mt,UNSIGNED_BYTE:fe}=t;t.texElementImage2D(t.TEXTURE_2D,0,Kt,Mt,fe,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(at.length>0){if(lt&&mt){let St=we(at[0]);n.texStorage2D(t.TEXTURE_2D,Dt,K,St.width,St.height)}for(let St=0,Gt=at.length;St<Gt;St++)if(Y=at[St],lt){if(zt)n.texSubImage2D(t.TEXTURE_2D,St,0,0,ut,L,Y)}else n.texImage2D(t.TEXTURE_2D,St,K,ut,L,Y);b.generateMipmaps=!1}else if(lt){if(mt){let St=we(Q);n.texStorage2D(t.TEXTURE_2D,Dt,K,St.width,St.height)}if(zt)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ut,L,Q)}else n.texImage2D(t.TEXTURE_2D,0,K,ut,L,Q);if(S(b)&&b.mipmapsAutoUpdate===!0)v(st);if(ft.__version=ct.version,b.onUpdate)b.onUpdate(b)}R.__version=b.version}function wt(R,b,B){if(b.image.length!==6)return;let st=j(R,b),tt=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);let ct=i.get(tt);if(tt.version!==ct.__version||st===!0){n.activeTexture(t.TEXTURE0+B);let ft=ee.getPrimaries(ee.workingColorSpace),V=b.colorSpace===Bi?null:ee.getPrimaries(b.colorSpace),Q=b.colorSpace===Bi||ft===V?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,K=[];for(let Mt=0;Mt<6;Mt++){if(!ut&&!L)K[Mt]=y(b.image[Mt],!0,s.maxCubemapSize);else K[Mt]=L?b.image[Mt].image:b.image[Mt];K[Mt]=qt(b,K[Mt])}let Y=K[0],at=r.convert(b.format,b.colorSpace),lt=r.convert(b.type),mt=w(b.internalFormat,at,lt,b.normalized,b.colorSpace),zt=b.isVideoTexture!==!0,Dt=ct.__version===void 0||st===!0,St=tt.dataReady,Gt=M(b,Y);re(t.TEXTURE_CUBE_MAP,b);let Kt;if(b.isDepthTexture){if(mt=_(b.format===hi,b.type),Dt)if(zt)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,mt,Y.width,Y.height);else for(let Mt=0;Mt<6;Mt++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,mt,Y.width,Y.height,0,at,lt,null)}else if(ut){if(zt&&Dt)n.texStorage2D(t.TEXTURE_CUBE_MAP,Gt,mt,Y.width,Y.height);for(let Mt=0;Mt<6;Mt++){Kt=K[Mt].mipmaps;for(let fe=0;fe<Kt.length;fe++){let Pe=Kt[fe];if(b.format!==Jn)if(at!==null)if(zt){if(St)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,0,0,Pe.width,Pe.height,at,Pe.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,mt,Pe.width,Pe.height,0,Pe.data);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(zt){if(St)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,0,0,Pe.width,Pe.height,at,lt,Pe.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe,mt,Pe.width,Pe.height,0,at,lt,Pe.data)}}}else{if(Kt=b.mipmaps,zt&&Dt){if(Kt.length>0)Gt++;let Mt=we(K[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Gt,mt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(L){if(zt){if(St)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,K[Mt].width,K[Mt].height,at,lt,K[Mt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,mt,K[Mt].width,K[Mt].height,0,at,lt,K[Mt].data);for(let fe=0;fe<Kt.length;fe++){let Un=Kt[fe].image[Mt].image;if(zt){if(St)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,0,0,Un.width,Un.height,at,lt,Un.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,mt,Un.width,Un.height,0,at,lt,Un.data)}}else{if(zt){if(St)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,at,lt,K[Mt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,mt,at,lt,K[Mt]);for(let fe=0;fe<Kt.length;fe++){let Pe=Kt[fe];if(zt){if(St)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,0,0,at,lt,Pe.image[Mt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,fe+1,mt,at,lt,Pe.image[Mt])}}}if(S(b)&&b.mipmapsAutoUpdate===!0)v(t.TEXTURE_CUBE_MAP);if(ct.__version=tt.version,b.onUpdate)b.onUpdate(b)}R.__version=b.version}function kt(R,b,B,st,tt,ct){let ft=r.convert(B.format,B.colorSpace),V=r.convert(B.type),Q=w(B.internalFormat,ft,V,B.normalized,B.colorSpace),ut=i.get(b),L=i.get(B);if(L.__renderTarget=b,!ut.__hasExternalTextures){let K=Math.max(1,b.width>>ct),Y=Math.max(1,b.height>>ct);if(tt===t.TEXTURE_3D||tt===t.TEXTURE_2D_ARRAY)n.texImage3D(tt,ct,Q,K,Y,b.depth,0,ft,V,null);else n.texImage2D(tt,ct,Q,K,Y,0,ft,V,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,R),de(b))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,st,tt,L.__webglTexture,0,_t(b));else if(tt===t.TEXTURE_2D||tt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,st,tt,L.__webglTexture,ct);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ot(R,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){let st=b.depthTexture,tt=st&&st.isDepthTexture?st.type:null,ct=_(b.stencilBuffer,tt),ft=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(de(b))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(b),ct,b.width,b.height);else if(B)t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(b),ct,b.width,b.height);else t.renderbufferStorage(t.RENDERBUFFER,ct,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ft,t.RENDERBUFFER,R)}else{let st=b.textures;for(let tt=0;tt<st.length;tt++){let ct=st[tt],ft=r.convert(ct.format,ct.colorSpace),V=r.convert(ct.type),Q=w(ct.internalFormat,ft,V,ct.normalized,ct.colorSpace);if(de(b))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(b),Q,b.width,b.height);else if(B)t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(b),Q,b.width,b.height);else t.renderbufferStorage(t.RENDERBUFFER,Q,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function jt(R,b,B){let st=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(b.depthTexture);tt.__renderTarget=b;let ct=st?b.depthTexture.image[0]:b.depthTexture.image;if(!tt.__webglTexture||ct.width!==b.width||ct.height!==b.height)ct.width=b.width,ct.height=b.height,b.depthTexture.needsUpdate=!0;if(st)xt(b.depthTexture,0);else Tt(b.depthTexture,0);let ft=tt.__webglTexture,V=_t(b),Q=st?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ut=b.depthTexture.format===hi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ss)if(de(b))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ut,Q,ft,0,V);else t.framebufferTexture2D(t.FRAMEBUFFER,ut,Q,ft,0);else if(b.depthTexture.format===hi)if(de(b))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ut,Q,ft,0,V);else t.framebufferTexture2D(t.FRAMEBUFFER,ut,Q,ft,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(R){let b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let st=R.depthTexture;if(b.__depthDisposeCallback)b.__depthDisposeCallback();if(st){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",tt)};st.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=st}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let st=0;st<6;st++)jt(b.__webglFramebuffer[st],R,st);else if(R.texture.mipmaps.length>0)jt(b.__webglFramebuffer[0],R,0);else jt(b.__webglFramebuffer,R,0);else if(B){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=t.createRenderbuffer(),Ot(b.__webglDepthbuffer[st],R,!1);else{let tt=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[st];t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ct)}}else{if(R.texture.mipmaps.length>0)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer);if(b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Ot(b.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ct),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ct)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,b,B){let st=i.get(R);if(b!==void 0)kt(st.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(B!==void 0)te(R)}function U(R){let b=R.texture,B=i.get(R),st=i.get(b);R.addEventListener("dispose",F),E(R);let tt=R.textures,ct=R.isWebGLCubeRenderTarget===!0,ft=tt.length>1;if(!ft){if(st.__webglTexture===void 0)st.__webglTexture=t.createTexture();st.__version=b.version,a.memory.textures++}if(ct){B.__webglFramebuffer=[];for(let V=0;V<6;V++)if(b.mipmaps.length>0){B.__webglFramebuffer[V]=[];for(let Q=0;Q<b.mipmaps.length;Q++)B.__webglFramebuffer[V][Q]=t.createFramebuffer()}else B.__webglFramebuffer[V]=t.createFramebuffer()}else{if(b.mipmaps.length>0){B.__webglFramebuffer=[];for(let V=0;V<b.mipmaps.length;V++)B.__webglFramebuffer[V]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ft)for(let V=0,Q=tt.length;V<Q;V++){let ut=i.get(tt[V]);if(ut.__webglTexture===void 0)ut.__webglTexture=t.createTexture(),a.memory.textures++}if(R.samples>0&&de(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let V=0;V<tt.length;V++){let Q=tt[V];B.__webglColorRenderbuffer[V]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[V]);let ut=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),K=w(Q.internalFormat,ut,L,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),Y=_t(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,K,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.RENDERBUFFER,B.__webglColorRenderbuffer[V])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer)B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ot(B.__webglDepthRenderbuffer,R,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ct){n.bindTexture(t.TEXTURE_CUBE_MAP,st.__webglTexture),re(t.TEXTURE_CUBE_MAP,b);for(let V=0;V<6;V++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)kt(B.__webglFramebuffer[V][Q],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q);else kt(B.__webglFramebuffer[V],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);if(S(b))v(t.TEXTURE_CUBE_MAP);else if(b.mipmaps.length>0)t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1);n.unbindTexture()}else if(ft){for(let V=0,Q=tt.length;V<Q;V++){let ut=tt[V],L=i.get(ut),K=t.TEXTURE_2D;if(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)K=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(K,L.__webglTexture),re(K,ut),kt(B.__webglFramebuffer,R,ut,t.COLOR_ATTACHMENT0+V,K,0),S(ut))v(K)}n.unbindTexture()}else{let V=t.TEXTURE_2D;if(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)V=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(V,st.__webglTexture),re(V,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)kt(B.__webglFramebuffer[Q],R,b,t.COLOR_ATTACHMENT0,V,Q);else kt(B.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,V,0);if(S(b))v(V);else if(b.mipmaps.length>0)t.texParameteri(V,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1);n.unbindTexture()}if(R.depthBuffer)te(R)}function Ee(R){let b=R.textures;for(let B=0,st=b.length;B<st;B++){let tt=b[B];if(S(tt)&&tt.mipmapsAutoUpdate===!0){let ct=A(R),ft=i.get(tt).__webglTexture;n.bindTexture(ct,ft),v(ct),n.unbindTexture()}}}let $t=[];function Me(R){if(R.samples>0){if(de(R)===!1){let{textures:b,width:B,height:st}=R,tt=t.COLOR_BUFFER_BIT,ct=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ft=i.get(R),V=b.length>1;if(V)for(let ut=0;ut<b.length;ut++)n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.TEXTURE_2D,null,0);if(n.bindFramebuffer(t.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(R.resolveDepthBuffer){if(R.depthBuffer)tt|=t.DEPTH_BUFFER_BIT;if(R.stencilBuffer&&R.resolveStencilBuffer)tt|=t.STENCIL_BUFFER_BIT}if(V){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);let L=i.get(b[ut]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,L,0)}if(t.blitFramebuffer(0,0,B,st,0,0,B,st,tt,t.NEAREST),l===!0){if($t.length=0,$t.push(t.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1)$t.push(ct);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$t)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),V)for(let ut=0;ut<b.length;ut++){n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.RENDERBUFFER,ft.__webglColorRenderbuffer[ut]);let L=i.get(b[ut]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ut,t.TEXTURE_2D,L,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function de(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(R){let b=a.render.frame;if(h.get(R)!==b)h.set(R,b),R.update()}function qt(R,b){let{colorSpace:B,format:st,type:tt}=R;if(R.isCompressedTexture===!0||R.isVideoTexture===!0)return b;if(B!==oc&&B!==Bi)if(ee.getTransfer(B)===ge){if(st!==Jn||tt!==Sn)gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ut("WebGLTextures: Unsupported texture color space:",B);return b}function we(R){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement)c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height;else if(typeof VideoFrame<"u"&&R instanceof VideoFrame)c.width=R.displayWidth,c.height=R.displayHeight;else c.width=R.width,c.height=R.height;return c}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.getTextureUnits=nt,this.setTextureUnits=yt,this.setTexture2D=Tt,this.setTexture2DArray=Ct,this.setTexture3D=Ft,this.setTextureCube=xt,this.rebindTextures=he,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=de,this.dispose=H}function HS(t,e){function n(i,s=Bi){let r,a=ee.getTransfer(s);if(i===Sn)return t.UNSIGNED_BYTE;if(i===bl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ad)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ed)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===bd)return t.BYTE;if(i===Td)return t.SHORT;if(i===Ks)return t.UNSIGNED_SHORT;if(i===Ml)return t.INT;if(i===ci)return t.UNSIGNED_INT;if(i===Zn)return t.FLOAT;if(i===Pn)return t.HALF_FLOAT;if(i===wd)return t.ALPHA;if(i===Rd)return t.RGB;if(i===Jn)return t.RGBA;if(i===Ss)return t.DEPTH_COMPONENT;if(i===hi)return t.DEPTH_STENCIL;if(i===Cd)return t.RED;if(i===Al)return t.RED_INTEGER;if(i===Oi)return t.RG;if(i===El)return t.RG_INTEGER;if(i===wl)return t.RGBA_INTEGER;if(i===va||i===ya||i===Sa||i===Ma)if(a===ge)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Cl||i===Il||i===Pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Nl||i===Dl||i===Ul||i===Fl||i===ba||i===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===Nl)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return r.COMPRESSED_R11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ba)return r.COMPRESSED_RG11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bl||i===zl||i===Gl||i===kl||i===Hl||i===Wl||i===Vl||i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===$l||i===Kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===jl||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ec||i===nc||i===Ta||i===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Fi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var WS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Oa(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Ln({vertexShader:WS,fragmentShader:VS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Ts(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zp extends cn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,f=null,m=typeof XRWebGLBinding<"u",x=new Yp,g={},p=e.getContextAttributes(),y=null,S=null,v=[],A=[],w=new et,_=null,M=null,E=new Oe;E.viewport=new pe;let D=new Oe;D.viewport=new pe;let P=[E,D],F=new ih,X=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=v[Z];if(it===void 0)it=new er,v[Z]=it;return it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=v[Z];if(it===void 0)it=new er,v[Z]=it;return it.getGripSpace()},this.getHand=function(Z){let it=v[Z];if(it===void 0)it=new er,v[Z]=it;return it.getHandSpace()};function H(Z){let it=A.indexOf(Z.inputSource);if(it===-1)return;let Tt=v[it];if(Tt!==void 0)Tt.update(Z.inputSource,Z.frame,l||r),Tt.dispatchEvent({type:Z.type,data:Z.inputSource})}function q(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",O);for(let Z=0;Z<v.length;Z++){let it=A[Z];if(it===null)continue;A[Z]=null,v[Z].disconnect(it)}X=null,I=null,x.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(y),d=null,u=null,h=null,i=null,S=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(w.width,w.height,!1),M!==null){let Z=M.camera;Z.fov=M.fov,Z.zoom=M.zoom,Z.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(s=Z,n.isPresenting===!0)gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(a=Z,n.isPresenting===!0)gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){if(h===null&&m)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",q),i.addEventListener("inputsourceschange",O),p.xrCompatible!==!0)await e.makeXRCompatible();if(_=t.getPixelRatio(),t.getSize(w),!(m&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Tt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new en(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt=null,Ct=null,Ft=null;if(p.depth)Ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=p.stencil?hi:Ss,Ct=p.stencil?Fi:ci;let xt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(xt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new en(u.textureWidth,u.textureHeight,{format:Jn,type:Sn,depthTexture:new di(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(Z){for(let it=0;it<Z.removed.length;it++){let Tt=Z.removed[it],Ct=A.indexOf(Tt);if(Ct>=0)A[Ct]=null,v[Ct].disconnect(Tt)}for(let it=0;it<Z.added.length;it++){let Tt=Z.added[it],Ct=A.indexOf(Tt);if(Ct===-1){for(let xt=0;xt<v.length;xt++)if(xt>=A.length){A.push(Tt),Ct=xt;break}else if(A[xt]===null){A[xt]=Tt,Ct=xt;break}if(Ct===-1)break}let Ft=v[Ct];if(Ft)Ft.connect(Tt)}}function rt(Z,it){if(it===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let{near:it,far:Tt}=Z;if(x.texture!==null){if(x.depthNear>0)it=x.depthNear;if(x.depthFar>0)Tt=x.depthFar}if(F.near=D.near=E.near=it,F.far=D.far=E.far=Tt,X!==F.near||I!==F.far)i.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,I=F.far;F.layers.mask=Z.layers.mask|6,E.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let Ct=Z.parent,Ft=F.cameras;rt(F,Ct);for(let xt=0;xt<Ft.length;xt++)rt(Ft[xt],Ct);if(F.projectionMatrix.copy(E.projectionMatrix),F.projectionMatrixInverse.copy(E.projectionMatrixInverse),M===null&&Z.isPerspectiveCamera)M={camera:Z,fov:Z.fov,zoom:Z.zoom};k(Z,F,Ct)};function k(Z,it,Tt){if(Tt===null)Z.matrix.copy(it.matrixWorld);else Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=Ni*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(u===null&&d===null)return;return o},this.setFoveation=function(Z){if(o=Z,u!==null)u.fixedFoveation=Z;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=Z},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(Z){return g[Z]};let J=null;function nt(Z,it){if(c=it.getViewerPose(l||r),f=it,c!==null){let Tt=c.views;if(d!==null)t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S);let Ct=!1;if(Tt.length!==F.cameras.length)F.cameras.length=0,Ct=!0;for(let Vt=0;Vt<Tt.length;Vt++){let Bt=Tt[Vt],re=null;if(d!==null)re=d.getViewport(Bt);else{let ot=h.getViewSubImage(u,Bt);if(re=ot.viewport,Vt===0)t.setRenderTargetTextures(S,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(S)}let j=P[Vt];if(j===void 0)j=new Oe,j.layers.enable(Vt),j.viewport=new pe,P[Vt]=j;if(j.matrix.fromArray(Bt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Bt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(re.x,re.y,re.width,re.height),Vt===0)F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(Ct===!0)F.cameras.push(j)}let Ft=i.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){h=n.getBinding();let Vt=h.getDepthInformation(Tt[0]);if(Vt&&Vt.isValid&&Vt.texture)x.init(Vt,i.renderState)}if(Ft&&Ft.includes("camera-access")&&m){t.state.unbindTexture(),h=n.getBinding();for(let Vt=0;Vt<Tt.length;Vt++){let Bt=Tt[Vt].camera;if(Bt){let re=g[Bt];if(!re)re=new Oa,g[Bt]=re;let j=h.getCameraImage(Bt);re.sourceTexture=j}}}}for(let Tt=0;Tt<v.length;Tt++){let Ct=A[Tt],Ft=v[Tt];if(Ct!==null&&Ft!==void 0)Ft.update(Ct,it,l||r)}if(J)J(Z,it);if(it.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:it});f=null}let yt=new Lp;yt.setAnimationLoop(nt),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}}var XS=new Xt,Jp=new Yt;Jp.set(-1,0,0,0,1,0,0,0,1);function qS(t,e){function n(g,p){if(g.matrixAutoUpdate===!0)g.updateMatrix();p.value.copy(g.matrix)}function i(g,p){if(p.color.getRGB(g.fogColor.value,Fc(t)),p.isFog)g.fogNear.value=p.near,g.fogFar.value=p.far;else if(p.isFogExp2)g.fogDensity.value=p.density}function s(g,p,y,S,v){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)r(g,p);else if(p.isMeshLambertMaterial){if(r(g,p),p.envMap)g.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)r(g,p),u(g,p);else if(p.isMeshPhongMaterial){if(r(g,p),h(g,p),p.envMap)g.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(r(g,p),d(g,p),p.isMeshPhysicalMaterial)f(g,p,v)}else if(p.isMeshMatcapMaterial)r(g,p),m(g,p);else if(p.isMeshDepthMaterial)r(g,p);else if(p.isMeshDistanceMaterial)r(g,p),x(g,p);else if(p.isMeshNormalMaterial)r(g,p);else if(p.isLineBasicMaterial){if(a(g,p),p.isLineDashedMaterial)o(g,p)}else if(p.isPointsMaterial)l(g,p,y,S);else if(p.isSpriteMaterial)c(g,p);else if(p.isShadowMaterial)g.color.value.copy(p.color),g.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(g,p){if(g.opacity.value=p.opacity,p.color)g.diffuse.value.copy(p.color);if(p.emissive)g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)g.map.value=p.map,n(p.map,g.mapTransform);if(p.alphaMap)g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform);if(p.bumpMap){if(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn)g.bumpScale.value*=-1}if(p.normalMap){if(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn)g.normalScale.value.negate()}if(p.displacementMap)g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias;if(p.emissiveMap)g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform);if(p.specularMap)g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform);if(p.alphaTest>0)g.alphaTest.value=p.alphaTest;let y=e.get(p),{envMap:S,envMapRotation:v}=y;if(S){if(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(XS.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1)g.envMapRotation.value.premultiply(Jp);g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio}if(p.lightMap)g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform);if(p.aoMap)g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform)}function a(g,p){if(g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map)g.map.value=p.map,n(p.map,g.mapTransform)}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,S){if(g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=S*0.5,p.map)g.map.value=p.map,n(p.map,g.uvTransform);if(p.alphaMap)g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform);if(p.alphaTest>0)g.alphaTest.value=p.alphaTest}function c(g,p){if(g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map)g.map.value=p.map,n(p.map,g.mapTransform);if(p.alphaMap)g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform);if(p.alphaTest>0)g.alphaTest.value=p.alphaTest}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,0.0001)}function u(g,p){if(p.gradientMap)g.gradientMap.value=p.gradientMap}function d(g,p){if(g.metalness.value=p.metalness,p.metalnessMap)g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform);if(g.roughness.value=p.roughness,p.roughnessMap)g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform);if(p.envMap)g.envMapIntensity.value=p.envMapIntensity}function f(g,p,y){if(g.ior.value=p.ior,p.diffuseRoughness>0){if(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap)g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform)}if(p.sheen>0){if(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform);if(p.sheenRoughnessMap)g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform);if(p.clearcoatRoughnessMap)g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn)g.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)g.dispersion.value=p.dispersion;if(p.retroreflectivity>0)g.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap)g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform);if(p.iridescenceThicknessMap)g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform)}if(p.transmission>0){if(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap)g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform);if(g.thickness.value=p.thickness,p.thicknessMap)g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform);g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform)}if(g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap)g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform);if(p.specularIntensityMap)g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform)}function m(g,p){if(p.matcap)g.matcap.value=p.matcap}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YS(t,e,n,i){let s={},r={};function a(y,S){let v=S.program;i.uniformBlockBinding(y,v,s[y.id])}function o(y,S){let v=s[y.id];if(v===void 0)m(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",g);let A=S.program;i.updateUBOMapping(y,A);let w=e.render.frame;if(r[y.id]!==w)c(y),r[y.id]=w}function l(y){let S=t.createBuffer(),{__size:v,usage:A}=y;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,v,A),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],{uniforms:v,__cache:A}=y;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let w=0,_=v.length;w<_;w++){let M=v[w];if(Array.isArray(M))for(let E=0,D=M.length;E<D;E++)h(M[E],w,E,A);else h(M,w,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,S,v,A){if(d(y,S,v,A)===!0){let{__offset:w,value:_}=y;if(Array.isArray(_)){let M=0;for(let E=0;E<_.length;E++){let D=_[E],P=x(D,!0);u(D,y.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,w,y.__data)}}function u(y,S,v){if(typeof y==="number"||typeof y==="boolean")S[v]=y;else if(y.isMatrix3)S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0;else if(ArrayBuffer.isView(y))S.set(y.subarray(0,S.length-v),v);else y.toArray(S,v)}function d(y,S,v,A){let w=y.value,_=S+"_"+v;if(Array.isArray(w)){if(A[_]===void 0)A[_]=[];let M=A[_],E=!1;for(let D=0;D<w.length;D++)if(f(w[D],M,D)===!0)E=!0;return E}return f(w,A,_)}function f(y,S,v){if(S[v]===void 0){if(typeof y==="number"||typeof y==="boolean")S[v]=y;else if(ArrayBuffer.isView(y))S[v]=y.slice();else S[v]=y.clone();return!0}else{let A=S[v];if(typeof y==="number"||typeof y==="boolean"){if(A!==y)return S[v]=y,!0}else if(ArrayBuffer.isView(y))return!0;else if(A.equals(y)===!1)return A.copy(y),!0}return!1}function m(y){let S=y.uniforms,v=0,A=16;for(let _=0,M=S.length;_<M;_++){let E=Array.isArray(S[_])?S[_]:[S[_]];for(let D=0,P=E.length;D<P;D++){let F=E[D],X=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(S[_])||Array.isArray(F.value),H=v;for(let O=0,rt=X.length;O<rt;O++){let k=X[O],J=x(k,I),nt=v%A,yt=nt%J.boundary,Z=nt+yt;if(v+=yt,Z!==0&&A-Z<J.storage)v+=A-Z;if(O===0)H=v;v+=J.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((v-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let w=v%A;if(w>0)v+=A-w;return y.__size=v,y.__cache={},this}function x(y,S){let v={boundary:0,storage:0};if(typeof y==="number"||typeof y==="boolean")v.boundary=4,v.storage=4;else if(y.isVector2)v.boundary=8,v.storage=8;else if(y.isVector3||y.isColor)v.boundary=16,v.storage=12;else if(y.isVector4)v.boundary=16,v.storage=16;else if(y.isMatrix3)v.boundary=16,v.storage=48;else if(y.isMatrix4)v.boundary=16,v.storage=64;else if(y.isTexture)gt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(y))v.boundary=16,v.storage=y.byteLength;else gt("WebGLRenderer: Unsupported uniform value type.",y);if(S===!0)v.boundary=16,v.storage=Math.ceil(v.storage/16)*16;return v}function g(y){let S=y.target;S.removeEventListener("dispose",g),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let y in s)t.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var ZS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;function JS(){if(Nn===null)Nn=new rn(ZS,16,16,Oi,Pn),Nn.name="DFG_LUT",Nn.minFilter=ln,Nn.magFilter=ln,Nn.wrapS=_a,Nn.wrapT=_a,Nn.generateMipmaps=!1,Nn.needsUpdate=!0;return Nn}class $S{constructor(t={}){let{canvas:e=Bd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Sn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let m=d,x=new Set([wl,El,Al]),g=new Set([Sn,ci,Ks,Fi,bl,Tl]),p=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},v=null,A=null,w=[],_=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,P=null,F=null,X=null,I=null;this._outputColorSpace=Pd;let H=0,q=0,O=null,rt=-1,k=null,J=new pe,nt=new pe,yt=null,Z=new At(0),it=0,{width:Tt,height:Ct}=e,Ft=1,xt=null,ne=null,Vt=new pe(0,0,Tt,Ct),Bt=new pe(0,0,Tt,Ct),re=!1,j=new ai,ot=new nr,ht=!1,Rt=!1,wt=new Xt,kt=new C,Ot=new pe,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function he(){return O===null?Ft:1}let U=n;function Ee(T,N){return e.getContext(T,N)}let $t,Me,_t,de,Ht,qt,we,R,b,B,st,tt,ct,ft,V,Q,ut,L,K,Y,at,lt,mt;try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Gu}`);if(e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),U===null){if(U=Ee("webgl2",T),U===null)if(Ee("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(T){throw e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),Ut("WebGLRenderer: "+T.message),T}function zt(){if($t=new ay(U),$t.init(),at=new HS(U,$t),Me=new Jv(U,$t,t,at),_t=new GS(U,$t),Me.reversedDepthBuffer&&u)_t.buffers.depth.setReversed(!0);F=U.createFramebuffer(),X=U.createFramebuffer(),I=U.createFramebuffer(),de=new cy(U),Ht=new ES,qt=new kS(U,$t,_t,Ht,Me,at,de),we=new ry(E),R=new u0(U),lt=new Yv(U,R),b=new oy(U,R,de,lt),B=new uy(U,b,R,lt,de),L=new hy(U,Me,qt),V=new $v(Ht),st=new AS(E,we,$t,Me,lt,V),tt=new qS(E,Ht),ct=new RS,ft=new DS($t),ut=new qv(E,we,_t,B,f,o),Q=new zS(E,B,Me),mt=new YS(U,de,Me,_t),K=new Zv(U,$t,de),Y=new ly(U,$t,de),de.programs=st.programs,E.capabilities=Me,E.extensions=$t,E.properties=Ht,E.renderLists=ct,E.shadowMap=Q,E.state=_t,E.info=de}if(m!==Sn)M=new fy(m,e.width,e.height,a,i,s);let Dt=new Zp(E,U);this.xr=Dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=$t.get("WEBGL_lose_context");if(T)T.loseContext()},this.forceContextRestore=function(){let T=$t.get("WEBGL_lose_context");if(T)T.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(T){if(T===void 0)return;Ft=T,this.setSize(Tt,Ct,!1)},this.getSize=function(T){return T.set(Tt,Ct)},this.setSize=function(T,N,W=!0){if(Dt.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Tt=T,Ct=N,e.width=Math.floor(T*Ft),e.height=Math.floor(N*Ft),W===!0)e.style.width=T+"px",e.style.height=N+"px";if(M!==null)M.setSize(e.width,e.height);this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Tt*Ft,Ct*Ft).floor()},this.setDrawingBufferSize=function(T,N,W){Tt=T,Ct=N,Ft=W,e.width=Math.floor(T*W),e.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(m===Sn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(Vt)},this.setViewport=function(T,N,W,z){if(T.isVector4)Vt.set(T.x,T.y,T.z,T.w);else Vt.set(T,N,W,z);_t.viewport(J.copy(Vt).multiplyScalar(he()).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,N,W,z){if(T.isVector4)Bt.set(T.x,T.y,T.z,T.w);else Bt.set(T,N,W,z);_t.scissor(nt.copy(Bt).multiplyScalar(he()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){_t.setScissorTest(re=T)},this.setOpaqueSort=function(T){xt=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,W=!0){let z=0;if(T){let G=!1;if(O!==null){let pt=O.texture.format;G=x.has(pt)}if(G){let pt=O.texture.type,It=g.has(pt),dt=ut.getClearColor(),bt=ut.getClearAlpha(),{r:Nt,g:Zt,b:ie}=dt;if(It)p[0]=Nt,p[1]=Zt,p[2]=ie,p[3]=bt,U.clearBufferuiv(U.COLOR,0,p);else y[0]=Nt,y[1]=Zt,y[2]=ie,y[3]=bt,U.clearBufferiv(U.COLOR,0,y)}else z|=U.COLOR_BUFFER_BIT}if(N)z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(W)z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(z!==0)U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),P=T},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),ut.dispose(),ct.dispose(),ft.dispose(),qt.dispose(),Ht.dispose(),we.dispose(),B.dispose(),b.dispose(),lt.dispose(),mt.dispose(),st.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",gh),Dt.removeEventListener("sessionend",_h),gi.stop()};function St(T){T.preventDefault(),Ws("WebGLRenderer: Context Lost."),D=!0}function Gt(){Ws("WebGLRenderer: Context Restored."),D=!1;let T=de.autoReset,N=Q.enabled,W=Q.autoUpdate,z=Q.needsUpdate,G=Q.type;zt(),de.autoReset=T,Q.enabled=N,Q.autoUpdate=W,Q.needsUpdate=z,Q.type=G}function Kt(T){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mt(T){let N=T.target;N.removeEventListener("dispose",Mt),fe(N)}function fe(T){Pe(T),Ht.remove(T)}function Pe(T){let N=Ht.get(T).programs;if(N!==void 0){if(N.forEach(function(W){st.releaseProgram(W)}),T.isShaderMaterial)st.releaseShaderCache(T)}}this.renderBufferDirect=function(T,N,W,z,G,pt){if(N===null)N=jt;let It=G.isMesh&&G.matrixWorld.determinantAffine()<0,dt=em(T,N,W,z,G);_t.setMaterial(z,It);let bt=W.index,Nt=1;if(z.wireframe===!0){if(bt=b.getWireframeAttribute(W),bt===void 0)return;Nt=2}let Zt=W.drawRange,ie=W.attributes.position,Pt=Zt.start*Nt,se=(Zt.start+Zt.count)*Nt;if(pt!==null)Pt=Math.max(Pt,pt.start*Nt),se=Math.min(se,(pt.start+pt.count)*Nt);if(bt!==null)Pt=Math.max(Pt,0),se=Math.min(se,bt.count);else if(ie!==void 0&&ie!==null)Pt=Math.max(Pt,0),se=Math.min(se,ie.count);let Te=se-Pt;if(Te<0||Te===1/0)return;lt.setup(G,z,dt,W,bt);let _e,me=K;if(bt!==null)_e=R.get(bt),me=Y,me.setIndex(_e);if(G.isMesh)if(z.wireframe===!0)_t.setLineWidth(z.wireframeLinewidth*he()),me.setMode(U.LINES);else me.setMode(U.TRIANGLES);else if(G.isLine){let ze=z.linewidth;if(ze===void 0)ze=1;if(_t.setLineWidth(ze*he()),G.isLineSegments)me.setMode(U.LINES);else if(G.isLineLoop)me.setMode(U.LINE_LOOP);else me.setMode(U.LINE_STRIP)}else if(G.isPoints)me.setMode(U.POINTS);else if(G.isSprite)me.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(!$t.get("WEBGL_multi_draw")){let{_multiDrawStarts:ze,_multiDrawCounts:Lt,_multiDrawCount:Ze}=G,ue=bt?R.get(bt).bytesPerElement:1,_i=Ht.get(z).currentProgram.getUniforms();for(let Ge=0;Ge<Ze;Ge++)_i.setValue(U,"_gl_DrawID",Ge),me.render(ze[Ge]/ue,Lt[Ge])}else me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)me.renderInstances(Pt,Te,G.count);else if(W.isInstancedBufferGeometry){let ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Lt=Math.min(W.instanceCount,ze);me.renderInstances(Pt,Te,Lt)}else me.render(Pt,Te)};function Un(T,N,W,z){if(P!==null&&T.isNodeMaterial)P.setObject(z,T);if(ht===!0)V.setState(T,W,!1);if(T.transparent===!0&&T.side===Cn&&T.forceSinglePass===!1)T.side=tn,T.needsUpdate=!0,Es(T,N,z),T.side=xs,T.needsUpdate=!0,Es(T,N,z),T.side=Cn;else Es(T,N,z)}this.compile=function(T,N,W=null){if(W===null)W=T;if(P!==null)P.renderStart(T,N,W);if(A=ft.get(W),A.init(N),_.push(A),W.traverseVisible(function(G){if(G.isLight&&G.layers.test(N.layers)){if(A.pushLight(G),G.castShadow)A.pushShadow(G)}}),T!==W)T.traverseVisible(function(G){if(G.isLight&&G.layers.test(N.layers)){if(A.pushLight(G),G.castShadow)A.pushShadow(G)}});if(A.setupLights(),P!==null)P.updateLights(A.state.lightsArray);if(Rt=this.localClippingEnabled,ht=V.init(this.clippingPlanes,Rt),ht===!0)V.setGlobalState(this.clippingPlanes,N);if(P!==null)Q.render(A.state.shadowsArray,W,N);let z=new Set;if(T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let It=0;It<pt.length;It++){let dt=pt[It];Un(dt,W,N,G),z.add(dt)}else Un(pt,W,N,G),z.add(pt)}),A=_.pop(),P!==null)P.renderEnd();return z},this.compileAsync=function(T,N,W=null){let z=this.compile(T,N,W);return new Promise((G)=>{function pt(){if(z.forEach(function(It){let bt=Ht.get(It).currentProgram;if(bt===void 0||bt.isReady())z.delete(It)}),z.size===0){G(T);return}setTimeout(pt,10)}if($t.get("KHR_parallel_shader_compile")!==null)pt();else setTimeout(pt,10)})};let yo=null;function jp(T){if(yo)yo(T)}function gh(){gi.stop()}function _h(){gi.start()}let gi=new Lp;if(gi.setAnimationLoop(jp),typeof self<"u")gi.setContext(self);this.setAnimationLoop=function(T){yo=T,Dt.setAnimationLoop(T),T===null?gi.stop():gi.start()},Dt.addEventListener("sessionstart",gh),Dt.addEventListener("sessionend",_h),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(P!==null)P.renderStart(T,N);let W=Dt.enabled===!0&&Dt.isPresenting===!0,z=M!==null&&(O===null||W)&&M.begin(E,O);if(T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(Dt.enabled===!0&&Dt.isPresenting===!0&&(M===null||M.isCompositing()===!1)){if(Dt.cameraAutoUpdate===!0)Dt.updateCamera(N);N=Dt.getCamera()}if(T.isScene===!0)T.onBeforeRender(E,T,N,O);if(A=ft.get(T,_.length),A.init(N),A.state.textureUnits=qt.getTextureUnits(),_.push(A),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera)ot.setFromArrayCamera(N);else j.setFromProjectionMatrix(wt,fc,N.reversedDepth);if(Rt=this.localClippingEnabled,ht=V.init(this.clippingPlanes,Rt),v=ct.get(T,w.length),v.init(),w.push(v),this.info.render.frame++,Dt.enabled===!0&&Dt.isPresenting===!0){let It=E.xr.getDepthSensingMesh();if(It!==null)So(It,N,-1/0,E.sortObjects)}if(So(T,N,0,E.sortObjects),v.finish(),P!==null)P.updateLights(A.state.lightsArray);if(E.sortObjects===!0)v.sort(xt,ne);if(te=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,te)ut.addToRenderList(v,T);if(this.info.autoReset===!0)this.info.reset();if(ht===!0)V.beginShadows();let G=A.state.shadowsArray;if(Q.render(G,T,N),ht===!0)V.endShadows();if((z&&M.hasRenderPass())===!1){let It=v.opaque,dt=v.transmissive;if(A.setupLights(),N.isArrayCamera){let bt=N.cameras;if(dt.length>0)for(let Nt=0,Zt=bt.length;Nt<Zt;Nt++){let ie=bt[Nt];vh(It,dt,T,ie)}if(te)ut.render(T);for(let Nt=0,Zt=bt.length;Nt<Zt;Nt++){let ie=bt[Nt];xh(v,T,ie,ie.viewport)}}else{if(dt.length>0)vh(It,dt,T,N);if(te)ut.render(T);xh(v,T,N)}}if(O!==null&&q===0)qt.updateMultisampleRenderTarget(O),qt.updateRenderTargetMipmap(O);if(z)M.end(E);if(T.isScene===!0)T.onAfterRender(E,T,N);if(lt.resetDefaultState(),rt=-1,k=null,_.pop(),_.length>0){if(A=_[_.length-1],qt.setTextureUnits(A.state.textureUnits),ht===!0)V.setGlobalState(E.clippingPlanes,A.state.camera)}else A=null;if(w.pop(),w.length>0)v=w[w.length-1];else v=null;if(P!==null)P.renderEnd()};function So(T,N,W,z){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD){if(T.autoUpdate===!0)T.update(N)}else if(T.isLight){if(A.pushLight(T),T.castShadow)A.pushShadow(T)}else if(T.isSprite){let It=N.isArrayCamera?ot:j;if(!T.frustumCulled||T.intersectsFrustum(It)){if(z)Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);let dt=B.update(T),bt=T.material;if(bt.visible)v.push(T,dt,bt,W,Ot.z,null,N)}}else if(T.isMesh||T.isLine||T.isPoints){let It=N.isArrayCamera?ot:j;if(!T.frustumCulled||T.intersectsFrustum(It)){let dt=B.update(T),bt=T.material;if(z){if(T.boundingSphere!==void 0){if(T.boundingSphere===null)T.computeBoundingSphere();Ot.copy(T.boundingSphere.center)}else{if(dt.boundingSphere===null)dt.computeBoundingSphere();Ot.copy(dt.boundingSphere.center)}Ot.applyMatrix4(T.matrixWorld).applyMatrix4(wt)}if(Array.isArray(bt)){let Nt=dt.groups;for(let Zt=0,ie=Nt.length;Zt<ie;Zt++){let Pt=Nt[Zt],se=bt[Pt.materialIndex];if(se&&se.visible)v.push(T,dt,se,W,Ot.z,Pt,N)}}else if(bt.visible)v.push(T,dt,bt,W,Ot.z,null,N)}}}let pt=T.children;for(let It=0,dt=pt.length;It<dt;It++)So(pt[It],N,W,z)}function xh(T,N,W,z){let{opaque:G,transmissive:pt,transparent:It}=T;if(A.setupLightsView(W),ht===!0)V.setGlobalState(E.clippingPlanes,W);if(z)_t.viewport(J.copy(z));if(G.length>0)yr(G,N,W);if(pt.length>0)yr(pt,N,W);if(It.length>0)yr(It,N,W);_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function vh(T,N,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let Pt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new en(1,1,{generateMipmaps:!0,type:Pt?Pn:Sn,minFilter:li,samples:Math.max(4,Me.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let pt=A.state.transmissionRenderTarget[z.id],It=z.viewport||J;pt.setSize(It.z*E.transmissionResolutionScale,It.w*E.transmissionResolutionScale);let dt=E.getRenderTarget(),bt=E.getActiveCubeFace(),Nt=E.getActiveMipmapLevel();if(E.setRenderTarget(pt),E.getClearColor(Z),it=E.getClearAlpha(),it<1)E.setClearColor(16777215,0.5);if(E.clear(),te)ut.render(W);let Zt=E.toneMapping;E.toneMapping=In;let ie=z.viewport;if(z.viewport!==void 0)z.viewport=void 0;if(A.setupLightsView(z),ht===!0)V.setGlobalState(E.clippingPlanes,z);if(yr(T,W,z),qt.updateMultisampleRenderTarget(pt),qt.updateRenderTargetMipmap(pt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let se=0,Te=N.length;se<Te;se++){let _e=N[se],{object:me,geometry:ze,material:Lt,group:Ze}=_e;if(Lt.side===Cn&&me.layers.test(z.layers)){let ue=Lt.side;Lt.side=tn,Lt.needsUpdate=!0,yh(me,W,z,ze,Lt,Ze),Lt.side=ue,Lt.needsUpdate=!0,Pt=!0}}if(Pt===!0)qt.updateMultisampleRenderTarget(pt),qt.updateRenderTargetMipmap(pt)}if(E.setRenderTarget(dt,bt,Nt),E.setClearColor(Z,it),ie!==void 0)z.viewport=ie;E.toneMapping=Zt}function yr(T,N,W){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,pt=T.length;G<pt;G++){let It=T[G],{object:dt,geometry:bt,group:Nt}=It,Zt=It.material;if(Zt.allowOverride===!0&&z!==null)Zt=z;if(dt.layers.test(W.layers))yh(dt,N,W,bt,Zt,Nt)}}function yh(T,N,W,z,G,pt){if(P!==null&&G.isNodeMaterial)P.setObject(T,G);if(T.onBeforeRender(E,N,W,z,G,pt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(E,N,W,z,T,pt),G.transparent===!0&&G.side===Cn&&G.forceSinglePass===!1)G.side=tn,G.needsUpdate=!0,E.renderBufferDirect(W,N,z,G,T,pt),G.side=xs,G.needsUpdate=!0,E.renderBufferDirect(W,N,z,G,T,pt),G.side=Cn;else E.renderBufferDirect(W,N,z,G,T,pt);T.onAfterRender(E,N,W,z,G,pt)}function Sh(T){let N=0;for(let W of T)if(W.texture!==null)N++;return N}function Es(T,N,W){if(N.isScene!==!0)N=jt;let z=Ht.get(T),G=A.state.lights,pt=A.state.shadowsArray,It=G.state.version,dt=st.getParameters(T,G.state,pt,N,W,A.state.lightProbeGridArray),bt=st.getProgramCacheKey(dt),Nt=z.programs;z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Zt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;if(z.envMap=we.get(T.envMap||z.environment,Zt),z.envMapRotation=z.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Nt===void 0)T.addEventListener("dispose",Mt),Nt=new Map,z.programs=Nt,z.programVariants=new Map;let ie=Nt.get(bt);if(ie!==void 0){if(z.currentProgram===ie&&z.lightsStateVersion===It)return bh(T,dt),ie}else{if(dt.uniforms=st.getUniforms(T),P!==null&&T.isNodeMaterial)P.build(T,W,dt);T.onBeforeCompile(dt,E),ie=st.acquireProgram(dt,bt),Nt.set(bt,ie),z.uniforms=dt.uniforms}let Pt=z.uniforms;if(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)Pt.clippingPlanes=V.uniform;if(bh(T,dt),z.needsLights=im(T),z.lightsStateVersion=It,z.needsLights)Pt.ambientLightColor.value=G.state.ambient,Pt.lightProbe.value=G.state.probe,Pt.sunLights.value=G.state.sun,Pt.sunLightShadows.value=G.state.sunShadow,Pt.directionalLights.value=G.state.directional,Pt.directionalLightShadows.value=G.state.directionalShadow,Pt.spotLights.value=G.state.spot,Pt.spotLightShadows.value=G.state.spotShadow,Pt.rectAreaLights.value=G.state.rectArea,Pt.ltc_1.value=G.state.rectAreaLTC1,Pt.ltc_2.value=G.state.rectAreaLTC2,Pt.pointLights.value=G.state.point,Pt.pointLightShadows.value=G.state.pointShadow,Pt.hemisphereLights.value=G.state.hemi,Pt.sunShadowMatrix.value=G.state.sunShadowMatrix,Pt.sunShadowCascade.value=G.state.sunShadowCascade,Pt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pt.spotLightMatrix.value=G.state.spotLightMatrix,Pt.spotLightMap.value=G.state.spotLightMap,Pt.pointShadowMatrix.value=G.state.pointShadowMatrix;return z.numLightProbeGrids=Sh(A.state.lightProbeGridArray),z.currentProgram=ie,z.uniformsList=null,ie}function tm(T,N,W,z,G){let pt=Ht.get(T),It=pt.currentProgram.id+","+z+","+G,dt=pt.programVariants.get(It);if(dt===void 0)dt=Es(T,N,W),pt.programVariants.set(It,dt);else pt.currentProgram=dt,pt.uniformsList=null,pt.outputColorSpace=z,pt.toneMapping=G;return dt}function Mh(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=_r.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function bh(T,N){let W=Ht.get(T);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function em(T,N,W,z,G){if(N.isScene!==!0)N=jt;qt.resetTextureUnits();let pt=N.fog,It=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,dt=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ee.workingColorSpace,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Nt=we.get(z.envMap||It,bt),Zt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ie=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,Te=!!W.morphAttributes.color,_e=In;if(z.toneMapped){if(O===null||O.isXRRenderTarget===!0)_e=E.toneMapping}let me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ze=me!==void 0?me.length:0,Lt=Ht.get(z),Ze=A.state.lights;if(ht===!0){if(Rt===!0||T!==k){let xe=T===k&&z.id===rt;V.setState(z,T,xe)}}let ue=!1,_i=!1;if(z.version===Lt.__version){if(Lt.needsLights&&Lt.lightsStateVersion!==Ze.state.version)ue=!0;else if(G.isBatchedMesh&&Lt.batching===!1)ue=!0;else if(!G.isBatchedMesh&&Lt.batching===!0)ue=!0;else if(G.isBatchedMesh&&Lt.batchingColor===!0&&G._colorsTexture===null)ue=!0;else if(G.isBatchedMesh&&Lt.batchingColor===!1&&G._colorsTexture!==null)ue=!0;else if(G.isInstancedMesh&&Lt.instancing===!1)ue=!0;else if(!G.isInstancedMesh&&Lt.instancing===!0)ue=!0;else if(G.isSkinnedMesh&&Lt.skinning===!1)ue=!0;else if(!G.isSkinnedMesh&&Lt.skinning===!0)ue=!0;else if(G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null)ue=!0;else if(G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null)ue=!0;else if(G.isInstancedMesh&&Lt.instancingMorph===!0&&G.morphTexture===null)ue=!0;else if(G.isInstancedMesh&&Lt.instancingMorph===!1&&G.morphTexture!==null)ue=!0;else if(Lt.envMap!==Nt)ue=!0;else if(z.fog===!0&&Lt.fog!==pt)ue=!0;else if(Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==V.numPlanes||Lt.numIntersection!==V.numIntersection))ue=!0;else if(Lt.vertexAlphas!==Zt)ue=!0;else if(Lt.vertexTangents!==ie)ue=!0;else if(Lt.morphTargets!==Pt)ue=!0;else if(Lt.morphNormals!==se)ue=!0;else if(Lt.morphColors!==Te)ue=!0;else if(Lt.morphTargetsCount!==ze)ue=!0;else if(Lt.numLightProbeGrids!==Sh(A.state.lightProbeGridArray))ue=!0;else if(Lt.outputColorSpace!==dt||Lt.toneMapping!==_e)_i=!0}else ue=!0,Lt.__version=z.version;let Ge=Lt.currentProgram;if(ue===!0||_i===!0){if(Ge=_i===!0?tm(z,N,G,dt,_e):Es(z,N,G),P&&z.isNodeMaterial)P.onUpdateProgram(z,Ge,Lt)}let Sr=!1,Qn=!1,xi=!1,ae=Ge.getUniforms(),Fe=Lt.uniforms;if(_t.useProgram(Ge.program))Sr=!0,Qn=!0,xi=!0;if(z.id!==rt)rt=z.id,Qn=!0;if(Sr||k!==T){if(_t.buffers.depth.getReversed()&&T.reversedDepth!==!0)T._reversedDepth=!0,T.updateProjectionMatrix();ae.setValue(U,"projectionMatrix",T.projectionMatrix),ae.setValue(U,"viewMatrix",T.matrixWorldInverse);let Le=ae.map.cameraPosition;if(Le!==void 0)Le.setValue(U,kt.setFromMatrixPosition(T.matrixWorld));if(Me.logarithmicDepthBuffer)ae.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2));if(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)ae.setValue(U,"isOrthographic",T.isOrthographicCamera===!0);if(k!==T)k=T,Qn=!0,xi=!0}if(Lt.needsLights){if(Ze.state.sunShadowMap.length>0)ae.setValue(U,"sunShadowMap",Ze.state.sunShadowMap,qt);if(Ze.state.directionalShadowMap.length>0)ae.setValue(U,"directionalShadowMap",Ze.state.directionalShadowMap,qt);if(Ze.state.spotShadowMap.length>0)ae.setValue(U,"spotShadowMap",Ze.state.spotShadowMap,qt);if(Ze.state.pointShadowMap.length>0)ae.setValue(U,"pointShadowMap",Ze.state.pointShadowMap,qt)}if(G.isSkinnedMesh){ae.setOptional(U,G,"bindMatrix"),ae.setOptional(U,G,"bindMatrixInverse");let xe=G.skeleton;if(xe){if(xe.boneTexture===null)xe.computeBoneTexture();ae.setValue(U,"boneTexture",xe.boneTexture,qt)}}if(G.isBatchedMesh){if(ae.setOptional(U,G,"batchingTexture"),ae.setValue(U,"batchingTexture",G._matricesTexture,qt),ae.setOptional(U,G,"batchingIdTexture"),ae.setValue(U,"batchingIdTexture",G._indirectTexture,qt),ae.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null)ae.setValue(U,"batchingColorTexture",G._colorsTexture,qt)}let fn=W.morphAttributes;if(fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)L.update(G,W,Ge);if(Qn||Lt.receiveShadow!==G.receiveShadow)Lt.receiveShadow=G.receiveShadow,ae.setValue(U,"receiveShadow",G.receiveShadow);if((z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null)Fe.envMapIntensity.value=N.environmentIntensity;if(Fe.dfgLUT!==void 0)Fe.dfgLUT.value=JS();if(Qn){if(ae.setValue(U,"toneMappingExposure",E.toneMappingExposure),Lt.needsLights)nm(Fe,xi);if(pt&&z.fog===!0)tt.refreshFogUniforms(Fe,pt);if(tt.refreshMaterialUniforms(Fe,z,Ft,Ct,A.state.transmissionRenderTarget[T.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let xe=S,Le=0;for(let Fn of A.state.lightProbeGridArray){if(Fn.texture===null)continue;xe.textures[Le]=Fn.texture,xe.min[Le]=Fn.boundingBox.min,xe.max[Le]=Fn.boundingBox.max,xe.resolution[Le]=Fn.resolution,Le++}for(let Fn in xe)xe[Fn].length=Le;Fe.probesSH.value=xe.textures,Fe.probesMin.value=xe.min,Fe.probesMax.value=xe.max,Fe.probesResolution.value=xe.resolution}_r.upload(U,Mh(Lt),Fe,qt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0)_r.upload(U,Mh(Lt),Fe,qt),z.uniformsNeedUpdate=!1;if(z.isSpriteMaterial)ae.setValue(U,"center",G.center);if(ae.setValue(U,"modelViewMatrix",G.modelViewMatrix),ae.setValue(U,"normalMatrix",G.normalMatrix),ae.setValue(U,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let xe=z.uniformsGroups;for(let Le=0,Fn=xe.length;Le<Fn;Le++){let Ah=xe[Le];mt.update(Ah,Ge),mt.bind(Ah,Ge)}}return Ge}function nm(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function im(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,N,W){let z=Ht.get(T);if(z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1)z.__useRenderToTexture=!1;Ht.get(T.texture).__webglTexture=N,Ht.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let W=Ht.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){O=T,H=N,q=W;let z=null,G=!1,pt=!1;if(T){let dt=Ht.get(T);if(dt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(U.FRAMEBUFFER,dt.__webglFramebuffer),J.copy(T.viewport),nt.copy(T.scissor),yt=T.scissorTest,_t.viewport(J),_t.scissor(nt),_t.setScissorTest(yt),rt=-1;return}else if(dt.__webglFramebuffer===void 0)qt.setupRenderTarget(T);else if(dt.__hasExternalTextures)qt.rebindTextures(T,Ht.get(T.texture).__webglTexture,Ht.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Zt=T.depthTexture;if(dt.__boundDepthTexture!==Zt){if(Zt!==null&&Ht.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(T)}}let bt=T.texture;if(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)pt=!0;let Nt=Ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget){if(Array.isArray(Nt[N]))z=Nt[N][W];else z=Nt[N];G=!0}else if(T.samples>0&&qt.useMultisampledRTT(T)===!1)z=Ht.get(T).__webglMultisampledFramebuffer;else if(Array.isArray(Nt))z=Nt[W];else z=Nt;J.copy(T.viewport),nt.copy(T.scissor),yt=T.scissorTest}else J.copy(Vt).multiplyScalar(Ft).floor(),nt.copy(Bt).multiplyScalar(Ft).floor(),yt=re;if(W!==0)z=F;if(_t.bindFramebuffer(U.FRAMEBUFFER,z))_t.drawBuffers(T,z);if(_t.viewport(J),_t.scissor(nt),_t.setScissorTest(yt),G){let dt=Ht.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,W)}else if(pt){let dt=N;for(let bt=0;bt<T.textures.length;bt++){let Nt=Ht.get(T.textures[bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+bt,Nt.__webglTexture,W,dt)}}else if(T!==null&&W!==0){let dt=Ht.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,W)}rt=-1};function Th(T){let N=Ht.get(T);if(N.__readFormat!==T.format||N.__readType!==T.type)N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=Me.textureFormatReadable(T.format),N.__typeReadable=Me.textureTypeReadable(T.type);return N}if(this.readRenderTargetPixels=function(T,N,W,z,G,pt,It,dt=0){if(!(T&&T.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0){if(bt=bt[It],Array.isArray(bt))bt=bt[0]}if(bt){_t.bindFramebuffer(U.FRAMEBUFFER,bt);try{let Nt=T.textures[dt],{format:Zt,type:ie}=Nt;if(T.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+dt);let Pt=Th(Nt);if(Pt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=T.width-z&&(W>=0&&W<=T.height-G))U.readPixels(N,W,z,G,at.convert(Zt),at.convert(ie),pt)}finally{let Nt=O!==null?Ht.get(O).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,N,W,z,G,pt,It,dt=0){if(!(T&&T.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0){if(bt=bt[It],Array.isArray(bt))bt=bt[0]}if(bt)if(N>=0&&N<=T.width-z&&(W>=0&&W<=T.height-G)){_t.bindFramebuffer(U.FRAMEBUFFER,bt);let Nt=T.textures[dt],{format:Zt,type:ie}=Nt;if(T.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+dt);let Pt=Th(Nt);if(Pt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(N,W,z,G,at.convert(Zt),at.convert(ie),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Te=O!==null?Ht.get(O).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Te);let _e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gd(U,_e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(se),U.deleteSync(_e),pt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,W=0){let z=Math.pow(2,-W),G=Math.floor(T.image.width*z),pt=Math.floor(T.image.height*z),It=N!==null?N.x:0,dt=N!==null?N.y:0;qt.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,It,dt,G,pt),_t.unbindTexture()},this.copyTextureToTexture=function(T,N,W=null,z=null,G=0,pt=0){let It,dt,bt,Nt,Zt,ie,Pt,se,Te,_e=T.isCompressedTexture?T.mipmaps[pt]:T.image;if(W!==null)It=W.max.x-W.min.x,dt=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,Nt=W.min.x,Zt=W.min.y,ie=W.isBox3?W.min.z:0;else{let ae=Math.pow(2,-G);if(It=Math.floor(_e.width*ae),dt=Math.floor(_e.height*ae),T.isDataArrayTexture)bt=_e.depth;else if(T.isData3DTexture)bt=Math.floor(_e.depth*ae);else bt=1;Nt=0,Zt=0,ie=0}if(z!==null)Pt=z.x,se=z.y,Te=z.z;else Pt=0,se=0,Te=0;let me=at.convert(N.format),ze=at.convert(N.type),Lt;if(N.isData3DTexture)qt.setTexture3D(N,0),Lt=U.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)qt.setTexture2DArray(N,0),Lt=U.TEXTURE_2D_ARRAY;else qt.setTexture2D(N,0),Lt=U.TEXTURE_2D;_t.activeTexture(U.TEXTURE0),_t.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),_t.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_t.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let Ze=_t.getParameter(U.UNPACK_ROW_LENGTH),ue=_t.getParameter(U.UNPACK_IMAGE_HEIGHT),_i=_t.getParameter(U.UNPACK_SKIP_PIXELS),Ge=_t.getParameter(U.UNPACK_SKIP_ROWS),Sr=_t.getParameter(U.UNPACK_SKIP_IMAGES);_t.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),_t.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),_t.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),_t.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),_t.pixelStorei(U.UNPACK_SKIP_IMAGES,ie);let Qn=T.isDataArrayTexture||T.isData3DTexture,xi=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let ae=Ht.get(T),Fe=Ht.get(N),fn=Ht.get(ae.__renderTarget),xe=Ht.get(Fe.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,fn.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<bt;Le++){if(Qn)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ht.get(T).__webglTexture,G,ie+Le),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ht.get(N).__webglTexture,pt,Te+Le);U.blitFramebuffer(Nt,Zt,Nt+It,Zt+dt,Pt,se,Pt+It,se+dt,U.DEPTH_BUFFER_BIT,U.NEAREST)}_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||Ht.has(T)){let ae=Ht.get(T),Fe=Ht.get(N);_t.bindFramebuffer(U.READ_FRAMEBUFFER,X),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,I);for(let fn=0;fn<bt;fn++){if(Qn)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ae.__webglTexture,G,ie+fn);else U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ae.__webglTexture,G);if(xi)U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.__webglTexture,pt,Te+fn);else U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fe.__webglTexture,pt);if(G!==0)U.blitFramebuffer(Nt,Zt,Nt+It,Zt+dt,Pt,se,Pt+It,se+dt,U.COLOR_BUFFER_BIT,U.NEAREST);else if(xi)U.copyTexSubImage3D(Lt,pt,Pt,se,Te+fn,Nt,Zt,It,dt);else U.copyTexSubImage2D(Lt,pt,Pt,se,Nt,Zt,It,dt)}_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(xi)if(T.isDataTexture||T.isData3DTexture)U.texSubImage3D(Lt,pt,Pt,se,Te,It,dt,bt,me,ze,_e.data);else if(N.isCompressedArrayTexture)U.compressedTexSubImage3D(Lt,pt,Pt,se,Te,It,dt,bt,me,_e.data);else U.texSubImage3D(Lt,pt,Pt,se,Te,It,dt,bt,me,ze,_e);else if(T.isDataTexture)U.texSubImage2D(U.TEXTURE_2D,pt,Pt,se,It,dt,me,ze,_e.data);else if(T.isCompressedTexture)U.compressedTexSubImage2D(U.TEXTURE_2D,pt,Pt,se,_e.width,_e.height,me,_e.data);else U.texSubImage2D(U.TEXTURE_2D,pt,Pt,se,It,dt,me,ze,_e);if(_t.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),_t.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),_t.pixelStorei(U.UNPACK_SKIP_PIXELS,_i),_t.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),_t.pixelStorei(U.UNPACK_SKIP_IMAGES,Sr),pt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0)U.generateMipmap(Lt);_t.unbindTexture()},this.initRenderTarget=function(T){if(Ht.get(T).__webglFramebuffer===void 0)qt.setupRenderTarget(T)},this.initTexture=function(T){if(T.isCubeTexture)qt.setTextureCube(T,0);else if(T.isData3DTexture)qt.setTexture3D(T,0);else if(T.isDataArrayTexture||T.isCompressedArrayTexture)qt.setTexture2DArray(T,0);else qt.setTexture2D(T,0);_t.unbindTexture()},this.resetState=function(){H=0,q=0,O=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fc}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}function nM(t,e,n=!0){if(!e||!e.isReady)throw Error("THREE.BufferGeometryUtils: Initialized MikkTSpace library required.");if(!t.hasAttribute("position")||!t.hasAttribute("normal")||!t.hasAttribute("uv"))throw Error('THREE.BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function i(l){if(l.normalized||l.isInterleavedBufferAttribute){let c=new Float32Array(l.count*l.itemSize);for(let h=0,u=0;h<l.count;h++)if(c[u++]=l.getX(h),c[u++]=l.getY(h),l.itemSize>2)c[u++]=l.getZ(h);return c}if(l.array instanceof Float32Array)return l.array;return new Float32Array(l.array)}let s=t.index?t.toNonIndexed():t,r=e.generateTangents(i(s.attributes.position),i(s.attributes.normal),i(s.attributes.uv));if(n)for(let l=3;l<r.length;l+=4)r[l]*=-1;let a=s.attributes.normal,o=a.array;if(a.normalized&&(o instanceof Int8Array||o instanceof Int16Array)){let l=new o.constructor(r.length);for(let c=0;c<r.length;c++)l[c]=gc.normalize(r[c],l);s.setAttribute("tangent",new ce(l,4,!0))}else s.setAttribute("tangent",new ce(r,4));if(t!==s)t.copy(s);return t}function iM(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new Jt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<t.length;++h){let u=t[h],d=0,f=0;if(n!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;if(r[m]===void 0)r[m]=[];r[m].push(u.attributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==t[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;if(a[m]===void 0)a[m]=[];a[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(n)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(n){let h=0,u=[];for(let d=0;d<t.length;++d){let f=t[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=t[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=$p(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=$p(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function $p(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let a=new e(r),o=new ce(a,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let u=l/n;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<n;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*n}if(s!==void 0)o.gpuType=s;return o}function sM(t){if(t.isInstancedInterleavedBufferAttribute||t.isInterleavedBufferAttribute)return mh(t);if(t.isInstancedBufferAttribute)return new wn().copy(t);return new ce().copy(t)}function rM(t){let e,n=0,i=0;for(let c=0,h=t.length;c<h;++c){let u=t[c];if(e===void 0)e=u.array.constructor;if(e!==u.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;n+=u.array.length,i+=u.itemSize}let s=new zi(new e(n),i),r=0,a=[],o=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,h=t.length;c<h;c++){let u=t[c],{itemSize:d,count:f}=u,m=new qn(s,d,r,u.normalized);a.push(m),r+=d;for(let x=0;x<f;x++)for(let g=0;g<d;g++)m[l[g]](x,u[o[g]](x))}return a}function mh(t){let e=t.data.array.constructor,{count:n,itemSize:i,normalized:s}=t,r=new e(n*i),a;if(t.isInstancedInterleavedBufferAttribute)a=new wn(r,i,s,t.meshPerAttribute);else a=new ce(r,i,s);for(let o=0;o<n;o++){if(a.setX(o,t.getX(o)),i>=2)a.setY(o,t.getY(o));if(i>=3)a.setZ(o,t.getZ(o));if(i>=4)a.setW(o,t.getW(o))}return a}function aM(t){let{attributes:e,morphAttributes:n}=t,i=new Map;for(let s in e){let r=e[s];if(r.isInterleavedBufferAttribute){if(!i.has(r))i.set(r,mh(r));e[s]=i.get(r)}}for(let s in n){let r=n[s];for(let a=0,o=r.length;a<o;a++){let l=r[a];if(l.isInterleavedBufferAttribute){if(!i.has(l))i.set(l,mh(l));r[a]=i.get(l)}}}}function oM(t){let e=0;for(let i in t.attributes){let s=t.getAttribute(i);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let n=t.getIndex();return e+=n?n.count*n.itemSize*n.array.BYTES_PER_ELEMENT:0,e}function lM(t,e=0.0001){e=Math.max(e,Number.EPSILON);let n={},i=t.getIndex(),s=t.getAttribute("position"),r=i?i.count:s.count,a=0,o=Object.keys(t.attributes),l=[],c=new Map,h=[],u=["getX","getY","getZ","getW"],d=e*0.5,f=Math.log10(1/e),m=Math.pow(10,f),x=d*m;for(let p=0;p<r;p++){let y=i?i.getX(p):p,S="";for(let v=0,A=o.length;v<A;v++){let w=o[v],_=t.getAttribute(w),M=_.itemSize;for(let E=0;E<M;E++)S+=`${Math.trunc(_[u[E]](y)*m+x)},`}if(S in n)h.push(n[S]);else l.push(y),n[S]=a,h.push(a),a++}let g=t.clone();for(let p in t.attributes)g.setAttribute(p,Kp(t.attributes[p],l,c));for(let p in t.morphAttributes)g.morphAttributes[p]=t.morphAttributes[p].map((y)=>Kp(y,l,c));return g.setIndex(h),g}function cM(t,e){if(e===sc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Aa||e===rc){let n=t.getIndex();if(n===null){let r=[],a=t.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);t.setIndex(r),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,s=[];if(e===Aa)for(let r=1;r<=i;r++)s.push(n.getX(0)),s.push(n.getX(r)),s.push(n.getX(r+1));else for(let r=0;r<i;r++)if(r%2===0)s.push(n.getX(r)),s.push(n.getX(r+1)),s.push(n.getX(r+2));else s.push(n.getX(r+2)),s.push(n.getX(r+1)),s.push(n.getX(r));if(s.length/3!==i)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return t.setIndex(s),t.clearGroups(),t}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}function hM(t){let e=new C,n=new C,i=new C,s=new C,r=new C,a=new C,o=new C,l=new C,c=new C;function h(k,J,nt,yt,Z,it,Tt,Ct){e.fromBufferAttribute(J,Z),n.fromBufferAttribute(J,it),i.fromBufferAttribute(J,Tt);let Ft=k.morphTargetInfluences;if(nt&&Ft){o.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let xt=0,ne=nt.length;xt<ne;xt++){let Vt=Ft[xt],Bt=nt[xt];if(Vt===0)continue;if(s.fromBufferAttribute(Bt,Z),r.fromBufferAttribute(Bt,it),a.fromBufferAttribute(Bt,Tt),yt)o.addScaledVector(s,Vt),l.addScaledVector(r,Vt),c.addScaledVector(a,Vt);else o.addScaledVector(s.sub(e),Vt),l.addScaledVector(r.sub(n),Vt),c.addScaledVector(a.sub(i),Vt)}e.add(o),n.add(l),i.add(c)}if(k.isSkinnedMesh)k.applyBoneTransform(Z,e),k.applyBoneTransform(it,n),k.applyBoneTransform(Tt,i);Ct[Z*3+0]=e.x,Ct[Z*3+1]=e.y,Ct[Z*3+2]=e.z,Ct[it*3+0]=n.x,Ct[it*3+1]=n.y,Ct[it*3+2]=n.z,Ct[Tt*3+0]=i.x,Ct[Tt*3+1]=i.y,Ct[Tt*3+2]=i.z}let{geometry:u,material:d}=t,f,m,x,g=u.index,p=u.attributes.position,y=u.morphAttributes.position,S=u.morphTargetsRelative,v=u.attributes.normal,A=u.morphAttributes.normal,{groups:w,drawRange:_}=u,M,E,D,P,F,X,I,H=new Float32Array(p.count*p.itemSize),q=new Float32Array(v.count*v.itemSize);if(g!==null)if(Array.isArray(d))for(M=0,D=w.length;M<D;M++){F=w[M],X=Math.max(F.start,_.start),I=Math.min(F.start+F.count,_.start+_.count);for(E=X,P=I;E<P;E+=3)f=g.getX(E),m=g.getX(E+1),x=g.getX(E+2),h(t,p,y,S,f,m,x,H),h(t,v,A,S,f,m,x,q)}else{X=Math.max(0,_.start),I=Math.min(g.count,_.start+_.count);for(M=X,D=I;M<D;M+=3)f=g.getX(M),m=g.getX(M+1),x=g.getX(M+2),h(t,p,y,S,f,m,x,H),h(t,v,A,S,f,m,x,q)}else if(Array.isArray(d))for(M=0,D=w.length;M<D;M++){F=w[M],X=Math.max(F.start,_.start),I=Math.min(F.start+F.count,_.start+_.count);for(E=X,P=I;E<P;E+=3)f=E,m=E+1,x=E+2,h(t,p,y,S,f,m,x,H),h(t,v,A,S,f,m,x,q)}else{X=Math.max(0,_.start),I=Math.min(p.count,_.start+_.count);for(M=X,D=I;M<D;M+=3)f=M,m=M+1,x=M+2,h(t,p,y,S,f,m,x,H),h(t,v,A,S,f,m,x,q)}let O=new Et(H,3),rt=new Et(q,3);return{positionAttribute:p,normalAttribute:v,morphedPositionAttribute:O,morphedNormalAttribute:rt}}function uM(t){if(t.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),t;let e=t.groups;if(e=e.sort((a,o)=>{if(a.materialIndex!==o.materialIndex)return a.materialIndex-o.materialIndex;return a.start-o.start}),t.getIndex()===null){let a=t.getAttribute("position"),o=[];for(let l=0;l<a.count;l+=3)o.push(l,l+1,l+2);t.setIndex(o)}let n=t.getIndex(),i=[];for(let a=0;a<e.length;a++){let o=e[a];if(o.count===1/0)o.count=n.count-o.start;let l=o.start,c=l+o.count;for(let h=l;h<c;h++)i.push(n.getX(h))}t.dispose(),t.setIndex(i);let s=0;for(let a=0;a<e.length;a++){let o=e[a];o.start=s,s+=o.count}let r=e[0];t.groups=[r];for(let a=1;a<e.length;a++){let o=e[a];if(r.materialIndex===o.materialIndex)r.count+=o.count;else r=o,t.groups.push(r)}return t}function dM(t,e=Math.PI/3){let n=t.index?t.toNonIndexed():t,i=n.attributes.position,s=i.count,r;if(i.isBufferAttribute===!0&&i.itemSize===3&&i.normalized===!1)r=i.array;else{r=new Float64Array(s*3);for(let v=0;v<s;v++)r[3*v+0]=i.getX(v),r[3*v+1]=i.getY(v),r[3*v+2]=i.getZ(v)}let a=Math.cos(e),o=100.00000001000001,l=s/3,c=new Float64Array(l*3);for(let v=0;v<l;v++){let A=9*v,w=r[A+0],_=r[A+1],M=r[A+2],E=r[A+3],D=r[A+4],P=r[A+5],F=r[A+6],X=r[A+7],I=r[A+8],H=F-E,q=X-D,O=I-P,rt=w-E,k=_-D,J=M-P,nt=q*J-O*k,yt=O*rt-H*J,Z=H*k-q*rt,it=1/(Math.sqrt(nt*nt+yt*yt+Z*Z)||1);c[3*v+0]=nt*it,c[3*v+1]=yt*it,c[3*v+2]=Z*it}let h=new Int32Array(s),u=new Float64Array(s*3),d=1;while(d<s*2)d<<=1;let f=d-1,m=new Int32Array(d),x=0;for(let v=0;v<s;v++){let A=3*v,w=Math.trunc(r[A+0]*o),_=Math.trunc(r[A+1]*o),M=Math.trunc(r[A+2]*o),E=(Math.imul(w,73856093)^Math.imul(_,19349663)^Math.imul(M,83492791))&f;while(!0){let D=m[E];if(D===0){let F=3*x;u[F+0]=w,u[F+1]=_,u[F+2]=M,m[E]=x+1,h[v]=x++;break}let P=3*(D-1);if(u[P+0]===w&&u[P+1]===_&&u[P+2]===M){h[v]=D-1;break}E=E+1&f}}let g=new Int32Array(x+1);for(let v=0;v<s;v++)g[h[v]+1]++;for(let v=0;v<x;v++)g[v+1]+=g[v];let p=new Int32Array(s),y=g.slice(0,x);for(let v=0;v<l;v++){let A=3*v;p[y[h[A+0]]++]=v,p[y[h[A+1]]++]=v,p[y[h[A+2]]++]=v}let S=new Float32Array(s*3);for(let v=0;v<l;v++){let A=3*v,w=c[A+0],_=c[A+1],M=c[A+2];for(let E=0;E<3;E++){let D=A+E,P=h[D],F=0,X=0,I=0;for(let q=g[P],O=g[P+1];q<O;q++){let rt=3*p[q],k=c[rt+0],J=c[rt+1],nt=c[rt+2];if(w*k+_*J+M*nt>a)F+=k,X+=J,I+=nt}let H=1/(Math.sqrt(F*F+X*X+I*I)||1);S[3*D+0]=F*H,S[3*D+1]=X*H,S[3*D+2]=I*H}}return n.setAttribute("normal",new ce(S,3,!1)),n}function Kp(t,e,n=new Map){let i=t.isInterleavedBufferAttribute,s=i?t.data:t,r=i?s.stride:t.itemSize,a=i?n.get(s):void 0;if(a===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];if(a=i?new s.constructor(l,r,s.meshPerAttribute):new t.constructor(l,t.itemSize,t.normalized,t.meshPerAttribute),a.setUsage(s.usage),i)n.set(s,a)}let o=i?new t.constructor(a,t.itemSize,t.offset,t.normalized):a;if(o.name=t.name,!i)o.gpuType=t.gpuType;return o}var vr=new C;function dn(t,e,n,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;vr.copy(e),vr[i]=0,vr.normalize();let c=0.5*a/(a+o),h=1-vr.angleTo(t)/l;if(Math.sign(vr[n])===1)return h*c;else return o/(a+o)+c+c*(1-h)}class Qp extends $n{constructor(t=1,e=1,n=1,i=2,s=0.1){let r=i*2+1;s=Math.min(t/2,e/2,n/2,s);super(1,1,1,r,r,r);if(this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new C,x=0.5/r;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*s,h[g+1]=c.y*Math.sign(o.y)+l.y*s,h[g+2]=c.z*Math.sign(o.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=dn(m,l,"z","y",s,n),d[p+1]=1-dn(m,l,"y","z",s,e);break;case 1:m.set(-1,0,0),d[p+0]=1-dn(m,l,"z","y",s,n),d[p+1]=1-dn(m,l,"y","z",s,e);break;case 2:m.set(0,1,0),d[p+0]=1-dn(m,l,"x","z",s,t),d[p+1]=dn(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[p+0]=1-dn(m,l,"x","z",s,t),d[p+1]=1-dn(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[p+0]=1-dn(m,l,"x","y",s,t),d[p+1]=1-dn(m,l,"y","x",s,e);break;case 5:m.set(0,0,-1),d[p+0]=dn(m,l,"x","y",s,t),d[p+1]=1-dn(m,l,"y","x",s,e);break}}static fromJSON(t){return new Qp(t.width,t.height,t.depth,t.segments,t.radius)}}export{xl as ACESFilmicToneMapping,vs as AddEquation,vd as AddOperation,Rm as AdditiveAnimationBlendMode,ul as AdditiveBlending,yl as AgXToneMapping,wd as AlphaFormat,uc as AlwaysCompare,ud as AlwaysDepth,Km as AlwaysStencilFunc,Qc as AmbientLight,ch as AnimationAction,ms as AnimationClip,yf as AnimationLoader,Of as AnimationMixer,Ff as AnimationObjectGroup,gf as AnimationUtils,Rc as ArcCurve,ih as ArrayCamera,ap as ArrowHelper,cm as AttachedBindMode,rh as Audio,Df as AudioAnalyser,uo as AudioContext,Lf as AudioListener,If as AudioLoader,op as AxesHelper,tn as BackSide,Cm as BasicDepthPacking,om as BasicShadowMap,bc as BatchedMesh,qc as BezierInterpolant,Na as Bone,pi as BooleanKeyframeTrack,uh as Box2,Be as Box3,sp as Box3Helper,$n as BoxGeometry,ip as BoxHelper,ce as BufferAttribute,Jt as BufferGeometry,nh as BufferGeometryLoader,bd as ByteType,En as Cache,dr as Camera,np as CameraHelper,af as CanvasTexture,Ba as CapsuleGeometry,Ic as CatmullRomCurve3,_l as CineonToneMapping,za as CircleGeometry,_a as ClampToEdgeWrapping,Wf as Clock,At as Color,ao as ColorKeyframeTrack,ee as ColorManagement,dg as Compatibility,sf as CompressedArrayTexture,rf as CompressedCubeTexture,ir as CompressedTexture,Sf as CompressedTextureLoader,rr as ConeGeometry,ld as ConstantAlphaFactor,ad as ConstantColorFactor,cp as Controls,pr as CubeCamera,Fa as CubeDepthTexture,Js as CubeReflectionMapping,ys as CubeRefractionMapping,Ms as CubeTexture,Mf as CubeTextureLoader,ka as CubicBezierCurve,Pc as CubicBezierCurve3,Vc as CubicInterpolant,hl as CullFaceBack,Hu as CullFaceFront,am as CullFaceFrontBack,ku as CullFaceNone,un as Curve,Nc as CurvePath,Vu as CustomBlending,vl as CustomToneMapping,sr as CylinderGeometry,Xf as Cylindrical,js as Data3DTexture,Qs as DataArrayTexture,rn as DataTexture,bf as DataTextureLoader,qd as DataUtils,Gm as DecrementStencilOp,Hm as DecrementWrapStencilOp,xf as DefaultLoadingManager,Ss as DepthFormat,hi as DepthStencilFormat,di as DepthTexture,hm as DetachedBindMode,Kc as DirectionalLight,ep as DirectionalLightHelper,Xc as DiscreteInterpolant,Ga as DodecahedronGeometry,Cn as DoubleSide,ed as DstAlphaFactor,id as DstColorFactor,rg as DynamicCopyUsage,jm as DynamicDrawUsage,ng as DynamicReadUsage,wc as EdgesGeometry,ar as EllipseCurve,Dd as EqualCompare,fd as EqualDepth,qm as EqualStencilFunc,ma as EquirectangularReflectionMapping,ga as EquirectangularRefractionMapping,yn as Euler,cn as EventDispatcher,Oa as ExternalTexture,qa as ExtrudeGeometry,Rn as FileLoader,Qd as Float16BufferAttribute,Et as Float32BufferAttribute,Zn as FloatType,Ca as Fog,Ra as FogExp2,nf as FramebufferTexture,xs as FrontSide,ai as Frustum,nr as FrustumArray,kf as GLBufferAttribute,og as GLSL1,dc as GLSL3,Ud as GreaterCompare,md as GreaterDepth,hc as GreaterEqualCompare,pd as GreaterEqualDepth,$m as GreaterEqualStencilFunc,Zm as GreaterStencilFunc,jf as GridHelper,Pi as Group,of as HTMLTexture,Pn as HalfFloatType,Zc as HemisphereLight,Qf as HemisphereLightHelper,Ya as IcosahedronGeometry,Cf as ImageBitmapLoader,gs as ImageLoader,_c as ImageUtils,zm as IncrementStencilOp,km as IncrementWrapStencilOp,wn as InstancedBufferAttribute,eh as InstancedBufferGeometry,Gf as InstancedInterleavedBuffer,Mc as InstancedMesh,$d as Int16BufferAttribute,Kd as Int32BufferAttribute,Yd as Int8BufferAttribute,Ml as IntType,zi as InterleavedBuffer,qn as InterleavedBufferAttribute,Hi as Interpolant,bm as InterpolateBezier,ym as InterpolateDiscrete,Sm as InterpolateLinear,Mm as InterpolateSmooth,ug as InterpolationSamplingMode,hg as InterpolationSamplingType,Wm as InvertStencilOp,Om as KeepStencilOp,an as KeyframeTrack,yc as LOD,Za as LatheGeometry,tr as Layers,Nd as LessCompare,dd as LessDepth,cc as LessEqualCompare,pl as LessEqualDepth,Ym as LessEqualStencilFunc,Xm as LessStencilFunc,Kn as Light,th as LightProbe,ur as LightShadow,Yn as Line,Yf as Line3,qe as LineBasicMaterial,Ha as LineCurve,Lc as LineCurve3,Wc as LineDashedMaterial,Tc as LineLoop,Mn as LineSegments,ln as LinearFilter,ro as LinearInterpolant,mm as LinearMipMapLinearFilter,pm as LinearMipMapNearestFilter,li as LinearMipmapLinearFilter,xa as LinearMipmapNearestFilter,oc as LinearSRGBColorSpace,ml as LinearToneMapping,lc as LinearTransfer,$e as Loader,pa as LoaderUtils,lo as LoadingManager,_m as LoopOnce,vm as LoopPingPong,xm as LoopRepeat,sm as MOUSE,Ue as Material,lm as MaterialBlending,ho as MaterialLoader,gc as MathUtils,qf as Matrix2,Yt as Matrix3,Xt as Matrix4,Zu as MaxEquation,Re as Mesh,ui as MeshBasicMaterial,io as MeshDepthMaterial,so as MeshDistanceMaterial,kc as MeshLambertMaterial,Hc as MeshMatcapMaterial,Gc as MeshNormalMaterial,Bc as MeshPhongMaterial,Oc as MeshPhysicalMaterial,no as MeshStandardMaterial,zc as MeshToonMaterial,Yu as MinEquation,Sd as MirroredRepeatWrapping,xd as MixOperation,fl as MultiplyBlending,_d as MultiplyOperation,oi as NearestFilter,fm as NearestMipMapLinearFilter,dm as NearestMipMapNearestFilter,$s as NearestMipmapLinearFilter,Md as NearestMipmapNearestFilter,Sl as NeutralToneMapping,Ld as NeverCompare,hd as NeverDepth,Vm as NeverStencilFunc,Ui as NoBlending,Bi as NoColorSpace,Nm as NoNormalPacking,In as NoToneMapping,wm as NormalAnimationBlendMode,Zs as NormalBlending,Um as NormalGAPacking,Dm as NormalRGPacking,Fd as NotEqualCompare,gd as NotEqualDepth,Jm as NotEqualStencilFunc,cr as NumberKeyframeTrack,le as Object3D,Rf as ObjectLoader,Id as ObjectSpaceNormalMap,or as OctahedronGeometry,$u as OneFactor,cd as OneMinusConstantAlphaFactor,od as OneMinusConstantColorFactor,nd as OneMinusDstAlphaFactor,sd as OneMinusDstColorFactor,td as OneMinusSrcAlphaFactor,Qu as OneMinusSrcColorFactor,fr as OrthographicCamera,Ys as PCFShadowMap,Wu as PCFSoftShadowMap,go as PMREMGenerator,fs as Path,Oe as PerspectiveCamera,An as Plane,Ts as PlaneGeometry,rp as PlaneHelper,$c as PointLight,Kf as PointLightHelper,Ac as Points,Ua as PointsMaterial,tp as PolarGridHelper,fi as PolyhedronGeometry,Nf as PositionalAudio,oe as PropertyBinding,ah as PropertyMixer,Wa as QuadraticBezierCurve,Va as QuadraticBezierCurve3,Xe as Quaternion,hr as QuaternionKeyframeTrack,Yc as QuaternionLinearInterpolant,Ul as R11_EAC_Format,Ta as RED_GREEN_RGTC2_Format,ec as RED_RGTC1_Format,Gu as REVISION,ba as RG11_EAC_Format,Im as RGBADepthPacking,Jn as RGBAFormat,wl as RGBAIntegerFormat,Jl as RGBA_ASTC_10x10_Format,ql as RGBA_ASTC_10x5_Format,Yl as RGBA_ASTC_10x6_Format,Zl as RGBA_ASTC_10x8_Format,$l as RGBA_ASTC_12x10_Format,Kl as RGBA_ASTC_12x12_Format,Bl as RGBA_ASTC_4x4_Format,zl as RGBA_ASTC_5x4_Format,Gl as RGBA_ASTC_5x5_Format,kl as RGBA_ASTC_6x5_Format,Hl as RGBA_ASTC_6x6_Format,Wl as RGBA_ASTC_8x5_Format,Vl as RGBA_ASTC_8x6_Format,Xl as RGBA_ASTC_8x8_Format,Ql as RGBA_BPTC_Format,Dl as RGBA_ETC2_EAC_Format,Pl as RGBA_PVRTC_2BPPV1_Format,Il as RGBA_PVRTC_4BPPV1_Format,ya as RGBA_S3TC_DXT1_Format,Sa as RGBA_S3TC_DXT3_Format,Ma as RGBA_S3TC_DXT5_Format,Pm as RGBDepthPacking,Rd as RGBFormat,gm as RGBIntegerFormat,jl as RGB_BPTC_SIGNED_Format,tc as RGB_BPTC_UNSIGNED_Format,Ll as RGB_ETC1_Format,Nl as RGB_ETC2_Format,Cl as RGB_PVRTC_2BPPV1_Format,Rl as RGB_PVRTC_4BPPV1_Format,va as RGB_S3TC_DXT1_Format,Lm as RGDepthPacking,Oi as RGFormat,El as RGIntegerFormat,eo as RawShaderMaterial,Gi as Ray,Hf as Raycaster,jc as RectAreaLight,Cd as RedFormat,Al as RedIntegerFormat,gl as ReinhardToneMapping,fg as RenderObjectRefreshType,wa as RenderTarget,Bf as RenderTarget3D,yd as RepeatWrapping,Bm as ReplaceStencilOp,qu as ReverseSubtractEquation,Ja as RingGeometry,Qp as RoundedBoxGeometry,Fl as SIGNED_R11_EAC_Format,ic as SIGNED_RED_GREEN_RGTC2_Format,nc as SIGNED_RED_RGTC1_Format,Ol as SIGNED_RG11_EAC_Format,Pd as SRGBColorSpace,ge as SRGBTransfer,xc as Scene,Qt as ShaderChunk,Dn as ShaderLib,Ln as ShaderMaterial,Uc as ShadowMaterial,bs as Shape,$a as ShapeGeometry,lp as ShapePath,vn as ShapeUtils,Td as ShortType,Da as Skeleton,Jf as SkeletonHelper,Sc as SkinnedMesh,Hd as Source,De as Sphere,lr as SphereGeometry,Vf as Spherical,co as SphericalHarmonics3,Xa as SplineCurve,Jc as SpotLight,Zf as SpotLightHelper,vc as Sprite,La as SpriteMaterial,ju as SrcAlphaFactor,rd as SrcAlphaSaturateFactor,Ku as SrcColorFactor,sg as StaticCopyUsage,Qm as StaticDrawUsage,eg as StaticReadUsage,Pf as StereoCamera,ag as StreamCopyUsage,tg as StreamDrawUsage,ig as StreamReadUsage,mi as StringKeyframeTrack,Xu as SubtractEquation,dl as SubtractiveBlending,rm as TOUCH,ac as TangentSpaceNormalMap,Ka as TetrahedronGeometry,ye as Texture,Tf as TextureLoader,xn as TextureSource,hp as TextureUtils,sh as Timer,cg as TimestampQuery,Qa as TorusGeometry,ja as TorusKnotGeometry,je as Triangle,Aa as TriangleFanDrawMode,rc as TriangleStripDrawMode,sc as TrianglesDrawMode,to as TubeGeometry,um as UVMapping,Ia as Uint16BufferAttribute,Pa as Uint32BufferAttribute,Zd as Uint8BufferAttribute,Jd as Uint8ClampedBufferAttribute,hh as Uniform,zf as UniformsGroup,vt as UniformsLib,ff as UniformsUtils,Sn as UnsignedByteType,Ed as UnsignedInt101111Type,Fi as UnsignedInt248Type,Ad as UnsignedInt5999Type,ci as UnsignedIntType,bl as UnsignedShort4444Type,Tl as UnsignedShort5551Type,Ks as UnsignedShortType,_s as VSMShadowMap,et as Vector2,C as Vector3,pe as Vector4,oo as VectorKeyframeTrack,ef as VideoFrameTexture,Ec as VideoTexture,Vd as WebGL3DRenderTarget,Wd as WebGLArrayRenderTarget,fc as WebGLCoordinateSystem,_o as WebGLCubeRenderTarget,en as WebGLRenderTarget,$S as WebGLRenderer,HS as WebGLUtils,lg as WebGPUCoordinateSystem,er as WebXRController,Dc as WireframeGeometry,Em as WrapAroundEnding,Tm as ZeroCurvatureEnding,Ju as ZeroFactor,Am as ZeroSlopeEnding,Fm as ZeroStencilOp,nM as computeMikkTSpaceTangents,hM as computeMorphedAttributes,Bd as createCanvasElement,sM as deepCloneAttribute,mh as deinterleaveAttribute,aM as deinterleaveGeometry,Ut as error,oM as estimateBytesUsed,_g as getConsoleFunction,rM as interleaveAttributes,Ws as log,$p as mergeAttributes,iM as mergeGeometries,uM as mergeGroups,lM as mergeVertices,Kp as remapAttribute,gg as setConsoleFunction,dM as toCreasedNormals,cM as toTrianglesDrawMode,gt as warn,Vn as warnOnce};
