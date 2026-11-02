// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Danger pulse", desc: "A clear red warning pulse appears before an attack.", tags: ['warning', 'danger', 'telegraph', 'loop'], size: [112,112], origin: [56,56], duration: 1.4, loop: true, fps: 30, bg: "dark", options: { palette: ["#491622","#8e2630","#e74937","#ff9b66","#fff1c9"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const phase=t/meta.duration*TAU, v=.65+.35*Math.sin(phase);p.ring(0,0,24,2,C[2],v);p.ring(0,0,29,1,C[1],v*.7);p.beam(0,-13,0,3,3,C[3],v);p.circle(0,10,2,C[3],v);p.glow(0,0,30,C[1],v*.2);
}
