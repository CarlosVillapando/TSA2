document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".container button");
  const boxes = document.querySelectorAll(".square");

  btns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      boxes.forEach(function (box) {
        box.classList.remove("falling");
      });

      boxes[index].classList.add("falling");

      if (index > 0)
        setTimeout(function () {
          boxes[index - 1].style.backgroundColor = boxes[index - 1].style.borderColor;
          boxes[index - 1].classList.remove("falling");
        }, 1000);
    });
  });
});
