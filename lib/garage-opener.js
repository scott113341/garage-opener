const GPIO = require('chip-gpio').Gpio;
const express = require('express');


function garageOpener(powerPin, relayPin, port, key) {
  const power = new GPIO(powerPin, 'high');
  const relay = new GPIO(relayPin, 'high');

  const app = express();
  app.post('/', (req, res) => {
    if (req.query.key === key) {
      relay.write(0);
      setTimeout(() => relay.write(1), 500);
      res.send('ok');
    }
    else res.status(401).send('unauthorized');
  });
  app.listen(port, () => console.log(`server started on port ${port} with key ${key}`));

  process.on('SIGINT', () => {
    power.unexport();
    relay.unexport();
    process.exit();
  });
}


module.exports = garageOpener;
