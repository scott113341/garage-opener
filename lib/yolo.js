const GPIO = require('chip-gpio').Gpio;


const button = new GPIO(0, 'in', 'rising');
const led = new GPIO(4, 'out');


button.watch((err, value) => {
  console.log('yolooooooooooo');
  if (err) throw err;

  led.write(1);
  setTimeout(() => led.write(0), 500);
});



setInterval(() => {
  console.log(button.read());
}, 1000);


function exit() {
  button.unexport();
  led.unexport();
  process.exit();
}

process.on('SIGINT', exit);
