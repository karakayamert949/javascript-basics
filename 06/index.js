const answer= Math.ceil(Math.random()*9 + 1);
let guesses=0;

document.getElementById('submitBtn').onclick = function(){
    let guess = document.getElementById('guessField').value;
    guesses +=1;

    if (guess==answer){
        alert(`${answer} is the correct number. It took you ${guesses} guesses.`);
    }
    else if(guess > answer){
        alert('Too large');
    }
    else {
        alert('Too small');
    }
}