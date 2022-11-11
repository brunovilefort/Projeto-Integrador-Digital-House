const slide = [...document.querySelectorAll('.slide')]
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const prevBtn = [...document.querySelectorAll('.pre-btn')]

slide.forEach((item, i) => {
  const containerDimensions = item.getBoundingClientRect()
  const containerWidth = containerDimensions.width

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth
  })

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth
  })
})
