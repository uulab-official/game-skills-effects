// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Muzzle flash", "desc": "A short directional flash and brass sparks mark a shot.", "tags": ["sci-fi", "projectile", "combat"], "size": [128, 128], "origin": [64, 64], "duration": 0.35, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#7a3b22", "#ec762d", "#ffd177", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  p.beam(-4,0,18+u*16,0,3*(1-u)+1,C[2],a);for(let i=0;i<6;i++){let q=(i-2.5)*.22,r=12+u*19;p.beam(0,0,Math.cos(q)*r,Math.sin(q)*r,1,C[2+i%2],a);}p.glow(0,0,14,C[1],a*.4);
}
