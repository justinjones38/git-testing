

const changeButtonStyle = () => {
    button.classList.toggle("blue");
    if(button.style.backgroundColor === "red") {
        console.log("Clicked")
        button.textContent = "Clicked"

    } else {
        console.log("Not Clicked")
        button.textContent = "Click me";
    }
}

let button = document.getElementById("button");
console.log(button.style.backgroundColor);
button.addEventListener("click", changeButtonStyle);
