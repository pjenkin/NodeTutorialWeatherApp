const request = require('request');
const yargs = require('yargs');
const _ = require('lodash');

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

  console.log('argv: ',argv);

debugger;
//var address = process.argv[3];    // NB 4th argument in argv holding address
//address = encodeURIComponent(address);
var address = encodeURIComponent(argv.address);   // easier way to access address!
request({
  // url: 'http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=67%20Trevingey%20Road%20Redruth',
  // url: 'http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=' + address,
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=${address}`,
  json: true
}, (error, response, body) => {
  if (error)
  {
    console.log('Unable to connect to MapQuest geocoding service');
  }
// debugger;
  else if (_.get(body,'results[0].locations[0].geocodeQualityCode') === 'A1XAX' || _.get(body,'results[0].locations[0].geocodeQualityCode') === 'Z1XAA')   // _.get for null-safety
  {
    console.log('Geocoding error');
    // https://developer.mapquest.com/documentation/geocoding-api/quality-codes/
  }
  console.log('Printing body: ',body);
  // console.log('Printing stringified body: ',JSON.stringify(body,undefined,2));    // json, filter out, num spaces
  //console.log('Printing stringified response: ',JSON.stringify(response,undefined,2));    // json, filter out, num spaces
  // console.log('Printing stringified error: ',JSON.stringify(error,undefined,2));    // json, filter out, num spaces
  console.log('Printing lat: ',body.results[0].locations[0].latLng.lat);
  console.log('Printing lng: ',body.results[0].locations[0].latLng.lng);
});

// body.results[0].locations[0].geocodeQualityCode": "A1XAX",

// https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/questions/2956062
// pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv
// http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1301%20lombard%20street%20philadelphi
// http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=67%20Trevingey%20Road%20Redruth
