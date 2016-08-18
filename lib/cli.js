#!/usr/bin/env node

const Button = require('./button.js');
const garageOpener = require('./garage-opener.js');


const args = process.argv.slice(2);
const [pinString, ...btns] = args;

const pin = parseInt(pinString);
const macs =  btns.map(arg => arg.includes('=') ? arg.split('=')[1] : arg);
const names = btns.map(arg => arg.includes('=') ? arg.split('=')[0] : undefined);

const buttons = macs.map((mac, i) => new Button(mac, names[i]));
garageOpener(buttons, pin);
