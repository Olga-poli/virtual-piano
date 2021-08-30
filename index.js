let buttons = {
    'KeyA': document.getElementById('kbd-A'),
    'KeyS': document.getElementById('kbd-S'),
    'KeyD': document.getElementById('kbd-D'),
    'KeyF': document.getElementById('kbd-F'),
    'KeyG': document.getElementById('kbd-G'),
    'KeyH': document.getElementById('kbd-H'),
    'KeyJ': document.getElementById('kbd-J'),
    'KeyW': document.getElementById('kbd-W'),
    'KeyE': document.getElementById('kbd-E'),
    'KeyT': document.getElementById('kbd-T'),
    'KeyY': document.getElementById('kbd-Y'),
    'KeyU': document.getElementById('kbd-U'),
}

document.addEventListener('keydown', (event) => {
        let name = event.key.toUpperCase();
        let code = event.code;
        if (Object.keys(buttons).includes(code)) {

            buttons[code].setAttribute('class', 'key-down');
            // console.log(buttons[code]);
            return createAudioObj(event.code);
        } else {
            console.log(`Unbound ${name} key is pressed.\r\n Key code value: ${code}`)
        }
    }
);

document.addEventListener('keyup', (event) => {
        let name = event.key.toUpperCase();
        let code = event.code;
        if (Object.keys(buttons).includes(code)) {
            buttons[code].removeAttribute('class', 'key-down');
        } else {
            console.log(`Unbound ${name} key is pressed.\r\n Key code value: ${code}`)
        }
    }
);

function createAudioObj(eventCodeName) {
    let audio = new Audio(pathToAudio(eventCodeName));

    // audio.controls = true;
    audio.play()
        .then(r => console.log(r))
        .catch(e => console.log(e))
}

function pathToAudio(eventCodeName) {
    return `keys_sounds/${eventCodeName.slice(3)}.mp3`
}