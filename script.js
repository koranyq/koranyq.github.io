const header = document.getElementById('siteHeader');
const backToTop = document.getElementById('backToTop');
const menu = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');
const navLinks = [...nav.querySelectorAll('a')];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateScrollControls() {
  const y = window.scrollY || document.documentElement.scrollTop;
  header.classList.toggle('scrolled', y > 12);
  backToTop.classList.toggle('visible', y > 340);
}
window.addEventListener('scroll', updateScrollControls, {passive:true});
updateScrollControls();
backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior: reducedMotion ? 'instant':'smooth'}));
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
menu.addEventListener('click', () => {const isOpen=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen));menu.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');});
navLinks.forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown', e=>{if(e.key==='Escape') closeMenu();});
document.addEventListener('click', e=>{if(!nav.contains(e.target)&&!menu.contains(e.target))closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>740)closeMenu();});
const sections=[document.body,...document.querySelectorAll('main section[id]')];
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){const hash=entry.target.id==='top'?'#top':'#'+entry.target.id;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===hash));}}},{rootMargin:'-22% 0px -64% 0px',threshold:0});
 document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
}
document.getElementById('year').textContent=String(new Date().getFullYear());
