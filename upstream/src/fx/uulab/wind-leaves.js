// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Wind leaves", "desc": "Small leaves spiral in a sudden woodland gust.", "tags": ["nature", "wind", "environment"], "size": [128, 128], "origin": [64, 64], "duration": 1.1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#315b42", "#5f9b57", "#b8d578", "#e7f6b4"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<10;i++){let q=i*2.4+u*4,r=4+u*(18+i);let x=Math.cos(q)*r,y=Math.sin(q)*r*.5-u*14;p.rect(x,y,3,2,C[1+i%3],a);}
}
