import { GithubUser } from "./GithubUser.js"

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        // GithubUser.search('maykbrito')
        //     .then(user => console.log(user))
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {
            const userExists = this.entries.find(entry => entry.login === username)

            if (userExists) {
                throw new Error('Usuário já cadastrado')
            }

            const user = await GithubUser.search(username)
            
            if (user.login === undefined) {
                throw new Error('Usuário não encontrado')
            }

            // this.entries.push(user) // quebro a imutabilidade, pq estou usando o mesmo array
            this.entries = [user, ...this.entries] // crio um outro array (imutabilidade ✔️)

            this.update()
            this.save()

        } catch (error) {
            alert(error.message)
        }
    }

    delete(user) {
        // Seguindo o principio da imutabilidade (vc não altera as coisas, cria uma nova)
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

