var exemple13 = function () {
    //ES5
    var self = this;
    this.nums.forEach(function (v) {
        if (v % 5 === 0)
            self.fives.push(v);
    });



    //ES6
    this.nums.forEach((v) => {
        if (v % 5 === 0)
            this.fives.push(v)
    });
}