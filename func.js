"use strict"
let countVowels = function (aString) {
    // list of known vowels
    let vowels = ['a', 'e', 'i', 'o', 'u']
    // "string of all and only the vowels from the original string, aString"
    let item1 = ''
    //  "string of duplicates"   
    let item2 = ''
    // "number of duplicates in the original string, aString"
    let num = 0
    
    // loop through each letter of the original string, aString 
    for(let letter of aString) {
        // if the letter is a vowel and the letter is not a duplicate in the item1 string
        if (vowels.includes(letter) && !(item1.includes(letter))) {
            // then add the letter to the item1 string
            item1 += letter
        }
        // if the letter is a duplicate in the item2 string 
        if (item2.includes(letter)){
            // then increment the number of duplicates
            num++
        }
        // Add the letter to the string of duplicates
        item2 += letter
    }
    // return an array of the vowels and number of duplicates in the original string, aString<
    return [item1, num]
    
}

console.log(countVowels('mulekatete'))
console.log(countVowels('mini me'))

