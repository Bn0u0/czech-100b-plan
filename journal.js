(() => {'use strict';const toggle=document.getElementById('nav-toggle');const menu=document.getElementById('mobile-nav');const setOpen=(open)=>{menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'關閉導覽':'開啟導覽');toggle.textContent=open?'關閉':'選單'};toggle.addEventListener('click',()=>setOpen(menu.hidden));menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setOpen(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setOpen(false);toggle.focus()}});document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!toggle.contains(e.target))setOpen(false)});window.addEventListener('resize',()=>{if(window.innerWidth>780)setOpen(false)},{passive:true})  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const progress=document.getElementById('reading-progress-fill');
  let scrollScheduled=false;
  function updateProgress(){
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const fraction=max>0?Math.max(0,Math.min(1,window.scrollY/max)):0;
    if(progress)progress.style.transform='scaleX('+fraction+')';
    scrollScheduled=false;
  }
  window.addEventListener('scroll',()=>{if(!scrollScheduled){scrollScheduled=true;requestAnimationFrame(updateProgress)}},{passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});
  updateProgress();
  const revealItems=[...document.querySelectorAll('.section-heading,.document-note,.section-after,.outcome-layout>div:first-child')];
  revealItems.forEach(el=>el.setAttribute('data-reveal',''));
  const staggerGroups=[...document.querySelectorAll('[data-stagger]')];
  staggerGroups.forEach(group=>[...group.children].forEach((el,i)=>el.style.setProperty('--stagger-delay',Math.min(i*95,380)+'ms')));
  if(!reduceMotion.matches && 'IntersectionObserver' in window){
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}});
    },{rootMargin:'0px 0px -6% 0px',threshold:0.08});
    [...revealItems,...staggerGroups].forEach(el=>observer.observe(el));
    document.documentElement.classList.add('js-motion');
  }
})();