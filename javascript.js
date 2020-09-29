
//fruits

const tl = gsap.timeline()
.to('.no1', {scale: 1.25, durationL: 1})
.to('.no1', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no2', {scale: 1.25, durationL: 1})
.to('.no2', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no3', {scale: 1.25, durationL: 1})
.to('.no3', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no4', {scale: 1.25, durationL: 1})
.to('.no4', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no5', {scale: 1.25, durationL: 1})
.to('.no5', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no6', {scale: 1.25, durationL: 1})
.to('.no6', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no7', {scale: 1.25, durationL: 1})
.to('.no7', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no8', {scale: 1.25, durationL: 1})
.to('.no8', {scale: 1, durationL: 1})
const tl = gsap.timeline()
.to('.no9', {scale: 1.25, durationL: 1})
.to('.no9', {scale: 1, durationL: 1})


GSDevtools.create();
 
//Crayon



const tl = gsap.timeline({
  scrollTrigger: {
    markers: true,
    start: "bottom bottom",
    toggleActions: "restart complete reverse none",
  },
  repeat: -1,
  yoyo: true,

})
.to(".crayon", {x: 1vh})
.to(".crayon", {x: 9vh})
.to(".crayon", {rotation: 0deg})
.to("crayon", {rotation: 35deg})
                



