// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Portal bloom", desc: "A violet doorway shimmers with orbiting motes.", tags: ['portal', 'magic', 'loop'], size: [112,112], origin: [56,56], duration: 2.0, loop: true, fps: 30, bg: "dark", options: { palette: ["#22153f","#56317b","#a263c5","#e2b3ef","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const phase=t/meta.duration*TAU;const breathe=.85+.15*Math.sin(phase);p.glow(0,0,27,C[2],.3*breathe);p.ring(0,0,22,3,C[2],.85);p.ring(0,0,18,1,C[3],.8);
for(let i=0;i<8;i++){const a=i*TAU/8+phase,x=Math.cos(a)*23,y=Math.sin(a)*23;p.circle(x,y,1.5,C[3],.9);p.glow(x,y,3,C[3],.25);}
}
