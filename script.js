const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

gsap.from(".page1 h1", {
    opacity: 0,
    y: 40,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "body",
  },
});

gsap.from(".logo img", {
    opacity: 0,
    stagger: 0.4,
    y: -10,
    delay: 0.3,
    scrollTrigger: {
    trigger: ".logo img",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.from(".menu-wrapper", {
  opacity: 0,
    y: -15,
    stagger: 0.4,
    delay: 0.3,
    scrollTrigger: {
    trigger: ".menu-wrapper",
    scroller: "body",
  },
});

gsap.from(".nav-icons", {
    opacity: 0,
    stagger: 0.4,
    y: -15,
    delay: 0.3,
    scrollTrigger: {
    trigger: ".nav-icons",
    scroller: "body",
    start: "top 60%",
  },
});


  gsap.from(".animated-book", {
    opacity: 0,
    scale: 0.7,
    delay: 1.3,
    duration: 1,
    scrollTrigger: {
    trigger: ".animated-book",
    scroller: "body",
},
});

gsap.from(".page2", {
  opacity: 0,
  scale: 1.3,
  stagger: 1,
  delay: 1.3,
  duration: 0.5,
  scrollTrigger: {
  trigger: ".page2",
  scroller: "body",
},
});