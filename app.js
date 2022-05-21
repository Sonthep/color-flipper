// creat code color  
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//if click button random color 
btn.addEventListener("click",function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    //change color body
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//creat function random
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}