console.log("Live.")

const getWeather = async (city) => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=593299a87c9f475e99056eac51716838&units=imperial", {mode : 'cors'})
    const cityData = await response.json();
    return cityData;
}

document.getElementById("searchBar").onkeypress = ((e) => {
    if (e.key != "Enter") return;
    getWeather(document.getElementById("searchBar").value).then((data) => {
        console.log(data);
        switch (data.cod) {
            case 200:
                document.getElementById("city").textContent = data.name + " " + data.sys.country.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397) );
                document.getElementById("description").textContent = data.weather[0].description;
                document.getElementById("temperature").textContent = parseInt(data.main.temp) + "℉";
                document.getElementById("feels").textContent = "Feels like: " + parseInt(data.main.feels_like) + "℉";
                document.getElementById("wind").textContent = "Wind: " +parseInt(data.wind.speed) + " MPH";
                document.getElementById("humidity").textContent = "Humidity " +data.main.humidity + " %";
                break;
            case "404":
                alert("Huh, we couldn't find that one. Check your spelling.")
            default:
                break;
        }   
    })
    
})
//const key = "https://api.openweathermap.org/data/2.5/weather?q="+"Elizabeth"+"&appid="+"593299a87c9f475e99056eac51716838";
//const key = "https://api.openweathermap.org/data/2.5/weather?q="+"Elizabeth"+"&appid="+"593299a87c9f475e99056eac51716838";

