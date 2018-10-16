const animatedTags = document.querySelectorAll("h1, .hero img, .cta")

//fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0;
})

const fadeIn = function () {
//console.log("fade in")
// look at all animated animatedTag

let delay = 0.1

animatedTags.forEach(tag => {
  const tagTop = tag.getBoundingClientRect().top
  const tagBottom = tag.getBoundingClientRect().bottom
  //console.log(tagTop, tagBottom)

  if (tagTop < window.innerHeight && tagBottom > 0) {
    //tag.style.animation = "fadein 1s 1s both"
    tag.style.animation = `fadein 200ms ${delay}s both`
    delay = delay + 0.1
  } else {
    tag.style.opacity = 0
    tag.style.animation = ""
  }
})
}
// on load run fade in
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
  fadeIn()
})

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
  fadeIn()
})
