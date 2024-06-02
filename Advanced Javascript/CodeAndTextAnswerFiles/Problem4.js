// Base class
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

// Subclass Circle
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

// Function to demonstrate polymorphism
function drawShape(shape) {
    shape.draw();
}

// Usage example
const shapes = [
    new Circle(),
    new Rectangle(),
    new Shape()
];

shapes.forEach(shape => drawShape(shape));

// Output:
// Drawing a circle
// Drawing a rectangle
// Drawing a shape
