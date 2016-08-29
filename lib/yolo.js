const GPIO = require('chip-gpio').Gpio;


const button = new GPIO(0, 'in', 'both');
const led = new GPIO(4, 'out');


button.watch((err, value) => {
  if (err) throw err;

  if (value === 0) {
    console.log('push');
    led.write(1);
    setTimeout(() => led.write(0), 500);
  }
});


process.on('SIGINT', () => {
  button.unexport();
  led.unexport();
  process.exit();
});
