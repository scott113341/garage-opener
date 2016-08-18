const GPIO = require('chip-gpio');


function garageOpener(buttons, gpioPin) {
  const opener = new GPIO(gpioPin, 'out');
  console.log(`garage opener gpio ${gpioPin}`);

  buttons.forEach(button => {
    const { name, mac, events } = button;

    console.log(`listening for ${name} (${mac})`);

    events.on('detected', () => {
      console.log(`button ${name} (${mac}) was pressed`);
      opener.write(1);
      setTimeout(() => opener.write(0), 500);
    });
  });

  function exit() {
    opener.unexport();
    process.exit();
  }

  process.on('SIGINT', exit);
}


module.exports = garageOpener;
