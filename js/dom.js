
class Auto {
    constructor (id, marca, modelo, ano, tipo, precio, imagen){
      this.id = id,
      this.marca = marca,
      this.modelo = modelo, 
      this.ano = ano, 
      this.tipo = tipo,
      this.precio = precio,
      this.imagen = imagen
    }
    mostrarInfoAuto () {
      console.log (`El auto ${i}, es marca ${marca}, su modelo es ${modelo}, del ano ${ano}, tipo ${tipo} y su precio es de $${precio}`)
    }
    catAuto () {
      console.log (this.id, this.marca, this.modelo, this.ano, this.tipo, this.precio)
    }
  
  }
  
  const auto1 = new Auto (1, "Bmw", "Serie 3", 2022, "sedan", 1000,"bmw1.jpg")
  const auto2 = new Auto (2, "Bmw", "X6", 2021, "suv", 2000,"bmw2.jpg")
  const auto3 = new Auto (3, "Audi", "A3", 2021, "sedan", 800,"audi1.png")
  const auto4 = new Auto (4, "Audi", "R8", 2020, "coupe", 3500,"audi2.jpg")
  const auto5 = new Auto (5, "Mercedes-benz", "Clase a", 2020, "berlina", 900,"mb1.jpg")
  const auto6 = new Auto (6, "Mercedes-benz", "Sl", 2023, "cabrio", 3000,"mb2.jpg")
  const auto7 = new Auto (7, "Porsche", "Macan", 2022, "suv", 2300,"porsche1.jpg")
  const auto8 = new Auto (8, "Porsche", "Cayenne", 2023, "suv", 2500,"porsche2.jpg")
  const auto9 = new Auto (9, "Ford", "Mustang", 2020, "coupe", 2600,"fordM.jpeg")
  const auto10 = new Auto (10, "Ford", "Raptor", 2022, "4x4", 1800,"fordR.png")

  const garaje = []
garaje.push (auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9, auto10)


let garajeAutos = document.getElementById("garaje")

function mostrarGarajeDOM (array) {
    garajeAutos.innerHTML = ""
    for (let auto of array) {
        let autoNuevoDiv = document.createElement ("div")
        autoNuevoDiv.className = "col-12 col-md-3 col-lg-3 m-2"
        autoNuevoDiv.innerHTML = `
        <div id="${auto.id}" class="card text-center" style="width: 18rem;">
        <img src="../img/${auto.imagen}" class="card-img-top" alt="${auto.marca} ${auto.modelo}">
        <div class="card-body">
          <h4 class="card-title">${auto.marca} ${auto.modelo}</h4>
          <p class="card-text">ID: ${auto.id}</p>
          <p class="card-text">Año: ${auto.ano}</p>
          <p class="card-text">Tipo: ${auto.tipo}</p>
          <p class="card-text">Precio: $${auto.precio}</p>
          <button class="btn btn-outline-primary" type="submit">Alquilar</button>
        </div>
      </div>
        `
        garajeAutos.append(autoNuevoDiv)
    }
  }

mostrarGarajeDOM (garaje)
let formAddCar= document.getElementById("formAddCar")

function agregarNuevoAuto (array) {
    let marca = document.getElementById("marcaInput")
    let modelo = document.getElementById("modeloInput")
    let ano = document.getElementById("anoInput")
    let tipo = document.getElementById("tipoInput")
    let precio = document.getElementById("precioInput")
    const nuevoAuto = new Auto (array.length+1, marca.value, modelo.value, ano.value, tipo.value, precio.value, "prox.jpg")
    console.log(nuevoAuto)
    array.push(nuevoAuto)
    formAddCar.reset ()
}

let addCarBtn = document.getElementById("addCarBtn")
addCarBtn.addEventListener ("click", () =>{
    agregarNuevoAuto(garaje)
    mostrarGarajeDOM (garaje)

})
