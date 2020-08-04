/**
 * 
 */

const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}`,
        headers: { 'x-api-key': '5a72231852ad2263b396d569c381cd0a' }
    });

    const resp = await instance.get();

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        direccion,
        lat,
        lon
    }

}





module.exports = {
    getLugarLatLng
}