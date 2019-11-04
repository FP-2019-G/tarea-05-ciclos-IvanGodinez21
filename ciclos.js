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
    let inp1 = document.querySelector("#input31")
    let inp2 = document.querySelector("#input32")
    let inp3 = document.querySelector("#input33")
    let table = document.querySelector("#table3")
    // otro uso sugerido es document.getElementById('tabla3')

    let n1 = Number(inp1.value)
    let n2 = Number(inp2.value)
    let n3 = Number(inp3.value)

    if (n2 > n3) {
        alert("Porfavor ingrese un valor valido para cada limite")
    } else {
        do {
            let fila = table3.insertRow(-1)
            let celda = fila.insertCell(0)
            let nuevo = n1 + ' x ' + n2 + ' = ' + n1*n2
            celda.textContent = nuevo

            n2++
            }
        while
            (n2 <= n3)
        }
})