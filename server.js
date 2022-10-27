import express from "express";

import connectDb from './db/connect.js'

// Middleware
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";


const app = express()

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.use(notFound)
app.use(errorHandler)

let server

const start = async () => {
    try {
        const conn = await connectDb()
        console.log(`MongoDB connected: ${conn.connection.host}`)
        server = app.listen(process.env.PORT || 5000, () => {
            console.log(`Server up on port ${process.env.PORT}`)
        })        
    } catch (error) {
        console.log(error)
    }
}

start()

process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`)
    
    server.close(() => {
        process.exit(1)
    })
})