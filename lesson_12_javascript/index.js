// let person = {
//     name: 'Anvar',
//     age: 22,
//     getYearofBirth: function() {
//         return this.name + ' ' + (new Date().getFullYear() - this.age) + ' yilda tug\'ilgan'
//     }
// }

// console.log(person.getYearofBirth())

// let str = 'We make developers, we do'

// function deepReplace(str, str1, str2) {
//     str = str.toLowerCase()
//     while(str.indexOf(str1) !== -1) {
//         str = str.replace(str1, str2)
//     }
//     return str
// }

// console.log(deepReplace(str, 'we', 'I'))

function length(arr) {
    let i = 0
    while(typeof arr[i] !== 'undefined') {
        i++
    }
    return i
}

let arr = [1, 2, 3, 5]

console.log(length(arr))