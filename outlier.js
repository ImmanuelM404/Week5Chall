// Challenge Outlier Cameron

// Given an array (array length is >= 3 )
// Given array contains integers 
// Array is made of only odd or even integers with an excpet of an outlier 
// Outlier can be classifed as 'N'
// Write a fucntion that returns that outlier 


// Use modulo (%) to determine whether even/odd
// function arugment is an array 
// modulo operation should return that outlier with conditional statement 



                                                        // My First Attempt 
// function outlierN(arrInt) {
//     //ar = [2, 4, 0, 100, 4, 11, 2602, 36]
//     oddArr = []
//     evenArr = []

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0 ){
//             arr[i] = oddArr.push(arr[i])
//              console.log(oddArr)
        
//         } else {
//             console.log('All even numbers in this array')
//         }
//         //return oddArr.push(arr[i])
//     } 
    
// }

// arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
// outlierN(arr1)

function outlierN(arrInt) {
    //ar = [2, 4, 0, 100, 4, 11, 2602, 36]
    oddArr = []
    evenArr = []
    
    for(let i = 0; i < arrInt.length; i++){
        let num = arrInt[i]                         // assigning array to new variable makes code more legible 
                                                    // arrInt[i] is the index of each item from the array
        if (num % 2 === 0 ){
            evenArr.push(num) 
        } else {
            oddArr.push(num)
        }
    } 

    if (evenArr.length === 1) {             // Understand the logic of this part 
        return evenArr[0]                   // length = 1 means that if the outlier is found then return the outlier
    } else {                                // [0] because the first index of any array is [0]
        return oddArr[0]
    }
    
}

arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
console.log(outlierN(arr1))
