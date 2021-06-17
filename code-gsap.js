// OVERLAY
TweenMax.to(".background", 2.4, {
    delay: 3.2,
    top: "-100%",
    ease: Expo.easeInOut
});

// =================================
gsap.from(".me_container", {
    y:100, 
    stagger:0.05, 
    opacity:0, 
    delay: 5.9,
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
    delay: 6
})
// gsap.from('#bio__1', 1.5, {
//     y: '100%',
//     delay: 5.8
// })

// gsap.from('#bio__2', 1.5, {
//     y: '100%',
//     delay: 5.9
// })

// gsap.from('#bio__3', 1.5, {
//     y: '100%',
//     delay: 6
// })

// gsap.from('#bio__4', 1.5, {
//     y: '100%',
//     delay: 6.1
// })
// gsap.from('#bio__5', 1.5, {
//     y: '100%',
//     delay: 6.2
// })
// gsap.from('#bio__6', 1.5, {
//     y: '100%',
//     delay: 6.3
// })
// gsap.from('#bio__7', 1.5, {
//     y: '100%',
//     delay: 6.4
// })

// ==========================
gsap.from('#work', 1.5, {
    y: '100%',
    delay: 6.5
})




