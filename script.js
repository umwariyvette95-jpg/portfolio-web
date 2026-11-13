(() => {
  const body = document.body;
  const themeBtn = document.getElementById('th');

  if (!themeBtn) return;

  const applyTheme = () => {
    const isDark = body.classList.contains('dark');
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.textContent = isDark ? 'light' : 'dark';
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  } else if (savedTheme === 'light') {
    body.classList.remove('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
  }

  applyTheme();

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    applyTheme();
  });
})();
