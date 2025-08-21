let display = document.getElementById("display");
display.textContent = "";  

let nums = [0,1,2,3,4,5,6,7,8,9,"."];
let currentValue = "";
let buttons = document.querySelectorAll(".grid-container button");

let val1 = 0;
let values = "";
let operation = null;
let firstnum = true;

function result(v1, v2, operation) {
    if (operation === "+") return v1 + v2;
    if (operation === "-") return v1 - v2;
    if (operation === "/") return v1 / v2;
    if (operation === "x") return v1 * v2;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
        currentValue = "";
        values = "";
        operation = "";
        val1 = 0;
        firstnum = true;
    }
    if (button.textContent === "C") {
        currentValue = currentValue.slice(0, -1);
        if (!firstnum) values = values.slice(0, -1);
    }
    else if (firstnum === true) {
            if (nums.includes(Number(button.textContent))) {
            currentValue += button.textContent;     
        } 
            else if (button.textContent === "+") {
                val1 = Number(currentValue);
                currentValue = currentValue + " + ";
                firstnum = false;
                operation = "+";
            }
            else if (["+","-","/","x"].includes(button.textContent)) {
            val1 = Number(currentValue);
            currentValue = currentValue + " " + button.textContent + " ";
            firstnum = false;
            operation = button.textContent;
        }
    }
    else if (firstnum === false) {
        if (nums.includes(Number(button.textContent))) {
            currentValue += button.textContent;     
            values += button.textContent;
        }
        else if (button.textContent === "=") {
            currentValue = result(val1, Number(values), operation);
            firstnum = true;
            values = "";
        }
    }
    display.textContent = currentValue;     
  });
});