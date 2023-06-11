window.onload = function () {
    init();
}

function init () {
    let profilepic = document.getElementById('profile-pic')
    let inputFile = document.getElementById('input-file')
    let volbtn = document.getElementById('controls')
    volbtn.addEventListener('click', volumeControl)

    inputFile.onchange = function () {
        console.log('change')
        profilepic.style.display = 'block'
        profilepic.src = URL.createObjectURL(inputFile.files[0])
    }

    let submit = document.getElementById('submit')
    let fortune = document.getElementById('fortune')

    submit.addEventListener('click', function () {
        if (profilepic.src.includes('#')) {
            return
        }
        fortune.innerHTML = fortuneSelector(profilepic.src.toString()[profilepic.src.toString().length-36].charCodeAt(0))
    })

}


function volumeControl() {
    let icon = document.querySelector('#controls img');
    let aud = document.querySelector('audio');

    if(aud.volume != 0) {
        aud.volume= 0;
        icon.src = '../assets/mute.png'
    } 
    else {
        aud.volume = 1;
        icon.src = '../assets/volumeon.png';
    }
}

const POSSIBLE_FORTUNES = ['A relationship in your life may face difficulties. Open communication is key to finding resolution.', 'A valuable lesson will be learned from a recent setback. Use it to your advantage.', 'Challenges lie ahead, testing your strength and determination. Stay focused and persevere.', 'Be cautious with your finances. Unexpected expenses may arise, requiring careful budgeting.', 'A minor setback is on the horizon, but don\'t worry. Your resilience will help you overcome it.', 'Beware of false friends and deceptive situations. Trust your instincts and tread carefully.', 'Unexpected good fortune is on its way. Prepare for a windfall that will change your life.', 'Love is in the air! Prepare for a whirlwind romance filled with passion and happiness.', 'Your talents will be recognized and rewarded, bringing you great joy and prosperity.', 'A great opportunity awaits you just around the corner. Success is within your grasp!']

/**
 * generates a four-digit seed based on the the state of the latte art
 * Params:
 *  stats : int - the amount of 'milk' added to the coffee
 * Return:
 *  int - four-digit */
function seedGeneration (stats) { 
    const seed = stats
    if(seed > 1000) {
        return 1000
    }
    if (seed < 0) {
        return 0
    }
    return seed;
}

/**
 * generates generates a fortune based on the given amount of milk using the seedGeneration() function
 * Params:
 *  stats : int - the char code of the first character
 * Return:
 *  fortune: string */
function fortuneSelector (stats) {
    const seed = seedGeneration(stats);
    const fortune = seed % 10;
    return POSSIBLE_FORTUNES[fortune];
}

module.exports = { seedGeneration, fortuneSelector }
