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
    var rs = getComputedStyle(theme);
    if(rs.getPropertyValue('--clr-bg') !== '#ade8f4'){
        theme.style.setProperty('--clr-bg', '#ade8f4');
        theme.style.setProperty('--clr-text', '#333533');
        theme.style.setProperty('--clr-back-txt', 'rgb(202, 240, 248)');
        theme.style.setProperty('--clr-back-txt-shadow', 'rgb(202, 240, 248, 0.5)');
    }else{
        theme.style.setProperty('--clr-bg', '#10002B');
        theme.style.setProperty('--clr-text', '#C77DFF');
        theme.style.setProperty('--clr-back-txt', 'rgb(38, 2, 100)');
        theme.style.setProperty('--clr-back-txt-shadow', 'rgb(38, 2, 100, 0.5)');
    }

});
/** theme color */