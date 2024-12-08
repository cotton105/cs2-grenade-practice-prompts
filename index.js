import config from './config.js';
import prompts from './prompts.json' assert { type: 'json' };

const targetGrenades = prompts[config.map][config.grenade][config.area];

console.debug("Configuration:");
console.debug(config);

chooseRandomGrenade(targetGrenades)
setInterval(chooseRandomGrenade, config.intervalS * 1000, targetGrenades);

function chooseRandomGrenade(targetGrenades) {
  const randomIndex = Math.floor(Math.random() * targetGrenades.length);
  const nextGrenadeWarningS = (config.intervalS - 5) - 1;
  displayNewPrompt(targetGrenades, randomIndex);
  
  setTimeout(function () {
    let countdownS = 5;
    let displayCountdown;
    displayCountdown = setInterval(function () {
      console.log(`Advancing in ${countdownS} seconds...`);
      countdownS--;
      if (countdownS < 1) {
        clearInterval(displayCountdown);
      }
    }, 1000);
  }, nextGrenadeWarningS * 1000)
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
