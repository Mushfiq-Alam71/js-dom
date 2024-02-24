document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById("delete-btn");
    if (text === "delete") {
      deleteButton.removeAttribute("disabled");
    } else {
      deleteButton.setAttribute("disabled", true);
    }
  });

document.getElementById("delete-btn").addEventListener("click", function () {
  const defaultLine = document.getElementById("default-line");
  defaultLine.style.display = "none";
});
