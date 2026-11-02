// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Campfire embers", "desc": "Glowing embers gently orbit above an ambient fire.", "tags": ["fire", "ambient", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 3, "loop": true, "fps": 30, "bg": "dark", "options": {"palette": ["#4a2020", "#a34229", "#ee8736", "#ffcb73", "#fff0b2"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let i=0;i<9;i++){let v=(u+i/9)%1,x=Math.sin(i*4+v*5)*9,y=17-v*34,k=Math.sin(Math.PI*v);p.dot(x,y,C[2+i%2],k);p.glow(x,y,5,C[1],k*.3);}
}
