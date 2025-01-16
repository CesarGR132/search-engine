import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import cors from 'cors'
import { userSearch } from './user-search.js'

config()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post('/addWord', (req, res) => {
  const { word } = req.body

  if (!word) {
    return res.status(400).send(word)
  } else {
    const newWord = userSearch.addWord({ word })
    return res.status(201).send(newWord)
  }
})

app.post('/search', (req, res) => {
  const { wordSearched } = req.body

  if (!wordSearched) {
    return res.status(400).send(wordSearched)
  } else {
    const searchResults = userSearch.searchWords({ wordSearched })
    return res.status(200).send(searchResults)
  }
})

app.get('/list-words', (req, res) => {
  const words = userSearch.listWords()
  if (!words) {
    return res.status(404).send('No words found')
  } else {
    return res.status(200).send(words)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
