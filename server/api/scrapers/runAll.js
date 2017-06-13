const cp = require('child_process');


cp.fork('spellScraper.js');
cp.fork('armorScraper.js');
cp.fork('weaponScraper.js');
cp.fork('itemScraper.js');
cp.fork('goodScraper.js');
cp.fork('toolScraper.js');
cp.fork('ridableScraper.js');
cp.fork('packScraper.js');
