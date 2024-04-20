let btn = document.querySelector(".button");
let heading = document.querySelector("h1");
let div = document.querySelector(".box");

btn.addEventListener("click",function(){
    let color = generateColor();
    heading.innerText=color;
    div.style.backgroundColor=color;
});

function generateColor(){
    let redColor = Math.floor(Math.random()*256);
    let blueColor = Math.floor(Math.random()*256);
    let greenColor = Math.floor(Math.random()*256);

    let color = `rgb(${redColor},${greenColor},${blueColor})`; 
    return color;
}