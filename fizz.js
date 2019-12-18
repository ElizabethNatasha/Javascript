// function that takes 2 arrays and returns 
// 'Fizz' if combined length is divisible by 3 
// 'Buzz' if divisible by 5 
// 'Fizzbuzz' if divisible by both 5 and 3 or the combined length of the list

// Declare the arrays to be passed to the fizzbuzz function
let list1 = []
let list2 = []

let fizzbuzz = function (list1, list2) {
    // calculate and store the combined length of the two arrays
    let combinedLength = list1.length + list2.length
    // if combined length is divisible by 3 and 5 return 'fizzbuzz
    if (combinedLength % 3 == 0 && combinedLength % 5 == 0 ){
        return 'fizzbuzz'
    }
    // if the combined length is divisible by 3 return 'fizz'
    else if (combinedLength % 3 == 0){
        return 'fizz'
    }
    // if the combined length is divisible by 5 return 'buzz'
    else if (combinedLength % 5 == 0){
        return 'buzz'
    }
    // otherwise return the combined length
    else {
        return combinedLength
    }
}

// test cases
console.log(fizzbuzz([1, 2, 3], []))
console.log(fizzbuzz([1, 2, 3], [1, 2]))
console.log(fizzbuzz([1, 2, 3], [1]))


// export { fizzbuzz }

