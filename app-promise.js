
// const request = require('request');
const yargs = require('yargs');
const _ = require('lodash');
const axios = require('axios');

// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');   // NB no .js needed

var lat, lng;

const argv = yargs
  .options({
    a: {    // a : address
      demand: true,
      alias: 'address',
      describe: 'Address for which to fetch weather',
      string: true    // always parse a/address as string type
    }
  })
  .help()
  .alias('help', 'h')    // alias switch for help
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);   // easier way to access address!
  var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=${encodedAddress}`;

  axios.get(geocodeUrl).then((geocodeResponse) => {
    // console.log(geocodeResponse.data);
    // console.log('Data status: ' , geocodeResponse.data.status);
    // console.log('Data Results: ' , geocodeResponse.data.results);
    // console.log('geocodeQualityCode: ' , geocodeResponse.data.results[0].locations[0].geocodeQualityCode);
    // console.log('Data:', JSON.stringify(geocodeResponse.data.results[0]));
    // if (geocodeResponse.data.status === 'ZERO_RESULTS')   // google map specific
    if (geocodeResponse.data.results[0].locations[0].geocodeQualityCode === 'A1XAX' || geoCodeResponse.data.results[0].locations[0].geocodeQualityCode === 'Z1XAA')
    {
      throw new Error('Unable to find that address');     // throw error to be caught below with this bespoke message shown
    }
  }).catch((error) =>
{
  if (error.code === 'ENOTFOUND')
  {
    console.log('Unable to connect to API servers.');
  }
  else {
    console.log(error.message);
  }

  // console.log(`Error: ${error}`);
  // console.log(error);
});      // automatically parse returned JSON and process promise

  console.log('argv: ',argv);

debugger;


// if (geocode.geocodeAddress(argv.address) > 0)
// {
//   console.log('Error with geocoding');
// }

/*
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  }
  else {
        console.log(JSON.stringify(results, undefined, 2));

        // weather.getWeather(lat,lng, (errorMessage, resultsWeatherdata) => {
        weather.getWeather(_.get(results,'latitude'),_.get(results,'longitude'), (errorMessage, resultsWeatherdata) => {
          if (errorMessage)
          {
            console.log(errorMessage);
          }
          else {
            console.log(JSON.stringify(resultsWeatherdata, undefined, ));
            console.log(`Temperature at ${argv.address} is ${_.get(resultsWeatherdata,'temperature')}, apparent temperature is  ${_.get(resultsWeatherdata,'apparentTemperature')}`);
          }
        });
    }
  });
*/
// debugger;
// weather.getWeather(50.22,-5.23, (errorMessage, resultsWeatherdata) => {


// import request
// make request
// print current temperature
