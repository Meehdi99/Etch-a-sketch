const container = document.querySelector(".container");
const btn = document.querySelector("button");

gridIt();
function gridIt(num = 6) {
  for (let i = 1; i <= num * num; i++) {
    container.style.cssText = "grid-template-columns: repeat(" + num + ",auto)";
    const div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);
  }
  const colored = document.querySelectorAll(".cell");
  colored.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.cssText = "background-color:rgb(40,40,40);";
    });
  });
}

btn.addEventListener("click", () => {
  let num = parseInt(prompt("How many squares per side? (1-100)", 16));
  if (num <= 100 && num != 0 && !isNaN(num)) {
    resetIt(num);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

function resetIt(num) {
  container.innerHTML = "";
  gridIt(num);
}
