// selecting elements
const imageEl = document.getElementsByClassName("image-wrap")[0];
const Body = document.querySelector("body");
// functions

// event lisnters
imageEl.addEventListener("dblclick", () => {
  console.log("double Clicked");
  const heartEl = document.createElement("img");
  heartEl.src = "./assets/heart-png-15.png";
  heartEl.classList.add("heart-Img");
  setTimeout(() => {
    heartEl.classList.add("active");
  }, 500);

  setTimeout(() => {
    heartEl.classList.remove("active");
    setTimeout(() => {
      heartEl.remove();
    }, 1100);
  }, 1100);

  Body?.appendChild(heartEl);
});
