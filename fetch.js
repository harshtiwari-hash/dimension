const apiKey = '2812905f0ca84597aab141453242011';
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherDetails = document.getElementById('weatherDetails');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        alert('Please enter a city name.');
    }
});

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;

    document.getElementById('cityName').innerText = cityName;
    document.getElementById('temperature').innerText = `Temperature: ${temperature} °C`;
    document.getElementById('description').innerText = `Description: ${description}`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
}
