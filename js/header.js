// when i scroll at a certain point, make header white

// find target
const headerTag = document.querySelector("header")

// do something
const toggleHeader = function () {
  const pixels = window.pageYOffset

  if(pixels > 64) {
    headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }

}

const fadeBox = function () {
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 200, 0.15)
  headerTag.style.boxShadow = `0 0 1px 1px rgba(0,0,0, ${alpha})`
}

// run command
toggleHeader()
fadeBox()

document.addEventListener("scroll", function () {
  toggleHeader()
  fadeBox()
})
