// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Verdant heal", desc: "A gentle pulse with ascending leaves indicates recovery.", tags: ['heal', 'support', 'nature'], size: [112,112], origin: [56,56], duration: 1.4, loop: false, fps: 30, bg: "dark", options: { palette: ["#17473b","#28765b","#67be7d","#c6efad","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const a=1-u; p.ring(0,16,4+u*25,1,C[2],a*.7);p.glow(0,0,20,C[2],a*.25);
for(let i=0;i<8;i++){const ph=i*TAU/8, x=Math.cos(ph+u*3)*(8+i%3*3),y=14-u*43+Math.sin(ph)*5;p.circle(x,y,1.2+i%2,C[2+i%2],a);}
}
