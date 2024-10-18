export namespace Shapes {
  export namespace D3 {
    export class Cube {
      constructor(public side: number) {}
      getVolume(): number {
        return Math.pow(this.side, 3);
      }
    }
  }
  export namespace D2 {
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
}

const d3 = new Shapes.D3.Cube(10);
console.log(d3.getVolume());
