document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('button')

  let displayResult = () => {
    
    let floor = document.getElementById('floor')
    let ceil = document.getElementById('ceil')
    let num1 = floor.value
    let num2 = ceil.value
    let url = `http://localhost:3030/random?floor=${num1}&ceil=${num2}`
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      let p = document.querySelector('p')
      p.innerText = json.randPick
    })
  }

  button.addEventListener('click', displayResult)
})
