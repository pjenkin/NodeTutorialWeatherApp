// const request = require('request');
const yargs = require('yargs');
// const _ = require('lodash');

const geocode = require('./geocode/geocode');

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

/*
if (geocode.geocodeAddress(argv.address) > 0)
{
  console.log('Error with geocoding');
}
*/

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  }
  else {
        console.log(JSON.stringify(results, undefined, 2))
    }
  });
// }
