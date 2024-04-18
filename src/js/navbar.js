// Nav Bar Toggle: get the id of menu btn
// Build a Starbucks Landing Page Clone from Traversy Media
// https://www.youtube.com/watch?v=x_n2FGNsm0o&t=1s

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu')
// we want to toggle a class called open, the calls the css class to change to open
function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

// selecting both elements from html
// Progress Bar with scrolling
// Javascript Progress Bar Animation Tutorial: Dev Ed
// https://www.youtube.com/watch?v=mJ_SfLJKVs8


const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector('body');
// every time we scroll we want to run the function, we need to get the scroll distance, this gives us the positions and we just want the top value, and gives us the distance from the top of the article 
// documents element gives you the html element 
const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
    // console.log(value);
    if(value<0){
        progressBar.style = '0%';
    }
};
// I want to run this every time that I scroll 
window.addEventListener('scroll', animateProgressBar)


// Sticky Nav
// Vanilla JavaScript Sticky Nav - #JavaScript30 24/30 Wes Bos
// https://www.youtube.com/watch?v=5FLOBCGH3_U

const nav2 = document.querySelector('#main');
// make a function with fixed nav position
// Grab where ever the top of the nav looks 
const topOfNav = nav2.offsetTop
function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav2.offsetHeight;
        document.body.classList.add('fixed-nav')
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav')
    }
    // console.log(topOfNav, window.scrollY);
}
window.addEventListener('scroll', fixNav);

// Transparent navigation menu bar - fixed top on scroll page , using Html Css and Js from Web Zone
// https://www.youtube.com/watch?v=AqSWCNXi5iU

// const nav3 = document.getElementById('nav');
// window.onscroll = function(){
//     if (window.pageYOffset > 100) {
//     nav3.style.background = '';
//     } else {
//         nav3.style.background = 'transparent';
//     }
// }