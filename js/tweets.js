let tweetNumber = 0

const tweets = [
  {
    isrc: "images/tweets/snaps.jpg",
    copy:
    "iOS users who want to check IVs quickly should take a look at this video. The website I used to copy the string is http://hundoiv.com  so you should check it out! Feel free to share! Note: Always appraise as CP can be the same for different levels. #PokemonGO",
    name: "@pkmnsnaps",
    link: "https://twitter.com/pkmnsnaps/status/1027761510494265344",
    num: "1"
  },
  {
    isrc: "images/tweets/collective-md.jpg",
    copy:
    "If you are looking for a quick way to IV check for tomorrow's event. This is a great help. Found me 2 perfect Larvitars and the lower strings found me a 98 Squirtle.",
    name: "@collective_md",
    link: "https://twitter.com/collective_md/status/1043216933817118726",
    num: "2"
  },
  {
    isrc: "images/tweets/cham.jpg",
    copy:
    "Awesome!! Thank you so much for creating the web app to save us all a ton of time trying to find the best IVs for Eevee. @pokecuno 🙌",
    name: "@SamuraiBirdee",
    link: "https://twitter.com/SamuraiBirdee/status/1027967692429451264",
    num: "3"
  },
  {
    isrc: "images/tweets/cmd.jpg",
    copy:
    "Works like a charm! 😍 Here are just a few jems found in the last few minutes of #CommunityDay using @pokecuno strings. Definitely added a few min to catch more Larvitar!🦖🦖🦖",
    name: "@TeamMysticCMD",
    link: "https://twitter.com/TeamMysticCMD/status/1012371783645913088",
    num: "4"
  }
]

const nextTag = document.querySelector(".tweets .next")
const previousTag = document.querySelector(".tweets .prev")
const outputTag = document.querySelector(".quote blockquote p")
const nameTag = document.querySelector(".quote-wrap cite")
const tweetNumTag = document.querySelector(".number span")
const imgSrc = document.querySelector(".quote-wrap img")

const next = function() {
  tweetNumber = tweetNumber + 1
  if (tweetNumber > tweets.length - 1) {
    tweetNumber = 0
  }
  updateTweet()
}

const previous = function() {
  tweetNumber = tweetNumber - 1
  if (tweetNumber < 0) {
    tweetNumber = tweets.length - 1
  }
  updateTweet()
}

const updateTweet = function() {
  outputTag.innerHTML = tweets[tweetNumber].copy
  nameTag.innerHTML = tweets[tweetNumber].name
  tweetNumTag.innerHTML = tweets[tweetNumber].num
  imgSrc.src = tweets[tweetNumber].isrc
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
  if(event.key == "ArrowRight") {
    next()
  }
  if(event.key == "ArrowLeft") {
    previous()
  }
})
