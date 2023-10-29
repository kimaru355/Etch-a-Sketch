let screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
if (screenWidth > screenHeight) {
  maxSquare = 0.8 * screenHeight;
} else {
  maxSquare = 0.8 * screenWidth;
}

const root = document.querySelector("#root");
root.style.cssText = `margin: 16px; width: ${maxSquare}px; height: ${maxSquare}px; display: flex; flex-direction: column;`;
setGrid = document.querySelector("#setGrid");
console.log(root);

setGrid.addEventListener("click", () => {
  let popup = document.createElement("div");
  let input = document.createElement("input");
  let button = document.createElement("button");
  let instruction = document.createElement("p");
  let warning = document.createElement("p");
  limitmargin = 0.1 * maxSquare;
  popup.style.cssText = `width: ${maxSquare}; height: ${maxSquare}; position: absolute; margin: ${limitmargin}; z-index: 2; border: 2px solid blue; padding: 40px; background-color: #d6d6d4`;
  input.style.cssText = "border: 1px solid aqua; display: inline;";
  instruction.textContent = "Set a value for the grid";
  button.textContent = "Set";
  button.style.cssText =
    "padding: 6px 12px; font-size: 16px; font-type: bold; margin-left: 24px; background-color: #2c5e63; border-radius: 4px;";
  button.addEventListener("click", () => {
    let value = parseInt(input.value);
    let value2 = Number(input.value);
    if (isNaN(value) || isNaN(value2)) {
      warning.textContent = "Pass a number";
    } else if (value > 100) {
      warning.textContent = "Pass a number less than 100";
    } else {
      warning.textContent = "Number passed";
      popup.parentNode.removeChild(popup);
      gridSetter(value);
    }
  });
  popup.appendChild(input);
  popup.appendChild(button);
  popup.appendChild(instruction);
  popup.appendChild(warning);
  setGrid.after(popup);
});

let gridSetter = (length = 16) => {
  while (root.firstElementChild) {
    root.removeChild(root.lastElementChild);
  }
  for (let width = 0; width < length; width++) {
    let div = document.createElement("div");
    div.style.cssText = "display: flex; width: 100%; flex: 1;";
    root.appendChild(div);
    for (let height = 0; height < length; height++) {
      let div2 = document.createElement("div");
      div2.style.cssText = "height: 100%; border: 1px solid red; flex: 1;";
      div2.addEventListener("mouseover", () => {
        div2.style.backgroundColor = "black";
      });
      root.lastElementChild.appendChild(div2);
    }
  }
};

gridSetter();
