function getData() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log(xhr.responseText);
    };
    xhr.open('GET', "https://api.binance.com/api/v3/ticker/price");
    xhr.send();
}
function sendData() {

}
const getButton = document.getElementById('get');

getButton.addEventListener('click', getData);


