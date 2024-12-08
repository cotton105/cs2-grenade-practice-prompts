import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

const map = argv['map'] || argv['m'];
const grenade = argv['grenade'] || argv['g'];
const area = argv['area'] || argv['a'];
const intervalS = ( argv['interval'] || argv['i'] ) ?? 30;

const config = {
  map,
  grenade,
  area,
  intervalS
};

export default config;
