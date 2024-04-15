let observerTeam = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})





// Start Repeater Section
observerTeam.observe(document.querySelector(".repeater h1"));
observerTeam.observe(document.querySelector(".repeater ol"));
// End Repeater Section





// Start Our Team 
observerTeam.observe(document.querySelector(".our-team .heading"));
document.querySelectorAll(".our-team .box").forEach((box)=>{
    observerTeam.observe(box);
})
// End Our Team 




// Start footer Section
observerTeam.observe(document.querySelector("footer"));
// End footer Section