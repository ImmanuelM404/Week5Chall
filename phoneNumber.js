// phone challenge emily

// Write a function that accepts an array 
// Array consists of 10 integers (between 0 and 9)
// Returns a string of those numbers in the array 

// needs a function with an parameter of an array 
// array can tak integers 0 - 9 
// array should separate integers as in phone number format as return 


                            // Long Method
function createPhoneNumber(digits){
        return "(" + digits[0] + digits[1] + digits[2] + ") " + digits[3] +digits[4] + digits[5] + '-' + digits[6] + digits[7] + digits[8] + digits[9]
    
}

//phoneNumber([1,2,3,4,5,6,7,8,9,0])
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

                                // Solution Mehtod
function phoneNumber(digits){
    let format = '(xxx) xxx-xxxx';
    for(let i=0; i <digits.length; i++){
        format = format.replace('x', digits[i]);     // throughout loop .replace will replace every instance of 'x' with the corresponding index of digits
    }
    return format
}

console.log(phoneNumber([9,8,5,2,3,3,4,5,6,7]))