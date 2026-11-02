// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Crystal shatter", "desc": "A violet crystal fractures into glittering shards.", "tags": ["magic", "impact", "crystal"], "size": [128, 128], "origin": [64, 64], "duration": 0.95, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#452477", "#824cb5", "#c69af0", "#f7eaff"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<8;i++){let q=i*TAU/8,r=5+u*(16+i%3*5),x=Math.cos(q)*r,y=Math.sin(q)*r;p.beam(x,y,x+Math.cos(q)*6,y+Math.sin(q)*6,2,C[2+i%2],a);}p.glow(0,0,13,C[1],a*.3);
}
