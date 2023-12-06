// selecting elements
var imageEl = document.getElementsByClassName("image-wrap")[0];
var Body = document.querySelector("body");
// functions
var likeImg = function (e) {
    console.log(e);
    // Access the target element from the event
    var targetElement = e.target;
    // Check if the target element exists
    if (targetElement) {
        var clickedX = e.clientX;
        var clickedY = e.clientY;
        // Access offsetHeight and offsetWidth from the target element
        var offH = targetElement.offsetLeft;
        var offW = targetElement.offsetTop;
        console.log(offH, offW);
        console.log(clickedX, clickedY);
        var hightMeter = clickedX - offH;
        var widthMeter = clickedY - offW;
        console.log(hightMeter, widthMeter);
    }
};
// Event listener
imageEl.addEventListener("dblclick", function (e) {
    likeImg(e);
});
//   console.log("double Clicked");
//   const heartEl = document.createElement("img");
//   heartEl.src = "./assets/heart-png-15.png";
//   heartEl.classList.add("heart-Img");
//   setTimeout(() => {
//     heartEl.classList.add("active");
//   }, 500);
//   setTimeout(() => {
//     heartEl.classList.remove("active");
//     setTimeout(() => {
//       heartEl.remove();
//     }, 1100);
//   }, 1100);
//   Body?.appendChild(heartEl);
