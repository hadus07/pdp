function follow(e) {
    let popup = document.getElementById('popup')

    const force = 40

    let x = e.pageX
    let y = e.pageY

    let w = window.innerWidth
    let h = window.innerHeight

    let rotateX = -((y/h * force) - force/2)
    let rotateY = (x/w * force) - force/2

    // let rotation = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
    let rotation = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    popup.style.transform = rotation

    // https://onelittledesigner.com/rapidweaver-stack/popBox/
}

window.addEventListener('mousemove', follow)