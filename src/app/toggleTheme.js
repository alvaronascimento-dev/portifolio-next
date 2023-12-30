let theme = localStorage.getItem('theme')

console.log(theme)
// localStorage.clear()

if (theme === 'Claro') {
   document.body.classList.remove('dark')
}


if (theme === 'Escuro') {
   document.body.classList.add('dark')
}

console.log(theme === 'Escuro')

const changeTheme = () => {
   document.body.classList.toggle('dark');
   if (theme === 'Escuro') {
      localStorage.setItem('theme', 'Claro');
      document.body.classList.remove('dark');
      setLegend('Claro')
   } else {
      localStorage.setItem('theme', 'Escuro');
      document.body.classList.add('dark')
      setLegend('Escuro')
   }
}