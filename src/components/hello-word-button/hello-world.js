import './hello-word.scss'
function Greet() {
    this.buttonCssClass = 'hello-button'
}

Greet.prototype.helloWorld = function () {
    console.log('Hello World');
}

Greet.prototype.helloFolks = function () {
    console.log('Hello folks');
}

Greet.prototype.buttonHello = function () {
    
    let helloButtoon = document.createElement('button');
    helloButtoon.innerHTML = 'Hello World'
    helloButtoon.classList.add(this.buttonCssClass);
    helloButtoon.onclick = function () {
        let p = document.createElement('p');
        p.innerHTML = 'Hello World'
        body.appendChild(p);
    }
    let body = document.querySelector('body');
    body.appendChild(helloButtoon)

}

export default Greet