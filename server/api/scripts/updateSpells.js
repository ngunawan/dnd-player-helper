//const mongoose = require('mongoose'),
//    connection = mongoose.connect('mongodb://localhost/Dndb'),
//    Schema = mongoose.Schema,
//    request = require('request-promise'),
//    cheerio = require('cheerio'),
//    fs = require('fs');

const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Dndb'),
    Schema = mongoose.Schema,
    request = require('request-promise'),
    cheerio = require('cheerio'),
    fs = require('fs');

//mongoose.Promise = global.Promise;

//REQUIRED FUNCTIONS
//=======================================================

//function: search json array by name to push into class
var searchArrayByName = function (array, name) {
    let res = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i].name == name) {
            res = i;
            return res;
        }
    }
}


//end


//const SpellSchema = new Schema({
//    name: String,
//    level: String,
//    school: String,
//    casting_time: String,
//    range: String,
//    component: String,
//    duration: String,
//    description: String,
//    class: Array
//});

module.exports = function (app) {

    const Spell = mongoose.model('Spells');

    const url = 'http://blog.onslow-web.co.uk/5e/gameplay/spells.html';

    let traverse = function (html) {
        const $ = cheerio.load(html);

        let ul_data, li_data, name, promise;

        //bard
        $('div.section#bard-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'bard'
                    }
                }).exec();

                promise.then(function (spell) {
                    console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

        //cleric
        $('div.section#cleric-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'cleric'
                    }
                }).exec();

                promise.then(function (spell) {
                    console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

        //druid
        $('div.section#druid-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'druid'
                    }
                }).exec();

                promise.then(function (spell) {
                    //                        console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

        //paladin
        $('div.section#paladin-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'paladin'
                    }
                }).exec();

                promise.then(function (spell) {
                    //                        console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

        //ranger
        $('div.section#ranger-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'ranger'
                    }
                }).exec();

                promise.then(function (spell) {
                    //                        console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

        //sorcerer
        $('div.section#sorcerer-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'sorcerer'
                    }
                }).exec();

                promise.then(function (spell) {
                    //                        console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

        //warlock
        $('div.section#warlock-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'warlock'
                    }
                }).exec();

                promise.then(function (spell) {
                    //                        console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

        //wizard
        $('div.section#wizard-spells div.section').each(function () {

            ul_data = $(this).children('ul');

            for (let j = 0; j < ul_data.children().length; j++) {

                if (j == 0) {
                    li_data = ul_data.children().first();
                } else {
                    li_data = li_data.next();
                }

                name = li_data.text();
                promise = Spell.findOneAndUpdate({
                    name: name
                }, {
                    $push: {
                        class: 'wizard'
                    }
                }).exec();

                promise.then(function (spell) {
                    //                        console.log(spell);
                }).catch(function (err) {
                    console.log(err);
                });
            }

        });

    }


    let options = {
        uri: 'http://blog.onslow-web.co.uk/5e/gameplay/spells.html',
        transform: traverse
    };


    request(options).then(function () {

        return Spell.find({}, '-_id name level school casting_time range component duration description class');


    }).then(function (spells) {

        fs.writeFile('../json/spells.json', JSON.stringify(spells, null, 4), function (err) {
            if (!err) {
                console.log('spells.json successfully updated');
            } else {
                console.log(err);
            }
        })
//        mongoose.connection.close();


    }).catch(function (err) {
        console.log(err);
    });


}
