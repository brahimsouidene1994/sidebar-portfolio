/* hamburgor*/
const hamburgor = document.querySelector(".hamburgor");
const separator = document.querySelector(".separator-left");
const sidebar = document.querySelector(".sidebar");

hamburgor.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
    separator.classList.toggle('active');
})
/* hamburgor*/