var me = {
    name: 'shaik',
    age: 20,
    speak: function (text) {
        console.log(text);
        return text;
    },
    spend: function (amount) {
        console.log("i spent", amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log("".concat(person.name, " speaks ").concat(person.speak("urdu"), " he spents \u20B9").concat(person.spend(555), " on data."));
};
greetPerson(me);
