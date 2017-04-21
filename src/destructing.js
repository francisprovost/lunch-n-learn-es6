const person = {
    name: 'Rick',
    age: 25,
    social: {
        facebook: 'www.facebook.com',
        twitter: 'www.twitter.com'
    }
};

var exemple16 = () => {
    const {name, age} = person;
    console.log(`My name is ${name} and I'm ${age} years old`);
}


var exemple17 = () => {
    const {facebook:fb, twitter:tweet} = person.social;
    console.log(`FB url is ${fb} and twitter is ${tweet}`);
}


var exemple18 = () => {
    const [name, age] = ['Morty', 12];
    console.log(`My name is ${name} and I'm ${age} years old`);
}

var getPerson = () => person;

var exemple20 = () => {

    const {name, age} = getPerson();
    console.log(`My name is ${name} and I'm ${age} years old`);
}