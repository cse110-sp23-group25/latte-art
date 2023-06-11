
window.onload = function () {
    init();
}

function init () {
    let volbtn = document.getElementById('controls');
    volbtn.addEventListener('click', volumeControl);

    getNews()
}

// fetch news from api
async function getNews() {
    try {
        const apiurl = await (await fetch('../assets/news.json')).json()
        const news = await (await fetch(apiurl.path)).json()
        const items = document.getElementsByClassName('ticker-item')

        for (let i = 0; i < news.articles.length; i++) {
            items[i].innerHTML = 
                `
                <a href="${news.articles[i].url}" target="_blank" rel="noopener noreferrer">
                    <img src="${news.articles[i].urlToImage}" alt="news story">
                    <div>${news.articles[i].title}</div>
                </a>
                `
        }

    } catch (error) {
        console.error('Error fetching news')
        console.error(error)
    }

}


function volumeControl() {
    let icon = document.querySelector('#controls img');
    let aud = document.querySelector('audio');

    if(aud.volume != 0) {
        aud.volume= 0;
        icon.src = './assets/mute.png'
    } 
    else {
        aud.volume = 1;
        icon.src = './assets/volumeon.png';
    }
}
