const menuButton = document.querySelector('.menu-button')
const body = document.querySelector('main')
const menu = document.querySelector('.menu')
const navigationLinks = document.querySelectorAll('.navigation-link')

menuButton.addEventListener('click', () => {
  menu.classList.toggle('expanded')
})

body.addEventListener('click', () => {
  menu.classList.remove('expanded')
})

navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('expanded')
  })
})
