const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3030

let array = ['xavier', 'michelle', 'corey', 'reed']
let dequeued = ''

const handleQueue = (req,res,next) => {
  let action = req.params.action
  let name = req.query.name
  
  switch(action) {
    case 'peek':
    next()
    break;
    case 'enqueue':
    array.unshift(name)
    next()
    break;
    case 'dequeue':
    dequeued = array[array.length - 1]
    array.pop()
    next()
    break;
  }
}

const returnMsg = (req,res,next) => {
  let action = req.params.action
  let name = req.query.name

  switch(action) {
    case 'peek':
    res.send({
      status: "success",
      data: array[array.length - 1]
    })
    break;
    case 'enqueue':
    res.send({
      status: "success",
      enqueued: name
    })
    break;
    case 'dequeue':
    res.send({
      status: 'success',
      dequeued: dequeued
    })
  }
}

app.get('/:action', handleQueue, returnMsg)

app.listen(port, () => {
  console.log(`listening ${port}`)
})
