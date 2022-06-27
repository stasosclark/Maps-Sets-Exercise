// What does the following code return?

new Set([1,1,2,2,3,4]) // A Set: {1, 2, 3, 4}


// What does the following code return?

[...new Set("referee")].join("") // "ref"


// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true); // [1, 2, 3] true
m.set([1,2,3], false); // [1, 2, 3] false


// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(arr) {
    const arrSet = new Set(arr);
    if (arrSet === arr) {
        return false
    } else {
        return true
    }
};


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    let vowelMap = new Map();
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            if (vowelMap.has(str[i])) {
                vowelMap.str[i] += 1;
            } else {
                vowelMap.str[i] = 1;
            }
        }
    }
    return vowelMap
}