var nombre = "William Mauricio Mellizo Aguilera"
var estatura = 162
var nacimiento = 1979
var edad = 0
var i = 1980
const fecha = new Date();
//const actual = Date.getFullYear();
/*function formatoFecha(fecha, formato) {
    const map = {
        dd: Date.getDate()
        mm: Date.getMonth() + 1
        yy: Date.getFullYear().toString().slice(-2)
        yyyy: Date.getFullYear()
    }

    return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
}*/

document.write ("Según el año calendario, se informa su edad: <br>")
document.write ("La Fecha y Hora Actual del Sistema son: " + fecha + "<br>")
var datos = document.getElementById("datos")

datos.innerHTML= `
    <h2>Datos del Creador</h2>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Estatura: ${estatura} cm</h3>
`
if(estatura>=160)
{
    datos.innerHTML += '<h1>Es una persona de estatura normal';
}
else
{
    datos.innerHTML += '<h1>Eres una persona bajita';
}

//console.log(actual); //2023

while (i<=2022)
{
    edad = i - nacimiento
    if (edad==1)
    {
        document.write ("<br>El año " + i + " ya culminó, y tenía la edad de: " + edad + " año.")
    }
    if (edad>1)
    {
        if (edad < 10)
        {
        document.write ("<br>El año " + i + " ya culminó, y tenía la edad de: " + edad + " años.")
        }
        else
        {
        document.write ("<br>El año " + i + " ya culminó, y tenía la edad de: " + edad + " años.")
        }
    }
    i++
}
if (i == 2023)
{
    edad = i - nacimiento
    document.write ("<br>Estamos en el año " + i + " y este año tendrá la edad de " + edad + " años.");
}