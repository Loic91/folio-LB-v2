gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// chaque fois que Locomotive Scroll se met à jour, dire à ScrollTrigger de se mettre à jour également (positionnement de synchronisation)
locoScroll.on("scroll", ScrollTrigger.update);

// dire à ScrollTrigger d'utiliser ces méthodes proxy pour l'élément ".smooth-scroll" puisque Locomotive Scroll détourne des choses
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // nous n'avons pas besoin de définir un scrollLeft car nous ne faisons défiler que verticalement.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll gère les choses de manière complètement différente sur les appareils mobiles - il ne transforme même pas du tout le conteneur! Donc, pour obtenir le bon comportement et éviter les tracas, nous devons épingler les choses avec la position: fixe sur mobile. Nous le détectons en vérifiant s'il y a une transformation appliquée au conteneur (l'élément contrôlé par LocomotiveScroll).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

ScrollTrigger.create({
    trigger: '#work-xl',
    scroller: '.smooth-scroll',

    start: "top bottom",
    end: "top top",
    animation: gsap.from('#work-xl', 1.8, {
                y: '100%',
                delay: 0.5,
    }),
    // markers: true
})
ScrollTrigger.create({
  trigger: '#num__2',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#num__2', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#num__2_1',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#num__2_1', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#num__3',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#num__3', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})

ScrollTrigger.create({
  trigger: '#text_n1',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text_n1', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#text_n2',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text_n2', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#text_n3',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text_n3', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#text_n4',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text_n4', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})

ScrollTrigger.create({
  trigger: '#text-0',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text-0', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#text-1',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text-1', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#text-2',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text-2', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#text-3',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#text-3', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})

// ===============================================================================================================================================================================================================================================================================================================================================================================================================
//PAGE PROJECT-ONE ===========================================

ScrollTrigger.create({
  trigger: '#passion__1',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#passion__1', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#passion__2',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#passion__2', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#passion__3',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#passion__3', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '#passion__4',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('#passion__4', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '.box-color',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.to('.box-color', 2.8, {
              y: '-100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '.text_bloc__one',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('.text_bloc__one', 2.8, {
              y:80, 
              stagger:0.05, 
              opacity:0, 
              delay: 3.5,
              duration:3.5, 
              ease:"power3.out"
  }),
  // markers: true
})
// CARDS (page : index.html)===============================================================================================================================================================================================================================================================================================================================================================================================================
ScrollTrigger.create({
  trigger: '.slider',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('.slider', 1.8, {
              y: '20%',
              delay: 0.5,

              stagger:0.05, 
              opacity:0, 
              duration: 3.5,
  }),
  // markers: true
})
// ScrollTrigger.create({
//   trigger: '.slider',
//   scroller: '.smooth-scroll',

//   start: "top bottom",
//   end: "top top",
//   animation: gsap.from('.slider', 7.8, {
//               y:180, 
//               stagger:0.05, 
//               opacity:0, 
//               delay: 5.5,
//               duration: 3.5, 
//               ease:"power3.out"
//   }),
//   // markers: true
// })

ScrollTrigger.create({
  trigger: '.word-one',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('.word-one', 1.8, {
              y: '100%',
              delay: 0.5,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '.word-two',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('.word-two', 1.8, {
              y: '100%',
              delay: 0.7,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '.word-three',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('.word-three', 1.8, {
              y: '100%',
              delay: 0.7,
  }),
  // markers: true
})
ScrollTrigger.create({
  trigger: '.word-four',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('.word-four', 1.8, {
              y: '100%',
              delay: 0.7,
  }),
  // markers: true
})

ScrollTrigger.create({
  trigger: '.images-container',
  scroller: '.smooth-scroll',

  start: "top bottom",
  end: "top top",
  animation: gsap.from('.images-container', 1.8, {
              y: '20%',
              delay: 0.5,

              stagger:0.05, 
              opacity:0, 
              duration: 3.5,
  }),
  // markers: true
})






// chaque fois que la fenêtre est mise à jour, nous devons actualiser ScrollTrigger puis mettre à jour LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// une fois que tout est configuré, refresh() ScrollTrigger et mettez à jour LocomotiveScroll car un remplissage peut avoir été ajouté pour l'épinglage, etc.
ScrollTrigger.refresh();
