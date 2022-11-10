const nav1 = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav1.offsetHeight + 150) {
        nav1.classList.add('active')
    } else {
        nav1.classList.remove('active')
    }
}




const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))
