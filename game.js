let niebieski = document.querySelector(".blue");
niebieski.setAttribute("value", 0);

let zolty = document.querySelector(".yellow");
zolty.setAttribute("value", 1);

let zielony = document.querySelector(".green");
zielony.setAttribute("value", 2);

let czarny = document.querySelector(".black");
czarny.setAttribute("value", 3);

let pole = document.querySelector(".hint");

let losowySmiec = document.querySelector(".smiec");

let boy = document.querySelector(".chlopiec");

let guzik = document.querySelector(".btn");
guzik.addEventListener("click", start);

function start()
{
   console.log("jest");
   let los = Math.floor(Math.random()*4);

   let s = document.querySelector(".smiec");
   s.setAttribute("value", los);
   
   
   if(los==0){
      losowySmiec.innerHTML = "<div><img style='max-height: 200px;' src='papier.png'></img></div>"
   }
   else if(los==1){
      losowySmiec.innerHTML = "<div><img style='max-height: 200px;' src='plastik.png'></img></div>"
   }   
   else if(los==2){
      losowySmiec.innerHTML = "<div><img style='max-height: 200px;' src='szklo.jpg'></img></div>"
   }   
   else if(los==3){
      losowySmiec.innerHTML = "<div><img style='max-height: 200px;' src='odpady.png'></img></div>"
   }
   pole.innerHTML = "<h1>Wskazówki:</h1><p>Twoim zadnaniem jest wrzucić śmieci do odpowiednich pojemników. Posegreguj je odpowiednio! </p>";

   boy.innerHTML = "<img src='chlopiec.png' style='height: 550px;'>"

   niebieski.addEventListener("click", niebieskiTest);
   function niebieskiTest(){
      if(los==0){
         pole.innerHTML = "<h1>Gratulacje!</h1><p>Brawo, spróbuj jeszcze raz</p>";
      }
      else{
         pole.innerHTML = "<h1>Ups!</h1><p>Coś poszło nie tak, spróbuj jeszcze raz</p>";
      }
   }

   zolty.addEventListener("click", zoltyTest);
   function zoltyTest(){
      if(los==1){
         pole.innerHTML = "<h1>Gratulacje!</h1><p>Brawo, spróbuj jeszcze raz</p>";
      }
      else{
         pole.innerHTML = "<h1>Ups!</h1><p>Coś poszło nie tak, spróbuj jeszcze raz</p>";
      }
   }
   
   zielony.addEventListener("click", zielonyTest);
   function zielonyTest(){
      if(los==2){
         pole.innerHTML = "<h1>Gratulacje!</h1><p>Brawo, spróbuj jeszcze raz</p>";
      }
      else{
         pole.innerHTML = "<h1>Ups!</h1><p>Coś poszło nie tak, spróbuj jeszcze raz</p>";
      }
   }

   czarny.addEventListener("click", czarnyTest);
   function czarnyTest(){
      if(los==3){
         pole.innerHTML = "<h1>Gratulacje!</h1><p>Brawo, spróbuj jeszcze raz</p>";
      }
      else{
         pole.innerHTML = "<h1>Ups!</h1><p>Coś poszło nie tak, spróbuj jeszcze raz</p>";
      }
   }
}