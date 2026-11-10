(()=>{'use strict';
 const root=document.documentElement;const toggle=document.querySelector('.theme-toggle');const symbol=document.querySelector('.theme-symbol');
 function updateThemeButton(){const isDark=root.dataset.theme!=='light';if(symbol)symbol.textContent=isDark?'☀':'☾';if(toggle)toggle.setAttribute('aria-label',isDark?'Switch to light theme':'Switch to dark theme');}
 updateThemeButton();toggle?.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;try{localStorage.setItem('michael-portfolio-theme',next)}catch(e){}updateThemeButton()});
 const menuButton=document.querySelector('.mobile-toggle');const menu=document.getElementById('primary-nav');
 menuButton?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
 menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open')){menu.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.focus()}});
 document.getElementById('copyright-year').textContent=String(new Date().getFullYear());
})();
