

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




const changeSectionColor = (event) => {
    console.log(`I want to click this button. I it is important`);
    event.target.classList.toggle("blue");
}

let sections = document.querySelectorAll(".section");
sections.forEach(section => {
    section.addEventListener("click", changeSectionColor);
});
