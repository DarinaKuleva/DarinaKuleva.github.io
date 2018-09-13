var link = document.querySelector(".offer-btn");
var popup = document.querySelector(".search-modal");
var login = popup.querySelector("[name=check-in]");

link.addEventListener("click", function (event) {
  if (!popup.classList.contains("search-modal-show")) {
    event.preventDefault();
    popup.classList.add("search-modal-show");
    login.focus();
  } else {
    event.preventDefault();
    popup.classList.remove("search-modal-show");
  }
});
