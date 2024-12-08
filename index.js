import config from './config.js';
import prompts from './prompts.json' assert { type: 'json' };

const targetGrenades = prompts[config.map][config.grenade][config.area];
let frequency = {};
targetGrenades.map(name => {
  frequency[name] = 0;
});

console.debug("Configuration:");
console.debug(config);

let target = null;
chooseRandomGrenade(targetGrenades)
setInterval(chooseRandomGrenade, config.intervalS * 1000, targetGrenades);

function chooseRandomGrenade(targetGrenades) {
  const nextGrenadeWarningS = (config.intervalS - 5) - 1;
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * targetGrenades.length);
    target = targetGrenades[randomIndex];
  } while (frequency[target] > Math.min(...Object.values(frequency)));
  frequency[target] = frequency[target] ? frequency[target] + 1 : 1;
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
