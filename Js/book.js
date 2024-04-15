let observerBook = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})





// Start Repeater Section
observerBook.observe(document.querySelector(".repeater h1"));
observerBook.observe(document.querySelector(".repeater ol"));
// End Repeater Section




// Start Book Us
observerBook.observe(document.querySelector(".book-us .contact"));
// End Book Us




// Start footer Section
observerBook.observe(document.querySelector("footer"));
// End footer Section