var submitBTN = document.querySelector("#submit");

submitBTN.addEventListener("submit", function () {
  event.preventDefault();
  let userInput = document.querySelector("#city").value;
  console.log(userInput);
  getCoord(userInput);
});

function getCoord() {
  let url = "http api";
}
