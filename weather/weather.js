const request = require('request');
const _ = require('lodash');

var getWeather = (lat, lng, callback) => {
// console.log('in getWeather');
  request({
    url: `https://api.darksky.net/forecast/a46666c475d10436fc8f2b04f56bb46c/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error)
    {
      callback('Unable to connect to Forecast.io/Darksky.net server.');
      // console.log('Unable to connect to Forecast.io/Darksky.net server.');
    }
    else if (response.statusCode === 404)
    {
      callback('Unable to fetch weather');
      // was 400 bad request, now 404?
      // console.log('Unable to fetch weather');
    }
    // else if ()
    // {
    //
    // }
    else if (response.statusCode === 200)
    {
      callback(undefined,   // undefined error message (i.e. N/A) plus data object
      {
        temperature: _.get(body,'currently.temperature')
      })
      // console.log('location temperature : ', _.get(body,'currently.temperature'));
    }
    else {
      console.log('Unable to fetch weather');
    }
  });
};
// using my own darksky developer API key a46666c475d10436fc8f2b04f56bb46c



// module.exports.getWeather = getWeather();

module.exports = {
getWeather
}
