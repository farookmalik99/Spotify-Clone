console.log("Welcolme to Spotify")
let songsongIndex = 0
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let progressbar = document.getElementById('progressbar')
let mastersongname = document.getElementById('mastersongname')
let gif = document.getElementById('gif')
// let songitem =Array.from(document.getElementsByClassName('songname'))

let songs = [
    { songname: "Let Me Love You.", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Trap.", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "They Mad.", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: " Rich the Kid", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Creepin'.", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "Calm Down.", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: " Uptown funk.", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Blank Space.", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "Sorry.", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songname: "See You Again.", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" }
]
// songitem.forEach((element, i)=>{
// console.log(element, i)
// element.getElementsByTagName("img")[0].src = songs[i].coverpath
// element.getElementsByClassName("songname")[0].innerText = songs[i].songname
// })

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle')
        masterPlay.classList.add('bi-pause-circle')
        gif.style.opacity = 1
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('bi-pause-circle')
        masterPlay.classList.add('bi-play-circle')
        gif.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

    progressbar.value = progress
})
progressbar.addEventListener('change', () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})



const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('bi-pause-fill');
        element.classList.add('bi-play-fill');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target)
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('bi-play-fill')
        e.target.classList.add('bi-pause-fill')
        audioElement.src = `songs/${songIndex + 1}.mp3`
        mastersongname.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
    })
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
})