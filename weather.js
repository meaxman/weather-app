const container= document.querySelector('.container');
const search = document.querySelector('.search-bar button');
const weathercontainer= document.querySelector('.weather-container');

search.addEventListener('click',()=>{
    const APIKey='45e30bc2976522f6cb5aec68bbcd1601';
    const city=document.querySelector('.search-bar input').value;
    if(city=="")
return;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response=>response.json()).then(json=>{

const image=document.querySelector('.weather-container img');
const cloud= document.querySelector('.weather-container .cloud');
const cloudysky=document.querySelector('.weather-container .cloudysky');

switch(json.weather[0].main){
case 'Clear':
  image.src='images/clear.png';
  break;

  case 'Rain':
    image.src='images/rain.png';
    break;

    case 'Clouds':
  image.src='images/clouds.png';
  break;

  case 'Mist':
  image.src='images/mist.png';
  break; 

  case 'Snow':
  image.src='images/snow.png';
  break;
  
  case 'wind':
  image.src='images/wind.png';
  break; 

  case 'search':
  image.src='images/search.png';
  break; 

  case 'drizzle':
  image.src='images/drizzle.png';
  break; 

  case 'humidity':
  image.src='images/humidity.png';
  break; 



       default:
        image.src='images/clouds.png';
        break; 

}

cloud.innerHTML=`${parseInt(json.main.temp-273.15)}°C`;
cloudysky.innerHTML=`${json.weather[0].description}`


})


})