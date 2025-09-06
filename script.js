let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    appendValue(key);
  } else if (key === ".") {
    appendValue(".");
  } else if (key === "+") {
    appendValue("+");
  } else if (key === "-") {
    appendValue("-");
  } else if (key === "*") {
    appendValue("*");
  } else if (key === "/") {
    appendValue("/");
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
