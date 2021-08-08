const music  =   document.querySelector("audio");
const play   =   document.getElementById("play");
const img    =   document.querySelector("img");
const body   =   document.querySelector("body");
// const artist =   document.getElementByClassName("artist");
// const song   =   document.getElementByClassName("song-name");
// const next   =   document.getElementById("next");
// const prev   =   document.getElementById("prev");


let isPlaying = false;

// play music function
const PlayMusic = () => {
          isPlaying =  true;
          music.play();
          play.classList.replace("fa-play","fa-pause");
          img.classList.add("anime");
};

// pause music function
const PauseMusic = () => {
      isPlaying =  false;
      music.pause();
      play.classList.replace("fa-pause","fa-play");
      img.classList.remove("anime");
};

// function to change background
var background = [
      "linear-gradient(45deg, red, blue)",
      "linear-gradient(145deg,var(--blue) 0%, var(--dark-blue) 70%)",
      "linear-gradient(145deg, orange 40%, cyan)",
      "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)"
];

var i=0;
const changeBackground = () => {
      if(i<background.length)
      {
            body.style.background = background[i];
            i++;
      }
      else
      {
            i=0;
      }
};

// Songs List
// var songs =[
//       {
//             song:"Sunflower",
//             artist="Post Malone",
//             name:"song1"
//       },
//       {
//             song:"Faded",
//             artist="Alan Walker",
//             name="song2"
//       },
//       {
//             song:"Wake me up",
//             artist="Alan Walker",
//             name="song3"
//       },
//       {
//             song:"Safari",
//             artist="Serena",
//             name="song4"
//       }

// ];

// Song changing function
const loadSong = (songs) => {
      song.textContent = songs.name;
      artist.textContent = songs.artist;
      music.src = "audios/" + songs.name + ".mp3";
      img.src = "images/" + songs.name + ".jpg";
};

let songIndex =0;

const nextSong = () => {
      songIndex = (songIndex+1) % songs.length;
      loadSong(songs[songIndex]);
};

const prevSong = () => {

}

// Events to happen when clicked
play.addEventListener('click', ()=>{
      if(isPlaying)
      {
            PauseMusic();
            changeBackground();
      }
      else
      {
            PlayMusic();
            changeBackground();
      }
});

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

