
var http = require('http');
var five = require('johnny-five');
var Raspi = require('raspi-io');
var Client = require('node-rest-client').Client;
var client = new Client();


var bulbPins = ['GPIO16'];
var bulbValues = [0,0,0,0];
var bulbs = [];

var board = new five.Board({
    io: new Raspi()
  });


  board.on('ready', () => {

    initBulbs();
    // motorLeft.forward(100);
    isBoardReady = true;
  
  });



setInterval(function(){
    // http.get(
    // {
    //     hostname: 'si-iot.azurewebsites.net',
    //     path: '/latestvalues',
    //     port: 80
        
    // }, function(res)
    // {
    //     if(res == null) return;

    //     res.setEncoding('utf8');
    //     let rawData = '';
    //     res.on('data', (chunk) => { rawData += chunk; });
    //     res.on('end', () => {
    //         try {
    //         const parsedData = JSON.parse(rawData);
    //         bulbValues = parsedData;
    //         console.log(bulbValues);   

    //         } catch (e) {
    //         console.error(e.message);
    //         }
    //     })        
    // }).on('error', (e) => {
    //     console.error(`Got error: ${e.message}`);
    //     });

    client.get("http://si-iot.azurewebsites.net/latestvalues", function (data, response) {
    console.log(data);
    // raw response 
    // console.log(response);
    });

}, 1000);

  
function initBulbs()
{
    for(var i=0; i<bulbPins.length; i++)
    {
        bulbs.push(new five.Led({
            pin: bulbPins[i]
          })); 
    }
}