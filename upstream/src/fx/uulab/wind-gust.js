// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Wind gust", "desc": "Curving streaks sweep past in a quick burst of wind.", "tags": ["movement", "weather", "wind"], "size": [128, 128], "origin": [64, 64], "duration": 1.0, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#3d777d", "#87beb9", "#d8f5e4", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<5;i++){let y=(i-2)*7,x=-22+u*43+i*2;p.beam(x-12,y+Math.sin(u*5+i)*4,x+7,y,1,C[1+i%3],a);}
}
