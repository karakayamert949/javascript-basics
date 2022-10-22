document.getElementById('submitBtn').onclick = function () {
    let temp = Number(document.getElementById('textBox').value);

    if (document.getElementById('cBtn').checked) {
        temp = toCelsius(temp);
        document.getElementById('tempLabel').innerHTML = `${temp} *C`;

    }
    else if (document.getElementById('fBtn').checked) {
        temp = toFahrenheit(temp);
        document.getElementById('tempLabel').innerHTML = `${temp} *F`;

    }
    else{
        document.getElementById('tempLabel').innerHTML = 'Select a unit';
    }
}

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}
