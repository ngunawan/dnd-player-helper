const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================


//end


var json = {};

let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/weapons.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        let weapon = {
            "simple_melee": "",
            "simple_ranged": "",
            "martial_melee": "",
            "martial_ranged": ""
        };

        let array = [];

        //simple melee
        $('div.section#simple-melee-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": ""
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

            array.push(object);

        }); //end simple melee
        weapon.simple_melee = array;
        array = [];


        //simple ranged
        $('div.section#simple-ranged-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": ""
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

            array.push(object);


        }); //end simple ranged
        weapon.simple_ranged = array;
        array = [];


        //martial melee
        $('div.section#martial-melee-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": ""
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

            array.push(object);


        }); //end martial melee
        weapon.martial_melee = array;
        array = [];


        //martial ranged
        $('div.section#martial-ranged-weapons table tbody tr').each(function () {

            let row_data = $(this);

            let object = {
                "name": "",
                "cost": "",
                "damage": "",
                "weight": "",
                "properties": ""
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

            array.push(object);


        }); //end martial ranged
        weapon.martial_ranged = array;


        json = weapon;

    }

    fs.writeFile('../json/weapon.json', JSON.stringify(json, null, 4), function (err) {
        console.log('weapon.json successfully written');
    })

});
