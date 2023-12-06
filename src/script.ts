// selecting elements
const imageEl = document.getElementsByClassName("image-wrap")[0];
const Body = document.querySelector("body");
// functions
const likeImg = (e) => {
  console.log(e);

  // Access the target element from the event
  const targetElement = e.target;

  // Check if the target element exists
  if (targetElement) {
    const clickedX = e.clientX;
    const clickedY = e.clientY;

    // Access offsetHeight and offsetWidth from the target element
    const offH = targetElement.offsetLeft;
    const offW = targetElement.offsetTop;

    console.log(offH, offW);
    console.log(clickedX, clickedY);

    const hightMeter = clickedX - offH;
    const widthMeter = clickedY - offW;

    console.log(hightMeter, widthMeter);
  }
};

// Event listener
imageEl.addEventListener("dblclick", (e) => {
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
