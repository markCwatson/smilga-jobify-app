import Express from "express";

const app = Express()

app.get('/', (req, res) => {
    res.send('Hello!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})