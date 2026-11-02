// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Coin pickup", "desc": "Golden flecks and a glint celebrate collecting currency.", "tags": ["pickup", "reward", "gold"], "size": [128, 128], "origin": [64, 64], "duration": 1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#694015", "#bd761d", "#ffd051", "#fff2ab", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C = fit(o.palette, 5), u = clamp(t / meta.duration), a = (1-u)*(1-u);
  p.ring(0,0,4+u*20,1,C[2],a); for(let i=0;i<8;i++){let q=i*TAU/8,r=5+u*23; p.dot(Math.cos(q)*r,Math.sin(q)*r-u*7,C[2+i%2],a);}p.beam(-8,0,8,0,1,C[3],a);p.beam(0,-8,0,8,1,C[4],a);p.glow(0,0,20,C[2],a*.35);
}
