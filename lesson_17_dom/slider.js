const images = [
    {
        text: 'Image 1',
        uri: 'https://images.unsplash.com/photo-1496518908709-02b67989c265?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
    {
        text: 'Image 2',
        uri: 'https://images.unsplash.com/photo-1485249884563-0de923c9a8db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
    {
        text: 'Image 3',
        uri: 'https://images.unsplash.com/photo-1474859569645-e0def92b02bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
    {
        text: 'Image 4',
        uri: 'https://images.unsplash.com/photo-1420641606245-05c059de479a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
]

let g = 0

let image = document.getElementById('img')
let text = document.getElementById('text')
let left = document.getElementById('left')
let right = document.getElementById('right')
let slider = document.getElementById('slider')

setData()

left.addEventListener('click', goLeft)
right.addEventListener('click', goRight)


function goLeft() {
    setData(g % images.length)
    g--
}

function goRight() {
    setData(g % images.length)
    g++
}

function setData(i = 0) {
    text.innerHTML = images[i].text
    image.src = images[i].uri
    slider.style.backgroundImage = `url('${images[i].uri}')`
}

// Shuni tugatib kelish