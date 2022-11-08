const dias = document.querySelectorAll('.dias')
const times = document.querySelectorAll('.times')

const inputValue = document.getElementById('hidden')

dias.forEach(dia => {
  dia.addEventListener('click', function () {
    inputValue.value = this.value
  })
})

times.forEach(time => {
  time.addEventListener('click', function () {
    inputValue.value = this.value
  })
})
