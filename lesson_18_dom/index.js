
let page = 1
let size = 20

let url = `https://randomuser.me/api/?results=${size}&gender=female&page=${page}`

document.getElementById('next').addEventListener('click', () => {
    document.getElementsByTagName('ul')[0].innerHTML = ''
    getUsers()
    page++
    document.getElementById('info').innerHTML = `${page} | ${size}`
})

document.getElementById('prev').addEventListener('click', () => {
    if(page > 1) {
        document.getElementsByTagName('ul')[0].innerHTML = ''
        getUsers()
        page--
        document.getElementById('info').innerHTML = `${page} | ${size}`
    }
})

const getUsers = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {

        let people = data.results

        for(let i in people) {
            let person = people[i]

            let li = document.createElement('li')
            let img = document.createElement('img')

            let { title, first, last } = person.name
            li.innerHTML = `${title} ${first} ${last}`
            img.src = person.picture.large

            document.getElementsByTagName('ul')[0].append(li)            
            document.getElementsByTagName('ul')[0].append(img)            
        }
    })
    .catch(err => console.log(err))
}

getUsers()
document.getElementById('info').innerHTML = `${page} | ${size}`
