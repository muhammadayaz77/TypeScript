

class Test{
  public name : string
  constructor(n : string){
    this.name = n;
  }
}

let test = new Test('hello');

console.log(test.name)


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


class Child extends Test{
  n : string = this.name
}