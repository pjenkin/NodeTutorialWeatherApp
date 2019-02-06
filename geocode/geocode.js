//var address = process.argv[3];    // NB 4th argument in argv holding address
//address = encodeURIComponent(address);

const request = require('request');
// const yargs = require('yargs');
const _ = require('lodash');


var geocodeAddress = (address, callback) =>
{
   address = encodeURIComponent(address);   // easier way to access address!
  request({
    // url: 'http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=67%20Trevingey%20Road%20Redruth',
    // url: 'http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=' + address,
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=${address}`,
    json: true
  }, (error, response, body) => {
debugger;
    if (error)
    {
      callback('Unable to connect to MapQuest geocoding service');
      // console.log('Unable to connect to MapQuest geocoding service');
      // return 1;     // return non-zero error code
    }
    else if (_.get(body,'results[0].locations[0].geocodeQualityCode') === 'A1XAX' || _.get(body,'results[0].locations[0].geocodeQualityCode') === 'Z1XAA')   // _.get for null-safety
    {
      callback('Geocoding error');
      // console.log('Geocoding error');
      // https://developer.mapquest.com/documentation/geocoding-api/quality-codes/
      // return 2;     // return non-zero error code
    }
    else
    {

      callback(undefined, {     // undefined error message i.e. N/A (OK)
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng

      });
      console.log('Printing body: ',body);
      // console.log('Printing stringified body: ',JSON.stringify(body,undefined,2));    // json, filter out, num spaces
      //console.log('Printing stringified response: ',JSON.stringify(response,undefined,2));    // json, filter out, num spaces
      // console.log('Printing stringified error: ',JSON.stringify(error,undefined,2));    // json, filter out, num spaces
      console.log('Printing lat: ',body.results[0].locations[0].latLng.lat);
      console.log('Printing lng: ',body.results[0].locations[0].latLng.lng);

      return 0;     // return zero non-error code
  }
  });

  // body.results[0].locations[0].geocodeQualityCode": "A1XAX",

};


// https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/questions/2956062
// pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv
// http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1301%20lombard%20street%20philadelphi
// http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=67%20Trevingey%20Road%20Redruth

module.exports = {
  geocodeAddress
}
