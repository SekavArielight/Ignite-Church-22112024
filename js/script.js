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

gsap.from('.section-1',{
    opacity:0,
    delay:2,
    duration:3,
    y:50,
    scrollTrigger: '.section-1'
})