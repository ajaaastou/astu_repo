
document.getElementById('getWeather').addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    const apiKey = '0b767f03b686544601362d8f3141a06e'; 
    const weatherInfo = document.getElementById('weatherInfo');

    if (!location) {
        weatherInfo.innerHTML = '<p>Veuillez entrer une ville.</p>';
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            weatherInfo.innerHTML = `<p>${data.message}</p>`;
            return;
        }

        const { main, weather, wind, name  } = data;
        weatherInfo.innerHTML = `
            <h2>Données météo à ${name}</h2>
                <table>
                    <tr>
                        <th>Données</th>
                        <th>Valeur</th>
                    </tr>
                    <tr>
                        <td>Température</td>
                        <td>${main.temp} °C</td>
                    </tr>
                    <tr>
                        <td>Humidité</td>
                        <td>${main.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Vitesse du vent</td>
                        <td>${wind.speed} m/s</td>
                    </tr>
                    <tr>
                        <td>Pression</td>
                        <td>${main.pressure} hPa</td>
                    </tr>
                    <tr>
                        <td>Conditions</td>
                        <td>${weather[0].description}</td>
                    </tr>
            </table>
        `;
    } catch (error) {
        weatherInfo.innerHTML = '<p>Erreur lors de la récupération des données.</p>';
    }
});