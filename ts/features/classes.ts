class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car3 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("driving 2");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car3 = new Car3(4, "red");
car3.startDriving();
