// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Shield pulse", "desc": "A blue hexagonal barrier flares outward after a block.", "tags": ["shield", "defense", "sci-fi"], "size": [128, 128], "origin": [64, 64], "duration": 0.8, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#103a60", "#338bbb", "#8de5fa", "#ffffff"], "seed": 3}};
export function draw(p,t,o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  let r=15+u*13;for(let i=0;i<6;i++){let q=i*TAU/6,s=(i+1)*TAU/6;p.beam(Math.cos(q)*r,Math.sin(q)*r,Math.cos(s)*r,Math.sin(s)*r,2,C[2],a);}p.glow(0,0,25,C[1],a*.3);
}
