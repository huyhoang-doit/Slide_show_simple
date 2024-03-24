var imgFeature = document.querySelector(".img-feature");
var listImages = document.querySelectorAll(".list-image img");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var currentIndex = 0;

function updateImageByIndex(index) {
  // remove active class
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  });

  currentIndex = index;
  imgFeature.src = listImages[index].getAttribute("src");
  // add active class
  listImages[index].parentElement.classList.add("active");
}

listImages.forEach((imgElement, index) => {
  imgElement.addEventListener("click", (e) => {
    imgFeature.style.opacity = "0";
    // animation
    setTimeout(() => {
      updateImageByIndex(index);
      imgFeature.style.opacity = "1";
    }, 400);
  });
});

prevBtn.addEventListener("click", (e) => {
  imgFeature.style.animation = "";
  if (currentIndex == 0) {
    currentIndex = listImages.length - 1;
  } else {
    currentIndex--;
  }

  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideLeft 0.5s ease-in-out forwards";
  }, 400);
});

nextBtn.addEventListener("click", (e) => {
  imgFeature.style.animation = "";

  if (currentIndex == listImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideRight 0.5s ease-in-out forwards";
  }, 400);
});

updateImageByIndex(currentIndex);
