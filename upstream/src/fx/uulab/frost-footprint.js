// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Frost footprint", "desc": "Icy footprints bloom briefly where a character lands.", "tags": ["ice", "movement", "footprint"], "size": [128, 128], "origin": [64, 64], "duration": 0.9, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#345f91", "#6ab8df", "#c9faff", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<2;i++){let x=i*15-7,y=i*6; p.ring(x,y,3+u*5,1,C[2],a);for(let j=0;j<4;j++){let q=j*TAU/4;p.beam(x+Math.cos(q)*4,y+Math.sin(q)*4,x+Math.cos(q)*9,y+Math.sin(q)*9,1,C[3],a);}}
}
