let niebieski = document.querySelector(".blue");
niebieski.setAttribute("value", 1);

let zolty = document.querySelector(".yellow");
zolty.setAttribute("value", 2);

let zielony = document.querySelector(".green");
zielony.setAttribute("value", 3);

let czarny = document.querySelector(".black");
czarny.setAttribute("value", 4);

let guzik = document.querySelector(".btn");
guzik.addEventListener("click", start);

function start()
{
   console.log("jest");
   let los = Math.floor(Math.random()*5);

   let s = document.querySelector(".smiec");
   s.setAttribute("value", los);
   // console.log(s.value);
   // llllllllllllllllllllll


}