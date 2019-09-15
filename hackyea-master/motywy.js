var motywy = document.querySelectorAll('.change-theme span');
var root = document.querySelector(':root');

motywy.forEach((swatch) => {
   swatch.addEventListener('click', (e) => {
      root.style.setProperty('--theme-color', e.target.style.background);
   })
})

