const express = require('express')
const cors = require('cors')

const port = 3030
const app = express()

app.use(cors())

const getParam = (req, res, next) => {
  let type = req.params.type
  next()
}

const isAnimal = (req, res, next) => {
  let array = ['lion','cobra','sheep','dolphin']
  let type = req.params.type
  if (array.includes(type)){
    let object = {
      status: 'success',
      message: true
    }
    res.send(object)
  } else {
    res.send({
      status: 'success',
      message: false
    })
  }
}

app.get('/animal/:type', getParam, isAnimal)

app.listen(port, () => {
  console.log(`listening ${port}`)
})
