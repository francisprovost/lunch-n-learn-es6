'use strict';

var person = {
    name: 'Rick',
    age: 25,
    social: {
        facebook: 'www.facebook.com',
        twitter: 'www.twitter.com'
    }
};

var exemple16 = function exemple16() {
    var name = person.name;
    var age = person.age;

    console.log('My name is ' + name + ' and I\'m ' + age + ' years old');
};

var exemple17 = function exemple17() {
    var _person$social = person.social;
    var fb = _person$social.facebook;
    var tweet = _person$social.twitter;

    console.log('FB url is ' + fb + ' and twitter is ' + tweet);
};

var exemple18 = function exemple18() {
    var name = 'Morty';
    var age = 12;

    console.log('My name is ' + name + ' and I\'m ' + age + ' years old');
};

var getPerson = function getPerson() {
    return person;
};

var exemple20 = function exemple20() {
    var _getPerson = getPerson();

    var name = _getPerson.name;
    var age = _getPerson.age;

    console.log('My name is ' + name + ' and I\'m ' + age + ' years old');
};
'use strict';

var exemple1 = function exemple1(name) {
    console.log('Hello ' + name);
};

var exemple2 = function exemple2(name) {
    console.log('Hello ' + name);
};

var exemple3 = function exemple3(name) {
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;

    console.log('Hello ' + name + ' your age is ' + age);
};

var exemple4 = function exemple4(name, age) {
    for (var _len = arguments.length, friends = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        friends[_key - 2] = arguments[_key];
    }

    console.log('Hello ' + name + ' your age is ' + age);

    friends.forEach(function (friend) {

        console.log('One of my friend is: ' + friend);
    });
};

var getValue = function getValue() {
    return 'Lunch & Learn';
};

var exemple5 = function exemple5() {
    console.log('This is a ' + getValue());
};
'use strict';

var exemple6 = function exemple6() {

    for (var age = 1; age < 10; age++) {
        console.log('My age is: ' + age);
    }

    console.log('My age is finally: ' + age);
};

var exemple7 = function exemple7() {

    for (var age = 1; age < 10; age++) {

        setTimeout(function () {
            console.log('My age is: ' + age);
        }, 10);
    }
};

var exemple8 = function exemple8() {
    var _loop = function _loop(age) {

        setTimeout(function () {
            console.log('My age is: ' + age);
        }, 10);
    };

    for (var age = 1; age < 10; age++) {
        _loop(age);
    }
};

var exemple9 = function exemple9() {
    // const name = 'Frank';
    // name = 'Bob';

    //   SyntaxError: /Users/fprovost/dev/other/lunch-n-learn-es6/src/letVar.js: "name" is read-only
    //   30 | var exemple9 = () => {
    //   31 |     const name = 'Frank';
    // > 32 |     name = 'Bob';
    //      |     ^
    //   33 | }
};

var exemple10 = function exemple10() {
    var person = {
        name: 'Frank',
        age: 25
    };

    person.age = 26;
};
"use strict";

var es5 = {
    foo: function foo(a, b) {},
    bar: function bar(a, b) {}
};

var es6 = {
    foo: function foo(a, b) {},
    bar: function bar(a, b) {}
};
'use strict';

var exemple14 = function exemple14() {
    var name = 'Rick';
    var age = 25;

    return {
        name: name,
        age: age
    };
};

var exemple15 = function exemple15() {
    var name = 'Rick';
    var age = 25;

    return {
        name: name,
        age: age
    };
};
'use strict';

var exemple11 = function exemple11() {
    var name = 'Rick';

    console.log('Hi! My name is ' + name);
};

var exemple12 = function exemple12() {
    var name = 'Rick';
    var age = 20;

    console.log('Hi! My name is ' + name + ' and I\'m ' + (age + 5));
};

var getAge = function getAge() {
    return 25;
};

var exemple12 = function exemple12() {
    var name = 'Rick';
    var age = 20;

    console.log('Hi! My name is ' + name + ' and I\'m ' + getAge());
};
"use strict";

var exemple20 = function exemple20() {

    var x = 1;
    var y = 2;

    console.log("before:: x: " + x + " || y: " + y);

    // x -> y
    var temp = x;
    x = y;
    y = temp;

    console.log("after:: x: " + x + " || y: " + y);
};

var exemple21 = function exemple21() {

    var x = 1;
    var y = 2;

    console.log("before:: x: " + x + " || y: " + y);

    var _ref = [y, x];
    x = _ref[0];
    y = _ref[1];


    console.log("after:: x: " + x + " || y: " + y);
};
"use strict";

var exemple13 = function exemple13() {
    var _this = this;

    //ES5
    var self = this;
    this.nums.forEach(function (v) {
        if (v % 5 === 0) self.fives.push(v);
    });

    //ES6
    this.nums.forEach(function (v) {
        if (v % 5 === 0) _this.fives.push(v);
    });
};
//# sourceMappingURL=all.js.map
