import express from 'express'
import path from 'path'

const app = express()

app.get('/', (req, res) => {
    const publicPath = path.join(process.cwd(), 'public', 'index.html')
    res.sendFile(publicPath)
})

const port = 3030
app.listen(port, () => {
    console.log(`Server ready on: 127.0.0.1:${port}`)
})