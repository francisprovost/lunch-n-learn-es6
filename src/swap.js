var exemple20 = () => {

    let x = 1
    let y = 2

    console.log(`before:: x: ${x} || y: ${y}`);

    // x -> y
    let temp = x;
    x = y
    y = temp;

    console.log(`after:: x: ${x} || y: ${y}`);
}


var exemple21 = () => {

    let x = 1;
    let y = 2;

    console.log(`before:: x: ${x} || y: ${y}`);

    [x, y] = [y, x];

    console.log(`after:: x: ${x} || y: ${y}`);
}