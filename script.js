const container = document.querySelector(".container");
gridit(16);

function gridit(num) {
  for (let i = 1; i <= num * num; i++) {
    container.style.cssText = "grid-template-columns: repeat(" + num + ",auto)";
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
  }
}

function resetit() {
  container.innerHTML = "";
  colored.forEach((cell) => {
    cell.style.cssText = "background-color: white;";
  });
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  resetit();
  let num = parseInt(prompt("How many squares per side?", 16));
  if (num > 100) {
    alert("Max is 100");
    return;
  } else if (isNaN(num)) {
    alert("Enter a number");
    return;
  }
  gridit(num);
});
const colored = document.querySelectorAll(".cell");
colored.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.cssText = "background-color: black;";
  });
});
