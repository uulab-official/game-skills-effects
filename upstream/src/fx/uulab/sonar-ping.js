// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Sonar ping", "desc": "Concentric cyan pulses reveal a scan point.", "tags": ["sci-fi", "scan", "ui"], "size": [128, 128], "origin": [64, 64], "duration": 1.2, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#144b68", "#31a3be", "#abf8f4", "#ffffff"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  for(let i=0;i<3;i++){let q=Math.max(0,u-i*.18);if(q>0)p.ring(0,0,4+q*31,1,C[2],a*(1-q));}p.circle(0,0,2,C[3],a);
}
