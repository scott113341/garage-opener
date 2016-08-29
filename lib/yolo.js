const GPIO = require('chip-gpio').Gpio;


const button = new GPIO(0, 'in', 'both');
const relay = new GPIO(4, 'high');


button.watch((err, value) => {
  if (err) throw err;

  if (value === 0) {
    console.log('push');
    relay.write(0);
    setTimeout(() => relay.write(1), 500);
  }
});


process.on('SIGINT', () => {
  button.unexport();
  relay.unexport();
  process.exit();
});
