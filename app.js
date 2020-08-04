/**
 * 
 * 
 * 
 */

const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/**
 * 
 * Error corregido de la clase 58: no se manejaba el catch de: lugar.getLugarLatLng(argv.direccion)
    lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(err => {
        console.log(err.response.data.cod);
        console.log(err.response.data.message);
    });

    clima.getClima(40.71, -74.01)
    .then(console.log)
    .catch(console.log);
 */



/**
 * 
 * Solucion del teacher: no maneja bien los errores con el try catch
 *  
 const getInfo = async(dir) => {
    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
 * 
 */


const getInfo = (dir) => {
    lugar.getLugarLatLng(dir)
        .then(c => {
            clima.getClima(c.lat, c.lon)
                .then(t => {
                    console.log(`El clima de ${c.direccion} es de ${t}`);
                })
                .catch(console.log);
        })
        .catch(err => {
            console.log(err.response.data.cod);
            console.log(err.response.data.message);
            console.log(`No se pudo determinar el clima de ${dir}`);
        });
}

getInfo(argv.direccion);