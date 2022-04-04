
function Addimage() {
    
}
Addimage.prototype.newImage = function (image) {
    let img = document.createElement('img');
    img.width = 300;
    img.src = image
    let body = document.querySelector('body');
    body.appendChild(img);
}

export default Addimage;