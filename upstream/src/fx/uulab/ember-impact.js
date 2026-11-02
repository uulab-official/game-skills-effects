// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Ember impact", desc: "A compact warm impact flash with radiating metal sparks.", tags: ['hit', 'impact', 'combat'], size: [112,112], origin: [56,56], duration: 0.7, loop: false, fps: 30, bg: "dark", options: { palette: ["#351629","#a22e27","#ef6f35","#ffd17a","#fff6d5"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const a=(1-u)*(1-u); if(u<.23)p.circle(0,0,10*(1-u/.23),WHITE,a);p.ring(0,0,5+24*u,2,C[3],a);
for(let i=0;i<10;i++){const q=i*TAU/10, r=6+u*(24+i*1.2);p.beam(Math.cos(q)*(r-4),Math.sin(q)*(r-4),Math.cos(q)*r,Math.sin(q)*r,2,C[2+i%2],a);}p.glow(0,0,22,C[2],a*.4);
}
