const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0,-5)
  // const today = "01/21"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já existe")
    return
  }

  alert("Adicionado com sucesso - " + today)
  nlwSetup.addDay(today)
}
// classlist.add('')
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  alert("Salvou - " + JSON.stringify(nlwSetup.data))
}

// const data = {
//   meditation: ["01-20", "01-21", "01-22", "01-23"],
//   sun: ["01-19", "01-22"],
//   food: ["01-08"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
