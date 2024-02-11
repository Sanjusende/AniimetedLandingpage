
var tl = gsap.timeline();
tl.to("#imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2,
// repeat:-1    

}, 'sanju')
tl.to("#text h1,#text p", {
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0,
    // repeat:-1
}, 'sanju')
tl.to("#text h1, #text p", {
    ease: Expo.easeInOut,
    top: "-100%",
    delay: 2,
    stagger: 2,
    // repeat:-1
}, 'sanju')
tl.from("#navbar  li ,nav a", {
    y: -100,
    opaciyt: 0,
    stagger: .2,

}, 'sanju')
