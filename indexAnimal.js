document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded')
  let button = document.querySelector('button')

  let displayResult = () => {
    console.log('click')
    let input = document.querySelector('input')
    let type = input.value
    let url = `http://localhost:3030/animal/${type}`
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      let p = document.querySelector('p')
      if (json.message) {
      p.innerText = 'true'
      } else {
      p.innerText = 'false'
      }
    })
  }

  button.addEventListener('click', displayResult)
})
