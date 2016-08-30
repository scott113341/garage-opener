const GPIO = require('chip-gpio').Gpio;


function garageOpener(buttons, gpioPin) {
  const relay = new GPIO(gpioPin, 'out');
  console.log(`garage opener gpio ${gpioPin}`);

  buttons.forEach(button => {
    const { name, mac, events } = button;

    console.log(`listening for ${name} (${mac})`);

    events.on('detected', () => {
      console.log(`button ${name} (${mac}) was pressed`);
      relay.write(0);
      setTimeout(() => relay.write(1), 500);
    });
  });

  process.on('SIGINT', () => {
    relay.unexport();
    process.exit();
  });
}


module.exports = garageOpener;
