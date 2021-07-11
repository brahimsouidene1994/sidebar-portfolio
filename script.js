/* hamburgor*/
const hamburgor = document.querySelector(".hamburgor");
const separator = document.querySelector(".separator-left");
const sidebar = document.querySelector(".sidebar");

hamburgor.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
    separator.classList.toggle('active');
})
/* hamburgor*/
/** theme color */
const theme = document.querySelector(":root");
const mode = document.querySelector(".theme-mode");

mode.addEventListener('click',()=>{
    theme.classList.toggle('dark');
})
/** theme color */