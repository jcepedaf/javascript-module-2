/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

//tarea uno
//setTimeout(function changeBackground() {
    //document.body.style.backgroundColor = "blue"; },5000); 

//tarea dos

function generateNumberRandom() {
    return parseInt(Math.random() * (255 - 0) + 0);
    
};

let i = 0; 
function backgroundChange() {
    //let colors = ["blue", "red", "green", "gray", "brown", "yellow"]; 
    document.body.style.backgroundColor = `rgb(${generateNumberRandom()},${generateNumberRandom()},${generateNumberRandom()})`; 
    //i++;
    //if(i === colors.length){
        //i=0;
    //}
    console.log(generateNumberRandom());

};

setInterval(backgroundChange, 1000);