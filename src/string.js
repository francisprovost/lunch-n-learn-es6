var exemple11 = () => {
    const name = 'Rick';

    console.log(`Hi! My name is ${name}`);
}

var exemple12 = () => {
    const name = 'Rick';
    const age = 20;

    console.log(`Hi! My name is ${name} and I'm ${age + 5}`);
}

var getAge = () => 25;

var exemple12 = () => {
    const name = 'Rick';
    const age = 20;

    console.log(`Hi! My name is ${name} and I'm ${getAge()}`);
}