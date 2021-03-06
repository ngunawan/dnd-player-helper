const fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');

//function: get first number in string
function get_first_number(string) {
    if (string.match(/\d+/)) {
        return string.match(/\d+/)[0];
    } else {
        return null
    }
}


exports.scrape = function (url) {

    //let url = "http://blog.onslow-web.co.uk/5e/characters/classes/wizard.html#wizard",
    //    className = "wizard";

    let classJSON = require('../backup_json/classes.json'); //load current classes.json

    let classObject = {
        "name": "",
        "hit_points": "",
        "proficiencies": {},
        "equipments": "",
        "features": [],
        "archetypes": []
    };

    request(url, (error, response, html) => {
        if (!error) {
            const $ = cheerio.load(html);

            let this_class = $('.section').first();

            /* scrape name */

            let name = this_class.children('h1').text();
            name = name.substring(0, name.length - 1);
            classObject.name = name;

            /* scrape class hp, proficiencies, equipments */

            let class_baseline = this_class.children('#class-features').children('#baseline');

            let hit_points = class_baseline.children('#hit-points').children('p').first().text();
            if (hit_points.match(/[0-9]+d[0-9]+/)) {
                hit_points = hit_points.match(/[0-9]+d[0-9]+/)[0];
            } else {
                //default
                hit_points = "";
            };
            classObject.hit_points = hit_points;

            let proficiencies = {
                "armor": "",
                "weapons": "",
                "tools": "",
                "saving_throws": "",
                "skills": ""
            }
            class_baseline.children('#proficiencies').children('p').each(function () {
                let split_text = $(this).text().split(':');
                switch (split_text[0]) {

                    case "Armor":
                        proficiencies["armor"] = split_text[1].trim();
                        break;
                    case "Weapons":
                        proficiencies["weapons"] = split_text[1].trim();
                        break;
                    case "Tools":
                        proficiencies["tools"] = split_text[1].trim();
                        break;
                    case "Saving Throws":
                        proficiencies["saving_throws"] = split_text[1].trim();
                        break;
                    case "Skills":
                        proficiencies["skills"] = split_text[1].trim();
                        break;
                }
            });
            classObject.proficiencies = proficiencies;

            let equipments = class_baseline.children('#equipment').children('ul.simple');
            equipments = eval('`' + equipments + '`');
            classObject.equipments = equipments;

            /* scrape features */

            this_class.children('#class-features').children('.section').not('#baseline').each(function () {

                let featureObject = {
                    "name": "",
                    "prereq": "",
                    "description": ""
                }

                let feature_name = $(this).children('h3').text();
                feature_name = feature_name.substring(0, feature_name.length - 1); //take out weird char at end
                featureObject.name = feature_name;

                let feature_desc = $(this).children().not('h3');
                feature_desc = eval('`' + feature_desc + '`');
                featureObject.description = feature_desc;

                //1st level
                let feature_prereq = feature_desc.match(/\d+(?:st|th|rd|nd)\slevel/);
                //1st
                //                let feature_prereq = feature_desc.match(/\d+(?:st|th|rd|nd)/);
                //                let feature_prereq = feature_desc.match(/\d+/);

                if (feature_prereq) {
                    featureObject.prereq = get_first_number(feature_prereq[0]);
                } else {
                    //default
                    featureObject.prereq = "1";
                }

                classObject.features.push(featureObject);

            });

            /* scrape archetypes */

            this_class.children('#class-features').next().children('.section').each(function () {

                let archetypeObject = {
                    "name": "",
                    "features": []
                }

                let archetype_name = $(this).children('h3').text();
                archetype_name = archetype_name.substring(0, archetype_name.length - 1);
                archetypeObject.name = archetype_name;

                $(this).children('.section').each(function () {

                    //note: DRY

                    let featureObject = {
                        "name": "",
                        "prereq": "",
                        "description": ""
                    }

                    let feature_name = $(this).children('h4').text();
                    feature_name = feature_name.substring(0, feature_name.length - 1); //take out weird char at end
                    featureObject.name = feature_name;

                    let feature_desc = $(this).children().not('h4');
                    feature_desc = eval('`' + feature_desc + '`');
                    featureObject.description = feature_desc;

                    let feature_prereq = feature_desc.match(/\d/);
                    if (feature_prereq) {
                        featureObject.prereq = feature_prereq[0];
                    } else {
                        //default
                        featureObject.prereq = 1;
                    }

                    archetypeObject.features.push(featureObject);

                });

                classObject.archetypes.push(archetypeObject);

            });
        }

        classJSON.push(classObject);

        fs.writeFile('../backup_json/classes.json', JSON.stringify(classJSON, null, 4), function (err) {
            console.log('classes.json successfully written');
        });
    }); //end request


}
