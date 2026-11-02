// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Ink teleport", "desc": "Dark ink fragments scatter as a character vanishes.", "tags": ["shadow", "teleport", "transition"], "size": [128, 128], "origin": [64, 64], "duration": 0.9, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#151326", "#382b59", "#8066a8", "#d0b7e7"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<14;i++){let q=i*2.4,r=u*(12+i*2),x=Math.cos(q)*r,y=Math.sin(q)*r;p.rect(x,y,2+i%3,2+i%3,C[i%4],a);}p.ring(0,0,5+u*20,2,C[2],a*.8);
}
