const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hide");
});