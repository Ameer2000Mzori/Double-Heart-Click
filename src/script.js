// selecting elements
var imageEl = document.getElementsByClassName("image-wrap")[0];
var Body = document.querySelector("body");
// functions
// event lisnters
imageEl.addEventListener("dblclick", function () {
    console.log("double Clicked");
    var heartEl = document.createElement("img");
    heartEl.src = "./assets/heart-png-15.png";
    heartEl.classList.add("heart-Img");
    setTimeout(function () {
        heartEl.classList.add("active");
    }, 500);
    setTimeout(function () {
        heartEl.classList.remove("active");
        setTimeout(function () {
            heartEl.remove();
        }, 1100);
    }, 1100);
    Body === null || Body === void 0 ? void 0 : Body.appendChild(heartEl);
});
