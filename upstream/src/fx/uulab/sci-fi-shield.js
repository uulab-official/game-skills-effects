// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Sci-fi shield", desc: "A teal energy barrier flickers gently during active protection.", tags: ['shield', 'sci-fi', 'defense', 'loop'], size: [112,112], origin: [56,56], duration: 1.6, loop: true, fps: 30, bg: "dark", options: { palette: ["#103b55","#1b788f","#39c7d1","#9cf5ee","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const ph=t/meta.duration*TAU, a=.65+.2*Math.sin(ph);p.ring(0,0,27,2,C[2],a);p.ring(0,0,23,1,C[1],a*.5);p.glow(0,0,31,C[1],a*.15);
for(let i=0;i<6;i++){const q=i*TAU/6+ph;p.circle(Math.cos(q)*27,Math.sin(q)*27,1.3,C[3],a);}
}
