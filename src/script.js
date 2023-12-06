// selecting elements
var imageEl = document.getElementsByClassName("image-Element")[0];
var imageWrap = document.getElementsByClassName("image-wrap")[0];
var pEl = document.getElementsByClassName("pEl")[0];
// golobal varibale
var countLikes = 0;
// functions
var likeImg = function (e) {
    countLikes += 1;
    console.log(countLikes);
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
    updateLikes(countLikes);
};
// update likes function
var updateLikes = function (countLikes) {
    pEl.textContent = "YOU LIKE IT ".concat(countLikes, " TIMES");
};
// Event listener
imageWrap.addEventListener("dblclick", function (e) {
    likeImg(e);
});
