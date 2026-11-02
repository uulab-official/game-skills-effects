// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Arrow trail", "desc": "A compact streak and fading particles follow a projectile.", "tags": ["projectile", "arrow", "combat"], "size": [128, 128], "origin": [64, 64], "duration": 0.6, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#5e5947", "#bcae80", "#efe8c3", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<5;i++){let y=(i-2)*3,x=-u*25-i*4;p.beam(x,y,x+10,y,1,C[2],a);}p.circle(9+u*15,0,2,C[3],a);
}
