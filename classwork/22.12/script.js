window.onload = function () {
    let player = document.getElementById('player')

    // Основні властивості та методи
    // play() - починає відтворення з поточної позиції.
    // pause() - призупиняє відтворення аудіо.
    // paused - Якщо відтворення зупино - true
    // currentTime - визначає поточну позицію відтворення в аудіо-доріжці (в секундах). 
    // duration - тривалість аудіо в секундах.
    // muted - true, якщо виключений звук.
    // ended - true, якщо відтворення завершено.
    // currentSrc - стрічка, яка представляє посилання на аудіо-файл.
    // volume - від 0 до 1 - регулювання звуку.

    let playBtn = document.getElementById('playBtn')
    let duration = document.getElementById('duration')
    let range = document.getElementById('range')
    range.max = Math.trunc(player.duration)
    duration.innerText = `00:00 / ${splitTime(player.duration)}`
    playBtn.addEventListener('click', function () {
        if (player.paused) {
            player.play()
            playBtn.value = "STOP"
        } else {
            player.pause()
            playBtn.value = "PLAY"
        }
    })

    player.addEventListener('timeupdate', function () {
        range.value = player.currentTime
        duration.innerText = `${splitTime(range.value)} / ${splitTime(player.duration)}`
    })

    range.addEventListener('input', function () {
        player.currentTime = range.value
    })
    
    function splitTime(sec) {
        let minutes = Math.floor(sec / 60);
        let seconds = Math.floor(sec % 60);
    
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    
        return minutes + ":" + seconds;
    }

}
