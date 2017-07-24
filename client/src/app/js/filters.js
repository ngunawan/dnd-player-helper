//filter: delete first occurence of parentheses
angular.module('app').filter('deleteParentheses', function () {
    return function (string) {
        let start_index, end_index;
        start_index = string.indexOf('(');
        end_index = string.indexOf(')');

        string = string.substring(0, start_index) + string.substring(end_index + 1, string.length);
        string.trim();

        return string;
    };
});

//filter: convert 5.23 to 5gp 2sp 3cp
angular.module('app').filter('convertCurrency', function () {
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


angular.module('app').filter('convertStringData', function () {
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

angular.module('app').filter('grabDice', function () {
    return function takeFirstWord(string) {
        let index = string.indexOf(' ');
        return string.slice(0, index);
    }

})

angular.module('app').filter('grabDamage', function () {
    return function takeSecondWord(string) {
        let index = string.indexOf(' ');
        return string.slice(index, string.length);
    }

})

angular.module('app').filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});

angular.module('app').filter('levelConvert', function() {
    function capitalize(string) {
        string = string.replace(/\w\S*/g,
            function (word) {
                return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
            });
        return string;
    }
    
    return function(string) {
        let temp_array = string.split(" ");
        let final_string = "Lvl " + temp_array[0];
        if(temp_array[1]) {
            final_string += (" " + temp_array[1]);
        }
        
        return capitalize(final_string);
    }
})
