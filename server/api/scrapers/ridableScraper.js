const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================

//end


var json = [];
let type; //mount or land_vehicle or water_vehicle

let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/mounts.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);


        //mounts
        type = "mount";
        $('div.section#mounts table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "speed": "",
                "carrying_capacity": "",
                "type": ""
            };

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
                        let cost = cell_data.text().trim();
                        object.cost = cost;
                        break;
                    case 2:
                        let speed = cell_data.text().trim();
                        object.speed = speed;
                        break;
                    case 3:
                        let carrying_capacity = cell_data.text().trim();
                        object.carrying_capacity = carrying_capacity;
                        break;
                }

            }

            object.type = type;
            json.push(object);

        }); //end


        //land vehicles
        type = "land_vehicle";
        $('div.section#tack-harnesses-and-drawn-vehicles table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "weight": "",
                "type": ""
            };

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
                        let cost = cell_data.text().trim();
                        object.cost = cost;
                        break;
                    case 2:
                        let weight = cell_data.text().trim();
                        object.weight = weight;
                        break;
                }
            }

            object.type = type;
            json.push(object);

        }); //end

        //water vehicles
        type = "water_vehicle";
        $('div.section#waterborne-vehicles table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "speed": "",
                "type": ""
            };

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
                        let cost = cell_data.text().trim();
                        object.cost = cost;
                        break;
                    case 2:
                        let speed = cell_data.text().trim();
                        object.speed = speed;
                        break;
                }
            }

            object.type = type;
            json.push(object);

        }); //end

    }



    fs.writeFile('../backup_json/ridables.json', JSON.stringify(json, null, 4), function (err) {
        console.log('ridables.json successfully written');
    })

});
