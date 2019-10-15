document.addEventListener('DOMContentLoaded', () => {

  let input = document.querySelector('input')
  let p = document.querySelector('p')
  p.innerText = 'Queue Actions Started'

  const peek = () => {
    let url = `http://localhost:3030/peek`

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      p.innerText = `${p.innerText} - Peeked: ${json.data}`
    })
  }

  const enqueue = () => {
    let name = input.value
    let url = `http://localhost:3030/enqueue?name=${name}`

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      p.innerText = `${p.innerText} - Enqueued: ${json.enqueued}`
    })
  }

  const dequeue = () => {
    let url = `http://localhost:3030/dequeue`

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      p.innerText = `${p.innerText} - Dequeued: ${json.dequeued}`
    })
  }

  let peekButton = document.getElementById('peek')
  peekButton.addEventListener('click', peek)

  let enqueueButton = document.getElementById('enqueue')
  enqueueButton.addEventListener('click', enqueue)

  let dequeueButton = document.getElementById('dequeue')
  dequeueButton.addEventListener('click', dequeue)

})
