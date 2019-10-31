//Ejercicio 01 Del 10 al 50

var btn1 = document.querySelector("#btn1")

btn1.addEventListener("click", () => {
   let select1 = document.querySelector("#select1")
    for (let i = 10; i <= 50; i++) {
        let nvaOpcion = document.createElement("option")

        nvaOpcion.value = i
        nvaOpcion.text = i

        select1.add(nvaOpcion)
    }
})

//Ejercicio 02 Del 100 al 80

var btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", () => {
    let listas2 = document.querySelector("#listas2")
    let i = 100

    while (i >= 80) {
        let nvoElemento = document.createElement("li")
        nvoElemento.value = i
        nvoElemento.textContent = i

        listas2.appendChild(nvoElemento)

        i--
    }
})

//Ejercicio 03 Tabla de multiplicar

var btn3 = document.querySelector("#btn3")

btn3.addEventListener("click", () => {
    let inp31 = document.querySelector("#Input3.1")
    let inp32 = document.querySelector("#Input3.2")
    let inp33 = document.querySelector("#Input3.3")

    if
})