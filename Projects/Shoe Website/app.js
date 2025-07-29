
  const scrollContainer = document.querySelector(".content-right")
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -200, // scroll left by 200px
      behavior: "smooth",
    });
  });

  scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: 200, // scroll right by 200px
      behavior: "smooth",
    });
  });
