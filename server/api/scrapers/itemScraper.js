const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================


//end


var json = {};

let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/adventuring.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        let item = [];

        $('div.section#equipment-table table tbody tr').each(function () {

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
                        let cost = cell_data.text();
                        object.cost = cost;
                        break;
                    case 2:
                        let weight = cell_data.text().trim();
                        object.weight = weight;
                        break;
                }
            }

            item.push(object);

        });


        json = item;

    }

    fs.writeFile('../backup_json/items.json', JSON.stringify(json, null, 4), function (err) {
        console.log('items.json successfully written');
    })

});
