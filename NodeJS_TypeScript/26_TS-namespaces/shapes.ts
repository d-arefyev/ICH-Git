// namespace
// class

export namespace Shapes {
  export class Circle {
    constructor(public radius: number) {}
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
      return Math.PI * this.radius * 2;
    }
  }
  export class Square {
    constructor(public side: number) {}
    getArea() {
      return Math.pow(this.side, 2);
    }
    getPerimeter() {
      return this.side * 4;
    }
  }
}

const circle1 = new Shapes.Circle(10);
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
