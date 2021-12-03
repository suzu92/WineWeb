let bildIndex = 1;
showImg(bildIndex);
function plusSlides(n) {
    showImg(bildIndex += n);
}
function currentSlide(n) {
    showImg(bildIndex = n);
}
function showImg(n) {
    let i;
    let imgs = document.getElementsByClassName("minaBilder");
    let punkter = document.getElementsByClassName("punkt");
    if (n > imgs.length) {bildIndex = 1}
    if (n < 1) {bildIndex = imgs.length}
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    for (i = 0; i < punkter.length; i++) {
        punkter[i].className = punkter[i].className.replace(" active", "");
    }
    imgs[bildIndex-1].style.display = "block";
    punkter[bildIndex-1].className += " active";
}
