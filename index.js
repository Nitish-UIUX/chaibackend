require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})


app.get('/login', (req, res) => {
    res.send('<h1>Login with chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube video</h1>')
}
)
app.listen(() => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})