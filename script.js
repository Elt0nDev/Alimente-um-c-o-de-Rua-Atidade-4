/* script.js - funcionalidade acessibilidade, toggles e formulários
   - Atualiza ano no rodapé
   - Muda temas (claro, escuro, alto contraste)
   - Garante navegação por teclado clara (foco)
   - Valida e processa formulários (simulado)
*/

// Helper: set theme on body and persist preference
const setTheme = (theme) => {
  document.body.classList.remove('dark','high-contrast');
  if(theme === 'dark') document.body.classList.add('dark');
  if(theme === 'contrast') document.body.classList.add('high-contrast');
  try{ localStorage.setItem('site-theme', theme); }catch(e){}
  // update aria-pressed for buttons
  document.querySelectorAll('.access-btn').forEach(btn=>{
    btn.setAttribute('aria-pressed','false');
  });
};

// On load: set year and theme from preference or system
document.addEventListener('DOMContentLoaded', ()=>{
  const yearEls = document.querySelectorAll('#ano');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  // Read saved theme
  const saved = localStorage.getItem('site-theme');
  if(saved === 'dark') setTheme('dark');
  else if(saved === 'contrast') setTheme('contrast');
  else {
    // follow system preference if not set
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    } else setTheme('light');
  }

  // Wire up all access buttons on the page (there are duplicates per HTML)
  document.querySelectorAll('#btn-dark, #btn-dark-2, #btn-dark-3').forEach(b=>{
    b.addEventListener('click', ()=> {
      setTheme('dark');
      b.setAttribute('aria-pressed','true');
    });
  });
  document.querySelectorAll('#btn-light, #btn-light-2, #btn-light-3').forEach(b=>{
    b.addEventListener('click', ()=> {
      setTheme('light');
      b.setAttribute('aria-pressed','true');
    });
  });
  document.querySelectorAll('#btn-contrast, #btn-contrast-2, #btn-contrast-3').forEach(b=>{
    b.addEventListener('click', ()=> {
      setTheme('contrast');
      b.setAttribute('aria-pressed','true');
    });
  });

  // Improve keyboard navigation: visible focus for keyboard users only
  function handleFirstTab(e){
    if(e.key === 'Tab'){
      document.documentElement.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);

  // Simple form handling
  const formDoacao = document.getElementById('formDoacao');
  if(formDoacao){
    formDoacao.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('nome').value || 'Amigo';
      const tipo = document.getElementById('tipoDoacao').value || 'contribuição';
      alert(`Obrigado, ${name}! Recebemos seu cadastro para ${tipo}.`);
      formDoacao.reset();
      formDoacao.querySelector('input, select, textarea')?.focus();
    });
  }

  const formContato = document.getElementById('formContato');
  if(formContato){
    formContato.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Obrigado pelo contato ❤️');
      formContato.reset();
      formContato.querySelector('input, textarea')?.focus();
    });
  }

  // Ensure all links and buttons are keyboard accessible (they already are,
  // but we ensure tabindex on any non-interactive element used as control)
  document.querySelectorAll('[role="button"]').forEach(el=>{
    if(!el.hasAttribute('tabindex')) el.setAttribute('tabindex','0');
  });
});

// Optional: reflect system theme changes live
if(window.matchMedia){
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e=>{
    const saved = localStorage.getItem('site-theme');
    if(!saved){ // only follow system if user hasn't chosen
      if(e.matches) setTheme('dark'); else setTheme('light');
    }
  });
}
