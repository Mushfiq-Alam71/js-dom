function handleOnClick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Handler by function attached on onclick attribute";
}

// option 2
document.getElementById("event-listner").addEventListener("click", function () {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Text updated by add Event listener button";
});
