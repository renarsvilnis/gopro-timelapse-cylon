var Cylon = require('cylon');

var config = {
  pan: {
    start: 40,
    end: 120,
    duration: 5 * 60
    // duration: 5
  },

  tilt: {
    start: 30,
    end: 0,
    duration: 5 * 60
    // duration: 5
  }
};

Cylon.robot({
  connections: {
    arduino: {
      adaptor: 'firmata',
      port: '/dev/tty.usbmodem14421'
      // port: '/dev/ttyACM0'
    }
  },

  devices: {
    panServo: {
      driver: 'servo',
      pin: 9
    },
    tiltServo: {
      driver: 'servo',
      pin: 10
    }
  },

  work: function(my) {

    var pan = config.pan,
        tilt = config.tilt;

    pan.current = pan.start;
    tilt.current = tilt.start;

    // set inital values
    my.panServo.angle(pan.current);
    my.tiltServo.angle(tilt.current);

    pan.range = Math.abs(pan.start - pan.end);
    tilt.range = Math.abs(tilt.start - tilt.end);

    pan.interval = pan.duration / pan.range;
    tilt.interval = tilt.duration / tilt.range;

    every((pan.interval).second(), function() {
      
      pan.current = pan.start < pan.end
        ? pan.current + 1
        : pan.current - 1;

      if((pan.start >= pan.end && pan.current <= pan.end) ||
         (pan.start < pan.end && pan.current >= pan.end))
        pan.current = pan.end;

      console.log('Pan current', pan.current);
      my.panServo.angle(pan.current);
    });

    every((tilt.interval).second(), function() {

      tilt.current = tilt.start < tilt.end
        ? tilt.current + 1
        : tilt.current - 1;

      if((tilt.start >= tilt.end && tilt.current <= tilt.end) ||
         (tilt.start < tilt.end && tilt.current >= tilt.end))
        tilt.current = tilt.end;

      console.log('Tilt current', tilt.current);
      my.tiltServo.angle(tilt.current);
    });

  }
});

Cylon.start();