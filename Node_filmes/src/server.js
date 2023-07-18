require("express-async-errors")
const AppError = require('./utils/AppError')

const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {

    console.error(error)

    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    if (error.message.includes("UNIQUE constraint failed") ) {
        return response.status(422).json({
            status: "error",
            message: "Já existe"
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})


const PORT = 3333;
app.listen(PORT, () => console.log(`\nServer started on port ${PORT}\n`))