const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================

//end


    var json = {};

    let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/tools.html';

    request(url, (error, response, html) => {
        if (!error) {
            const $ = cheerio.load(html);

            let tools = {
                "artisans_tools": "",
                "disguise_kit": "",
                "forgery_kit": "",
                "gaming_set": "",
                "herbalism_kit": "",
                "musical_instruments": "",
                "navigators_tools": "",
                "poisoners_kit": "",
                "thieves_tools": ""
            };

            let array = [];

            //artisans tools
            $('div.section#artisan-s-tools table tbody tr').each(function() {

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
            tools.artisans_tools = array;
            array = [];

            //disguise-kit
            $('div.section#disguise-kit table tbody tr').each(function () {

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
            tools.disguise_kit = array;
            array = [];


            //forgery kit
            $('div.section#forgery-kit table tbody tr').each(function () {

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
            tools.forgery_kit = array;
            array = [];

            //gaming set
            $('div.section#gaming-set table tbody tr').each(function () {

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
            tools.gaming_set = array;
            array = [];

            //herbalism kit
            $('div.section#herbalism-kit table tbody tr').each(function () {

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
            tools.herbalism_kit = array;
            array = [];

            //musical instruments
            $('div.section#musical-instruments table tbody tr').each(function () {

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
            tools.musical_instruments = array;
            array = [];

            //navigators tools
            $('div.section#navigators-tools table tbody tr').each(function () {

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
            tools.navigators_tools = array;
            array = [];

            //poisoner's kit
            $('div.section#poisoners-kit table tbody tr').each(function () {

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
            tools.poisoners_kit = array;
            array = [];

            //thieve's tools
            $('div.section#thieves-tools table tbody tr').each(function() {

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
            tools.thieves_tools = array;


            json = tools;

        }



        fs.writeFile('../json/tool.json', JSON.stringify(json, null, 4), function (err) {
            console.log('tool.json successfully written');
        })

    });

