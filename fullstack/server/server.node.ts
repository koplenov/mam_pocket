const express = $node.express
const app = express()
const port = 2281

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.send('Hello $mol and express world!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
