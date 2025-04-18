let music = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
let musicPlaying = false;

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
    } else {
        music.play();
    }
    musicPlaying = !musicPlaying;
}

function showMessage() {
    document.getElementById('message').style.display = 'block';
}
