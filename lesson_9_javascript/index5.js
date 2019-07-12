function log(data) {
    console.log(JSON.stringify(data, null, 4))
}

function deepCopy(obj) {
    let tmp
    let keys = Object.keys(obj)
    for(let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] !== 'object') {
            tmp = Object.assign({}, obj)
        }else {
            tmp[keys[i]] = deepCopy(obj[keys[i]])
        }
    }

    return tmp
}

// function deepCopy(obj) {
//     let tmp = null
//     Object.keys(obj).map(key => {
//         if (typeof obj[key] !== 'object') {
//             tmp = Object.assign({}, obj)
//         } else {
//             tmp[key] = deepCopy(obj[key])
//         }
//     })

//     return tmp
// }

const person1 = {
    name: 'Anvar',
    age: 23,
    address: {
        region: 'Tashkent',
        district: 'Mirobod',
    }
}


// const person2 = Object.assign({}, person1)
// const person2 = {...person1}

const person2 = deepCopy(person1)

person2.name = 'Oybek'
person2.age = 28
person2.address.region = 'Qashqadaryo'

log(person1)