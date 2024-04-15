let observer404Error = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})





// Start Repeater Section
observer404Error.observe(document.querySelector(".repeater h1"));
observer404Error.observe(document.querySelector(".repeater ol"));
// End Repeater Section





// Start Error Page
observer404Error.observe(document.querySelector('.error .box'))
// End Error Page


// Start footer Section
observer404Error.observe(document.querySelector("footer"));
// End footer Section