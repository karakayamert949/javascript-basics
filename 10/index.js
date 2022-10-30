const beginBtn = document.getElementById('beginBtn');
const animation = document.getElementById('square');

beginBtn.addEventListener('click', begin);

function begin() {
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;

    timerId = setInterval(frame,5);

    function frame() {
        if (x > 200 || y>200) {
            clearInterval(timerId);
        }
        else {
            y += 1;
            x += 1;
            degrees += 1;
            animation.style.left = x + 'px'
            animation.style.top = y + 'px'
            animation.style.transform = "rotateZ("+degrees+"deg)"
        }
    }
}
