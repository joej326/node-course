const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    address: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weahter for',
        string: true
    }
}).help()
.alias('help', 'h')
.argv;

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=irvine&key=AIzaSyBHdYFxzN0bLBW_ag8IRNJPQMAYAJ5o2_0',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body.results, undefined, 2)); // we are after the 3rd argument here that makes it easier to read.

    console.log(`Name: ${body.results[0].address_components[0].long_name}`);
    console.log(`State: ${body.results[0].address_components[2].long_name}`);
    console.log(`County: ${body.results[0].address_components[1].long_name}`);
});