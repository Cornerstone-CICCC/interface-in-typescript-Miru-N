interface Shape {
  calculatePerimeter(): number;
  calculateArea(): number;
}

interface Triangle extends Shape {
  sideA: number;
  sideB: number;
  sideC: number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  side: number;
}

const rectangle: Rectangle = {
  width: 4,
  height: 5,

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  },

  calculateArea(): number {
    return this.width * this.height;
  },
};

const circle: Circle = {
  radius: 3,

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  },

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  },
};

const square: Square = {
  side: 4,

  calculatePerimeter(): number {
    return 4 * this.side;
  },

  calculateArea(): number {
    return this.side * this.side;
  },
};