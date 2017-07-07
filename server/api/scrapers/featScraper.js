const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server



//REQUIRED FUNCTIONS
//=======================================================


//end


var json = {};

let url = 'http://blog.onslow-web.co.uk/5e/characters/customization/feats.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        let feat = [];

        $('div.section#feats div.section').each(function () {

            let section = $(this);

            let object = {
                "name": "",
                "description": "",
            };

            let nextChild = section.children().first();
            let name = nextChild.text();
            name = name.substring(0, name.length - 1); //cut weird symbol at the end of string
            object.name = name;

            let description = nextChild.nextAll();
            description = eval('`' + description + '`');
            object.description = description;

            feat.push(object);

        });


        json = feat;

    }

    fs.writeFile('../backup_json/feats.json', JSON.stringify(json, null, 4), function (err) {
        console.log('feats.json successfully written');
    })

});
