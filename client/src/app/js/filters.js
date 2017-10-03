var app = angular.module('app');

//delete first occurence of parentheses
//-------------------------
app.filter('deleteParentheses', function () {
    return function (string) {
        let start_index, end_index;
        start_index = string.indexOf('(');
        end_index = string.indexOf(')');

        string = string.substring(0, start_index) + string.substring(end_index + 1, string.length);
        string.trim();

        return string;
    };
});

//convert 5.23 -> 5gp 2sp 3cp
//-------------------------
app.filter('convertCurrency', function () {
    function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
        return val;
    }

    return function (decimal) {
        let gp = 0,
            sp = 0,
            cp = 0,
            accumulated = [];

        gp = Math.floor(decimal);
        decimal = (decimal - gp) * 10;
        sp = Math.floor(decimal);
        decimal = (decimal - sp) * 10;
        cp = Math.floor(decimal);


        if (gp != 0) {
            accumulated.push(commaSeparateNumber(gp) + "gp");
        }
        if (sp != 0) {
            accumulated.push(sp + "sp");
        }
        if (cp != 0) {
            accumulated.push(cp + "cp");
        }

        return accumulated.join(" ");
    };
});

//convert half-elf -> Half elf
//-------------------------
app.filter('convertStringData', function () {
    function replaceDash(string) {
        string = string.replace(/-/g, " ");
        return string
    }

    function capitalize(string) {
        string = string.replace(/\w\S*/g,
            function (word) {
                return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
            });
        return string;
    }

    return function (str) {
        str = replaceDash(str);
        str = capitalize(str);
        return str;
    }
});

//take 1d6 piercing -> 1d6
//-------------------------
app.filter('grabDice', function () {
    return function takeFirstWord(string) {
        let index = string.indexOf(' ');
        return string.slice(0, index);
    }

})

//take 1d6 piercing -> piercing
//-------------------------
app.filter('grabDamage', function () {
    return function takeSecondWord(string) {
        let index = string.indexOf(' ');
        return string.slice(index, string.length);
    }

})

//immediate if 
//-------------------------
app.filter('iif', function () {
    return function (input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
    };
});

//convert 1 -> Lvl 1
//-------------------------
app.filter('levelConvert', function () {
    function capitalize(string) {
        string = string.replace(/\w\S*/g,
            function (word) {
                return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
            });
        return string;
    }

    return function (string) {
        let temp_array = string.split(" ");
        let final_string = "Lvl " + temp_array[0];
        if (temp_array[1]) {
            final_string += (" " + temp_array[1]);
        }

        return capitalize(final_string);
    }
});

//convert 1 -> 1st, 0 -> Cantrip
//-------------------------
app.filter('spellLevel', function () {
    return function (number) {
        switch (number) {
            case 0:
                return "Cantrip";
            case 1:
                return "1st";
            case 2:
                return "2nd";
            case 3:
                return "3rd";
            default:
                return number + "th";
        }
    }
})

//convert 1-4 -> 2 (+2)
//-------------------------
app.filter('abilityMod', function () {
    return function (number) {
        if (number <= 1) {
            return -5;
        } else if (number >= 2 && number <= 3) {
            return -4
        } else if (number >= 4 && number <= 5) {
            return -3
        } else if (number >= 6 && number <= 7) {
            return -2
        } else if (number >= 8 && number <= 9) {
            return -1
        } else if (number >= 10 && number <= 11) {
            return 0
        } else if (number >= 12 && number <= 13) {
            return +1
        } else if (number >= 14 && number <= 15) {
            return +2
        } else if (number >= 16 && number <= 17) {
            return +3
        } else if (number >= 18 && number <= 19) {
            return +4
        } else if (number >= 20 && number <= 21) {
            return +5
        } else if (number >= 22 && number <= 23) {
            return +6
        } else if (number >= 24 && number <= 25) {
            return +7
        } else if (number >= 26 && number <= 27) {
            return +8
        } else if (number >= 28 && number <= 29) {
            return +9
        } else if (number >= 30) {
            return +10
        }
    }
});

app.filter('addSign', function () {
    return function (number) {
        if (Math.sign(number) == -1) {
            return number + ''
        } else if (Math.sign(number) == 1) {
            return "+" + number
        } else if (number == 0) {
            return '0'
        } else {
            return 'not valid'
        }
    }
});

//sum array of classes and convert to proficiency bonus
//-------------------------
app.filter('profBonus', function () {
    return function (array) {
        if (array == NaN || array == undefined) {
            return 0;
        }

        let total_level = 0;
        for (let i = 0; i < array.length; i++) {
            total_level += array[i].level;
        }

        if (total_level >= 1 && total_level <= 4) {
            return +2
        } else if (total_level >= 5 && total_level <= 8) {
            return +3
        } else if (total_level >= 9 && total_level <= 12) {
            return +4
        } else if (total_level >= 13 && total_level <= 16) {
            return +5
        } else if (total_level >= 17 && total_level <= 20) {
            return +6
        } else if (total_level > 20) {
            return +6
        } else {
            return 0
        }
    }
});

//limit to a certain character and insert ellipsis 
//-------------------------
app.filter('ellipsis', function () {
    return function (text, length) {
        if (text.length > length) {
            return text.substr(0, length) + "...";
        }
        return text;
    }
});
