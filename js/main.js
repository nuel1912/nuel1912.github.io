const tog = document.querySelector('.toggle')
const nav = document.querySelector('.navigation')

tog.addEventListener('click', () => {
    tog.classList.toggle('active')
    nav.classList.toggle('active')
})