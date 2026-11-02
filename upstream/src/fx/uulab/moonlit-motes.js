// UULab original effect using the PixelFX renderer.
import { fit, clamp, TAU, WHITE } from "../../core/index.js";
export const meta = { name: "Moonlit motes", desc: "Soft firefly motes travel in a seamless loop.", tags: ['ambient', 'forest', 'fireflies', 'loop'], size: [112,112], origin: [56,56], duration: 4.0, loop: true, fps: 30, bg: "dark", options: { palette: ["#213b40","#428076","#8ccaa5","#ffe2a2","#ffffff"], seed: 3 } };
export function draw(p,t,o) { const C=fit(o.palette,5), u=clamp(t/meta.duration);

const phase=t/meta.duration*TAU;for(let i=0;i<12;i++){const a=i*2.4, x=Math.cos(a)*30+Math.sin(phase+i)*5,y=Math.sin(a)*25+Math.cos(phase+i*.7)*4;const k=.35+.65*(.5+.5*Math.sin(phase+i));p.dot(x,y,C[i%2?3:2],k);p.glow(x,y,4,C[3],k*.25);}
}
