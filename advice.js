document.getElementById('search').addEventListener('click', weather);

var temperat;
var wind;
var dataih;
var godzinka;
var chmurki;
var x;
var y;
var z;


function test(temperat,wind,chmurki,x,y,z)
{
    if(temperat>30)
    {
        document.getElementById('result').innerHTML+="<div><div class='termometr'><p>It's gonna be hot out there! You better hide, the sun is watching you...</p></div><div class='napis'><div>"+x+"</br>"+y+":"+z+"</div> </br> <div>"+temperat+"&#176C</div> </br> "+wind+" m/s</br>"+chmurki+"</div></div>";
    }
    else if (temperat>25)
    {
        document.getElementById('result').innerHTML+="<div><div class='termometr'><p>It will be hot, but stable. Wear something nice and say hello to the sun!</p></div><div class='napis'><div>"+x+"</br>"+y+":"+z+"</div> </br> <div>"+temperat+"&#176C</div> </br> "+wind+" m/s</br>"+chmurki+"</div></div>";
    }
    else if (temperat>20)
    {
        document.getElementById('result').innerHTML+="<div><div class='termometr'><p>Well, it's nice, but also a nice cardigan should be great for you</p></div><div class='napis'><div>"+x+"</br>"+y+":"+z+"</div> </br> <div>"+temperat+"&#176C</div> </br> "+wind+" m/s</br>"+chmurki+"</div></div>";
    }
    else if(temperat>10)
    {
        document.getElementById('result').innerHTML+="<div class='place col-md-6 mblank-3'><div class='termometr'><p>Get a jacket with you! It can be nice or not</p></div><div class='napis'><div style='font-size:30px;'>"+x+"</br>"+y+":"+z+"</div> </br> <div>"+temperat+"&#176C</div> </br> "+wind+" m/s</br>"+chmurki+"</div></div>";
    }
    else if(temperat>0)
    {
        document.getElementById('result').innerHTML+="<div><div class='termometr'><p>Winter jacket is neccessary today</p></div><div class='napis'>"+x+"</br>"+y+":"+z+" </br> "+temperat+"&#176C </br> "+wind+" m/s</br>"+chmurki+"</div></div>";
    }
    else if(temperat<=0)
    {
        document.getElementById('result').innerHTML+="<div><div class='termometr'><p>It is definetely cold or very cold. Winter is coming.</p></div><div class='napis'>"+x+"</br>"+y+z+" </br> "+temperat+"&#176C </br> "+wind+" m/s</br>"+chmurki+"</div></div>";
    }
    
}
var dana;


function weather()
{
    document.getElementById('result').innerHTML="";
    var city=document.getElementById('city').value;



    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=ae76d0efed32d9f29c4d54a5738b80ca').then(function(response)
    {
        return response.json();
    })
    .then(function(jsonData){
        jsonData.list.forEach(function(item){
            var dataih=item.dt_txt.split(' ',2);
            var godzinka=dataih[1].split(':',3);
            test(Math.floor(item.main.temp-273), item.wind.speed, item.weather[0].description, dataih[0],godzinka[0],godzinka[1]);
            
                item.weather.forEach(function(ele)
                {
                    chmurki=ele.description;
                });

        });
    })
}