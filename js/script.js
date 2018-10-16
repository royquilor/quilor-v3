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
  {
    isrc: "images/testimonials/theo.jpg",
    copy: "Roy is a very nice, very accomplished UX/UI designer who delivers spot on work. In my time working with him, our company saw him as a key contributor to the development of our products, and as a high value, trusted member of the client services team. He has an enviable eye for detail and the ability to really focus on the end user at every stage along a journey: leading to truly valuable work.",
    name: "Theo Bonham Carter",
    title: "Lucidworks"
  },
  {
    isrc: "images/testimonials/andy.jpg",
    copy: "Roy is an awesome designer who loves simplicity, typography and useful products. Having worked alongside Roy for 3 years I know that he's really dedicated to his work and a great guy to have on your team. I'd fully recommend Roy for any web and mobile app design projects!",
    name: "Andy Shaw",
    title: "Mobext"
  },
  {
    isrc: "images/testimonials/rob.jpg",
    copy: "Roy created our website from start to finish and did a fantastic job on the creation, styling and usability as well as keeping it orientated around user experience and ultimately conversion goals. Would happily work with Roy again and wouldn't hesitate to recommend him",
    name: "Robert Jones",
    title: "Property Investments UK"
  },
  {
    isrc: "images/testimonials/russ.jpg",
    copy: "Roy is a good designer who can prototype his own designs and can iterate quickly when working to a tight deadline. He worked well with developers, designers, project managers and clients. A pleasure and honour to work with for 5 years.",
    name: "Russell Barr",
    title: "Bynder"
  }
]

const nextTag = document.querySelector(".next")
const previousTag = document.querySelector(".prev")
const outputTag = document.querySelector(".quote h4")
const nameTag = document.querySelector(".quote-wrap p")
const titleTag = document.querySelector(".quote span")
const imgSrc = document.querySelector(".quote-wrap img")

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
  // imgSrc.innerHTML = pages[pageNumber].isrc
  imgSrc.src = pages[pageNumber].isrc
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
