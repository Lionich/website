const photos = Array.from(document.querySelectorAll('#photo'))

const scalingImage = (currentPhoto) => {
  currentPhoto.classList.add('scaleImage')

  setTimeout(() => {
    currentPhoto.classList.remove('scaleImage')
  }, 5000)
}

photos.map((photo) => {
  photo.addEventListener('click', (Event) => {
    scalingImage(Event.target)
  })
})
