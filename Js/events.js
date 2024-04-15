let observerEvents = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})




// Start Repeater Section
observerEvents.observe(document.querySelector(".repeater h1"));
observerEvents.observe(document.querySelector(".repeater ol"));
// End Repeater Section



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






observerEvents.observe(document.querySelector(".events .heading"));
observerEvents.observe(document.querySelector(".events .tab-class ul"));

document.querySelectorAll(".events .tab-content #tab-1 .box").forEach((box)=>{
    observerEvents.observe(box);
})

// End Events Section 






// Start Book Us Section
observerEvents.observe(document.querySelector(".book-us .contact"))
// End Book Us Section




// Start Footer Section
observerEvents.observe(document.querySelector("footer"));
// End Footer Section