var Raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
  io: new Raspi()
});


var motorLeft, motorRight;

board.on('ready', () => {

    initMotors();
    motorLeft.stop();
    motorRight.stop();

    isBoardReady = true;
  
  });



function initMotors()
{
  motorLeft = new five.Motor({
    pins: {
      pwm: 'GPIO13',
      dir: 'GPIO5',
      cdir: 'GPIO6'
    }
  });

  motorRight = new five.Motor({
    pins: {
      pwm: 'GPIO18',
      dir: 'GPIO23',
      cdir: 'GPIO24'
    }
  });
}
