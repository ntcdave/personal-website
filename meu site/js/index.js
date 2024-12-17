if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
// Quando o usuário selecionar o modo claro
localStorage.theme = 'light';

// Quando o usuário selecionar o modo escuro
localStorage.theme = 'dark';

// Quando o usuário preferir utilizar o modo do SO.
localStorage.removeItem('theme');

let buttonTheme = document.getElementById('themeToggle');

function themeSwitch() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return;
  } 
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  return;
}

buttonTheme.addEventListener("click", () => {
    themeSwitch();
})