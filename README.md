# CS2 Grenade Trainer
## Overview
This is a simple script which names grenades to throw, and you are given an interval to complete it. This allows you to quickfire grenades one after the other, without knowing which one will be next. This mimics the feeling of a dynamic round in an actual game of CS, where you might have to improvise and throw a particular grenade on a whim.

## Usage
Install node for your OS if you don't already have it.

Install required dependencies:
```bash
npm install
```

Execute the script:
```bash
node ./index.js --map <mapname> --grenade <grenadetype> --area <maparea> --interval <intervalsecs>
```

It reads known grenades from the file [`/prompts.json`](./prompts.json). This allows the user to configure the grenades they know and want to practice. There is a sample file [`/prompts_sample.json`](./prompts_sample.json) which demonstrates the expected structure.
