// JavaScript source code
var button = document.querySelector("#myButton");
var paragraph = document.querySelector("#myParagraph");

button.addEventListener("onclick", function () {
  if (paragraph.classList.contains("hidden")) {
    paragraph.classList.remove("hidden");
    button.textContent = "Hide";
  } else {
    paragraph.classList.add("hidden");
    button.textContent = "Toggle";
  }
});
