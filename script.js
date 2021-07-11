/**intro animation */
const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to('.text-hide',{y:'0%', duration:1, stagger:0.25});
tl.to('.slider-intro',{y:'-100%', duration:1.5, delay:0.5});
tl.to('.intro',{y:'-100%', duration:1},"-=1.25");
tl.fromTo('.starting-text',{opacity:0},{opacity:1, duration:1});

/**intro animation */
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

/**active link item */
// Add active class to the current button (highlight it)
var header = document.getElementById("my-navlinks");
var btns = header.getElementsByClassName("link-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-link");
  current[0].className = current[0].className.replace(" active-link", "");
  this.className += " active-link";
  });
}
/**active link item */