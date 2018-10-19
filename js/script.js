const navLink = document.querySelector("nav a")

let pageNumber = 0

const pages = [
  {
    isrc: "images/testimonials/theo.jpg",
    copy: "Roy is a very nice, very accomplished UX/UI designer who delivers spot on work. In my time working with him, our company saw him as a key contributor to the development of our products, and as a high value, trusted member of the client services team. He has an enviable eye for detail and the ability to really focus on the end user at every stage along a journey: leading to truly valuable work.",
    name: "Theo Bonham Carter",
    title: "Lucidworks",
    number: "1"
  },
  {
    isrc: "images/testimonials/andy.jpg",
    copy: "Roy is an awesome designer who loves simplicity, typography and useful products. Having worked alongside Roy for 3 years I know that he's really dedicated to his work and a great guy to have on your team. I'd fully recommend Roy for any web and mobile app design projects!",
    name: "Andy Shaw",
    title: "Mobext",
    number: "2"
  },
  {
    isrc: "images/testimonials/rob.jpg",
    copy: "Roy created our website from start to finish and did a fantastic job on the creation, styling and usability as well as keeping it orientated around user experience and ultimately conversion goals. Would happily work with Roy again and wouldn't hesitate to recommend him",
    name: "Robert Jones",
    title: "Property Investments UK",
    number: "3"
  },
  {
    isrc: "images/testimonials/russ.jpg",
    copy: "Roy is a good designer who can prototype his own designs and can iterate quickly when working to a tight deadline. He worked well with developers, designers, project managers and clients. A pleasure and honour to work with for 5 years.",
    name: "Russell Barr",
    title: "Bynder",
    number: "4"
  },
  {
    isrc:
    "images/testimonials/matt.jpg",
    copy:
    "Roy is a pleasure to work with and is great at taking the clients input and producing wonderful designs/user interfaces. He worked with the latest web technologies keeping up with the latest trends and works well with the team.",
    name:
    "Matthew Griffiths",
    title:
    "Bynder",
    number: "5"
  },
  {
    isrc:
    "images/testimonials/toby.jpg",
    copy:
    "Roy was a pleasure to work with. A very humble but talented guy, whose flair for design is matched by his technical capability. He's able to quickly iterate through designs in the browser to create interactive interfaces using the latest coding standards.",
    name:
    "Toby O'Brien",
    title:
    "Chatham House",
    number: "6"
  },
  {
    isrc:
    "images/testimonials/landry.jpg",
    copy:
    "Working with Roy at VYRE Ltd before it became NorthPlains Ltd was by far one of the versatile designers I have worked with, talented, resourceful and committed. His attention to details and ability to take a brief and deliver simple, clean yet beautiful design makes him one guy you need on your team.",
    name:
    "Landry Karege",
    title:
    "GlobalData Plc",
    number: "7"
  }
]

const nextTag = document.querySelector(".next")
// const previousTag = document.querySelector(".prev")
const outputTag = document.querySelector(".quote blockquote")
const nameTag = document.querySelector(".quote-wrap cite")
const titleTag = document.querySelector(".quote span")
const imgSrc = document.querySelector(".quote-wrap img")
const numTag = document.querySelector(".number span")

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
  numTag.innerHTML = pages[pageNumber].number
  imgSrc.src = pages[pageNumber].isrc
}

nextTag.addEventListener("click", function() {
  next()
  outputTag.classList.remove("fadeInLeft")
  void outputTag.offsetWidth
  outputTag.classList.add("fadeInLeft")
})

// previousTag.addEventListener("click", function() {
//   previous()
// })

document.addEventListener("keyup", function () {
  if(event.key == "ArrowRight") {
    next()
  }
  // if(event.key == "ArrowLeft") {
  //   previous()
  // }
})
