const knex = require('../database')
const { hash, compare } = require('bcryptjs')
const AppError = require("../utils/AppError")

class UserController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const hashedPass = await hash(password, 8)

        await knex('users').insert({
            name,
            email,
            password: hashedPass
        })

        response.status(201).json({ message: "Cadastrado com sucesso" })
    }

    async show(request, response) {
        const { user_id } = request.params;

        const user = await knex('users')
            .select([
                "name",
                "email",
                "avatar",
                "created_at"
            ])
            .where({ id: user_id }).first()

        return response.status(200).json({ ...user })
    }

    async update(request, response) {
        const { user_id } = request.params
        const { email, name, password, old_password } = request.body

        const user = await knex('users').where({ id: user_id }).first()

        user.name = name ?? user.name
        user.email = email ?? user.email

        if (password && !old_password) {
            throw new AppError("Informar senha antiga")
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if (!checkOldPassword) throw new AppError("A senha antiga não confere")

            user.password = await hash(password, 8)
        } else {
            throw new AppError("Informar senha antiga")
        }

        await knex('users').where({id: user_id}).update(user)

        response.status(204).json({ message: "Atualizado com sucesso" })
    }

    async delete(request, response) {
        const { user_id } = request.params
        
        await knex('users').where({ id: user_id }).delete()
        
        return response.status(204).json()
    }
}

module.exports = UserController;