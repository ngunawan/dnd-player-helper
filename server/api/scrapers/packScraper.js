const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server


//REQUIRED FUNCTIONS
//=======================================================

//function: parse string from inside "()"
function parse_parenthesis(string) {
    let index_start = string.indexOf("("),
        index_end = string.indexOf(")");
    let name = string.substring(0, index_start).trim();
    let cost = string.substring(index_start + 1, index_end).trim();

    return {
        "name": name,
        "cost": cost
    }
}

//function: capitalize string
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//function: remove new line regex from string
function remove_newline(string) {
    return string.replace(/\n/g, " ");
}

//function: remove first sentence ending with period
function cut_first_sentence(string) {
    let index = string.indexOf(".");
    return string.substring(index + 1, string.length).trim();
}

//end


var json = {};

let url = 'http://blog.onslow-web.co.uk/5e/characters/equipment/adventuring.html';

request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        let equipment_packs = [];

        let data = $('div.section#equipment-packs');
        let data_child = data.children().first(); //get irrelevant h2

        //iterate through p containing equipment packs
        for (let i = 1; i <= 7; i++) {

            let object = {
                "name": "",
                "cost": "",
                "description": ""
            }

            if (i == 1) {
                data_child = data_child.next().next(); //skips irrelevant p
            } else {
                data_child = data_child.next(); //get next relevant p
            }

            //name and cost
            let name_cost_obj = parse_parenthesis(data_child.children("strong").text());
            let name = name_cost_obj.name;
            let cost = name_cost_obj.cost;
            object.name = name;
            if (i == 1) { //HOTFIX: if burglar's pack: there's a missing space
                object.cost = "16 gp";
            } else {
                object.cost = cost;
            }

            //description
            let description = remove_newline(capitalize(cut_first_sentence(data_child.text())));
            if (i == 1) { //HOTFIX: if burglar's pack: there's a missing space in "ofoil"
                description = description.replace("ofoil", "of oil");
                object.description = description;
            } else if (i == 3) { //HOTFIX: if dungeoneer's pack: fixed lots of typos
                object.description = "Includes a backpack, a crowbar, a hammer, 1O pitons, 1O torches, a tinderbox, 2 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.";
            } else {
                object.description = description;
            }

            equipment_packs.push(object);
        }

        json = equipment_packs;

    }

    fs.writeFile('../json/packs.json', JSON.stringify(json, null, 4), function (err) {
        console.log('packs.json successfully written');
    })
});
