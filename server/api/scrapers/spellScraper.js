const fs = require('fs'),
    request = require('request'), //make http calls
    cheerio = require('cheerio'); //implementation of core jQuery for the server


//REQUIRED FUNCTIONS
//=======================================================

//function: cut string before ':'
function cut_colon(string) {
    let index = string.indexOf(':') + 1;

    let new_string = string.substring(index, string.length);
    new_string = new_string.trim();
    return new_string;
}

//function: capitalize string
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//function: cut level from "7th-level"
function cut_level(string) {
    return string.substring(0, string.indexOf("level") - 1);
}

//function: get first number in string
function get_number(string) {
    if (string.match(/\d/)) {
        return string.match(/\d/)[0];
    } else {
        return null
    }
}

//function: replace double spaces with space
function replace_dupe_spaces(string) {
    return string.replace("  ", " ");
}

//function: separate string return object with school and level properties
function splice_school_level(string) {

    string = replace_dupe_spaces(string);
    let stringArray = string.split(" ");

    if (stringArray[1] == "cantrip") { //if cantrip order is reversed
        return {
            school: capitalize(stringArray[0]),
            level: 0
        }
    } else {
        return {
            school: capitalize(stringArray[1]),
            level: parseInt(get_number(stringArray[0]))
        }
    }
}

//end

let url = 'http://blog.onslow-web.co.uk/5e/gameplay/spell-descriptions.html#animate-objects';

//html hierarchy of url
//====================================
//var templateRef =
//    `div.section
//        span
//        h2 (name)
//        p
//            em(type)
//        ul.simple
//            li(castingtime)
//            li(range)
//            li(comopnents)
//            li(duration)
//        (rest is spell description)`;


request(url, (error, response, html) => {
    if (!error) {
        const $ = cheerio.load(html);

        var json = [];

        $('div.section').not('#spell-descriptions').each(function () {

            let data = $(this);

            let object = {
                name: "",
                school: "",
                level: "",
                casting_time: "",
                range: "",
                component: "",
                duration: "",
                description: "",
            };

            //name
            let name = data.children('h2').text();
            name = name.substring(0, name.length - 1); //cut weird symbol at the end of string
            object.name = name;

            //school & level
            let school_and_level = splice_school_level(data.children('h2 + p').text());
            object.school = school_and_level.school;
            object.level = school_and_level.level;

            //gets the first occurence of ul.simple
            let ul_data = data.children('h2').next().next();

            //casting time
            let casting_time = cut_colon(ul_data.children('li:nth-child(1)').text());
            object.casting_time = casting_time;

            //range
            let range = cut_colon(ul_data.children('li:nth-child(2)').text());
            object.range = range;

            //component
            let component = cut_colon(ul_data.children('li:nth-child(3)').text());
            object.component = component;

            //duration
            let duration = cut_colon(ul_data.children('li:nth-child(4)').text());
            object.duration = duration;

            //description
            let desc = ul_data.nextAll();
            desc = eval('`' + desc + '`'); //keep all the html in description
            object.description = desc;

            json.push(object);

        });

    }

    //write to output.json
    //JSON.stringify(json, null, 4) - make json easier to read
    //callback to let us know the status of our function

    fs.writeFile('../backup_json/spells.json', JSON.stringify(json, null, 4), function (err) {
        console.log('spells.json successfully written');
    })

});
