"use strict";
class Test {
    constructor(n) {
        this.name = n;
    }
}
// Classes in JS/TS
// public 
// It is also set by default, and we can also change it for clarification
// It is access inside and outside of class
// private 
// We can set private for security,
// It can access only inside class
// Protected 
// We can set protected for security 
// It can be access within the class and also inside child of that class
class Childd extends Test {
    constructor() {
        super(...arguments);
        this.fullname = this.name;
    }
    ayaz() {
        console.log(this.fullname);
    }
}
// let test = new Test('hello');
let childd = new Childd('askdf');
childd.ayaz();
