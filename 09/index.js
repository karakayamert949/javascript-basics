clock = document.getElementById('clock');

update();
setInterval(update,1000);

function update() {
    let date = new Date();
    clock.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        hours = formatZeros(hours)
        minutes = formatZeros(minutes)
        seconds = formatZeros(seconds)
        
        return `${hours}:${minutes}:${seconds}`
    }

    function formatZeros(time) {

        if (time.length < 2) {
            time = time.toString();
            time = '0' + time
        }
        return time
    }
}