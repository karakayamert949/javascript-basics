document.getElementById('submitBtn').onclick = function () {

    const subscribeState=document.getElementById('subscribeCheckbox');
    const visaBtn=document.getElementById('visaBtn');
    const masterBtn=document.getElementById('masterBtn');
    const paypalBtn=document.getElementById('paypalBtn');


    if (subscribeState.checked) {
        console.log('You are subscribed');
    }
    else{
        console.log('You are not subscribed');
    }

    if (visaBtn.checked) {
        console.log('You are paying with a Visa');
    }
    else if (masterBtn.checked) {
        console.log('You are paying with a Master');
    }
    else if (paypalBtn.checked) {
        console.log('You are paying with a Paypal');
    }
    else {
        console.log('You have to select a payment type');
    }
}