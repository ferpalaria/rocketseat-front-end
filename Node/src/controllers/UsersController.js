const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require('../database/sqlite');

class UsersController {

    async create(request, response) {
        const { name, email, pass } = request.body;

        const database = await sqliteConnection();
        const chackUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (chackUserExists) {
            throw new AppError("Este e-mail já existe");
        }

        const hashedPassword = await hash(pass, 8); // pass e salt(fator de complexidade)

        console.log(hashedPassword);

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]);

        return response.status(201).json({ message: "Criado com sucesso" });
    }
}

module.exports = UsersController