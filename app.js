import {effects} from './upstream/src/fx/index.js';
import {createFrame, clearFrame, createFx, composite, backdrop, painterFor, drawActor, stockActor, actorAlphaOf} from './upstream/src/core/index.js';
const $ = s => document.querySelector(s);
const catNames = {moves:'MOVES',fire:'FIRE',explosions:'EXPLOSION',water:'WATER',ice:'ICE',lightning:'LIGHTNING','sci-fi':'SCI-FI',melee:'MELEE',impacts:'IMPACT',projectiles:'PROJECTILE','spawn-death':'SPAWN',arcane:'ARCANE',holy:'HOLY',shadow:'SHADOW',status:'STATUS',nature:'NATURE',weather:'WEATHER',ui:'UI',pickups:'PICKUP',transitions:'TRANSITION',critters:'CREATURE'};
const catLabel = s => catNames[s] || s.toUpperCase().replaceAll('-', ' ');
function customCategory(tags) {
  const rules=[['ice',['ice','frost']],['fire',['fire','flame','ember']],['lightning',['lightning','electric']],['water',['water']],['sci-fi',['sci-fi','shield','technology']],['moves',['jump','dash','movement','dust']],['melee',['melee','slash','sword']],['impacts',['impact','hit','combat']],['pickups',['pickup','collect','coin']],['ui',['ui','victory','reward','upgrade','crafting']],['status',['warning','danger','telegraph','status']],['nature',['nature','forest','ambient','leaves']],['transitions',['transition','portal']],['holy',['heal','healing']],['arcane',['magic','spell']]];
  const values=tags.map(t=>String(t).toLowerCase());
  return rules.find(([,terms])=>terms.some(t=>values.includes(t)))?.[0] || 'arcane';
}
let all=[], current='all', query='', players=new Set(), detailPlayer=null;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function node(tag, cls, text) { const n=document.createElement(tag); if(cls)n.className=cls; if(text!==undefined)n.textContent=text; return n; }
function buildEffect(id, mod) {
  if (!mod || !mod.meta || (!mod.draw && !mod.create)) return null;
  const meta={name:id.split('/').pop().replaceAll('-',' '),size:[96,96],origin:[48,48],duration:1,fps:30,loop:false,bg:'dark',tags:[],...mod.meta};
  const original=id.startsWith('uulab/');
  return {id, cat:original?customCategory(meta.tags):id.split('/')[0], original, meta, mod:{...mod,meta}};
}
class Player {
  constructor(canvas, fx) {
    this.canvas=canvas;this.fx=fx;this.ctx=canvas.getContext('2d');this.time=0;this.delay=0;this.failed=false;
    const [w,h]=fx.meta.size, [ox,oy]=fx.meta.origin;
    const aspect=1.55, paddedW=Math.max(w*1.28,h*1.28*aspect);this.w=Math.max(1,Math.ceil(paddedW));this.h=Math.max(1,Math.ceil(this.w/aspect));
    this.x=Math.floor((this.w-w)/2)+ox;this.y=Math.floor((this.h-h)/2)+oy;
    canvas.width=this.w;canvas.height=this.h;this.frame=createFrame(this.w,this.h);this.img=this.ctx.createImageData(this.w,this.h);
    try{this.bg=backdrop(fx.meta.bg||'dark',this.w,this.h,this.y);}catch{this.bg=null;}
    this.reset();if(reduce)this.inst.update(Math.min(this.fx.meta.duration * .22, .25));this.draw();
  }
  reset(){this.inst=createFx(this.fx.mod,{x:this.x,y:this.y});this.time=0;this.delay=0;}
  draw(){try{clearFrame(this.frame);this.inst.draw(this.frame,'back');if(this.fx.meta.actor)drawActor(painterFor(this.frame).place(this.x,this.y,false),this.inst.options.actor??stockActor(),actorAlphaOf(this.fx.mod,this.inst.t,this.inst.options));this.inst.draw(this.frame,'front');composite(this.frame,this.img.data,this.bg);this.ctx.putImageData(this.img,0,0);}catch(err){this.failed=true;console.error('Effect render failed:',this.fx.id,err);}}
  tick(dt){if(this.failed||reduce)return;try{if(!this.fx.meta.loop&&this.inst.t>=this.fx.meta.duration){this.delay+=dt;if(this.delay>.45)this.reset();}else this.inst.update(Math.min(dt,.05));this.draw();}catch(err){this.failed=true;console.error('Effect update failed:',this.fx.id,err);}}
}
const observer=new IntersectionObserver(entries=>{for(const e of entries){const item=e.target;if(e.isIntersecting){if(!item._player){try{item._player=new Player(item.querySelector('canvas'),item._effect);}catch(err){console.error(item._effect.id,err);}}if(item._player)players.add(item._player);}else if(item._player)players.delete(item._player);}}, {rootMargin:'120px'});
let last=performance.now(), elapsed=0;function animate(now){const dt=Math.min((now-last)/1000,.05);last=now;elapsed+=dt;if(elapsed>=1/24){for(const p of players)p.tick(elapsed);if(detailPlayer)detailPlayer.tick(elapsed);elapsed=0;}requestAnimationFrame(animate);}requestAnimationFrame(animate);
function showDetail(fx){$('#detailCat').textContent=catLabel(fx.cat)+' / '+fx.id;$('#detailName').textContent=fx.meta.name;$('#detailDesc').textContent=fx.meta.desc||'Pixel effect';const m=$('#detailMeta');m.replaceChildren();for(const value of [fx.meta.loop?'LOOP':'ONE SHOT',`${fx.meta.duration}s`,`${fx.meta.fps} FPS`,fx.original?'GAME SKILLS ORIGINAL':'PIXELFX'])m.append(node('span','',value));$('#detail').showModal();detailPlayer=new Player($('#detailCanvas'),fx);}
$('#close').addEventListener('click',()=>$('#detail').close());$('#detail').addEventListener('close',()=>{detailPlayer=null});$('#detail').addEventListener('click',e=>{if(e.target===$('#detail'))$('#detail').close()});
function drawFilters(){const cats=['all',...new Set(all.map(x=>x.cat))];const f=$('#filters');f.replaceChildren();for(const cat of cats){const b=node('button',cat===current?'active':'',cat==='all'?'전체 효과':catLabel(cat));b.type='button';b.setAttribute('aria-pressed',cat===current?'true':'false');b.onclick=()=>{current=cat;drawFilters();render();};f.append(b);}}
function render(){for(const p of players)players.delete(p);observer.disconnect();const grid=$('#grid');grid.replaceChildren();const q=query.trim().toLowerCase();const filtered=all.filter(fx=>(current==='all'||fx.cat===current)&&(!q||[fx.id,fx.meta.name,fx.meta.desc,...fx.meta.tags].join(' ').toLowerCase().includes(q)));$('#resultCount').textContent=`${filtered.length}개의 효과`;$('#empty').hidden=filtered.length>0;
  const frag=document.createDocumentFragment();filtered.forEach((fx,i)=>{const b=node('button','item');b.type='button';b._effect=fx;b.setAttribute('aria-label',`${fx.meta.name}, 상세 미리보기`);const stage=node('div','stage');const canvas=document.createElement('canvas');canvas.setAttribute('aria-hidden','true');stage.append(canvas,node('span','tile-tag',catLabel(fx.cat)));const info=node('div','item-info'),left=node('div'),title=node('div','item-name',fx.meta.name),sub=node('div','item-sub',fx.meta.loop?'LOOP · LIVE':'ONE SHOT · LIVE');left.append(title,sub);info.append(left,node('span','item-index',String(i+1).padStart(2,'0')));b.append(stage,info);b.onclick=()=>showDetail(fx);frag.append(b);});grid.append(frag);grid.querySelectorAll('.item').forEach(n=>observer.observe(n));}
$('#search').addEventListener('input',e=>{query=e.target.value;render()});$('#reset').onclick=()=>{current='all';query='';$('#search').value='';drawFilters();render()};document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!$('#detail').open){e.preventDefault();$('#search').focus();}});
try{
  const upstream=Object.entries(effects).map(([id,mod])=>buildEffect(id,mod)).filter(Boolean);
  const listUrl=new URL('./api/custom.json', import.meta.url);listUrl.search=new URL(import.meta.url).search;
  const res=await fetch(listUrl);if(!res.ok)throw new Error('custom list unavailable');const names=await res.json();
  const custom=await Promise.all(names.map(async name=>{try{return buildEffect('uulab/'+name.replace(/\.js$/,''),await import(new URL('./upstream/src/fx/uulab/'+encodeURIComponent(name),import.meta.url)));}catch(err){console.error('Custom effect failed:',name,err);return null;}}));
  all=[...custom.filter(Boolean),...upstream];$('#totalCount').textContent=String(all.length);drawFilters();render();
}catch(err){console.error(err);$('#resultCount').textContent='불러오기 실패';const e=$('#error');e.hidden=false;e.textContent='효과 라이브러리를 불러오지 못했습니다. 로컬 서버와 PixelFX 경로를 확인해 주세요.';}
