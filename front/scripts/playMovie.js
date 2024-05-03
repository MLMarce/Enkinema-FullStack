const screen = document.querySelector('main')

function playMovie(src, title) {
    const player = document.createElement('div')
    player.className = 'playMovie active'
    player.innerHTML = `
            <div class="movieNameContainer">
                <h3 class="movieName">${title}</h3>
                
                <div id="playCloser" class="hamburger closer">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <iframe class="movie" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    `
    screen.appendChild(player)

    const playCloser = document.getElementById('playCloser')

    playCloser.addEventListener('click', () => {
        screen.removeChild(player)
    })
}

module.exports = { playMovie }