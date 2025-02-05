var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about__section",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})


tl.to("#coctelera", {
    top: "140%",
    left: "12%",
    rotate: "360"
}, 'coctelera');

var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".about__section2",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})


tl3.to("#coctelera", {
    top: "252%",
    left: "35%",
    rotate: "720"
}, 'coctelera');


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section", // La sección que activa la animación
        start: "50% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
});

tl2.to(".info-place", { 
    opacity: 1,
    scale: 1,
    y: -30, // Sube 30px
    duration: 1 
})

var tl12 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section", // La sección que activa la animación
        start: "50% 70%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
});

tl12.to(".bartender", { 
    opacity: 1,
    scale: 1,
    y: -30, // Sube 30px
    duration: 1 
})


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section2", // La sección que activa la animación
        start: "60% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
});

tl3.to(".about__section2__p", { 
    opacity: 1, 
    y: -30, // Sube 30px
    duration: 1,
    scale: 1,
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact__section", // La sección que activa la animación
        start: "30% 100%",
        end: "20% 70%",
        scrub: true,
        // markers: true,
    }
});

tl2.to(".contact__h2", { 
    top: "30"
})


var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section2", // La sección que activa la animación
        start: "50% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
});

tl4.to(".p-phone", { 
    opacity: 1,
    scale: 1,
    y: -30, // Sube 30px
    duration: 1 
})



var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section2", // La sección que activa la animación
        start: "50% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
});

tl5.to(".licor", { 
    opacity: 1,
    scale: 1,
    y: 50, // Sube 30px
    duration: 1 
})

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section2", // La sección que activa la animación
        start: "50% 98%",
        end: "50% 60%",
        scrub: true,
        // markers: true,
    }
});

tl6.to(".cacao1", { 
    opacity: 1,
    scale: 1.15,
    bottom: "10",
    rotate: "220",
    duration: 1,
})


var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section2", // La sección que activa la animación
        start: "50% 98%",
        end: "50% 60%",
        scrub: true,
        // markers: true,
    }
});

tl7.to(".cacao2", { 
    opacity: 1,
    scale: 1,
    top: "-100",
    rotate: "-228",
    duration: 1,
})


var tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section2", // La sección que activa la animación
        start: "50% 98%",
        end: "50% 60%",
        scrub: true,
        // markers: true,
    }
});

tl8.to(".cacao3", { 
    opacity: 1,
    scale: .8,
    bottom: "-10",
    rotate: "-10",
    duration: 1,
})


var tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about__section2", // La sección que activa la animación
        start: "50% 90%",
        end: "50% 60%",
        scrub: true,
        // markers: true,
    }
});

tl9.to(".lluvia-cacao", { 
    opacity: 1,
    scale: .85,
    bottom: "-10",
    rotate: "20",
    duration: 1,
})

var tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: ".food__section", // La sección que activa la animación
        start: "50% 90%",
        end: "50% 55%",
        scrub: true,
        // markers: true,
    }
});

tl10.to(".pizza__container", { 
    opacity: 1,
    scale: 1,
    right: "200",
    duration: 1,
})

var tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: ".food__section", // La sección que activa la animación
        start: "50% 87.5%",
        end: "50% 55%",
        scrub: true,
        // markers: true,
    }
});

tl11.to(".food__info", { 
    opacity: 1,
    scale: 1,
    left: "0",
    duration: 1,
})
