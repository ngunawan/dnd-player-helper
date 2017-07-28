const fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');



function lower_and_hyphenate(string) {
    return string.toLowerCase().replace(/\s/g, '-');
}

function delete_label(string) {
    let start_index = string.indexOf('.') + 2;
    return string.substring(start_index, string.length);
}


exports.scrape = function (url) {

    //let url = "http://blog.onslow-web.co.uk/5e/characters/races/elf.html";
    let raceJSON = require('../backup_json/races.json'); //load current classes.json

    let raceObject = {
        "name": "",
        "ability_score": "",
        "age": "",
        "alignment": "",
        "size": "",
        "speed": "",
        "languages": "",
        "traits": [],
        "subraces": []
    };

    request(url, (error, response, html) => {
        if (!error) {
            const $ = cheerio.load(html);

            let this_race = $('.section').first();

            /* scrape name */

            let name = this_race.children('h1').text();
            name = name.substring(0, name.length - 1);
            raceObject.name = name;

            /* scrape ability_score, age, alignment, size, speed, traits, and languages */

            let race_traits = this_race.children('#' + lower_and_hyphenate(name) + '-traits');
            let current_node = race_traits.children('p').first();
            let current_index = 1;

            while (current_node.next()) {
                current_node = current_node.next();

                if (current_node.children('strong').text().includes('Languages')) {
                    raceObject.languages = delete_label(current_node.text());
                    break;
                }

                switch (current_index) {
                    case 1:
                        raceObject.ability_score = delete_label(current_node.text());
                        break;
                    case 2:
                        raceObject.age = delete_label(current_node.text());
                        break;
                    case 3:
                        raceObject.alignment = delete_label(current_node.text());
                        break;
                    case 4:
                        raceObject.size = delete_label(current_node.text());
                        break;
                    case 5:
                        raceObject.speed = delete_label(current_node.text());
                        break;
                    default:
                        let traitObject = {
                            "name": "",
                            "description": ""
                        };
                        traitObject.name = current_node.children('strong').text().replace('.', '');
                        traitObject.description = delete_label(current_node.text());
                        raceObject.traits.push(traitObject);
                }

                current_index++;

            }

            /* scrape subraces */

            this_race.children('#subraces').children('.section').each(function () {

                let subraceObject = {
                    "name": "",
                    "ability_score": "",
                    "traits": []
                }

                let subrace_name = $(this).children('h3').text();
                subraceObject.name = subrace_name.substring(0, subrace_name.length - 1);


                $(this).children('p').has('strong').each(function () {
                    let current_node = $(this);

                    //                    if (current_node.children('strong')) {
                    //                        return; //break out of loop
                    //                    } else
                    if (current_node.children('strong').text().includes('Ability Score Increase')) {
                        subraceObject.ability_score = delete_label(current_node.text());
                        return;
                    }

                    let traitObject = {
                        "name": "",
                        "description": ""
                    }

                    traitObject.name = current_node.children('strong').text().replace('.', '');
                    traitObject.description = delete_label(current_node.text());
                    subraceObject.traits.push(traitObject);
                });

                raceObject.subraces.push(subraceObject);

            });

        }

        raceJSON.push(raceObject);

        fs.writeFile('../backup_json/races.json', JSON.stringify(raceJSON, null, 4), function (err) {
            console.log('races.json successfully written');
        });
    }); //end request


}
