const express = require('express');
const fs = require('fs');
const request = require('request'); //make http calls
const cheerio = require('cheerio'); //fast, flexible & lean implementation of core jQuery designed specifically for the server.

//https://www.npmjs.com/package/cheerio
//https://www.npmjs.com/package/request

const app = express();


//REQUIRED FUNCTIONS
//=======================================================

//cut string before ':'
function cutLabel(string) {
    let index = string.indexOf(':') + 1;

    let new_string = string.substring(index, string.length);
    new_string = new_string.trim();
    return new_string;
}

//separate level and school from string
function separateSchoolLevel(string) {
    string = string.replace("  ", " "); //gets rid of double spaces
    let stringArray = string.split(" ");

    if (stringArray[1] == "cantrip") {//if cantrip
        //capitalize
        stringArray[0] = stringArray[0][0].toUpperCase() + stringArray[0].slice(1);
        stringArray[1] = stringArray[1][0].toUpperCase() + stringArray[1].slice(1);
        
        return {
            school: stringArray[0],
            level: stringArray[1]
        }
    } else {
        //cuts '-level' from string
        stringArray[0] = stringArray[0].substring(0, stringArray[0].indexOf('level')-1);
        
        //capitalize
        stringArray[1] = stringArray[1][0].toUpperCase() + stringArray[1].slice(1);
        
        return {
            school: stringArray[1],
            level: stringArray[0]
        }
    }
}

//end


app.get('/scrape', function (req, res) {

    url = 'http://blog.onslow-web.co.uk/5e/gameplay/spell-descriptions.html#animate-objects';

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


    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = [];

            $('div.section').not('#spell-descriptions').each(function () {

                let data = $(this),
                    object = {
                        name: "",
                        school: "",
                        level: "",
                        castingtime: "",
                        range: "",
                        components: "",
                        duration: "",
                        description: "",
                    };

                //name
                let name = data.children('h2').text();
                name = name.substring(0,name.length - 1); //cut weird symbol at the end of string
                object.name = name;
                
                //school & level
                let school_and_level = separateSchoolLevel(data.children('h2 + p').text());
                object.school = school_and_level.school;
                object.level = school_and_level.level;
                 
                //gets the first occurence of ul.simple
                let ul_data = data.children('h2').next().next();
                
                //casting time
                let castingtime = ul_data.children('li:nth-child(1)').text();
                castingtime = cutLabel(castingtime);
                object.castingtime = castingtime;

                //range
                let range = ul_data.children('li:nth-child(2)').text();
                range = cutLabel(range);
                object.range = range;

                //components
                let components = ul_data.children('li:nth-child(3)').text();
                components = cutLabel(components);
                object.components = components;

                //duration
                let duration = ul_data.children('li:nth-child(4)').text();
                duration = cutLabel(duration);
                object.duration = duration;

                //description
                let desc = ul_data.nextAll();
                desc = eval('`' + desc + '`');
                object.description = desc;
                

                json.push(object);

            });

        }

        //write to output.json
        //JSON.stringify(json, null, 4) - make json easier to read
        //callback to let us know the status of our function

        fs.writeFile('../spells.json', JSON.stringify(json, null, 4), function (err) {
            console.log('output.json successfully written');
        })

        // send msg to browser
        res.send('done!')

    });
})

app.listen('8081');
console.log('check port 8081');
