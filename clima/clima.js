const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a72231852ad2263b396d569c381cd0a&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}