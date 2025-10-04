export function trocarTema() {
  document.body.classList.toggle('dark');
  localStorage.setItem('tema', document.body.classList.contains('dark') ? 'dark' : 'light');
}

export function carregarTema() {
  const tema = localStorage.getItem('tema') || 'light';
  if (tema === 'dark') document.body.classList.add('dark');
}