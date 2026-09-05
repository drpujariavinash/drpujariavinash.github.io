document.documentElement.classList.add('js');
const button=document.querySelector('.menu');
const links=document.querySelector('.links');
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));links.dataset.open=String(open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&button?.getAttribute('aria-expanded')==='true'){button.setAttribute('aria-expanded','false');links.dataset.open='false';button.focus();}});
