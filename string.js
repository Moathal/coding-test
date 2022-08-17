function stringLength(string) {
    if (string.length < 1) return 'Length is less than 1';
    if (string.length > 10) return 'Length is more than 10'
    return string.length;
};

function reverseString(string) {
    string = string.split("").reverse().join('');
    return string;
};

function capitalize(string) {
    return string.toUpperCase();
}



module.exports = { stringLength: stringLength, reverseString: reverseString, capitalize: capitalize };