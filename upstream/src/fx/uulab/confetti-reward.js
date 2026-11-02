// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Confetti reward", "desc": "Colorful pieces scatter to celebrate a reward.", "tags": ["reward", "celebration", "ui"], "size": [128, 128], "origin": [64, 64], "duration": 1.4, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#fb5e7a", "#ffc25a", "#72d5bc", "#8ba4ff", "#fff0b8"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  for(let i=0;i<18;i++){let q=i*TAU/18,r=5+u*(15+i%4*4),x=Math.cos(q)*r,y=Math.sin(q)*r+u*u*22;p.beam(x,y,x+Math.cos(i+u*8)*3,y+Math.sin(i+u*8)*3,1,C[i%5],a);}
}
