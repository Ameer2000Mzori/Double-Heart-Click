// selecting elements
var imageEl = document.getElementsByClassName("image-Element")[0];
var imageWrap = document.getElementsByClassName("image-wrap")[0];
// functions
var likeImg = function (e) {
    console.log(e);
    var X = e.clientX;
    var Y = e.clientY;
    var leftOffset = e.target.offsetLeft;
    var topOffset = e.target.offsetTop;
    var insideX = X - leftOffset;
    var insideY = Y - topOffset;
    console.log(X, Y);
    console.log(leftOffset, topOffset);
    console.log(insideX, insideY);
    var heartEl = document.createElement("img");
    heartEl.src = "./assets/heart-png-15.png";
    heartEl.style.position = "absolute";
    imageWrap.style.position = "absolute";
    heartEl.style.top = "".concat(insideY, "px");
    heartEl.style.left = "".concat(insideX, "px");
    heartEl.classList.add("heart-Img");
    setTimeout(function () {
        heartEl.classList.add("active");
    }, 500);
    setTimeout(function () {
        heartEl.classList.remove("active");
        setTimeout(function () {
            heartEl.remove();
            imageWrap.style.position = "";
        }, 600);
    }, 1100);
    imageWrap.appendChild(heartEl);
};
// Event listener
imageWrap.addEventListener("dblclick", function (e) {
    likeImg(e);
});
imageWrap.addEventListener("tab", function (e) {
    likeImg(e);
});
