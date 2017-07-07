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
