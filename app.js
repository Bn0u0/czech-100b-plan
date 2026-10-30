/* Based on the chapter-driven MapLibre + Scrollama architecture of
   opengeos/maplibre-gl-storymaps, © 2026 Qiusheng Wu (MIT). */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const qs = (s) => document.querySelector(s);
  const qsa = (s) => [...document.querySelectorAll(s)];
  const progress = qs('#scroll-progress');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
      ticking = false;
    });
  }, {passive:true});

  const toggle = qs('#menu-toggle');
  const menu = qs('#mobile-menu');
  function setMenu(open) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
  }
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {setMenu(false); toggle.focus();}
  });
  document.addEventListener('click', (event) => {
    if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });
  window.addEventListener('resize', () => {if (window.innerWidth > 850) setMenu(false);}, {passive:true});

  const buttons = qsa('[data-year]');
  function showEra(year) {
    const era = eras[year];
    if (!era) return;
    buttons.forEach(b=>{const active=b.dataset.year===year;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    qs('#era-year').replaceChildren(document.createTextNode(year), Object.assign(document.createElement('span'), {textContent: '.'}));
    qs('#era-caption').textContent = era.caption;
    qs('#era-title').textContent = era.title;
    qs('#era-description').textContent = era.body;
    qs('#era-source').href = era.url;
    qs('#timeline-indicator').style.left = `${(buttons.findIndex(b=>b.dataset.year===year)/(buttons.length-1))*100}%`;
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => showEra(button.dataset.year));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
      showEra(buttons[next].dataset.year);
    });
  });
  showEra('1918');

  // Upstream template pattern: chapter config -> generated #features .step -> scroll-driven map flyTo.
  const featureContainer = qs('#features');
  config.chapters.forEach((chapter) => {
    const section = document.createElement('article');
    section.className='step';section.id=chapter.id;
    const panel = document.createElement('div');panel.className='chapter-card';
    const topline=document.createElement('div');topline.className='chapter-topline';
    const number=document.createElement('span');number.textContent=`${chapter.number} / 05`;
    const label=document.createElement('span');label.textContent=chapter.label;
    topline.append(number,label);
    const date = document.createElement('p');date.className='chapter-date';date.textContent=chapter.date;
    const title = document.createElement('h3');title.textContent=chapter.title;
    const description=document.createElement('p');description.className='chapter-description';description.textContent=chapter.description;
    const focus=document.createElement('div');focus.className='chapter-focus';focus.textContent=chapter.focus;
    const link=document.createElement('a');link.className='chapter-link';link.href=chapter.link;link.target='_blank';link.rel='noopener noreferrer';link.textContent='閱讀相關機構或史料';
    panel.append(topline,date,title,description,focus,link);section.appendChild(panel);featureContainer.appendChild(section);
  });

  const steps=qsa('.step');
  let map=null;let marker=null;
  function activate(index) {
    steps.forEach((step,i)=>step.classList.toggle('active',i===index));
    qs('#map-active-index').textContent = `${String(index+1).padStart(2,'0')} / 05`;
    if (!map) return;
    const c=config.chapters[index];
    const location={...c.location,essential:true};
    if (reducedMotion.matches) map.jumpTo(location);
    else map.flyTo(location);
    if(marker) marker.setLngLat(c.location.center);
  }
  function setupFallbackScroller() {
    const observer = new IntersectionObserver((entries)=> {
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) activate(steps.indexOf(visible.target));
    },{rootMargin:'-25% 0px -30% 0px',threshold:[0,0.2,0.5]});
    steps.forEach(step=>observer.observe(step));
  }
  function displayMapError(){qs('#map-fallback').hidden=false;}
  if (window.maplibregl) {
    try {
      map = new maplibregl.Map({container:'map',style:config.style,center:config.chapters[0].location.center,zoom:config.chapters[0].location.zoom,bearing:config.chapters[0].location.bearing,pitch:config.chapters[0].location.pitch,interactive:false,attributionControl:true,fadeDuration:reducedMotion.matches?0:300});
      map.on('error',(event)=>{if(event && event.error && !map.loaded()) displayMapError();});
      map.on('load',()=>qs('#map-fallback').hidden=true);
      if (config.showMarkers) marker=new maplibregl.Marker({color:config.markerColor}).setLngLat(config.chapters[0].location.center).addTo(map);
    } catch(e){displayMapError();map=null;}
  } else displayMapError();
  if(window.scrollama){
    const scroller=scrollama();
    scroller.setup({step:'.step',offset:0.52,progress:false}).onStepEnter(({element})=>activate(steps.indexOf(element)));
    window.addEventListener('resize',()=>scroller.resize(),{passive:true});
  } else setupFallbackScroller();
  activate(0);
})();
