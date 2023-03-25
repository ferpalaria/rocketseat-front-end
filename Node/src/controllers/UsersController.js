const AppError = require("../utils/AppError");

const sqlliteConnection = require('../database/sqlite');

class UsersController {

    async create(request, response) {
        const { name, email, pass } = request.body;

        if (!name) throw new AppError("Nome é obrigatório")

        response.status(201).json({ name, email });
    }
}

module.exports = UsersController