if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex) {
        // Default fromIndex to 0 if not provided or if it is not a number
        if (fromIndex === undefined || typeof fromIndex !== 'number') {
            fromIndex = 0;
        }

        // If fromIndex is negative, calculate the correct starting index
        if (fromIndex < 0) {
            fromIndex = this.length + fromIndex;
            if (fromIndex < 0) {
                fromIndex = 0;
            }
        }

        for (let i = fromIndex; i < this.length; i++) {
            // Check for NaN separately since NaN !== NaN
            if (this[i] === element || (typeof element === 'number' && isNaN(element) && isNaN(this[i]))) {
                return true;
            }
        }

        return false;
    };
}

// Usage example
const arr = [1, 2, 3, NaN, 4, 5];
console.log(arr.customIncludes(3));     // Output: true
console.log(arr.customIncludes(6));     // Output: false
console.log(arr.customIncludes(NaN));   // Output: true
console.log(arr.customIncludes(2, 2));  // Output: false
console.log(arr.customIncludes(2, -3)); // Output: false
console.log(arr.customIncludes(4, -2)); // Output: true
