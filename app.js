import express from 'express'
import { } from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes)

const PORT = ProcessingInstruction.env.PORT || 5000

const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to the database...')
    } catch {

    }
}

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(5000, () => console.log(`Server started on port 5000`))