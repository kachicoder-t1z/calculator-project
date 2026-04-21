let screen = document.getElementById("result");

// Display par number dikhane ke liye
function display(value) {
    if (screen.value === "0") {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

// Screen saaf karne ke liye (AC)
function clearScreen() {
    screen.value = "0";
}

// Ek ek karke piche se delete karne ke liye (DEL)
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
    if (screen.value === "") screen.value = "0";
}

// Calculation karne ke liye (Hisaab Kitaab)
function calculate() {
    try {
        screen.value = eval(screen.value); // Eval function saari maths khud kar leta hai
    } catch (error) {
        alert("Ghalat Equation! ❌");
        screen.value = "0";
    }
}
