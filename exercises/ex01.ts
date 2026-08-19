interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;

  calculatePerimeter(): number;
  calculateArea(): number;
  isTriangle(): boolean;
}

const myTriangle: Triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5,

  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  },

  calculateArea(): number {
    const s = this.calculatePerimeter() / 2;

    return Math.sqrt(
      s *
        (s - this.sideA) *
        (s - this.sideB) *
        (s - this.sideC)
    );
  },

  isTriangle(): boolean {
    return (
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideB + this.sideC > this.sideA
    );
  },
};

console.log(myTriangle.calculatePerimeter());
console.log(myTriangle.calculateArea());
console.log(myTriangle.isTriangle());