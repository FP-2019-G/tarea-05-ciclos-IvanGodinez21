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
    let table = document.querySelector("#table3")
    let inp31 = document.querySelector("#input31")
    let inp32 = document.querySelector("#input32")
    let inp33 = document.querySelector("#input33")

    // otro uso sugerido es document.getElementById("tabla3")

    let n1 = Number(inp31.value)
    let n2 = Number(inp32.value)
    let n3 = Number(inp33.value)

    if (n2 > n3) {
        alert("Porfavor ingrese un valor valido para cada limite")
    } else {
        do {
            let fila = table3.insertRow(-1)
            let celda = fila.insertCell(0)
            let nuevo = n1 + " x " + n2 + " = " + n1*n2
            celda.textContent = nuevo

            n2++
            }
        while (n2 <= n3)
        }
})

// Ejercicio 04 Suma

var btn4 = document.querySelector("#btn4")

btn4.addEventListener("click", () => {
    let table = document.querySelector("#table4")
    let inp41 = document.querySelector("#input4")
    let inp = Number(inp41.value)
    let i = 0
    let suma = 0

    while (i != inp) {
        i++
        let cantidades = Number(prompt("Ingrese el No." + i))
        let fila = table.insertRow(-1)
        let celda = fila.insertCell(0)
        suma = suma + cantidades
        celda.textContent = cantidades
    }
    let fila = table.insertRow(-1)
    let celda = fila.insertCell(0)
    celda.textContent = "Resultado = " + suma
}) 

// Ejercicio 05 Factorial

var btn5 = document.querySelector("#btn5")

btn5.addEventListener("click", () => {
    let lista = document.querySelector("#listas5")
    let num = document.querySelector("#input5").value
    let resultado = document.querySelector("#resultado5")
    let i = 0
    let producto = num

    while (num > i) {
        let nvo = document.createElement("li")
        nvo.textContent = num
        lista.appendChild(nvo)
        if (num != 1) {
            producto = producto * (num - 1)
        }
         resultado.value = producto
         num--
    }
})

// Ejercicio 06 Múltiplos

var btn6 = document.querySelector("#btn6")

btn6.addEventListener("click", () => {
    let inp = document.querySelector("#input6")
    let num = Number(inp.value)
    let table = document.querySelector("#table6")
    let i = 0

    while (num != i) {
        if ((num % i) == 0) {
        let fila = table.insertRow(-1)
        let celda = fila.insertCell(0)
        celda.textContent = (i + " x " + (num/i) +  " = " + num)
        }
        i++
    }
})

//Ejercicio 07 Pares

var btn7 = document.querySelector("#btn7")

btn7.addEventListener("click", () => {
    let table1 = document.querySelector("#table71")
    let table2 = document.querySelector("#table72")
    let i = 0

    while (i < 10) {
        let num = Number(prompt("Ingresa los numeros"))
        if ((num % 2) == 0 && num != 0) {
            let fila = table1.insertRow(-1)
            let celda = fila.insertCell(0)
            celda.textContent = num
            i++
        } else {
            let fila = table2.insertRow(-1)
            let celda = fila.insertCell(0)
            celda.textContent = num
        }

    }
})

// Ejercicio 08 Impares aleatorios

var btn8 = document.querySelector("#btn8")

btn8.addEventListener("click", () => {
    let table = document.querySelector("#table8")
    let i = 0

    while (i < 20) {
    let random = Math.round(Math.random() * (200 - 40) + 40)

    if ((random % 2) == 0) {
        let fila = table.insertRow(-1)
        let celda = fila.insertCell(0)
        celda.textContent = random
        i++
        }
    }
})

// Ejercicio 09 Aleatorios menores a 100

var btn9 = document.querySelector("#btn9")

btn9.addEventListener("click", () => {
    let table = document.querySelector("#table9")
    let promedio = document.querySelector("#input9")
    let suma = 0
    let i = 0

    while (i < 10) {
    let random = Math.round(Math.random() * (100 - 0) + 0)

    if ((random % 2) == 0) {
        let fila = table.insertRow(-1)
        let celda = fila.insertCell(0)
        celda.textContent = random
        suma = suma + random
        i++
        }
        promedio.value = suma / 10
    }
})

// Ejercicio 10 Adivina el número

var btn10 = document.querySelector("#btn10")

btn10.addEventListener("click", () => {
    let i = 0
    let random = Math.round(Math.random() * (50 - 20) + 20)
    console.log("(Ejercicio 10) El número secreto es " + random)

    while (i < 5) {
        let num = Number(prompt("Adivina el numero desde el 20 al 50"))


        if (num === random) {
            alert("Adivinaste el número 😃")
            break;
            } else if (i === 4) {
            alert("Mejor suerte la proxima, el numero era " + random)
            break;
            } else if (num != random) {
            i++
            alert("Sigue intentando, este fue el intento " + i + "/5")
        } 

    }
})

// Ejercicio 11 El juego del submarino

var btn11 = document.querySelector("#btn11")

btn11.addEventListener("click", () => {

    alert("¿Estas listos para adivinar?, ¡Comencemos!")
    let random1 = Math.round(Math.random() * (10 - (-10)) + (-10))
    let random2 = Math.round(Math.random() * (10 - (-10)) + (-10))
    let i = 0
    console.log("(Ejercicio 11) La coordenada X es " + random1)
    console.log("(Ejercicio 11) La coordenada Y es " + random2)

    while (i < 10) {

        let num1 = Number(prompt("Ingrese un valor para la coordena X"))
        let num2 = Number(prompt("Ingrese un valor para la coordena Y"))
 

         if (num1 == random1 && num2 == random2) {
        alert("Lo lograste, deberias de comprar un billete de loteria 😲")
        break;
        } else if (i === 9) {
        alert("Mejor suerte la proxima, las coordenadas eran (" + random1 + "," + random2 + ")")
            break;
        } else if (num1 != random1 || num2 != random2) {
            i++
            alert("Sigue intentando, este fue intento " + i + "/10" )
        }

    }
    
})

//Ejercicio 12 El mayor

var btn12 = document.querySelector("#btn12")

btn12.addEventListener("click", () => {
    
    let table = document.querySelector("#table12")
    let cantidad = document.querySelector("#input121")
    let cant = Number(cantidad.value)
    let respuesta = document.querySelector("#input122")
    let i = 0
    let nummay = 0

    while (i < cant) {
        i++
        let num = prompt("Agruega el número " + i)
        if (num > nummay) {
        nummay = num
        }
        let fila = table.insertRow(-1)
        let celda = fila.insertCell(0)
        celda.textContent = num
    }
respuesta.value = Number(nummay)
})