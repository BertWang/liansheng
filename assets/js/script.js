document.addEventListener('DOMContentLoaded',()=>{
const nav=document.querySelector('.nav');const btn=document.querySelector('.burger');
if(btn){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))})}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}})},{threshold:0.15});
document.querySelectorAll('.animate').forEach(el=>obs.observe(el))
});