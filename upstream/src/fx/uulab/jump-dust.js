// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Jump dust", desc: "A low dust puff marks takeoff without hiding the player.", tags: ['jump', 'platformer', 'dust'], size: [112,112], origin: [56,56], duration: 0.8, loop: false, fps: 30, bg: "dark", options: { palette: ["#344149","#687b7d","#adc2b4","#e2ead0","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const a=(1-u)*(1-u);for(let i=0;i<7;i++){const x=(i-3)*(3+u*4),y=-u*(5+i%3*3);p.circle(x,y,2+u*(2+i%2),C[1+i%3],a*.8);}p.ring(0,1,4+u*18,1,C[2],a*.5);
}
