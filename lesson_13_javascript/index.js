// let name = 'ibrohim'

// console.log(name.toUpperCase())

// let name = new String('anvar')

// name.toUpperCase()

// class Str {
//     constructor(data) {
//         this.data = data

//         // console.log('initialized')
//     }

//     get length() {
//         let count = 0
//         while(this.data[count] !== undefined) {
//             count++
//         }
//         return count
//     }

//     toUpper() {
//         let tmp = ''
//         for(let i = 0; i < this.length; i++) {
//             if(
//                 this.data[i].charCodeAt() >= 'a'.charCodeAt() && 
//                 this.data[i].charCodeAt() <= 'z'.charCodeAt()
//             ) {
//                 tmp += String.fromCharCode(
//                     this.data[i].charCodeAt() 
//                         - ('a'.charCodeAt() - 'A'.charCodeAt())
//                 )
//             }else if(
//                 this.data[i].charCodeAt() >= 'A'.charCodeAt() && 
//                 this.data[i].charCodeAt() <= 'Z'.charCodeAt()
//             ) {
//                 tmp += this.data[i]
//             }else {
//                 return null
//             }
//         }
//         return tmp
//     }
// }

// let name = new Str('anvar')

// console.log(name.toUpper())
// console.log(name.length)

class Arr {
    constructor() {
        this.data = arguments
    }

    get length() {
        let count = 0
        while(this.data[count] !== undefined) {
            count++
        }
        return count
    }

    display() {
        let tmp = ''
        for(let i = 0; i < this.length; i++) {
            tmp += this.data[i] + ', '
        }
        return tmp
    }

    push(newElement) {
        this.data[this.length] = newElement
    }
}

let a = new Arr(1, 2, 3, 4, 5, 6, 7)

a.push(8)

a.push(10000)

document.write(a.display())