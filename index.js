import config from './config.js';
import prompts from './prompts.json' assert { type: 'json' };

const targetGrenades = prompts[config.map][config.grenade][config.area];

console.debug("Configuration:");
console.debug(config);

chooseRandomGrenade(targetGrenades)
setInterval(chooseRandomGrenade, config.intervalS * 1000, targetGrenades);

function chooseRandomGrenade(targetGrenades) {
  const randomIndex = Math.floor(Math.random() * targetGrenades.length);
  displayNewPrompt(targetGrenades, randomIndex);
}

function displayNewPrompt(grenadeList, index) {
  console.clear();
  console.log(
    `On ${config.map.toUpperCase()}, ` +
    `throw a ${config.grenade.toUpperCase()} grenade ` +
    `for ${grenadeList[index].toUpperCase()} ` +
    `around ${config.area.toUpperCase()}.`
  );
}
