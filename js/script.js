const navLink = document.querySelector("nav a")

// navLink.addEventListener("click", function() {
//   alert("help")
// })


// const quoteTag = document.querySelector(".quote h4")
// quoteTag.innerHTML = "test"
// quoteTag.style.color = "red"

let pageNumber = 0

// content for pages
const pages = [
  // "start",
  // "developer",
  // "designer",
  // "end"
  {
    copy: "Roy is a very nice, very accomplished UX/UI designer who delivers spot on work. In my time working with him, our company saw him as a key contributor to the development of our products, and as a high value, trusted member of the client services team. He has an enviable eye for detail and the ability to really focus on the end user at every stage along a journey: leading to truly valuable work.",
    name: "Theo Bonham Carter",
    title: "&mdash; Senior Creative Director at Lucidworks"
  },
  { copy: "No small talk", name:"andy", title: "&mdash; head"},
  { copy: "Great Designer", name:"rob", title: "&mdash; director"},
  { copy: "Can code", name:"superman", title: "&mdash; superhero"}
]

const nextTag = document.querySelector(".next")
const previousTag = document.querySelector(".prev")
const outputTag = document.querySelector(".quote h4")
const nameTag = document.querySelector(".quote p")
const titleTag = document.querySelector(".quote span")



const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()

}

const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  nameTag.innerHTML = pages[pageNumber].name
  titleTag.innerHTML = pages[pageNumber].title
  // if (outputTag.classList.contains("animate")) {
  //   outputTag.classList.remove("animate")
  // } else {

//   }
}

nextTag.addEventListener("click", function() {
  next()
  outputTag.classList.remove("fadeInLeft")
  void outputTag.offsetWidth
  outputTag.classList.add("fadeInLeft")
})

previousTag.addEventListener("click", function() {
  previous()

})

document.addEventListener("keyup", function () {
  //next()
  console.log(event)

  // if the key pressed is ArrowRight

  if(event.key == "ArrowRight") {
    next()
  }

  if(event.key == "ArrowLeft") {
    previous()
  }

})

//import Swup from 'swup';
// const swup = new Swup();    // only this line when included with script tag
