# Notices

This film is built on other people's work. What is theirs is listed here with its licence.

## The renderer and its kits

`src/engine/` (engine.js, glsl.js and kit/geo.js, flora.js, fx.js, stage.js, birds.js, coast.js) is the renderer and
generic kits of *The Tide Keeper*, taken from `tide-keeper-sf.html` in
[The Tide Keeper of San Francisco](https://github.com/reason-machines/tide-keeper-sf). Four small changes were made,
each marked `(Gregale)` where it is in the code: an ambient uniform (`uAmb`, `look.ambient`) that every surface is
multiplied by, with emissive light added after it (engine.js, glsl.js, birds.js); two hooks on the sea material
(`uniforms`, `fragHead`); and an overlay texture (`look.overlay`) laid over the finished frame. `src/film.js` and the MP4 path
in `index.html` follow that film's loader and page.

MIT License. Copyright (c) 2026 Reason Machines.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and
this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Nothing of that film's story, characters or marks is used here: the Keeper, the Reason mark, the corgis, the shots and
the score are not in this folder.

## Libraries

`vendor/three.js` is three.js 0.187.0 (https://threejs.org), MIT License, Copyright (c) 2010-2026 three.js authors.

`vendor/mp4-muxer.js` is mp4-muxer 5.2.2 (https://github.com/Vanilagy/mp4-muxer), MIT License, Copyright (c) 2023 Vanilagy.

Both are the minified builds packed in `tide-keeper-sf.html`; their full licence texts are beside them in that file.

## Typefaces

`assets/fonts/FamiljenGrotesk.ttf` is Familjen Grotesk, Copyright 2021 The Familjen Grotesk Project Authors
(https://github.com/Familjen-Sthlm/Familjen-Grotesk). `assets/fonts/SplineSansMono.ttf` is Spline Sans Mono,
Copyright 2022 The Spline Sans Mono Project Authors (https://github.com/SorkinType/SplineSansMono). Both are under the
SIL Open Font License 1.1; each licence is beside its font (`*-OFL.txt`). The files are the variable fonts from
https://github.com/google/fonts, unchanged.

## The film itself

Everything else (`src/kit/`, `src/shots/`, `src/sound.js`, `src/timeline.js`, the page) was written for Gregale.
It has no licence yet: that is Gregale's to choose.
