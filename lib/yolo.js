const GPIO = require('chip-gpio').Gpio;


const button = new GPIO(0, 'in', 'both');
const relay = new GPIO(4, 'out');


button.watch((err, value) => {
  if (err) throw err;

  if (value === 0) {
    console.log('push');
    relay.write(1);
    setTimeout(() => relay.write(0), 500);
  }
});


process.on('SIGINT', () => {
  button.unexport();
  relay.unexport();
  process.exit();
});
