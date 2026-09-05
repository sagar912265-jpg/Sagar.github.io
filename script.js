let count = Number(localStorage.getItem("count")) || 0;

document.querySelector("#count").textContent = count;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    document.querySelector("#themeBtn").textContent = "☀️";
}

function sayHello() {
    count++;
    document.querySelector("#count").textContent = count;
    localStorage.setItem("count", count);
    document.querySelector("h1").textContent = "Button dabaya gaya! 🎉";
}

function resetCount() {
    count = 0;
    document.querySelector("#count").textContent = count;
    localStorage.setItem("count", count);
    document.querySelector("h1").textContent = "Hello! 👋";
}

function toggleTheme() {
    document.body.classList.toggle("light");

    const themeBtn = document.querySelector("#themeBtn");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}
