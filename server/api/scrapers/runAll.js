//const cp = require('child_process');
//
//
//cp.fork('spellScraper.js');
//cp.fork('armorScraper.js');
//cp.fork('weaponScraper.js');
//cp.fork('itemScraper.js');
//cp.fork('goodScraper.js');
//cp.fork('toolScraper.js');
//cp.fork('ridableScraper.js');
//cp.fork('packScraper.js');

var classScraper = require('./classScraper.js');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/barbarian.html#barbarian');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/bard.html#bard');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/cleric.html#cleric');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/druid.html#druid');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/fighter.html#fighter');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/monk.html#monk');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/paladin.html#paladin');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/ranger.html#ranger');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/rogue.html#rogue');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/sorcerer.html#sorcerer');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/warlock.html#warlock');
classScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/classes/wizard.html#wizard');

//var raceScraper = require('./raceScraper.js');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/dragonborn.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/dwarf.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/elf.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/halfling.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/human.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/gnome.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/halfelf.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/halforc.html');
//raceScraper.scrape('http://blog.onslow-web.co.uk/5e/characters/races/tiefling.html');


