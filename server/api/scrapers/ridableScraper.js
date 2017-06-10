const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================

//end


    var json = {};

    let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/mounts.html';

    request(url, (error, response, html) => {
        if (!error) {
            const $ = cheerio.load(html);

            let ridable = {
                "mounts": "",
                "land_vehicles": "",
                "water_vehicles": "",
            };

            let array = [];

            //mounts
            $('div.section#mounts table tbody tr').each(function () {

                let row_data = $(this);

                let object = {
                    "name": "",
                    "cost": "",
                    "speed": "",
                    "carrying_capacity": ""
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

                array.push(object);

            }); //end
            ridable.mounts = array;
            array = [];

            //land vehicles
            $('div.section#tack-harnesses-and-drawn-vehicles table tbody tr').each(function () {

                let row_data = $(this);

                let object = {
                    "name": "",
                    "cost": "",
                    "weight": ""
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

                array.push(object);

            }); //end
            ridable.land_vehicles = array;
            array = [];


            //water vehicles
            $('div.section#waterborne-vehicles table tbody tr').each(function () {

                let row_data = $(this);

                let object = {
                    "name": "",
                    "cost": "",
                    "speed": ""
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

                array.push(object);

            }); //end
            ridable.water_vehicles = array;

            
            json = ridable;

        }



        fs.writeFile('../json/ridable.json', JSON.stringify(json, null, 4), function (err)  {
            console.log('ridable.json successfully written');
        })

    });


