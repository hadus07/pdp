// let errorCont = document.getElementById('error')

// // function showError(el, err) {
// //     el.style.borderColor = 'red'
// //     el.style.outline = 'none'
// //     errorCont.innerHTML = err
// // }

// function checkInput(e) {
//     let el = e.target
//     let str = el.value
//     console.log(str.length)
//     if(el.className === 'login') {
//         for(let i in str) {
//             if(str[i] >= 'A' && str[i] <= 'Z') {
//                 el.style.borderColor = 'red'
//                 el.style.outline = 'none'
//                 errorCont.innerHTML = 'Faqat kichik harflarni kiriting'
//             }else if(!isNaN(parseInt(str))) {
//                 el.style.borderColor = 'red'
//                 el.style.outline = 'none'
//                 errorCont.innerHTML = 'Birinichi element raqam bo\'lmasligi kerak'
//             }else if(str.length === 0) {
//                 el.style.borderColor = 'unset'
//                 el.style.outline = 'unset'
//                 errorCont.innerHTML = ''
//             }else {
//                 el.style.borderColor = 'unset'
//                 el.style.outline = 'unset'
//                 errorCont.innerHTML = ''
//             }

//             // Uyga vazifa: 1-chi element '' ga teng bosa unset ishlasin 
//         }
//     }
// }

// let loggedIn = true

// let inputs = document.getElementsByTagName('input')

// if(!loggedIn) {
//     for(let i = 0; i < inputs.length; i++) {
//         inputs[i].addEventListener('input', checkInput)
//     }
// }

function mouseFunction(event) {
    console.log(event.pageX, event.pageY)
    // Sichqonchaga ergashib yuradigan element yaratish uyga vazifa
}

window.addEventListener('mousemove', mouseFunction)