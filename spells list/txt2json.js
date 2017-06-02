//REQUIRED FUNCTIONS-----------------------------------------------

//function: checks and fixes string from template (req 2 strings to have the same # of chars excluding spaces)
function fixString(string1, template) {

    let new_string1 = string1.replace(/ /g, ""),
        new_template = template.replace(/ /g, ""),
        match = 0,
        len = template.length;

    for (let i = 0; i < len; i++) {
        if (new_string1[i] == new_template[i]) {
            match++;
        }
    }

    if ((match / len) >= .5) {
        return template;
    } else {
        return string1;
    }

}

//function: checks char if uppercase
function isUpperCase(character) {

    if (character == character.toUpperCase()) {
        return true;
    } else {
        return false;
    }

}

//function: checks string if predominantly uppercase
function isStringUpperCase(string) {

    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (isUpperCase(string[i])) {
            count++;
        }
    }

    if (count / string.length >= .67) {
        return true;
    } else {
        return false;
    }

}


//READ PROCESS---------------------------------------------------

//required modules
let fs = require('fs'),
    readLines = require('n-readlines'),
    _ = require('lodash');

let readLiner = new readLines('spells.txt'); //input file

let res = "[",
    line,
    lineNumber = 0;

let desCounter = 0;


//run through lines
while (line = readLiner.next()) {

    //escapes line
    _.escapeRegExp(line);
    line = line.toString('ascii').replace("'", "\\'");

    //skips extras
    if (line.includes("----------------") || line.includes("PART 3ISPELLS")) {
        continue;
    }

    switch (desCounter) {
        case 6:
            if (isStringUpperCase(line)) {
                res += "'},";
                //fall through to case 0
            } else {
                res += line;
                break;
            }
        case 0:
            if (isStringUpperCase(line)) {
                res += "{'name': '" + line + "',";
                desCounter = 1;
            };
            break;
        case 1:
            res += "'type': '" + line + "',";
            desCounter = 2;
            break;
        case 2:
            res += "'castingtime': '" + line + "',";
            desCounter = 3;
            break;
        case 3:
            res += "'range': '" + line + "',";
            desCounter = 4;
            break;
        case 4:
            res += "'components': '" + line + "',";
            desCounter = 5;
            break;
        case 5:
            res += "'duration': '" + line + "',";
            desCounter = 6;
            res += "'description': '"
            break;
    }

    lineNumber++; //next line

}//end loop

res += "'}]";


//WRITE PROCESS---------------------------------------------------

fs.writeFile('spells.json', res, function (err) {
    if (err) return console.log(err);
    console.log('wrote to file!');
});
