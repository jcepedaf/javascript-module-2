/*Task 1*/

const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");
const jumbotron = document.querySelector(".jumbotron");
const btnLrg = document.querySelector(".btn-lrg");
const btnSecondary = document.querySelector(".btn-secondary");

const chgColor = (color1, color2, color3, color4 = "black") => {

    jumbotron.style.backgroundColor = color1;
    btnLrg.style.backgroundColor = color2;
    btnSecondary.style.backgroundColor = color3;
    btnSecondary.style.color = color4;
}

blueBtn.addEventListener("click", (event) => {
    event.preventDefault();
    chgColor("#588fbd", "#ffa500", "black", "white");
})

orangeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    chgColor("#f0ad4e", "#5751fd", "#31b0d5", "white");
})

greenBtn.addEventListener("click", (event) => {
    event.preventDefault();
    chgColor("#87ca8a", "black", "#8c9c08");
})

/*end task 1*/


/*task 2*/


const mail = document.querySelector("#exampleInputEmail1");
const name = document.querySelector("#example-text-input");
const area = document.querySelector("#exampleTextarea");
const submit = document.querySelector("form button");

function email() {
    if (mail.value.length > 0 && mail.value.includes("@")){
        mail.style.border = "";
    } else {
        mail.style.border = "2px solid red";
    }

}

function ename() {
    if (name.value.length > 0 ){
        name.style.border = "";
    } else {
        name.style.border = "2px solid red";
    }

}

function earea() {
    if (area.value.length > 0 ){
        area.style.border = "";
    } else {
        area.style.border = "2px solid red";
    }

}

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    if(mail.value.length > 0 && name.value.length > 0 && area.value.length > 0 && mail.value.includes("@")){
        mail.value = "";
        name.value = "";
        area.value = "";
        mail.style.border = "1px solid rgba(0,0,0,.15)";
        name.style.border = "1px solid rgba(0,0,0,.15)";
        area.style.border = "1px solid rgba(0,0,0,.15)";

    }else{
        mail.addEventListener("focusout", email());
        name.addEventListener("focusout", ename());
        area.addEventListener("focusout", earea());
        alert("Debes rellenar todo el formulario");

    }
})

