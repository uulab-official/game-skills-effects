// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Repair sparks", "desc": "Mechanical sparks spray from a quick repair.", "tags": ["sci-fi", "repair", "crafting"], "size": [128, 128], "origin": [64, 64], "duration": 0.8, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#694133", "#db783d", "#ffd080", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<10;i++){let q=i*2.4,r=5+u*(15+i),x=Math.cos(q)*r,y=Math.sin(q)*r+u*u*12;p.beam(x,y,x-Math.cos(q)*5,y-Math.sin(q)*5,1,C[2+i%2],a);}
}
