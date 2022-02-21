const url = "https://api.openweathermap.org/data/2.5/";
var api_key = "3830fed1fd750618cf07593e79251717";
var button = document.getElementById("search_btn");
var city_input = document.getElementById("city");

button.onclick = function(){
   var city = city_input.value;
    if(city){
        var query = `${url}weather?q=${city}&appid=${api_key}&units=metric&lang=az`;
        fetch(query).then(weather=>{
            return weather.json()
        })
        .then(displayResult);
    }
}

const displayResult = (result)=>{
    const city = document.querySelector(".city");
    const degree = document.querySelector(".degree");
    const weather_conditions = document.querySelector(".weather_conditions");
    city.innerText = `${result.name} , ${result.sys.country}`;
    degree.innerText = `${result.main.temp} °C`;
    weather_conditions.innerText = `${result.weather[0].description}`;
}