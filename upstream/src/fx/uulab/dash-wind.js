// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Dash wind", "desc": "A swift horizontal gust marks the start of a dodge.", "tags": ["dash", "movement", "wind"], "size": [128, 128], "origin": [64, 64], "duration": 0.5, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#344955", "#6998a4", "#c3f0eb", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<6;i++){let y=(i-2.5)*5, x=-5-u*22-i*3; p.beam(x,y,x+14+u*10,y,1,C[2],a*(1-i*.1));}
}
