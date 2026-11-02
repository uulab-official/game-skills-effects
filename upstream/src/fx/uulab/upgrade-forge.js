// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Upgrade forge", desc: "A bright forge flare and rising sparks for a successful upgrade.", tags: ['upgrade', 'crafting', 'reward'], size: [112,112], origin: [56,56], duration: 1.2, loop: false, fps: 30, bg: "dark", options: { palette: ["#392434","#9d452d","#f58d37","#ffe29c","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const a=(1-u);p.glow(0,5,26,C[2],a*.4);p.ring(0,8,4+u*23,2,C[2],a*.7);
for(let i=0;i<12;i++){const x=(i-5.5)*3+Math.sin(i*8+u*7)*3,y=7-u*(22+i%4*8);p.beam(x,y,x,y-3,1.5,i%3?C[2]:WHITE,a);}
}
