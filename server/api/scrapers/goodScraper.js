const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server




//REQUIRED FUNCTIONS
//=======================================================

//end

let json = [];
let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/goods.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        $('div.section#trade-goods table tbody tr').each(function () {

            let row_data = $(this);
            
            let object = {
                "name": "",
                "cost": "",
            };

            //iterates through cells from row
            let cell_data = row_data.children().first();
            for (let j = 0; j < row_data.children().length; j++) {

                if (j != 0) {
                    cell_data = cell_data.next();
                }

                switch (j) {
                    case 1:
                        let name = cell_data.text();
                        object.name = name;
                        break;
                    case 0:
                        let cost = cell_data.text();
                        object.cost = cost;
                        break;
                }
            }

            json.push(object);

        });

    }

    fs.writeFile('../backup_json/goods.json', JSON.stringify(json, null, 4), function (err) {
        console.log('goods.json successfully written');
    })

});
