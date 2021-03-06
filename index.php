<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Acceso a elementos DOM</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=VT323&display=swap"
      rel="stylesheet"
      />
  </head>
  <body>
      <section>
    <div class="container">
      <form>
        <section>
         <h2>Ejercicio 01 Del 10 al 50</h2>
         <div class="panel">
         <div class="row">
         <input type="button" value="10 a 50"id="btn1"/>
         </div>
         <div>
        <select id="select1"></select>
        </div>
      </section>
      </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 02 Del 100 al 80</h2>
          <div class="panel">
          <div class="row">
          <label> Oprima el botón para leer numeros del 100 al 80</label>
          <input type="button" value="100 al 80" id="btn2">
          </div>
          <div>
          <ul id ="listas2">
          </ul> 
          </div>
          </div>
        </section>
     </form>
    </div>
    <div class="container">
        <form>
            <section>
                <h2>Ejercicio 03 Tabla de multiplicar</h2>
                <div class="panel">
                <div class="row">
                    <label for="input31">Número</label>
                    <input type="number" name="input31" id="input31">
                    <label for="Input32">Multipo mínimo</label>
                    <input type="number" name="input32" id="input32">
                    <label for="input33">Multipo máximo</label>
                    <input type="number" name="input33" id="input33">
                    <input type="button" value="Multiplicar" id="btn3">
                </div>
                <div>
                  <table border="3" align="center" id=table3>
                  </table>
                </div>
                </div>
            </section>
        </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 04 Suma</h2>
          <div class="panel">
          <div class=row>
            <label for="input41">Ingrese la cantidad de numeros que desea sumar</label>
            <input type="number" name="input41" id="input4">
            <input type="button" value="Sumar" id="btn4">
          </div>
          <div>
            <table border="3" align="center" id="table4">
            </table>
          </div>
          </div>
        </section>
      </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 05 Factorial</h2>
          <div class="panel">
          <div class="row">
            <label for="input5">Ingrese el número para la factorial</label>
            <input type="number" name="input5" id="input5">
            <label for="resultado5">Resultado</label>
            <input type="number" name="resultado5" id="resultado5" readonly/>
            <input type="button" value="Factorial" id="btn5">
          </div>
          <div>
            <label for="listas5">Números multiplicados</label>
          <ul id="listas5">
          </ul>
          </div>
          </div>
    </div>
        </section>
      </form>
      <div class="container">
      <form>
        <section>
          <h2>Ejercicio 06 Múltiplo</h2>
          <div class="panel"></div>
          <div class="row"></div>
          <label for="input6">Ingrese un número para mostrar sus múltiplos</label>
          <input type="number" name="input6" id="input6">
          <input type="button" value="Múltiplos" id="btn6">
          <label for="table6">Múltiplos</label>
          <table border="3" align="center" id="table6">
          </table>
        </section>
      </form>
    </div>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 07 Pares</h2>
          <div class="panel"></div>
          <div class="row"></div>
          <label>Da click para ingresar los numeros</label>
          <input type="button" value="Calcular" id="btn7">
          <table border="3" align="center" id="table71">
            <label align="center">Pares</label>
          </table>
          <table border="3" align="center" id="table72">
            <label align="center">Impares y no reconocidos</label>
          </table>
        </section>
      </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 08 Pares aleatorios</h2>
          <div class="panel">
          <div class="row">
            <label>Presiona el botón para generar  pares aleatorios</label>
            <input type="button" value="Aleatorio" id="btn8">
            <table border="3" align="center" id="table8">
            </table>
          </div>  
          </div>
        </section>
      </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 09 Aleatorios menores a 10</h2>
          <div class="panel">
          <div class="row">
            <label>Presiona el botón para calcular pares aleatorios y conseguir su promedio</label>
            <input type="button" value="Aleatorio" id="btn9">
            <input type="number" name="input9" id="input9" readonly/>
            <label>Números aleatorios utilizados</label>
            <table border="3" align="center" id="table9">
            </table>
          </div>
          </div>
        </section>
      </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 10 Adivina el número</h2>
          <div class="panel">
          <div class="row">
            <label>¿Crees poder adivinar el número?</label>
            <input type="button" value="Adivinar" id="btn10">
          </div>
          </div>
        </section>
      </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 11 El juego del submarino</h2>
          <div class="panel">
          <div class="row">
            <label>Adivina las coordenadas del submarino de un plano de 10 x 10</label>
            <input type="button" value="Jugar" id="btn11">
          </div>
          </div>
        </section>
      </form>
    </div>
    <div class="container">
      <form>
        <section>
          <h2>Ejercicio 12 El mayor</h2>
          <div class="panel">
          <div class="row">
          <label for="input121">¿Cuántos números desea incluir?</label>
          <input type="number" name="input121" id="input121">
          <input type="button" value="Comprobar" id="btn12">
          <table border="3" align="center" id="table12"></table>
          <label for="input122">El numero mayor es</label>
          <input type="number" name="input122" id="input122" readonly/>
          </div>
          </div>
        </section>
      </form>
    </div>
  </body>
  <script src="ciclos.js"></script>
</html>