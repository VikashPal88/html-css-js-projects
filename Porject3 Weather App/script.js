let cityName = document.querySelector('.search input')
let searchBtn = document.querySelector('.search button')

async function weatherAPI(city) { 

    let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    const options = {
        method: 'GET',  
        headers: {
            'X-RapidAPI-Key': '8aeaabf324mshcacf09cd3769785p1b70f9jsncc4f6727787f',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url,options); 
        var result = await response.json();
        console.log(result)
    } catch (error) {
        console.error(error);
    }

    document.querySelector('.city').innerHTML = city
    document.querySelector('.temp').innerHTML = Math.round(result.temp) + "°c"
    document.querySelector('.humidity').innerHTML = result.humidity + "%"
    document.querySelector('.wind').innerHTML = result.wind_speed + " km/h"

    
}

searchBtn.addEventListener('click', () => {
    const searchCity = cityName.value
    console.log("button was clicked")
    weatherAPI(searchCity)
});