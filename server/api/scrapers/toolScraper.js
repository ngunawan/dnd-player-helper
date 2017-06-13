const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================

//end


var json = {};
let type;
//artisans_tools
//disguise_kit
//forgery_kit
//gaming_set
//herbalism_kit
//musical_instruments
//navigators_tools
//poisoners_kit
//thieves_tools



let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/tools.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);


        //artisans tools
        type = "artisans_tools";
        $('div.section#artisan-s-tools table tbody tr').each(function () {

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


        //disguise-kit
        type = "disguise_kit";
        $('div.section#disguise-kit table tbody tr').each(function () {

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



        //forgery kit
        type = "forgery_kit"
        $('div.section#forgery-kit table tbody tr').each(function () {

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
        

        //gaming set
        type = "gaming_set";
        $('div.section#gaming-set table tbody tr').each(function () {

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
        

        //herbalism kit
        type = "herbalism_kit";
        $('div.section#herbalism-kit table tbody tr').each(function () {

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
      

        //musical instruments
        type = "musical_instruments"
        $('div.section#musical-instruments table tbody tr').each(function () {

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


        //navigators tools
        type = "navigators_tools";
        $('div.section#navigators-tools table tbody tr').each(function () {

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
       

        //poisoner's kit
        type = "poisoners_kit";
        $('div.section#poisoners-kit table tbody tr').each(function () {

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
 

        //thieve's tools
        type = "thieves_tools";
        $('div.section#thieves-tools table tbody tr').each(function () {

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

    }



    fs.writeFile('../json/tools.json', JSON.stringify(json, null, 4), function (err) {
        console.log('tools.json successfully written');
    })

});
