// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Petal burst", "desc": "Soft petals scatter outward for a nature reward.", "tags": ["nature", "reward", "magic"], "size": [128, 128], "origin": [64, 64], "duration": 1.3, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#773d5f", "#c56e8d", "#ffc4ce", "#fff3e4"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<10;i++){let q=i*TAU/10,r=5+u*(13+i%3*5),x=Math.cos(q)*r+Math.sin(u*4+i)*2,y=Math.sin(q)*r+u*10;p.circle(x,y,1.4+i%2,C[1+i%3],a);}
}
