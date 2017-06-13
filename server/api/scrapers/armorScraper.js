const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server




//REQUIRED FUNCTIONS
//=======================================================


//end

var json = [];

let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/armor-shields.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        let row_counter = 0; //keep track of row #
        let type; // row 0-3 "light" row 5-9 "medium" row 11-14 "heavy" row  row 16 "shield

        $('div.section#armor-summary table tbody tr').each(function () {

            let row_data = $(this);
            let object = {
                "name": "",
                "cost": "",
                "ac": "",
                "strength": "",
                "stealth": "",
                "weight": "",
                "type": ""
            };

            if (row_counter == 0) { //when blank row with light armor
                type = "light";
                row_counter++;
                return true;

            } else if (row_counter == 4) { //when blank row with medium armor
                type = "medium";
                row_counter++;
                return true;

            } else if (row_counter == 10) { //when blank row with heavy armor
                type = "heavy";
                row_counter++;
                return true;

            } else if (row_counter == 15) { //when blank row with shield
                type = "shield";
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
            
            object.type = type;
            json.push(object);

            row_counter++;

        });
    }

    fs.writeFile('../json/armors.json', JSON.stringify(json, null, 4), function (err) {
        console.log('armors.json successfully written');
    })

});
