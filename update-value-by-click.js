// option 1
function handleOnClick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Handler by function attached on onclick attribute";
}

// option 2
document.getElementById("event-listner").addEventListener("click", function () {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Text updated by add Event listener button";
});

//update using button click
document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  //setting the value
  const p = document.getElementById("input-text-display");
  p.innerText = inputText;

  inputField.value = ""; //to set the value empty string after click
});
