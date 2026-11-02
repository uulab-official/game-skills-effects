// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Frost burst", desc: "Cold shards break outward on a timed ice impact.", tags: ['ice', 'hit', 'magic'], size: [112,112], origin: [56,56], duration: 0.9, loop: false, fps: 30, bg: "dark", options: { palette: ["#1b3b63","#3e89b0","#98e3ec","#d7ffff","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const a=(1-u)*(1-u);p.ring(0,0,4+25*u,1,C[2],a);for(let i=0;i<8;i++){const q=i*TAU/8,r=8+u*26,x=Math.cos(q)*r,y=Math.sin(q)*r;p.beam(x,y,x+Math.cos(q)*6,y+Math.sin(q)*6,2,C[2+i%2],a);}p.glow(0,0,24,C[1],a*.35);
}
