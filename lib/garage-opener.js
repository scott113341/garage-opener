const GPIO = require('chip-gpio').Gpio;


function garageOpener(buttons, powerPin, controlPin) {
  const power = new GPIO(powerPin, 'high');
  const control = new GPIO(controlPin, 'high');

  buttons.forEach(button => {
    const { name, mac, events } = button;

    console.log(`listening for ${name} (${mac})`);

    events.on('detected', () => {
      console.log(`button ${name} (${mac}) was pressed`);
      control.write(0);
      setTimeout(() => control.write(1), 500);
    });
  });

  process.on('SIGINT', () => {
    power.unexport();
    control.unexport();
    process.exit();
  });
}


module.exports = garageOpener;
