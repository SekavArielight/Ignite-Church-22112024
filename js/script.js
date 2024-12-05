gsap.registerPlugin(ScrollTrigger);

gsap.from('.logo',{
    opacity:0,
    delay:1,
    duration:2,
    x:50
})



const menu_items = document.querySelector('nav')
gsap.from(menu_items.children ,{
    opacity:0,
    x:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:1
    }
})

gsap.from('.hero-video',{
    opacity:0,
    delay:2,
    duration:3,
    y:50,
    scrollTrigger: '.section-1'
})

gsap.from('.section-2',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.section-2'
})

gsap.from('.section-3',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.section-3'
})

gsap.from('.section-4',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.section-4'
})

gsap.from('.section-5',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.section-5'
})

gsap.from('.section-6',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.section-6'
})

gsap.from('.section-7',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.section-7'
})

gsap.from('.section-8',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.section-8'
})
gsap.from('.footer',{
    opacity:0,
    duration:1.5,
    y:50,
    scrollTrigger: '.footer'
})