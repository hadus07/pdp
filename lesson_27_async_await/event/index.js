const getProp = p => window.getComputedStyle(box).getPropertyValue(p)

let box = document.querySelector('div')
let boxWidth = getProp('width')


window.addEventListener('keydown', event => {
    if(event.key === 'ArrowRight') {
        let newBoxWidth = getProp('left')
        box.style.left = 
            parseInt(newBoxWidth) + parseInt(boxWidth) + 'px'
    }else if(event.key === 'ArrowLeft') {
        let newBoxWidth = getProp('left')
        box.style.left = 
            parseInt(newBoxWidth) - parseInt(boxWidth) + 'px'
    }else if(event.key === 'ArrowDown') {
        let newBoxWidth = getProp('top')
        box.style.top = 
            parseInt(newBoxWidth) + parseInt(boxWidth) + 'px'
    }else if(event.key === 'ArrowUp') {
        let newBoxWidth = getProp('top')
        box.style.top = 
            parseInt(newBoxWidth) - parseInt(boxWidth) + 'px'
    }
})