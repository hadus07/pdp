// // // Oddiy if else
// // if (1 < 5) {
// //     console.log('Kichik')
// // } else {
// //     console.log('Katta')
// // }

// // // Ternary
// // 6 < 5 ? console.log('Kichik') : console.log('Katta')

// // Switch statement
// let x = 10
// switch(x % 3) {
//     case 0:
//         console.log(0)
//         break
//     case 1:
//         console.log(1)
//         break
//     default:
//         console.log('Xato')
// }

// if(x % 3 === 0) {
//     console.log(0)
// }else if(x % 3 === 1) {
//     console.log(1)
// }else {
//     console.log('Xato')
// }

// While loop
// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let arr = [1, 2, 3, 4, 5]

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * arr[i])
// }


// for (let item in arr) {
//     console.log(arr[item] * arr[item])
// }

// for(let i = 0; i < 10; i++) {
//     if (i === 7) {
//         break
//     }
//     console.log(i)
// }

// let sum = 0
// for(let i = 0; i < 10; i++) {
//     if (i === 7) {
//         continue
//     }
//     sum += i
// }

// console.log(sum)

// // Recursion

// function fact(number) {
//     let result = 1
//     for(let i = 1; i <= number; i++) {
//         result *= i
//     }

//     return result
// }

// let fact = function(number) {
//     let result = 1
//     for(let i = 1; i <= number; i++) {
//         result *= i
//     }

//     return result
// }

// let fact = number => {
//     let result = 1
//     for(let i = 1; i <= number; i++) {
//         result *= i
//     }

//     return result
// }

// let fact = number => {
//     if(number === 0) {
//         return 1
//     }else {
//         return number * fact(number - 1)
//     }
// }

let arr = [1, 2, 3, 4, 5]

// let newArr = arr.map(raqam => {
//     return raqam * raqam
// })

function map(a, func) {
    let tmp = []
    for(let i = 0; i < a.length; i++) {
        let result = func(a[i])
        tmp.push(result)
    }
    return tmp
}

let foo = raqam => {
    return raqam * raqam
}

let newArr = map(arr, foo)

console.log(newArr)