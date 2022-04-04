import './heading.scss'
function Heading() {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Webpack Heading';
    h1.classList.add('heading');
    let body = document.querySelector('body');
    body.appendChild(h1);
}

export default Heading;