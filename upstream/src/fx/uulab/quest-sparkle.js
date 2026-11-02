// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Quest sparkle", "desc": "Warm drifting stars mark an interactable quest objective.", "tags": ["quest", "interaction", "ui"], "size": [128, 128], "origin": [64, 64], "duration": 2, "loop": true, "fps": 30, "bg": "dark", "options": {"palette": ["#695228", "#b58a3e", "#f5d27c", "#fff1c9", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let i=0;i<5;i++){let q=i*TAU/5+u*TAU,x=Math.cos(q)*20,y=Math.sin(q)*14,k=.4+.6*(.5+.5*Math.sin(u*TAU+i));p.beam(x-3,y,x+3,y,1,C[3],k);p.beam(x,y-3,x,y+3,1,C[4],k);p.glow(x,y,7,C[2],k*.25);}
}
