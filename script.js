

const changeButtonStyle = () => {
    if(button.style.backgroundColor === "red") {
        button.style.backgroundColor = "blue"
    } else {
        button.style.backgroundColor = "red";
    }
}

let button = document.getElementById("button");
button.addEventListener("click", changeButtonStyle);
