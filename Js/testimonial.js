let observerTestimonial = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})





// Start Repeater Section
observerTestimonial.observe(document.querySelector(".repeater h1"));
observerTestimonial.observe(document.querySelector(".repeater ol"));
// End Repeater Section





// Start Testimonial Section
observerTestimonial.observe(document.querySelector(".testimonial .heading"));
observerTestimonial.observe(document.querySelector(".testimonial"));
// End Testimonial Section






// Start footer Section
observerTestimonial.observe(document.querySelector("footer"));
// End footer Section