
// Start Spinner Loading
let spanSpinner = document.querySelector("span.loader");
window.addEventListener("load", function (){
    spanSpinner.classList.toggle("active-anmi");
})
// End Spinner Loading



// First Ul
let ulNav = document.querySelectorAll(".navbar .nav-link").forEach((a)=>{
    a.addEventListener("click", ()=>{
        document.querySelectorAll(".navbar .nav-link").forEach((a)=>a.classList.remove('active'))
        spanSpinner.classList.toggle("active-anmi");
        a.classList.add("active")
    })
})




// Start Navbar
let iSearch = document.querySelector(".navbar .icon-search");
let iClose = document.querySelector(".navbar div.search i.close");
let divSearch = document.querySelector(".navbar .icon div.search");

iSearch.addEventListener("click", ()=>{
    divSearch.classList.add("show");
    document.body.style.overflow = 'hidden';
})

iClose.addEventListener("click" , ()=>{
    divSearch.classList.remove("show");
    document.body.style.overflow = '';
});
// End Navbar



// Second Ul {dropdown}
// let ulDropdown = document.querySelectorAll('.dropdown-menu .dropdown-item');

// ulDropdown.forEach((a)=>{
//     a.addEventListener('click', ()=>{
//         // ulDropdown.forEach((a)=> a.classList.remove('active'));
//         a.parentElement.parentElement.parentElement.firstElementChild.classList.add('active')
//         // e.target.classList.add('active');
//         a.classList.add('active');
//         // console.log(e.target);
//     })
// })


// ulDropdown.forEach((a)=>{
//     a.onclick = (e) =>{
//         // console.log(e);
//         console.log(a);
//     }
// })



// Start Button Scroll Top
let scrollToTopButton = document.querySelector(".btn-scroll-top");

window.onscroll = () => {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        scrollToTopButton.classList.add("isVisibility")
    }else{
        scrollToTopButton.classList.remove("isVisibility");
    }
}

scrollToTopButton.onclick = () =>{
    window.scroll({
        top:0,
    })
}
// End Button Scroll Top




function animateValue (item,duration, start = 0){
    let end = item.innerText;
    let increment = (end / (duration / 10)); // 

    if(end < start){
        increment *= -1;
    }
    let current = start;

    let timer = setInterval(() => {
        current +=Math.ceil(increment);
        item.innerText = current;
        if(current >= end){
            item.innerText = end;
            clearInterval(timer)
        }
    }, 1);
}

document.querySelectorAll(".fact .row .row .value").forEach((item)=>{
    animateValue(item,6000)
})