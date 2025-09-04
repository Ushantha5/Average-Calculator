const apiKey = "35fafb1e9b24bac992578b414ab23098";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=bangaluru";

async function checkWeather() {
    const respose = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json()

    console.log(data);
    
}


checkWeather();