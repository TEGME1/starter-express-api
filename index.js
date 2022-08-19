const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('Welcome to the new age');
})

app.listen(port, () => {
    console.log(listening);
})