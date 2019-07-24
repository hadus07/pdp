// let demo = document.getElementById('demo')

// demo.style.color = 'rgb(24, 235, 123)'

// // console.log(demo.style)

// let showcase = document.getElementsByClassName('showcase')

// showcase[0].style.color = 'blue'

// for(let i = 0; i < showcase.length; i++) {
//     showcase[i].style.color = 'blue'
// }

// console.log(showcase)

// let p = document.getElementsByTagName('p')

// console.log(p)

// let p2 = document.querySelectorAll('p')

// p2.innerHTML = 'Changed'

// console.log(p2)

// document.getElementsByTagName('script')[0].src = ''

// document.getElementById('demo').setAttribute('href', 'google.com')

// let body = document.body

// body.appendChild(document.createElement('span'))


// console.log(document.baseURI)

// console.log(document.doctype)

// console.log(document.documentMode)

// console.log(document.documentURI)

// console.log(document.domain)

// console.log(document.referrer)






// let el = document.getElementById('anim')
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, vitae.'
// let i = 0

// function logger() {
//     if(i < text.length) {
//         el.innerHTML += text[i]
//         i++
//     }else {
//         clearInterval(timer)
//     }
// }

// let timer = setInterval(logger, 100)

// let el = document.getElementById('anim')
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, vitae.'
// let tmp = 0

// function marque() {

//     if(tmp === -370) {
//         tmp = 99
//     }

//     tmp -= 1
//     el.style.marginLeft = tmp + 'vw'
// }

// setInterval(marque, 10)




let p1 = document.getElementsByClassName('showcase')
let p2 = document.querySelectorAll('.showcase')

// for(let i = 0; i < p1.length; i++) {
//     p1[i].style.color = 'red'
// }

for(let i = 0; i < p2.length; i++) {
    p2[i].style.color = 'red'
}

// console.log(p1)
// console.log(p2)