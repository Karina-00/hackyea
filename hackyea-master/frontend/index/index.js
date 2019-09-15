var id;
var tytul;
var opis;


fetch('http://127.0.0.1:8000/api/baza/')
   .then(function(response){
      return response.json();
   })
   .then(function(jsonData){
    jsonData.forEach(function(item){
      artykul(item.id, item.tytul);

    });
});

function artykul(id, tytul)
{
    document.getElementById('blocks').innerHTML += "<div onclick='fullartykul("+id+")' id ="+id+" class='front'>"+tytul+"</div>"
}

function fullartykul(id)
{
    document.getElementById('head').innerHTML = "";
    document.getElementById('blocks').innerHTML = "<div id='tytul'></div><div id='opis'></div>";
    fetch('http://127.0.0.1:8000/api/baza/'+id+'/',{headers:{'Origin':'http://127.0.0.1'}})
    .then(function(response){
       return response.json();
    })
    .then(function(jsonData){
     console.log(jsonData)
       id = jsonData.id;
       tytul = jsonData.tytul;
       opis =  jsonData.opis;
       document.getElementById('tytul').innerHTML += tytul;
       document.getElementById('opis').innerHTML += opis;

    });
}


