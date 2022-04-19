const gridCard = document.querySelectorAll("div.grid");
const gridBtn = document.getElementById("grid-btn");
const listBtn = document.getElementById("list-btn");
const gridDisplay = document.getElementById("grid-display");
const listDisplay = document.getElementById("list-display");

//removes active grid class and adds new grid cols
gridBtn.addEventListener("click", function (e) {
  for (let i = 0; i < gridCard.length; i++) {
    if (gridCard[i].classList.contains("col-lg-4")) {
      gridDisplay.classList.remove("d-lg-none");
      gridBtn.classList.remove("text-danger");
      gridCard[i].classList.remove("col-lg-4");
      gridCard[i].classList.remove("col-md-6");
      gridCard[i].classList.remove("col-12");
      gridCard[i].classList.add("col-lg-3");
      gridCard[i].classList.add("col-md-4");
      gridCard[i].classList.add("col-6");
    } else {
      gridCard[i].classList.remove("col-lg-3");
      gridCard[i].classList.remove("col-md-4");
      gridCard[i].classList.remove("col-6");
      gridCard[i].classList.add("col-lg-4");
      gridCard[i].classList.add("col-md-6");
      gridCard[i].classList.add("col-12");
      gridBtn.classList.add("text-danger");
    }
  }
});

// displays list view by removing grid class and adding list class
listBtn.addEventListener("click", function (e) {
  if (gridDisplay.classList.contains("d-lg-none")) {
    listBtn.classList.add("text-secondary");
    listBtn.classList.remove("text-danger");
    gridDisplay.classList.remove("d-lg-none");
    listDisplay.classList.remove("d-lg-block");
    listDisplay.classList.add("d-lg-none");
  } else {
    listBtn.classList.add("text-danger");
    listBtn.classList.remove("text-secondary");
    listDisplay.classList.remove("d-lg-none");
    gridDisplay.classList.add("d-lg-none");
    listDisplay.classList.add("d-lg-block");
  }
});
