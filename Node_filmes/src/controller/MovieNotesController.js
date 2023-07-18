const knex = require('../database')
const AppError = require('../utils/AppError')

class MovieNotesController {

    async create(request, response) {
        const { tittle, description, rating } = request.body
        const { user_id } = request.params

        if (!(rating < 6)) {
            throw new AppError("Rating deve ser de 0 a 5")
        }

        await knex('movie_notes').insert({
            tittle,
            description,
            rating,
            user_id
        })

        response.status(200).json({message: "Criado com sucesso"})
    } 
}

module.exports = MovieNotesController