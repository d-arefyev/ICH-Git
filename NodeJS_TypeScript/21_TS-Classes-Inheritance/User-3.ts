class SuperPuperUser {
  key: string;
  constructor(key: string) {
    this.key = key;
  }
  sayHi() {
    console.log("Привет Мир");
  }
}

class SuperUser extends SuperPuperUser {
  otherKey: string;
  constructor(key: string, otherKey: string) {
    super(key);
    this.otherKey = otherKey;
  }
}

class SimpleUser extends SuperUser {
  otherChildKey: string;
  constructor(key: string, otherKey: string, otherChildKey: string) {
    super(key, otherKey);
    this.otherChildKey = otherChildKey;
  }
  //@Override <- Java
  sayHi() {
    // N.B.
    super.sayHi();
    console.log("Hello world!");
  }
}

const childObj = new SimpleUser("1", "2", "3");
childObj.sayHi();
