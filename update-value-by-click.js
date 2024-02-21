// // option 1
// function handleOnClick() {
//   const handlerStatus = document.getElementById("handler-status");
//   handlerStatus.innerText = "Handler by function attached on onclick attribute";
// }

// // option 2
// document.getElementById("event-listner").addEventListener("click", function () {
//   const handlerStatus = document.getElementById("handler-status");
//   handlerStatus.innerText = "Text updated by add Event listener button";
// });

// //update using button click
// document.getElementById("btn-update").addEventListener("click", function () {
//   const inputField = document.getElementById("input-field");
//   const inputText = inputField.value;

//   //setting the value
//   const p = document.getElementById("input-text-display");
//   p.innerText = inputText;

//   inputField.value = ""; //to set the value empty string after click
// });

//
//
//
//
function changeValue() {
  const changeVal = document.getElementById("header-text");
  changeVal.innerText = "this text is updated text";
}
function changeValue2() {
  const changeVal = document.getElementById("header-text");
  changeVal.innerText = "this is another button's another text";
}

// update text using button taking value from input

document.getElementById("update-button").addEventListener("click", function () {
  const inputField = document.getElementById("input-text");
  const inputValue = inputField.value;

  const p = document.getElementById("default-text");
  p.innerText = inputValue;
  inputField.value = "";
});

//other part
document.getElementById("post-btn").addEventListener("click", function () {
  const textInput = document.getElementById("comment-box");
  const textValue = textInput.value;

  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = textValue;
  commentContainer.appendChild(p);
  textInput.value = "";
});

//github repo delete button
