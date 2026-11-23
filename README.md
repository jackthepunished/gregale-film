# Gregale: the film

A film (24 fps, 1920x1080) about what Gregale does for an app, told as a visit to a harbour. It comes in two looks
with the same shots: by day (1956 frames, 81.5 s) and by night (1980 frames, 82.5 s, ending on a dawn). The picture
is drawn by code (three.js and GLSL) and the score is synthesised by code. The only assets are the logo,
`assets/gregale-logo.png`, and the two typefaces in `assets/fonts/`.

## Run it

```
node serve.mjs
```

Open http://localhost:5177 in Chrome or Edge. The bar scrubs to any frame. "Render MP4" draws every frame, encodes
H.264 and AAC with the browser's own encoders, and saves `gregale.mp4`. Options go in the address: `?frame=600`,
`?scale=0.5`, `?from=240&to=371`, `?mbps=8`, `?silent`, `?render`.

Add `?look=night` for the night film: http://localhost:5177/?look=night. It saves `gregale-night.mp4`.

## The story

The gregale is the north-east wind of the Mediterranean. In the film it carries a visitor, the lantern boat, into a
harbour where every raft is an app and a raft's lantern is lit while the app is awake.

It is told in plain sentences, one a shot. The technical name of what a shot shows is the small label above its
sentence. The console's panel, top left, shows the same thing as the product shows it.

| Shot | Frames | Label | On screen | What happens | Panel |
|---|---|---|---|---|---|
| s01 | 96 | | Gregale is a wind. It carries people to your app. | Open sea. The wind arrives; far out, the boat runs before it. | |
| s02 | 96 | | | The boat, close. | |
| s03 | 132 | Edge | It meets them at the door, | It passes under the lighthouse and the beam crosses it. | |
| s03b | 120 | WAF, rate limits, edge rules | and keeps trouble outside. | A second boat comes, unlit, two red eyes. The beam comes down onto it and goes red; it turns and leaves. | |
| s04 | 144 | Multi-service apps | Every part of your app starts together. | Three rafts joined by plank walks. A spark from the boat, and all three lanterns come on at once. | api, web, worker go green together |
| s05 | 108 | Runtime | It runs your code just as you wrote it, | Under the raft: crates stencilled NODE, PYTHON, OCI. | |
| s05b | 108 | Managed Postgres, object storage | and keeps your data beside it. | Lower on the same line: buckets (files) and three brass drums (the database), lighting as the bead passes. | postgres, storage |
| s06 | 108 | Isolation | Each app has a room of its own, sealed off from everyone else's. | The bell: a sealed glass sphere with a flame in it, among other rafts' bells. | Running |
| s11 | 132 | Rollbacks | If a release goes wrong, the last good one comes back. | A mast with a lantern for each release. A new one goes to the top and burns red. The wind turns back; the red one runs down and out, the last good one returns. | Deploying v42, v42 is failing, Rolling back, v41 Running |
| s12 | 108 | PR previews | Every change gets a copy of its own to try before it is real. | Three small copies of the raft put out from its side, each on a line, each with its own lantern. | pr-41, pr-42, pr-43 |
| s13 | 120 | Shadow traffic | A new version can rehearse on real visits. No one notices. | Boats come in for the app. A pale shadow of each peels off, goes to the new version's small raft, and is gone on the wind. | v42 live, v43 shadow 100% |
| s14 | 132 | MCP hosting | And when the visitor is an AI, its tools are here too. | A rack of four painted signs (search, orders, refund, notify). Small lights come on the wind; each uses a sign, which lights, and goes on. | hello-tools, MCP server, the tools used |
| s09 | 156 | Budgets, spend caps | A busy night costs what you said it could. | A fleet comes in and every raft wakes for it. | the month's spend rising to the budget's mark, and stopping |
| s09b | 156 | Scale to zero | And when the bay is quiet, so is the bill. | The boats leave; a little after each has gone, its raft's lantern goes out. | the bar still; Sleeping |
| s10 | 240 / 264 | | Putting your app here takes one line. | A terminal: `gregale deploy`, and the app's address. Then the logo and the name. By night, first light. | |

## What is illustrative

- The terminal's output (`Built`, `Live at https://hello.gregale.dev`) and the panel's design are drawn in the site's
  colours but are not copies of the real CLI or console. Put the real lines in `TERMINAL` and `PANELS` in
  `src/kit/type.js`.
- Release numbers, preview names, the tool names on the MCP rack and the budget bar are made up for the picture.

## The night look

`?look=night` is the same bay under a low moon and stars. Every surface is multiplied by a dark blue ambient and what
is lit is added after it, so a sleeping raft is a silhouette and an awake one is the light in the frame. Lanterns lie
on the water as broken mint reflections, the boat's wake glows, and the town's windows are lit. The last shot goes
from the night's colours to a dawn. The look is in `src/kit/look.js` (`NIGHT_C`, `AMB`, the night halves of `DAY` and
`DEEP`, and `DAWN`).

## Where things are

- `src/timeline.js`: the edit, a list of shots and lengths.
- `src/kit/type.js`: every word on screen (`CAPTIONS`, `PANELS`, `APP`, `TERMINAL`, `CARD`), the console panel, the terminal and the end card.
- `src/kit/look.js`: colours, the sun or moon, the ambient, the wind's direction, the grade, for both looks.
- `src/kit/harbor.js`: sky, sea, town, bridge, lighthouse, rafts, lanterns.
- `src/kit/props.js`: plank walks, the release mast, tethers, the tool rack, wisps.
- `src/kit/lantern.js`: the lantern boat, its dark twin and its shadow.
- `src/kit/deep.js`: what hangs under a raft: cargo, database and buckets, bell.
- `src/kit/wind.js`: the wind strokes and petals.
- `src/shots/`: one file a shot. Each has `build(k)` and `update(state, frame, k)`; a frame is a pure function of its number. (`s07` and `s08` are from the first film and are in no cut now.)
- `src/sound.js`: the score. Chords, tune and cues are tables at the top, placed by shot.
- `src/engine/`: the renderer (see NOTICE.md).

`node --experimental-vm-modules tools/check.mjs` syntax-checks every source file.

## The typefaces

The words are set in Familjen Grotesk and the terminal in Spline Sans Mono, the typefaces gregale.dev uses. Both are
in `assets/fonts/` with their licences, and the page loads those files rather than installed copies.
