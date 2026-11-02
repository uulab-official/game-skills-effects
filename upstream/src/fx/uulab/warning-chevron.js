// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Warning chevron", "desc": "An amber chevron flashes before a dangerous action.", "tags": ["warning", "ui", "telegraph"], "size": [128, 128], "origin": [64, 64], "duration": 0.85, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#6a3424", "#cf722d", "#ffce64", "#fff3be"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  let y=-u*10;p.beam(-13,y-5,0,y+7,2,C[2],a);p.beam(0,y+7,13,y-5,2,C[2],a);p.beam(-13,y+2,0,y+14,1,C[3],a*.8);p.beam(0,y+14,13,y+2,1,C[3],a*.8);
}
