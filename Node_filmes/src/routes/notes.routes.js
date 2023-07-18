const { Router } = require('express')
const MovieNotesControler = require('../controller/MovieNotesController')

const notesController = new MovieNotesControler()
const notesRouter = Router()

notesRouter.post("/:user_id", notesController.create)

module.exports = notesRouter