const dashButton = require('node-dash-button');


class Button {

  constructor(mac, name='unnamed') {
    this.mac = mac;
    this.name = name;
    this.events = dashButton(mac);
  }

}


module.exports = Button;
