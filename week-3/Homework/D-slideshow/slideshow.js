// Write your code here

let image1 = "./imagenes/image_1.jpg";
let image2 = "./imagenes/image_2.jpg";
let image3 = "./imagenes/image_3.jpg";
let image4 = "./imagenes/image_4.jpg";
let carsImages = [image1, image2, image3, image4];
let imgIndex = 0;
let interval;

const img = document.querySelector("img");
const autoBackBtn = document.getElementById("autoBack");
const backBtn = document.getElementById("back");
const stopBtn = document.getElementById("stop");
const forwardBtn = document.querySelector("#forward");
const autoForwardBtn = document.querySelector("#autoForward");

function showImage(index){
  img.src = carsImages[index];
};

function forwardImage(){
  if(imgIndex >= carsImages.length - 1){
    imgIndex = 0;
  }else {
    imgIndex ++;
  };
  showImage(imgIndex);
};

function backImage(){
  if(imgIndex <= 0){
    imgIndex = carsImages.length -1;
  }else{
    imgIndex --;
  };
  showImage(imgIndex);
};

forwardBtn.addEventListener("click",forwardImage);

backBtn.addEventListener("click",backImage);

stopBtn.addEventListener("click",()=>{
  clearInterval(interval)
  forwardBtn.removeAttribute("disabled");
  backBtn.removeAttribute('disabled');
  autoForwardBtn.removeAttribute('disabled');
  autoBackBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled');
});

autoForwardBtn.addEventListener("click",()=>{
  clearInterval(interval)
  interval = setInterval(forwardImage,1000)
});

autoBackBtn.addEventListener("click",()=>{
  interval = setInterval(backImage,1000)
});

showImage(imgIndex);