
const container = document.querySelector(".container");
const btnRainbow = document.querySelector(".btnRainbow");
const btnChangeGrid = document.querySelector(".btnChangeGrid");
const btnToggleGrid = document.querySelector(".btnToggleGrid");
const btnReset = document.querySelector(".btnReset");
const colorPicker = document.querySelector("#color");
let selectedColor = "#000000";

function randomColor(){
    return Math.floor(Math.random() * 255); //vraca broj izmedju 0 i 255
}

for(let i = 0; i < 256; i++){
    createDiv();
}
mouseoverDivs();


function createDiv(){
    const div = document.createElement("div");

    if(btnToggleGrid.classList.contains("btnClicked")){
        div.style.cssText = "border: none; background-color:white;";
    }
    else{
        div.style.cssText = "border: 1px solid black; background-color: white;";
    }
    container.appendChild(div);
}

function mouseoverDivs(){
    const divList = document.querySelectorAll("div");

    if(btnRainbow.classList.contains("btnClicked")){

        for(let i = 0; i < divList.length; i++){
            divList[i].addEventListener("mouseover", () => {
                divList[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            });
        }
    }
    else{
        for(let i = 0; i < divList.length; i++){
            divList[i].addEventListener("mouseover", () => {
                divList[i].style.backgroundColor = `${selectedColor}`;
            });
        }
    }
}

// PICK A COLOR
colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
});

// MAKE NEW GRID

btnChangeGrid.addEventListener("click", () => {
    
    const divList = document.querySelectorAll("div");

    let gridSize = Number(prompt("Enter the number of squares per side: "));
    if(!(Number.isInteger(gridSize))){
        alert("Invalid input, enter a whole number!");
        return;
    }

    if(gridSize <= 0){
        alert("You need to enter a number larger then 0!")
        return;
    }
    if(gridSize > 100){
        alert("Maximum size is 100 squares!");
        return;
    }
    
    //Deleting the grid
    for(let i = 0; i < divList.length; i++){
        divList[i].remove();
    }

    //Adding new grid
    container.style.gridTemplateRows = `repeat(${gridSize},${1}fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize},${1}fr)`; //responzivne su kockice zbog ovo 1fr :D
    for(let i = 0; i < gridSize*gridSize; i++){
        createDiv();
    }

    mouseoverDivs();
});


// DISABLE GRID LINES BTN

btnToggleGrid.addEventListener("click", () => {
    const divList = document.querySelectorAll("div");

    if(btnToggleGrid.classList.contains("btnClicked")){
        for(let i = 0; i < divList.length; i++){
            divList[i].style.border = "1px solid black";
        }
        btnToggleGrid.classList.remove("btnClicked");
        return;
    }
    for(let i = 0; i < divList.length; i++){
        divList[i].style.border = "none";
    }
    btnToggleGrid.classList.add("btnClicked");
    
});


// RESET

btnReset.addEventListener("click", () => {
    const divList = document.querySelectorAll("div");
    
    for(let i = 0; i < divList.length; i++){
        divList[i].style.backgroundColor = "white";
    }
});


// RAINBOW MODE

btnRainbow.addEventListener("click", () => {

    const divList = document.querySelectorAll("div");

    if(!(btnRainbow.classList.contains("btnClicked"))){
        btnRainbow.classList.add("btnClicked");

        for(let i = 0; i < divList.length; i++){
            divList[i].addEventListener("mouseover", () => {
                divList[i].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            });
        }
    }
    else{
        btnRainbow.classList.remove("btnClicked");

        for(let i = 0; i , divList.length; i++){
            divList[i].addEventListener("mouseover", () => {
                divList[i].style.backgroundColor = `${selectedColor}`;
            });
        }
    }   
});