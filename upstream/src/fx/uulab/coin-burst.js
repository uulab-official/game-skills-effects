// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Coin burst", "desc": "Tiny golden coins scatter upward after a treasure drop.", "tags": ["pickup", "coin", "reward"], "size": [128, 128], "origin": [64, 64], "duration": 1.1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#75451a", "#d5942f", "#ffda72", "#fff3bc"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<8;i++){let x=(i-3.5)*u*6,y=-Math.sin(u*Math.PI)*(12+i%3*4)+u*8;p.circle(x,y,2,C[2],a);p.beam(x,y-1,x,y+1,1,C[3],a);}
}
