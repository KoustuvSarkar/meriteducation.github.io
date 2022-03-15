$(document).ready(function () {
    $('.menu_toggle').click(function () {
        $('.menu_toggle').toggleClass('active');
        $('nav').toggleClass('active');
    })
})

// FOR FULL DATE
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// SUBMIT BUTTON
function myButton() {
    alert('You Are Successfully Submitted!!');
}

// GOOGLE SHEET SUBMISSION
const scriptURL = 'https://script.google.com/macros/s/AKfycbz-Av2jEfduRZjzIze393cb0btfZQ3CIfOlU7YdJhN2CNKOFvTcHwK25ZCbDOe2Y08Edw/exec'
const form = document.forms['contactform']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})