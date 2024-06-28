let tracks = [
{
  index: 0,
  name: "Scheming",
  artist: "Ace Savage",
  img: "photos/5.jpg",
  audio: "audios/Ace Savage Scheming.mp3",
  background: "#195B6B",    
  secondColor: "#1D2D3C"  
},
{
  index: 1,
  name: "Let Go",
  artist: "Central Cee",
  img: "photos/6.jpg",
  audio: "audios/Central Cee Let Go.mp3",
  background: "#595760",
  secondColor: "#332324"  
},
{
  index: 2,
  name: "Nwantiti (Ah Ah Ah)",
  artist: "Ckay Love",
  img: "photos/4.jpg",
  audio: "audios/Ckay Love Nwantiti (Ah Ah Ah).mp3",
  background: "#562c91",
  secondColor: "#E935FC"  
},
{
  index: 3,
  name: "Someone Else",
  artist: "Clockclock",
  img: "photos/1.png",
  audio: "audios/Clockclock Someone Else.mp3",
  background: "#9A723C",
  secondColor: "#D5B871"  
},
{
  index: 4,
  name: "Toosie Slide",
  artist: "Drake",
  img: "photos/2.jpg",
  audio: "audios/Drake Toosie Slide.mp3",
  background: "#2F354F",
  secondColor: "#00040a"  
},
{
  index: 5,
  name: "No Role Modelz",
  artist: "J. Cole",
  img: "photos/3.png",
  audio: "audios/J. Cole No Role Modelz.mp3",
  background: "#767E41",
  secondColor: "#353E21"  
},
{
  index: 6,
  name: "Superhero",
  artist: "Metro Boomin",
  img: "photos/10.jpg",
  audio: "audios/Metro Boomin Superhero (Heroes .mp3",
  background: "#D0473D",
  secondColor: "#ba2014"  
},
{
  index: 7,
  name: "Too Many Nights",
  artist: "Metro Boomin",
  img: "photos/9.jpg",
  audio: "audios/Metro Boomin Too Many Nights (Feat. Don Toliver) Ft Future.mp3",
  background: "#101B1D",
  secondColor: "#25392A"  
},
{
  index: 8,
  name: "2055",
  artist: "Sleepy Hallow ",
  img: "photos/7.jpg",
  audio: "audios/Sleepy Hallow 2055.mp3",
  background: "#D252E3",
  secondColor: "#693AD7"  
},
{
  index: 9,
  name: "Goosebumps",
  artist: "Travis Scott",
  img: "photos/8.jpg",
  audio: "audios/Travis Scott Goosebumps.mp3",
  background: "#BD8079",
  secondColor: "#81625D"  
},

];


let trackIndex = 0
let originalOrder = [...tracks];
let audio = new Audio()
let cover = document.querySelector(".cover")
let songTitle = document.querySelector(".songtitle")
let artist = document.querySelector(".artis")
let progressBar = document.querySelector(".bar")
let playPauseButton = document.querySelector(".playpause")
let back = document.getElementById('back')
let next = document.getElementById('next')
let isShuffleOn = false
let isRepeatOn = false
let repeatButton = document.querySelector(".fa-refresh")
let shuffleButton = document.querySelector(".fa-random")

function loadTrack(index) {
  let currentTrack = tracks[index]
  audio.src = currentTrack.audio
  cover.style.backgroundImage = `url('${currentTrack.img}')`
  songTitle.textContent = currentTrack.name
  artist.textContent = currentTrack.artist
  document.body.style.background = currentTrack.background
  playPauseButton.style.backgroundColor = currentTrack.background
  playPauseButton.addEventListener("mouseover", function() {
    playPauseButton.style.backgroundColor = currentTrack.secondColor
  })
  playPauseButton.addEventListener("mouseout", function() {
    playPauseButton.style.backgroundColor = currentTrack.background
  })
  back.style.backgroundColor = currentTrack.background
  back.addEventListener("mouseover", function() {
    back.style.backgroundColor = currentTrack.secondColor
  })
  back.addEventListener("mouseout", function() {
    back.style.backgroundColor = currentTrack.background 
  })
  next.style.backgroundColor = currentTrack.background 
  next.addEventListener("mouseover", function() {
    next.style.backgroundColor = currentTrack.secondColor
  })
  next.addEventListener("mouseout", function() {
    next.style.backgroundColor = currentTrack.background
  })
  updatePlayPauseButton()
}


function togglePlayPause() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
  updatePlayPauseButton()
}

function updatePlayPauseButton() {
  if (audio.paused) {
    playPauseButton.innerHTML = '<i class="fa fa-fw fa-play"></i>'
  } else {
    playPauseButton.innerHTML = '<i class="fa fa-fw fa-pause"></i>'
  }
}

function updateProgressBar() {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.querySelector('.additional-bar').style.width = `${progress}%`
}

function setProgressBar(e) {
  let totalWidth = this.offsetWidth
  let clickX = e.offsetX
  let percentage = (clickX / totalWidth) * 100
  const duration = audio.duration;
  audio.currentTime = (percentage / 100) * duration
}

function nextTrack() {
  progressBar.querySelector('.additional-bar').style.width = 0
  trackIndex = (trackIndex + 1) % tracks.length
  loadTrack(trackIndex)
  audio.play()
  updatePlayPauseButton()
}

function prevTrack() {
  progressBar.querySelector('.additional-bar').style.width = 0
  trackIndex = (trackIndex - 1 + tracks.length) % tracks.length
  loadTrack(trackIndex)
  audio.play()
  updatePlayPauseButton()
}
function toggleRepeat() {
  isRepeatOn = !isRepeatOn
  updateRepeatButton()
}

function updateRepeatButton() {
  if (isRepeatOn) {
    repeatButton.style.color = "#414141"
    audio.loop = true
  } else {
    repeatButton.style.color = "#d3b5b5"
    audio.loop = false
  }
}
function toggleShuffle() {
  isShuffleOn = !isShuffleOn
  updateShuffleButton()
  if (isShuffleOn) {
    shuffleTracks()
  } else {
    tracks = [...originalOrder]
    loadTrack(trackIndex)
  }
}


function updateShuffleButton() {
  if (isShuffleOn) {
    shuffleButton.style.color = "#414141" 
  } else {
    shuffleButton.style.color = "#d3b5b5"
  }
}

function shuffleTracks() {
  if (isShuffleOn) {
    tracks = shuffleArray(originalOrder); 
    loadTrack(trackIndex)
  }
}


function shuffleArray(array) {
  let shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[k]] = [shuffledArray[k], shuffledArray[i]];
  }  
  return shuffledArray
}

audio.addEventListener("ended", function () {
  if (isRepeatOn) {
    audio.currentTime = 0; 
    audio.play();
  } else {
    nextTrack(); 
  }
});


playPauseButton.addEventListener("click", togglePlayPause)
back.addEventListener("click", prevTrack)
next.addEventListener("click", nextTrack)
audio.addEventListener("timeupdate", updateProgressBar)
progressBar.parentElement.addEventListener("click", setProgressBar)
repeatButton.addEventListener("click", toggleRepeat)
shuffleButton.addEventListener("click", toggleShuffle)

loadTrack(trackIndex)
