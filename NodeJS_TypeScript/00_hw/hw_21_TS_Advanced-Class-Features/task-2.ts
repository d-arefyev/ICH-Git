// Абстрактный класс Shape с цветом ------------------------------------------------------

abstract class Shape {
  abstract calculateArea(): number;
}

// Абстрактный класс ColoredShape, который наследует Shape
abstract class ColoredShape extends Shape {
  abstract color: string;

  displayColor(): void {
    console.log(`Color: ${this.color}`);
  }
}

// Класс ColoredCircle, который наследует ColoredShape
class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Класс ColoredRectangle, который наследует ColoredShape
class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Создание объектов классов ColoredCircle и ColoredRectangle
const circle = new ColoredCircle(5, "red");
const rectangle = new ColoredRectangle(4, 6, "blue");

// Массив объектов типа ColoredShape
const shapes: ColoredShape[] = [circle, rectangle];

// Перебор массива и вывод площади и цвета каждого объекта
shapes.forEach((shape) => {
  console.log(`Area: ${shape.calculateArea()}`);
  shape.displayColor();
});
