import config from './config.js';
import prompts from './prompts.json' assert { type: 'json' };

const targetGrenades = prompts[config.map][config.grenade][config.area];
let frequency = {};
targetGrenades.map(name => {
  frequency[name] = 0;
});

console.debug("Configuration:");
console.debug(config);

let prevTarget = null;
chooseRandomGrenade(targetGrenades)
setInterval(chooseRandomGrenade, config.intervalS * 1000, targetGrenades);

function chooseRandomGrenade(targetGrenades) {
  const nextGrenadeWarningS = (config.intervalS - 5) - 1;
  let newTarget;
  do {
    const randomIndex = Math.floor(Math.random() * targetGrenades.length);
    newTarget = targetGrenades[randomIndex];
  } while (frequency[newTarget] > Math.min(...Object.values(frequency)) || prevTarget === newTarget);
  prevTarget = newTarget;
  frequency[newTarget] = frequency[newTarget] ? frequency[newTarget] + 1 : 1;
  displayNewPrompt(newTarget);
  
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

function displayNewPrompt(target) {
  console.clear();
  console.log(
    `On ${config.map.toUpperCase()}, ` +
    `throw a ${config.grenade.toUpperCase()} grenade ` +
    `for ${target.toUpperCase()} ` +
    `around ${config.area.toUpperCase()}.`
  );
}
