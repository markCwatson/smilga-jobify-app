import Express from "express";

import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";


const app = Express()

// Must setup middleware before route definitions

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.use(notFound)
app.use(errorHandler)


const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server up on port ${process.env.PORT}`)
})

process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`)
    
    server.close(() => {
        process.exit(1)
    })
})