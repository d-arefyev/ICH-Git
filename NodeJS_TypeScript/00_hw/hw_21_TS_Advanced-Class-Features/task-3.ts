// Абстрактный класс Appliance -----------------------------------------------------------

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}
// Класс WashingMachine, который наследует Appliance
class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing machine is now ON");
  }
  turnOff(): void {
    console.log("Washing machine is now OFF");
  }
}
// Класс Refrigerator, который наследует Appliance
class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is now ON");
  }
  turnOff(): void {
    console.log("Refrigerator is now OFF");
  }
}
// Создание массива объектов типа Appliance
const appliances: Appliance[] = [
  new WashingMachine(),
  new Refrigerator()
];
// Перебор массива и вызов методов turnOn и turnOff для каждого объекта
appliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});
