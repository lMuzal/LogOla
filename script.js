const cert1 = document.querySelector('.certificate1');
const cert2 = document.querySelector('.certificate2');
const cert3 = document.querySelector('.certificate3');
const cert4 = document.querySelector('.certificate4');
const menuButton = document.querySelector('.menu-button');
const menuBar = document.querySelector('.menu-bar');
const hamburg = document.querySelector('.fa-bars');

menuButton.addEventListener("click", () => {
  var x = menuBar;
  if (x.style.translate === "0px") {
    x.style.translate = "-1500px";
    hamburg.style.rotate = "z 0deg";
    } else {
      x.style.translate = "0px";
      hamburg.style.rotate = "z 360deg";
    }
  }
  
);

addEventListener('DOMContentLoaded', () =>{
  cert1.style.translate = '0%';
  cert1.style.rotate = '360deg';
  setTimeout(function (){
    cert2.style.translate = '0%';
    cert2.style.rotate = '360deg';
  }, 1000);
  setTimeout(function (){
    cert3.style.translate = '0%';
    cert3.style.rotate = '360deg';
  }, 2000);
  setTimeout(function (){
    cert4.style.translate = '0%';
    cert4.style.rotate = '360deg';
  }, 3000);

})


// cert1.addEventListener("click", (e) =>{
//   cert1.style.scale = '3';
//   cert2.style.scale = '1';
//   cert3.style.scale = '1';
//   cert4.style.scale = '1';
//   cert1.style.margin = '11%';
//   cert2.style.margin = '2%';
//   cert3.style.margin = '2%';
//   cert4.style.margin = '2%';

// })

// cert2.addEventListener("click", (e) =>{
//   cert1.style.scale = '1';
//   cert2.style.scale = '3';
//   cert3.style.scale = '1';
//   cert4.style.scale = '1';
//   cert1.style.margin = '2%';
//   cert2.style.margin = '11%';
//   cert3.style.margin = '2%';
//   cert4.style.margin = '2%';
// })

// cert3.addEventListener("click", (e) =>{
//   cert1.style.scale = '1';
//   cert2.style.scale = '1';
//   cert3.style.scale = '3';
//   cert4.style.scale = '1';
//   cert1.style.margin = '2%';
//   cert2.style.margin = '2%';
//   cert3.style.margin = '11%';
//   cert4.style.margin = '2%';
// })

// cert4.addEventListener("click", (e) =>{
//   cert1.style.scale = '1';
//   cert2.style.scale = '1';
//   cert3.style.scale = '1';
//   cert4.style.scale = '3';
//   cert1.style.margin = '2%';
//   cert2.style.margin = '2%';
//   cert3.style.margin = '2%';
//   cert4.style.margin = '11%';
// })