const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
function closeMenu(){menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service-select').value=link.dataset.service;}));
document.querySelector('#vehicle-form').addEventListener('submit',e=>{
  e.preventDefault();const data=new FormData(e.currentTarget);const value=name=>String(data.get(name)||'').trim();
  const message=['Olá, Paulin Auto Center!',value('nome')?`Meu nome é ${value('nome')}.`:'',`Veículo: ${value('veiculo')}`,value('km')?`Quilometragem: ${value('km')}`:'',`Assunto: ${value('servico')}`,value('detalhes')?`Detalhes: ${value('detalhes')}`:'','Gostaria de consultar o atendimento e a disponibilidade.'].filter(Boolean).join('\n');
  window.open('https://wa.me/556184295779?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
  const status=document.querySelector('#form-status');status.replaceChildren(document.createTextNode('Mensagem preparada. Se o WhatsApp não abriu, '));const fallback=document.createElement('a');fallback.href='https://wa.me/556184295779?text='+encodeURIComponent(message);fallback.target='_blank';fallback.rel='noopener noreferrer';fallback.textContent='abra sua mensagem aqui';status.append(fallback,document.createTextNode('.'));
});
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}});},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
