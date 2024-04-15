let observerContact = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})





// Start Repeater Section
observerContact.observe(document.querySelector(".repeater h1"));
observerContact.observe(document.querySelector(".repeater ol"));
// End Repeater Section





// Start Contact Section
observerContact.observe(document.querySelector('.contact'))
// End Contact Section







// Start footer Section
observerContact.observe(document.querySelector("footer"));
// End footer Section