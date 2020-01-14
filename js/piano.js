const WHITE_KEY = ['z', 'x', 'v', 'b', 'n', 'm'];
const BLACK_KEY = ['s', 'd', 'g', 'h', 'j'];

const key = document.querySelectorAll('.key');
const whitekey = document.querySelectorAll('.key.white');
const blackkey = document.querySelectorAll('.key.black');

key.forEach(key => {
    key.addEventListener('click', () => onPlaySound(key));
});
document.addEventListener('keydown', event => {
    const keyboard = event.key;
    const whiteKeyIndex = WHITE_KEY.indexOf(keyboard);
    const blackKeyIndex = BLACK_KEY.indexOf(keyboard);
    if (!event.repeat) {
        if (whiteKeyIndex > -1) {
            onPlaySound(whitekey[whiteKeyIndex]);
        }
        if (blackKeyIndex > -1) {
            onPlaySound(blackkey[blackKeyIndex]);
        }
    }
});
function onPlaySound(key) {
    const audiokey = document.getElementById(key.dataset.note);
    audiokey.currentTime = 0;
    audiokey.play();
    key.classList.add('active');
    audiokey.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}