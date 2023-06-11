
window.onload = function () {
    init();
}

function init () {
    let volbtn = document.getElementById('controls')
    volbtn.addEventListener('click', volumeControl)

    getFacts()
}

// fetch facts from json
async function getFacts() {
    try {
        const info = await (await fetch('./assets/facts.json')).json()
        const idx = Math.floor(Math.random() * 5)
        const transition = document.createElement('div')
        transition.className = 'ticker-transition'

        for (let i = 0; i < 5; i++) {
            const itm = document.createElement('div')
            itm.className = 'ticker-item'
            itm.innerHTML = info.facts[5 * i + idx]
            transition.appendChild(itm)
        }

        const wrapper = document.getElementById('ticker-wrapper')
        wrapper.appendChild(transition)

    } catch (error) {
        console.error('Error fetching facts')
        console.error(error)
    }

}


function volumeControl() {
    let icon = document.querySelector('#controls img')
    let aud = document.querySelector('audio')

    if(aud.volume != 0) {
        aud.volume= 0;
        icon.src = './assets/mute.png'
    } 
    else {
        aud.volume = 1;
        icon.src = './assets/volumeon.png'
    }
}
