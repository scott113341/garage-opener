const execSync = require('child_process').execSync;
const dash = require('node-dash-button');


const args = process.argv.slice(2);
const names = args.map(arg => arg.indexOf('=') >= 0 ? arg.split('=')[0] : 'unnamed');
const macs = args.map(arg => arg.indexOf('=') >= 0 ? arg.split('=')[1] : arg);


const buttons = names.map((name, i) => {
  const mac = macs[i];
  const listener = dash(mac);
  listener.on('detected', () => {
    console.log(`button ${name} (${mac}) was pressed`);
  });

  console.log(`listening for ${name} (${mac})`);

  return {
    name,
    mac,
    listener,
  };
});
