const AppError = require("../utils/AppError");

const sqlliteConnection = require('../database/sqlite');

class UsersController {

    async create(request, response) {
        const { name, email, pass } = request.body;

        const database = await sqliteConnection();
        const chackUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (chackUserExists) {
            throw new AppError("Este e-mail já existe");
        }

        return response.status(201).json();
    }
}

module.exports = UsersController