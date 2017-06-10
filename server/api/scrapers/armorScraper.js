const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server




//REQUIRED FUNCTIONS
//=======================================================


//end

var json = {};

let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/armor-shields.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        let armor = {
            "light": "",
            "medium": "",
            "heavy": "",
            "shield": ""
        };

        let row_counter = 0; //keep track of row #
        let array = [];

        $('div.section#armor-summary table tbody tr').each(function () {

            let row_data = $(this);
            let object = {
                "name": "",
                "cost": "",
                "ac": "",
                "strength": "",
                "stealth": "",
                "weight": ""
            };

            if (row_counter == 0) { //when blank row with light armor
                row_counter++;
                return true;

            } else if (row_counter == 4) { //when blank row with medium armor
                armor.light = array;
                array = [];
                row_counter++;
                return true;

            } else if (row_counter == 10) { //when blank row with heavy armor
                armor.medium = array;
                array = [];
                row_counter++;
                return true;

            } else if (row_counter == 15) { //when blank row with shield
                armor.heavy = array;
                array = [];
                row_counter++;
                return true;

            }

            
            //iterates through cells from row
            let cell_data = row_data.children().first();
            for (let j = 0; j < row_data.children().length; j++) {

                if (j != 0) {
                    cell_data = cell_data.next();
                }

                switch (j) {
                    case 0:
                        let name = cell_data.text();
                        object.name = name;
                        break;
                    case 1:
                        let cost = cell_data.text();
                        object.cost = cost;
                        break;
                    case 2:
                        let ac = cell_data.text();
                        object.ac = ac;
                        break;
                    case 3:
                        let strength = cell_data.text().trim();
                        object.strength = strength;
                        break;
                    case 4:
                        let stealth = cell_data.text().trim();
                        object.stealth = stealth;
                        break;
                    case 5:
                        let weight = cell_data.text();
                        object.weight = weight;
                        break;
                }
            }

            array.push(object);

            if (row_counter == 16) { //when last row
                armor.shield = array;
            }

            row_counter++;

        });

        json = armor;

    }

    fs.writeFile('../json/armor.json', JSON.stringify(json, null, 4), function (err) {
        console.log('armor.json successfully written');
    })

});
