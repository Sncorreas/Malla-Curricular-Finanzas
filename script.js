const grid = document.getElementById("grid");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => {
    cell.style.background = cell.style.background === "yellow" ? "white" : "yellow";
  });
  grid.appendChild(cell);
}
