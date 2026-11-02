// Original Game Skills effect using the PixelFX renderer.
import { fit, clamp, TAU } from "../../core/index.js";
export const meta = {"name": "Toxic drip", "desc": "Bright corrosive drops fall and burst into droplets.", "tags": ["poison", "impact", "status"], "size": [128, 128], "origin": [64, 64], "duration": 1.1, "loop": false, "fps": 30, "bg": "dark", "options": {"palette": ["#27451c", "#568f30", "#a2e65c", "#f1ffc2"], "seed": 3}};
export function draw(p, t, o) {
  const C=fit(o.palette,4), u=clamp(t/meta.duration), a=(1-u)*(1-u);
  let y=-24+u*43;p.circle(0,y,3,C[2],a);p.beam(0,y-7,0,y,2,C[1],a);if(u>.55){let q=(u-.55)/.45;for(let i=0;i<7;i++){let x=(i-3)*q*5;p.circle(x,19-Math.sin(q*Math.PI)*(5+i%3*3),1.5,C[2+i%2],a);}}
}
