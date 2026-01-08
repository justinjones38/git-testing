

const changeButtonStyle = () => {
    button.classList.toggle("blue");
    if(button.classList.contains("blue")) {
        button.textContent = "Clicked"

    } else {
        button.textContent = "Click me";
    }
}

let button = document.getElementById("button");
console.log(button.style.backgroundColor);
button.addEventListener("click", changeButtonStyle);
