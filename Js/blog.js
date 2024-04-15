let observerBlog = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})





// Start Repeater Section
observerBlog.observe(document.querySelector(".repeater h1"));
observerBlog.observe(document.querySelector(".repeater ol"));
// End Repeater Section




// Start Our Blog Section
observerBlog.observe(document.querySelector(".our-blog .heading"));
document.querySelectorAll(".our-blog .row .box").forEach((box)=>{
    observerBlog.observe(box);
})
// End Our Blog Section






// Start footer Section
observerBlog.observe(document.querySelector("footer"));
// End footer Section