// OVERLAY
// TweenMax.to(".background", 2.4, {
//     delay: 3.2,
//     top: "-100%",
//     ease: Expo.easeInOut
// });
TweenMax.to(".overlay", 6.1, {
    delay: 1.8,
    top: "-210%",
    ease: Expo.easeInOut
});

// =================================
gsap.from(".me_container", {
    y:100, 
    stagger:0.05, 
    opacity:0, 
    delay: 7.9,
    duration:3.7, 
    ease:"power3.out"
})
// gsap.from(".box-color", {
//     y:100, 
//     stagger:0.05, 
//     opacity:0, 
//     delay: 5.9,
//     duration:3.7, 
//     ease:"power3.out"
// })
gsap.to('#num__1', 2.5, {
    y: '-100%',
    delay: 7
})

// ==========================
gsap.from('#work', 1.5, {
    y: '100%',
    delay: 6.5
})




