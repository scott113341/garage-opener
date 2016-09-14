#!/usr/bin/env node

const garageOpener = require('./garage-opener.js');

const args = process.argv.slice(2);
const powerPin = parseInt(args[0]);
const relayPin = parseInt(args[1]);
const port = parseInt(args[2]);
const key = args[3];

garageOpener(powerPin, relayPin, port, key);
