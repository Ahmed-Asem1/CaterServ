let observerMenu = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})



// Start Repeater Section
observerMenu.observe(document.querySelector(".repeater h1"));
observerMenu.observe(document.querySelector(".repeater ol"));
// End Repeater Section



// Start Menu Section
let ulList = document.querySelectorAll(".menu ul li").forEach((li)=>{
    li.addEventListener("click", (e)=>{
        document.querySelectorAll(".menu .tab-class ul li").forEach((li)=> li.classList.remove('active'))

        let categoryMenuS = e.target.getAttribute('data-filter');
        if(categoryMenuS == 'tab-1'){
            li.classList.toggle("active");
            filterBox(categoryMenuS);
            showAllBox()
        }else{
            removeAllBox();
            li.classList.add("active");
            filterBox(categoryMenuS);
        }
    })
})



function showAllBox (){
    const allDivs = document.querySelectorAll(".menu .tab-content #tab-1");
    allDivs.forEach((div)=>{
        div.classList.add("active");
    })
}
function removeAllBox (){
    const allDivs = document.querySelectorAll(".menu .tab-content #tab-1");
    allDivs.forEach((div)=>{
        div.classList.remove("active");
    })
}

function filterBox (category){
    let allDivs = document.querySelectorAll(".menu .tab-content .boxes.all");
    allDivs.forEach((div)=>{
        if(div.id == category){
            div.classList.add("active")
        }else{
            div.classList.remove("active");
        }
    })
}



observerMenu.observe(document.querySelector(".menu .heading"));

observerMenu.observe(document.querySelector('.menu .tab-class ul'));

document.querySelectorAll(".menu .tab-content #tab-1 .box").forEach((div)=>{
    observerMenu.observe(div);
})
// End Menu Section





// Start Footer Section
observerMenu.observe(document.querySelector("footer"));
// End Footer Section