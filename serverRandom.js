const express = require('express')
const cors = require('cors')

const port = 3030
const app = express()

app.use(cors())

let array = []

const generateSpread = (req, res, next) => {
  let num1 = req.query.floor
  let num2 = req.query.ceil
  if (array !== []) {
    for (let i = num1; i <= num2; i++) {
      array.push(i)
    }
  }
  next()
}

const returnRandPick = (req, res, nest) => {
  console.log(array)
  let length = array.length
  let index = Math.floor(Math.random() * length)
  res.send({
    status: 'success',
    range: `[${req.query.floor}, ${req.query.ceil}]`,
    randPick: array[index]
  })
}

app.get('/random/', generateSpread, returnRandPick)

app.listen(port, () => {
  console.log(`listening ${port}`)
})
