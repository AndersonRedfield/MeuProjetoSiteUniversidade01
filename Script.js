const menuToggle = document.querySelector('.menu-toggle')
const headerBottom = document.querySelector('.header-bottom')

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  headerBottom?.classList.toggle('active')
})

document.addEventListener('click', event => {
  if (
    !event.target.closest('.header') &&
    headerBottom?.classList.contains('active')
  ) {
    headerBottom.classList.remove('active')
    menuToggle?.classList.remove('active')
  }
})

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function (event) {
  const isMenu = headerBottom.contains(event.target)
  const isToggle = menuToggle.contains(event.target)

  if (!isMenu && !isToggle && headerBottom.classList.contains('active')) {
    headerBottom.classList.remove('active')
    menuToggle.classList.remove('active')
    sketchTopBtn.style.display = 'none'
  }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href && href !== '#') {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth',
        })
      }
      if (window.innerWidth <= 768) {
        headerBottom.classList.remove('active')
        menuToggle.classList.remove('active')
      }
    }
  })
})
