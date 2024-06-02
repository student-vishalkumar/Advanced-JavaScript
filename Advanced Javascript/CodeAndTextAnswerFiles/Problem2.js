// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor that inherits from Person
function Employee(name, age, designation) {
    Person.call(this, name, age); // Call the Person constructor with this context
    this.designation = designation;
}

// Inherit the prototype of Person
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property correctly for Employee
Employee.prototype.constructor = Employee;

// Add getDetails method to Employee
Employee.prototype.getDetails = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
};

// Usage example
const employee1 = new Employee('Alice', 30, 'Software Engineer');
const employee2 = new Employee('Bob', 25, 'Product Manager');

employee1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
employee1.getDetails(); // Output: Name: Alice, Age: 30, Designation: Software Engineer

employee2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.
employee2.getDetails(); // Output: Name: Bob, Age: 25, Designation: Product Manager
