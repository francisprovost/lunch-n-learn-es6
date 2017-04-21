var exemple6 = () => {

    for(var age = 1; age < 10; age++) {
        console.log('My age is: ' + age);
    }

    console.log('My age is finally: ' + age);
}

var exemple7 = () => {

    for(var age = 1; age < 10; age++) {

        setTimeout(() => {
            console.log('My age is: ' + age);
        }, 10);
    }
}

var exemple8 = () => {

    for(let age = 1; age < 10; age++) {

        setTimeout(() => {
            console.log('My age is: ' + age);
        }, 10);
    }
}

var exemple9 = () => {
    // const name = 'Frank';
    // name = 'Bob';

    //   SyntaxError: /Users/fprovost/dev/other/lunch-n-learn-es6/src/letVar.js: "name" is read-only
    //   30 | var exemple9 = () => {
    //   31 |     const name = 'Frank';
    // > 32 |     name = 'Bob';
    //      |     ^
    //   33 | }
}

var exemple10 = () => {
    const person = {
        name: 'Frank',
        age: 25
    };

    person.age = 26;
}