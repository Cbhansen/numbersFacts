// Random number fact generator -- vanilla JavaScript

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factTect');

let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactAjax);

function getFactAjax() {
    //console.log(number);
    let number = numberInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/'+number);

    xhr.onload = function() {
        if ( this.status == 200 && number != '') {
            console.log(this.responseText);
            fact.style.display = 'block';
            fact.innerHTML = this.responseText;
        }
    }

    xhr.send();
}