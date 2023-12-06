// selecting elements
const imageEl = document.getElementsByClassName("image-Element")[0];
const imageWrap: any = document.getElementsByClassName("image-wrap")[0];
const pEl = document.getElementsByClassName("pEl")[0];
// golobal varibale
let countLikes = 0;

// functions
const likeImg = (e) => {
  countLikes += 1;

  console.log(countLikes);

  const X = e.clientX;
  const Y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const insideX = X - leftOffset;
  const insideY = Y - topOffset;

  console.log(X, Y);
  console.log(leftOffset, topOffset);
  console.log(insideX, insideY);

  const heartEl = document.createElement("img");
  heartEl.src = "./assets/heart-png-15.png";
  heartEl.style.position = "absolute";
  imageWrap.style.position = "absolute";

  heartEl.style.top = `${insideY}px`;
  heartEl.style.left = `${insideX}px`;

  heartEl.classList.add("heart-Img");
  setTimeout(() => {
    heartEl.classList.add("active");
  }, 500);
  setTimeout(() => {
    heartEl.classList.remove("active");

    setTimeout(() => {
      heartEl.remove();
      imageWrap.style.position = "";
    }, 600);
  }, 1100);
  imageWrap.appendChild(heartEl);

  updateLikes(countLikes);
};

// update likes function
const updateLikes = (countLikes) => {
  pEl.textContent = `YOU LIKE IT ${countLikes} TIMES`;
};

// Event listener
imageWrap.addEventListener("dblclick", (e) => {
  likeImg(e);
});
