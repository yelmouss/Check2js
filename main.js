// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}


// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}


// Array Functions

// Find Maximum Value
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum Value
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
// Function to calculate the sum of all elements in an array
function sumArray(arr) {
    // The reduce() method is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.
    // In this case, the accumulator starts at 0 and the function adds the current array element to it, resulting in the sum of all elements in the array.
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

// Factorial// This function calculates the factorial of a given number
function factorial(num) {
  
    // If the input number is 0 or 1, the function returns 1
    // This is the base case for the recursive function
    if (num === 0 || num === 1) {
        return 1;
    }  else {
        // If the input number is greater than 1, the function calls itself
        // with the argument of (num - 1) and multiplies the result by num
        // This process repeats until the base case is reached
        return num * factorial(num - 1);
    }
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// Fibonacci Sequence
function generateFibonacci(numTerms) {
    let sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
