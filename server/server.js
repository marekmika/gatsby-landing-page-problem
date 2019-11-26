/* eslint-disable */
const path = require('path')
const express = require('express')

const port = 3000
const app = express()

const { CURRENT_LANGUAGE } = process.env
if (!CURRENT_LANGUAGE) {
  throw Error('No CURRENT_LANGUAGE variable found!')
}

const rootPath = [__dirname, '..', 'dist', CURRENT_LANGUAGE]

app.use(express.static(path.join(...rootPath)))
app.get('/', (req, res) => res.sendFile(path.join(...rootPath, 'index.html')))
app.listen(port, () => console.log(`Server listening on port ${port}`))
