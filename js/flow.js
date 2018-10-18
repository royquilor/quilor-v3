let flowNumber = 0

const flows = [
  {
    isrc:
    `<img class="br3" src="images/hundoiv/pokemon-1.png" width="320" />`,
    copy:
    "A brief description of what search strings can do and then the user can tap on the pokemon ordered by latest event.",
    title:
    "Landing page",
    number:
    `<svg width="21" height="32" viewBox="0 0 21 32" xmlns="http://www.w3.org/2000/svg"><title>1 copy</title><desc>Created with Sketch.</desc><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF4136" offset="0%"/><stop stop-color="#FF851B" offset="100%"/></linearGradient></defs><path d="M.32.32h20.366v31.68h-4.526v-27.154h-15.84v-4.526zm0 6.789h13.577v24.891h-4.526v-20.366h-9.051v-4.526zm0 6.789h6.789v18.103h-4.526v-13.577h-2.263v-4.526z" fill="url(#a)"/></svg>`,
  },
  {
    isrc:
    `<img class="br3" src="images/hundoiv/pokemon-2.png" width="320" />`,
    copy:
    "User will see a bunch of strings, then hit the copy button. After some feedback, users wanted more options",
    title:
    "Popup",
    number:
    `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>2 copy</title><desc>Created with Sketch.</desc><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF4136" offset="0%"/><stop stop-color="#FF851B" offset="100%"/></linearGradient></defs><path d="M28.686 3.634c2.137 2.137 3.314 4.978 3.314 8v6.789h-4.526v-6.789c0-1.813-.706-3.518-1.988-4.8s-2.987-1.988-4.8-1.988h-20.366v-4.526h20.366c3.022 0 5.863 1.177 8.001 3.314zm-8.001 3.475c1.209 0 2.345.471 3.2 1.326.855.855 1.326 1.991 1.326 3.2v6.789h-4.526v-6.789h-20.366v-4.526h20.366zm-15.84 6.789v13.577h27.154v4.526h-31.68v-18.103h4.526zm6.788 6.788h20.366v4.526h-24.892v-11.314h4.526v6.789zm6.789-2.263h-4.526v-4.526h4.526v4.526z" fill="url(#a)"/></svg>`,
  },
  {
    isrc:
    `<img class="br3" src="images/hundoiv/pokemon-3.png" width="320" />`,
    copy:
    "The copy button falls down, to add some css fun and feedback that the string is copied.",
    title:
    "Copy & Paste",
    number:
    `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>3 copy</title><desc>Created with Sketch.</desc><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF4136" offset="0%"/><stop stop-color="#FF851B" offset="100%"/></linearGradient></defs><path d="M28.935 16.16c1.879 1.659 3.065 4.085 3.065 6.789 0 4.999-4.052 9.051-9.051 9.051h-22.629v-4.526h22.629c2.496 0 4.526-2.03 4.526-4.526 0-2.495-2.03-4.525-4.525-4.525h-15.84v-4.526h15.84c2.496 0 4.526-2.03 4.526-4.525 0-2.496-2.03-4.526-4.526-4.526h-22.629v-4.526h22.629c4.999 0 9.051 4.052 9.051 9.051 0 2.704-1.186 5.13-3.065 6.788zm-3.724-6.788c0 1.248-1.015 2.263-2.263 2.263h-22.629v-4.526h22.629c1.248 0 2.263 1.015 2.263 2.263zm-2.263 11.314c1.248 0 2.263 1.015 2.263 2.263s-1.015 2.263-2.263 2.263h-22.629v-4.526h22.629z" fill="url(#a)"/></svg>`,
  }
]

const nextFlowTag = document.querySelector(".flows .next")
const previousFlowTag = document.querySelector(".flows .prev")
const copyTag = document.querySelector(".flow p")
const headingTag = document.querySelector(".flow h3")
const numberTag = document.querySelector(".flow span")
const imgFlow = document.querySelector(".flow figure")

const nextFlow = function() {
  flowNumber = flowNumber + 1
  if (flowNumber > flows.length - 1) {
    flowNumber = 0
  }
  updateFlow()
}

const previousFlow = function() {
  flowNumber = flowNumber - 1
  if (flowNumber < 0) {
    flowNumber = flows.length - 1
  }
  updateFlow()
}

const updateFlow = function() {
  copyTag.innerHTML = flows[flowNumber].copy
  numberTag.innerHTML = flows[flowNumber].number
  headingTag.innerHTML = flows[flowNumber].title
  imgFlow.innerHTML = flows[flowNumber].isrc
  // imgFlow.src = flows[flowNumber].isrc
}

nextFlowTag.addEventListener("click", function() {
  nextFlow()
  copyTag.classList.remove("fadeInLeft")
  imgFlow.classList.remove("fadeInLeft")
  void copyTag.offsetWidth
  void imgFlow.offsetWidth
  copyTag.classList.add("fadeInLeft")
  imgFlow.classList.add("fadeInLeft")
})

previousFlowTag.addEventListener("click", function() {
  previousFlow()
})

document.addEventListener("keyup", function () {
  if(event.key == "ArrowRight") {
    nextFlow()
  }
  if(event.key == "ArrowLeft") {
    previousFlow()
  }
})
