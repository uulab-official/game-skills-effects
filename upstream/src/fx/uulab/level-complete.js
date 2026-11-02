// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Level complete", desc: "A celebratory golden burst for completing a short challenge.", tags: ['victory', 'ui', 'reward'], size: [112,112], origin: [56,56], duration: 1.5, loop: false, fps: 30, bg: "dark", options: { palette: ["#4e3017","#a86d29","#efb74c","#ffe49a","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const a=1-u;p.glow(0,0,28,C[2],a*.35);p.ring(0,0,6+u*26,2,C[3],a);for(let i=0;i<12;i++){const q=i*TAU/12,r=8+u*(22+i%3*5),x=Math.cos(q)*r,y=Math.sin(q)*r;p.beam(x-2,y,x+2,y,1,C[3],a);p.beam(x,y-2,x,y+2,1,i%3?C[3]:WHITE,a);}
}
