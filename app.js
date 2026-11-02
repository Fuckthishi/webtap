const root = document.documentElement;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches) root.classList.add('js-motion');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold: 0.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const stages = [
  {small:'FIRST, MAKE THEM', word:'STOP.', copy:'Start with an idea. Find the moment worth watching.'},
  {small:'THEN, MAKE THEM', word:'FEEL.', copy:'Find the rhythm. Let every cut carry the story forward.'},
  {small:'FINALLY, MAKE IT', word:'STICK.', copy:'Refine the details. Leave them with something to remember.'}
];
const editSection = document.querySelector('.edit-experience');
const scrubber = document.querySelector('#edit-scrubber');
let currentStage = -1;
function setEdit(value) {
  const progress = Math.max(0, Math.min(1, value));
  root.style.setProperty('--edit',progress);
  scrubber.value = Math.round(progress * 100);
  const frame = Math.floor(progress * 450);
  document.querySelector('#edit-time').textContent = `00:${String(Math.floor(frame/30)).padStart(2,'0')}:${String(frame%30).padStart(2,'0')}`;
  const stage = Math.min(2,Math.floor(progress*3));
  if(stage !== currentStage) {
    currentStage = stage;
    document.querySelector('#screen-small').textContent = stages[stage].small;
    document.querySelector('#screen-word').textContent = stages[stage].word;
    document.querySelector('#stage-copy').textContent = stages[stage].copy;
    document.querySelectorAll('.stage-list span').forEach((el,i)=>el.classList.toggle('active',i===stage));
  }
}
let scheduled = false;
function onScroll() {
  if(scheduled) return;
  scheduled = true;
  requestAnimationFrame(()=>{
    const total = root.scrollHeight-innerHeight;
    root.style.setProperty('--progress',total>0?scrollY/total:0);
    const stickyTop = innerWidth<=700 ? 73 : 88;
    const rect = editSection.getBoundingClientRect();
    setEdit((stickyTop-rect.top)/Math.max(1,editSection.offsetHeight-(innerHeight-stickyTop)));
    scheduled = false;
  });
}
addEventListener('scroll',onScroll,{passive:true});
addEventListener('resize',onScroll);
scrubber.addEventListener('input',()=>setEdit(Number(scrubber.value)/100));
onScroll();
const motionToggle = document.querySelector('#motion-toggle');
let paused = reducedMotion.matches;
function updateMotion(){
  root.classList.toggle('paused',paused);
  motionToggle.setAttribute('aria-pressed',String(paused));
  motionToggle.setAttribute('aria-label',paused?'Play motion':'Pause motion');
  motionToggle.textContent=paused?'▶':'Ⅱ';
  document.querySelector('.live-indicator').textContent=paused?'Ⅱ PAUSED':'● LIVE';
}
motionToggle.addEventListener('click',()=>{paused=!paused;updateMotion()});
updateMotion();
let ticks=0;
setInterval(()=>{
  if(paused || document.hidden) return;
  ticks=(ticks+1)%120;
  document.querySelector('.art-time').textContent=`00:${String(Math.floor(ticks/10)).padStart(2,'0')}:${String(ticks%10*3).padStart(2,'0')}`;
},100);
const dialog=document.querySelector('#brief-dialog');
document.querySelector('#open-brief').addEventListener('click',()=>{dialog.showModal();document.body.classList.add('modal-open')});
document.querySelector('#close-brief').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
document.querySelector('#brief-form').addEventListener('submit',event=>{
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject=`WEBTAP project inquiry — ${data.get('type')}`;
  const body=`Hi WEBTAP,\n\nI'm ${data.get('name')}.\n\nProject type: ${data.get('type')}\n\nProject details:\n${data.get('details')}\n\nIdeal deadline: ${data.get('deadline')||'Flexible / to discuss'}\nBudget: ${data.get('budget')||'To discuss'}\n\nThanks,\n${data.get('name')}`;
  document.querySelector('#gmail-draft').href=`https://mail.google.com/mail/?view=cm&fs=1&to=webtap.site%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#email-fallback').hidden=false;
  location.href=`mailto:webtap.site@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
document.querySelector('#year').textContent=new Date().getFullYear();
