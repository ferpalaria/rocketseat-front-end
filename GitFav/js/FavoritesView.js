import { Favorites } from "./Favorites.js"

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        const addInput = this.root.querySelector('.search input')

        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')
            console.log(value)
            // console.dir(input)

            this.add(value)
        }

        addInput.onkeydown = (event) => {
            if (event.key === 'Enter') {
                const { value } = this.root.querySelector('.search input')

                this.add(value)

                addInput.value = ""
            }
        }

    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers


            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')

                if (isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `<td class="user">
                            <img src="https://github.com/ferpalaria.png" alt="Imagem de ferpalaria">
                            <a href="https://github.com/ferpalaria.png" target="_blank">
                                <p>Fernanda Palaria</p>
                                <span>ferpalaria</span>
                            </a>
                        </td>
                        <td class="repositories"> 76</td>
                        <td class="followers"> 8765</td>
                        <td><button class="remove">Remover</button></td>`

        return tr
    }

    removeAllTr() {

        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}