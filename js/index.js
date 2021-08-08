// Your code goes here
const funBus = document.querySelector('h1')
funBus.addEventListener('mouseover', () => {
    funBus.style = 'color: yellow'
})
const navAnchors = document.querySelectorAll('nav a')
document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape')
        navAnchors.forEach((event) => {
            event.style = 'color: grey'
        })
})
const funBusImg = document.querySelector('.intro img')
funBusImg.addEventListener('dblclick', () => {
    funBusImg.style = 'display: none'
})
const contentImgs = document.querySelectorAll('.img-content img')
const clickDiv = document.querySelector('.content-section')
clickDiv.addEventListener('click', () => {
    contentImgs.forEach( (evt) =>{
        evt.style = 'width: 200px'
    })
})
const destinationImg = document.querySelector('.content-destination img')
destinationImg.addEventListener('click', (evt) => {
    destinationImg.style = 'width: 300px'
})
const destinations = document.querySelectorAll('.destination h4')
console.log(destinations)
destinations.forEach((evt) => {
    evt.addEventListener('mouseover', () => {
        evt.style = 'font-weight: bold'
    })
})
const buttons = document.querySelectorAll('.destination .btn')
buttons.forEach((evt) => {
    evt.addEventListener('mouseover', () => {
        evt.textContent = 'CLICK ME'
    })
})