
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key="80d76eb4d126038b53a6ff2e586dcaa6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod===`404`){
        location_not_found.style.display = "flex";
        weather_body.style.display ="none";
        console.log("error");
        return;
    }

   

    location_not_found.style.display = "none";

    weather_body.style.display = "flex";


    temperature.innerHTML=`${Math.round (weather_data.main.temp-273.15)}°C`;

    description.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

    

    switch(weather_data.weather[0].main){

        case 'Clouds':
            weather_img.src = "https://img.freepik.com/free-photo/sky-clouds-cinematic-clouds-wallpaper-4_1562-741.jpg";
            break;

        case 'Clear':
            weather_img.src = "https://i.pinimg.com/originals/f7/6b/5d/f76b5d85de988fd783d3a1d37b40e773.jpg";
            break;

        case 'Rain':
            weather_img.src = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1717027200&semt=sph";
            break;

        case 'Mist':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYBMfAsIDLR-AFmbLvDy0L9LYWldXn3WHJg&s";
            break;

        case 'Snow':
            weather_img.src = "https://images.unsplash.com/photo-1418985991508-e47386d96a71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D";
            break;
            
    }
    console.log(weather_data);



}


searchBtn.addEventListener('click',()=>{

    checkWeather(inputBox.value);




});

