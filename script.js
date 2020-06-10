//Arrays that store the content of the keys
const white_keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç']
const black_keys = ['w', 'e', 't', 'y', 'u', 'o', 'p']

//Accessing the elements we want to change
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

//The loop that will fire when the event occurs
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

//The event listener for when the key is pressed
document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = white_keys.indexOf(key)
  const blackKeyIndex = black_keys.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

//Sets about the audio play
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()

  
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}







