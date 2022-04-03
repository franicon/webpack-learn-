function Addimage() {
    
}
Addimage.prototype.newImage = function (image,title) {
    let img = document.createElement('img');
    img.width = 300;
    img.alt = title
    img.src = image
    let body = document.querySelector('body');
    body.appendChild(img);
}

export default Addimage;