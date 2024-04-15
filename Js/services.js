let observerServices = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})




// Start Repeater Section
observerServices.observe(document.querySelector(".repeater h1"));
observerServices.observe(document.querySelector(".repeater ol"));
// End Repeater Section




// Start Services Section
observerServices.observe(document.querySelector(".services .heading"));
document.querySelectorAll(".services .row div").forEach((box)=>{
    observerServices.observe(box);
})
// End Services Section



// Start Testimonial Section
observerServices.observe(document.querySelector(".testimonial .heading"));
observerServices.observe(document.querySelector(".testimonial"));
// End Testimonial Section




// Start footer Section
observerServices.observe(document.querySelector("footer"));
// End footer Section