let observeRepeater = new IntersectionObserver((entries,observer)=>{
    entries.filter((e => e.isIntersecting)).forEach((entry)=>{
        entry.target.classList.add("show-animat");
        observer.unobserve(entry.target);
    })
})

// Start Repeater Section
observeRepeater.observe(document.querySelector(".repeater h1"));
observeRepeater.observe(document.querySelector(".repeater ol"));
// End Repeater Section




// Start About Section
observeRepeater.observe(document.querySelector('.about .image'))
observeRepeater.observe(document.querySelector('.about .title'))
// End About Section




// Start Fact Section
document.querySelectorAll(".fact .row .row div").forEach((div)=>{
    observeRepeater.observe(div);
})

observeRepeater.observe(document.querySelector(".fact .video"));
// End Fact Section




// Start Our Team
observeRepeater.observe(document.querySelector(".our-team .heading"));
document.querySelectorAll(".our-team .box").forEach((box)=>{
    observeRepeater.observe(box);
})
// End Our Team






// Start footer Section
observeRepeater.observe(document.querySelector("footer"));
// End footer Section