// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Teleport arrival", "desc": "A vertical beam and expanding ring mark an arrival.", "tags": ["teleport", "magic", "spawn"], "size": [128, 128], "origin": [64, 64], "duration": 1.2, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#25285b", "#585bb4", "#aaa7ec", "#e1d9ff", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  let rise=Math.sin(Math.PI*u),h=30*rise;p.beam(0,-h,0,h,4,C[2],a*.7);p.beam(0,-h,0,h,1,C[4],a);p.ring(0,14,4+u*24,1,C[2],a);for(let i=0;i<8;i++){let q=i*TAU/8,r=5+u*20;p.dot(Math.cos(q)*r,Math.sin(q)*r*.4+14,C[3],a);}p.glow(0,0,20,C[1],a*.4);
}
