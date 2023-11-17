// creates a constructor called rectangle that takes width and height as parameters, adds a method calculate area and outputs the area of a rectangle
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  const rectangle1 = new Rectangle(10, 5);
  const rectangle2 = new Rectangle(20, 3);
  
  console.log(rectangle1.calculateArea()); // Output: 50
  console.log(rectangle2.calculateArea()); // Output: 60
  