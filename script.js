(() => {
 const buttons=document.querySelectorAll('[data-language]');
 function setLanguage(lang){
  lang=lang==='zh'?'zh':'en';
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(el=>{el.textContent=el.dataset[lang]});
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===lang)));
  document.title=lang==='en'?'Guopeng Zhong':'钟国鹏 · Guopeng Zhong';
 }
 buttons.forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
 const content=document.querySelector('.content');
 document.querySelectorAll('[data-scroll-top]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  const target=getComputedStyle(content).overflowY==='auto'?content:window;
  target.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  history.replaceState(null,'','#main');
 }));
 setLanguage('en');
})();
