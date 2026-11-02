// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Checkpoint light", "desc": "Golden rays rise when a checkpoint is activated.", "tags": ["checkpoint", "ui", "reward"], "size": [128, 128], "origin": [64, 64], "duration": 1.2, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#705027", "#d59c48", "#ffe09a", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  p.ring(0,12,4+u*20,1,C[2],a);for(let i=0;i<9;i++){let x=(i-4)*5,y=10-u*(15+i*3);p.beam(x,y,x,y-6,1,C[2+i%2],a);}
}
