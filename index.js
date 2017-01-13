'use strict';
let fetch = require('isomorphic-fetch'),
    toCoord = require('city-to-coords');

function toWeather(city, long) {
    let str = "http://forecast.weather.gov/MapClick.php?FcstType=json";

    if (city !== Number(city)) {

        return toCoord(city).then(loc => toWeather(Number(loc.lat), Number(loc.lng)))

    } else if (long === Number(long) && city === Number(city)) {

        return fetch(`${str}&lat=${city}&lon=${long}`).then(response => {

            if (response.status >= 400) {

                throw new Error('Bad response from server')

            }

            return response.json()

        })



    }

    return false;
}

module.exports = toWeather
