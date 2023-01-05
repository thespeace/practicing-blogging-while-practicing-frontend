/*https://openweathermap.org/*/

const WEATHER_API_KEY = "23f406b74c1e82dc1023654859ae6db7";

const onGeoOk=(position)=>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.main.temp);
    });
}
const onGeoError=()=>alert("Can't find you. No weather for you.");

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
