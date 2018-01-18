let fer = ' ℉';
let cel = ' ℃';
let apiUrl = 'https://fcc-weather-api.glitch.me/api/current?';
let lat1;
let lon2;
let a = [];
let valfer = (ce) => {
 return ce*1.8+32;
};
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
     lat1 = position.coords.latitude;
     lon2 = position.coords.longitude;

     let lat = 'lat='+String(lat1);
     let lon = 'lon='+String(lon2);

     $.getJSON(String(apiUrl+lat+'&'+lon), (data) => {
       console.log(data);
       console.log(data.weather[0]);
       $('.status').text(data.weather[0].main);
       $('.icon').attr('src',data.weather[0].icon);
       $('.temp-cel').text(data.main.temp + cel);
       $('.temp-fer').text(valfer(data.main.temp)+ fer);
       $('.place').text(data.name+' , '+data.sys.country);
     });
     }

getLocation();

document.querySelector('.button').addEventListener('click',(event) => {
  if(document.querySelector('.temp-cel').style.display == 'block'){
    document.querySelector('.temp-fer').style.display = 'block';
    document.querySelector('.temp-cel').style.display = 'none';
    document.querySelector('.button').innerHTML = 'Fahrenheit To Celsius';
  } else {
    document.querySelector('.temp-fer').style.display = 'none';
    document.querySelector('.temp-cel').style.display = 'block';
    document.querySelector('.button').innerHTML ='Celsius To Fahrenheit';
  }
});
