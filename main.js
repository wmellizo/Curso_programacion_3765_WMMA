var nombre = "William Mellizo"
var edad = 43
var estatura = 162

document.write ("Hola")

var datos = document.getElementById("datos")

datos.innerHTML= `
    <h2>Hola soy Datos</h2>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Edad: ${edad}</h3>
    <h3>Estatura: ${estatura} cm</h3>
`
//SENTENCIAS CONDICIONALES
if(estatura>=160)
{
    datos.innerHTML += '<h1>Eres una persona de estatura normal';
}
else
{
    datos.innerHTML += '<h1>Eres una persona bajita';
}
for (a=2000; a<=2023; a++)
{
    datos.innerHTML += "<h2> ESTAMOS EN EL AÑO:</h2>"+ a
}