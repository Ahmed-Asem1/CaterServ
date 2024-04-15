

// Start Landing Section
let imageLanding = document.querySelector(".landing .image")

window.addEventListener("load", function () {
    imageLanding.classList.toggle("show-animat");
})
// End Landing Section


let observer = new IntersectionObserver((entries,observer) => {
    entries.filter(e => e.isIntersecting).forEach((entry)=> {
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    });
});



// Start About Section
observer.observe(document.querySelector(".about .image"));
observer.observe(document.querySelector(".about .title"));
// End About Section






let observerTwo = new IntersectionObserver((entries,observer) =>{
    entries.filter(e => e.isIntersecting).forEach((entry)=> {
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    });
});



// Start Fact Section

document.querySelectorAll(".fact .row .row div").forEach(div =>{
    observerTwo.observe(div);
});

observerTwo.observe(document.querySelector(".fact .video"));
// End Fact Section








let observerThree = new IntersectionObserver((entries,observer) => {
    entries.filter(e => e.isIntersecting).forEach((entry)=> {
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    });
});


// Starat Services Section
observerThree.observe(document.querySelector(".services .heading"));

document.querySelectorAll(".services .row div").forEach((box)=>{
    observerThree.observe(box);
})

// End Services Section







// Start Events Section

let allUl = document.querySelectorAll(".events .tab-class ul li").forEach((li)=>{
    li.addEventListener("click", (event)=>{
        document.querySelectorAll(".events .tab-class ul li").forEach(li =>{
            li.classList.remove("active");
        })

        const filterValue = event.target.getAttribute('data-filter');
        if(filterValue == 'tap-1'){
            li.classList.add("active");
            showAllImages();
        }else{
            li.classList.add("active");
            filterImages(filterValue);
        }
    })
})


function showAllImages (){
    const allDivImages = document.querySelectorAll(".events .tab-content div");
    allDivImages.forEach((div)=>{
        div.classList.add("active");
    })
}

function filterImages(category){
    const allDivImages = document.querySelectorAll(".events .tab-content div");
    allDivImages.forEach(div => {
        if(div.id == category){
            div.classList.add("active");
        }else{
            div.classList.remove("active");
        }
    });
}




let overLay = document.querySelector(".events .overlay");
let divImageZoom = document.querySelector(".image-zoom img");
let iconClose = document.querySelector(".events .image-zoom i.close");

let iconszoom = document.querySelectorAll(".events .tab-content i").forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        divImageZoom.parentElement.classList.add("image-popup")
        document.body.style.overflowY="hidden";
        iconClose.style.cssText = "visibility: visible";
        overLay.style.cssText = "visibility: visible";
        divImageZoom.src = icon.parentElement.children[1].src;
    })
})

iconClose.addEventListener("click", ()=>{
    divImageZoom.parentElement.classList.remove("image-popup")
    document.body.style.overflowY="auto";
    iconClose.style.cssText = "visibility: hidden";
    overLay.style.cssText = "visibility: hidden";
    divImageZoom.src = "";
})






observerThree.observe(document.querySelector(".events .heading"));
observerThree.observe(document.querySelector(".events .tab-class ul"));

document.querySelectorAll(".events .tab-content #tab-1 .box").forEach((box)=>{
    observerThree.observe(box);
})

// End Events Section





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



observerThree.observe(document.querySelector(".menu .heading"));

observerThree.observe(document.querySelector('.menu .tab-class ul'));

document.querySelectorAll(".menu .tab-content #tab-1 .box").forEach((div)=>{
    observerThree.observe(div);
})
// End Menu Section






// Start Book Us 
observerThree.observe(document.querySelector(".book-us .contact"))
// End Book Us 




// Start Our Team 
observerThree.observe(document.querySelector(".our-team .heading"));
document.querySelectorAll(".our-team .box").forEach((box)=>{
    observerThree.observe(box);
})
// End Our Team 
 







// Start Testimonial Section
observerThree.observe(document.querySelector(".testimonial .heading"))

observerThree.observe(document.querySelector(".testimonial"));
// End Testimonial Section







// Start Our Blog Section
observerThree.observe(document.querySelector(".our-blog .heading"));
document.querySelectorAll(".our-blog .row .box").forEach((box)=>{
    observerThree.observe(box);
})
// End Our Blog Section




// Start footer Section
observerThree.observe(document.querySelector("footer"));
// End footer Section