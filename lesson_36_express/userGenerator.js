const uuid = require('uuid')

const firstNames = ['Abdullo', 'Ibrohim', 'Abbos', 'Jobir', 'Shamsiddin', 'Javlonbek', 'Qobil', 'Hafidiy', 'Sobir', 'Bobur']
const lastNames = ['Bahromov', 'Tolipov', 'Tajimov', 'Salimov', 'Abdurahimov', 'Hotamov', 'Masharipov', 'Umarov', 'Rahimov', 'Usmonov']
const codes = [ '90', '91', '93', '94', '95', '97', '98', '99']

const generateUser = () => {
    let i = Math.floor(Math.random() * 10)
    let j = Math.floor(Math.random() * 10)
    return {
        id: uuid.v4(),
        email: `${firstNames[i][0]}.${lastNames[j]}@gmail.com`.toLowerCase(),
        age: Math.floor(Math.random() * 10 + 20),
        phone: `+998${codes[Math.floor(Math.random() * 8)]}${Math.random().toString().slice(2, 9)}`,
        names: { first: firstNames[i], last: lastNames[j]}
    }
}

// let users = []
// for(let i = 0; i < 1000; i++) {
//     users.push(generateUser())
// }

// fs.appendFileSync(path.join(__dirname, 'data.json'), JSON.stringify(users, null, 4))