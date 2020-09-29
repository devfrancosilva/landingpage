const images = document.querySelectorAll('.img-gallery')
const imgLight = document.querySelector('.add-image')
const containerLight = document.querySelector('.image-light')

images.forEach((img) => {
  img.addEventListener('click', () => {
    showImage(img.getAttribute('src'))
  })
})

containerLight.addEventListener('click', (e) => {
  if (e.target !== imgLight) {
    containerLight.classList.toggle('show')
    imgLight.classList.toggle('showImage')
    burguer.style.opacity = '1'
  }
})

const showImage = (image) => {
  imgLight.src = image
  containerLight.classList.toggle('show')
  imgLight.classList.toggle('showImage')
  burguer.style.opacity = 0
}
