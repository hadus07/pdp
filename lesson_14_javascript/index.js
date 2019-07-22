// // class M {
// //     multiply() {
// //         let result = 1
// //         for(let i = 0; i < arguments.length; i++) {
// //             result = result * arguments[i]
// //         }
// //         return result
// //     }
// // }

// // class G extends M {
// //     peri() {
// //         let result = 0
// //         for(let i = 0; i < arguments.length; i++) {
// //             result = result + arguments[i]
// //         }
// //         return result
// //     }
// // }

// // // let mat = new M()
// // // let x = mat.multiply(1, 2, 3)

// // // let geo = new G()
// // // let x = geo.multiply(4, 7)
// // // let y = geo.peri(4, 7, 8, 9, 12)

// // class X extends G {

// // }

// // let x = new X()


// // console.log(x.multiply(2, 10))
// // console.log(x.peri(5, 4, 6))

// class A {
//     constructor(data) {
//         this.data = data
//     }

//     display() {
//         console.log('Salom ' + this.data)
//     }
// }

// class B extends A {
//     constructor(data, num) {
//         // super(data)
//         this.num = num
//     }

//     pow() {
//         console.log(this.num * this.num)
//     }
// }

// let tmp = new B('Jobir', 5)

// tmp.display()
// tmp.pow()

let test = [1, [2, [3, [4, [5, 6, [7], 8]]]]]

function flatten(arr) {
    let tmp = [...arr], result = [], i = 0

    while(i < tmp.length) {
        if(typeof tmp[i] !== 'object') {
            result.push(tmp[i])
            i++
        }else {
            tmp = [...tmp[i]]
            i = 0
        }
    }

    return result
}

console.log(flatten(test))  // [1, 2, 3, 4, 5]