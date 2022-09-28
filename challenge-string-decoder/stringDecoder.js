// String Decoder

// Difficulty: Medium
// Concepts: Loops

// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.
// Start by creating a function called decoder that has a single parameter called code.
// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).
// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.
// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.
// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.
// Here are a few more examples:

// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'

////////// CODE HERE //////////

const decoder = (code) => {
    let output = "";
    let i = 0;
    while(i < code.length) {
        if(/\D/.test(code[i])){  // /\D/ is looking for any non digits. lowercase d /\d/ looks for digits
            output +=(code[i])
        } else {
            i += parseInt(code[i])
        }
        i++
    }
    return output
}
console.log(decoder("0h2xce5ngbrdy"))

////////// SOLUTION 2 //////////

function decoder2 (scrambled) {
    let hiddenword = "";
    for (let i = 0; i < scrambled.length; i++) {
        if(Number(scrambled[i]) >= 0) {
            i += Number(scrambled[i]) + 1
            hiddenword += scrambled[i]
        }
    }
    return hiddenword
}
console.log(decoder2("2bna0p1mp2osl0e"));

////////// SOLUTION 3 //////////

const decoder3 = str => {
    let decoded = "";
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(Number(str[i]))){
            i += Number(str[i])
        } else {
            decoded += str[i]
        }
    }
    return decoded
}

console.log(decoder3("0h2xce5ngbrdy"));