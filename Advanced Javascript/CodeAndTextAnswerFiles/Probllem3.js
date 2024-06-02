const Calculator = {
    result: 0,

    add(value) {
        this.result += value;
        return this;
    },

    subtract(value) {
        this.result -= value;
        return this;
    },

    multiply(value) {
        this.result *= value;
        return this;
    },

    divide(value) {
        if (value !== 0) {
            this.result /= value;
        } else {
            console.error("Division by zero is not allowed.");
        }
        return this;
    },

    getResult() {
        return this.result;
    },

    reset() {
        this.result = 0;
        return this;
    }
};

// Usage example
Calculator.add(10).subtract(2).multiply(3).divide(4);
console.log(Calculator.getResult()); // Output: 6

// Chaining more operations
Calculator.reset().add(5).multiply(2).subtract(3).divide(2);
console.log(Calculator.getResult()); // Output: 3.5
/*
Explanation:
Calculator Object:

The Calculator object has a property result to store the current result.
Methods add, subtract, multiply, and divide perform arithmetic operations and update result.
Each method returns this, allowing for method chaining.
getResult returns the current result.
reset resets result to 0 and also returns this.
Method Chaining:

Each arithmetic method modifies result and returns the Calculator object (this), enabling chaining.
For example, Calculator.add(10).subtract(2).multiply(3).divide(4) performs a sequence of operations and can be executed in a single chain.
Usage Examples:

Calculator.add(10).subtract(2).multiply(3).divide(4) performs the operations 10 + 0 - 2, then multiplies by 3, and finally divides by 4, resulting in 6.
Calculator.reset().add(5).multiply(2).subtract(3).divide(2) resets the result, then adds 5, multiplies by 2, subtracts 3, and divides by 2, resulting in 3.5.
*/