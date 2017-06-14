const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================


//end


var json = [];
let type; //simple_melee, simple_ranged, martial_melee, martial_ranged

let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/weapons.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);


        //simple melee
        type = "simple_melee";
        $('div.section#simple-melee-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": "",
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
                        let damage = cell_data.text().trim();
                        object.damage = damage;
                        break;
                    case 3:
                        let weight = cell_data.text().trim();
                        object.weight = weight;
                        break;
                    case 4:
                        let properties = cell_data.text();
                        object.properties = properties;
                        break;
                }
            }
            
            object.type = type;
            json.push(object);

        }); //end simple melee



        //simple ranged
        type = "simple_ranged";
        $('div.section#simple-ranged-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": "",
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
                        let damage = cell_data.text().trim();
                        object.damage = damage;
                        break;
                    case 3:
                        let weight = cell_data.text().trim();
                        object.weight = weight;
                        break;
                    case 4:
                        let properties = cell_data.text();
                        object.properties = properties;
                        break;
                }
            }
            object.type = type;
            json.push(object);


        }); //end simple ranged
        

        //martial melee
        type = "martial_melee";
        $('div.section#martial-melee-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": "",
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
                        let damage = cell_data.text().trim();
                        object.damage = damage;
                        break;
                    case 3:
                        let weight = cell_data.text().trim();
                        object.weight = weight;
                        break;
                    case 4:
                        let properties = cell_data.text();
                        object.properties = properties;
                        break;
                }
            }

            object.type = type;
            json.push(object);


        }); //end martial melee


        //martial ranged
        type = "martial_ranged";
        $('div.section#martial-ranged-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": "",
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
                        let damage = cell_data.text().trim();
                        object.damage = damage;
                        break;
                    case 3:
                        let weight = cell_data.text().trim();
                        object.weight = weight;
                        break;
                    case 4:
                        let properties = cell_data.text();
                        object.properties = properties;
                        break;
                }
            }
            
            object.type = type;
            json.push(object);


        }); //end martial ranged


    }

    fs.writeFile('../json/weapons.json', JSON.stringify(json, null, 4), function (err) {
        console.log('weapons.json successfully written');
    })

});
