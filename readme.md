# ONE-Challenge-1

## Se trata de un codificador de texto como parte del reto de Oaracle-Alura para el grupo 4.

El objetivo de este proyecto es crear una aplicación que permite encriptar y desencriptar texto que el usuario proporcionará mediante una caja de texto o textarea y con ayuda de los botones de encriptado o desencriptado se podrá encriptar y desencriptar el texto proporcionado. <br>
<br>
<img src="images/pantalla01.jpg"> <br>
<br>
### :one: Estructura principal del desarrollo. <br>
<br>
:small_orange_diamond: Se comienza por hacer la estructura HTML en el archivo principal INDEX.HTML con el HEAD y el BODY. <br>
:small_orange_diamond: Dentro del BODY se estructura con el HEADER, MAIN y FOOTER. <br>
:small_orange_diamond: En la parte superior del archivo HTML se coloca la instrucción <!DOCTYPE html> declarando la versión de HTML que usaremos. <br>
:small_orange_diamond: En la parte inferior del archivo HTML se colocan las etiquetas SCRIPT para colocar el nombre del archivo JavaScript  que coneitne el código de programación que tiene la funcionalidad de la aplicación. <br>
:small_orange_diamond: Dentro de las etiquetas de HEAD se declaran el lenguaje, el charset, el título, y se invocan los 2 archivos de estilo. <br>
:small_orange_diamond: Dentro de la sección de HEAD se decrara el archivo reset.css que limpia el formato predefinido y se declara ademas el archivo index.css que contiene los estilos de esta apliación. <br>
<br>

### :two: Objetos de la página INDEX.HTML. <br>
<br>
Se consulta el diseño sugerido en la web de FIGMA para determinar en general cuales son los objetos que se deben usar. <br>
De forma general se requieren 5 secciones definidas por DIV con los siguientes objetos: <br>
      
##### :arrow_right: Sección HEADER <br>
           --Imagen del logotipo de alura. <br>
           --Encabezado. <br>
           --Parrafo de encabezado. <br>
##### :arrow_right: Sección MAIN > controles-izquierdo <br>
           --Etiqueda de una caja de texto. <br>
           --Textarea para colocar contenido para encriptar y desencriptar. <br>
           --Párrafo con letras pequeñas. <br>
##### :arrow_right: Sección MAIN > botones <br>
           --Botón para encriptar. <br>
           --Botón para desencriptar. <br>
##### :arrow_right: Sección MAIN > contenedor-derecho <br>
           --Imagen de la sección del lado derecho que es un niño. <br>
           --Textarea para colocar el texto encriptado y desencriptado de solo lectura. <br>
           --Párrafo de mensaje Ningún mensaje fue encontrado. <br>
           --Botón de copiado. <br>
           --Párrafo de Ingresa el texto. <br>
##### :arrow_right: Sección FOOTER <br>
           --Párrafo con fuente H2 para el copyright. <br>
<br>

### :three: Carpeta de imagenes. <br>
<br>
Se crea una carpeta de IMAGES y se colocan las 2 imágenes que se van a utilizar en el proyecto. <br>
<br>

### :four: Formato y estilos para la página. <br>
<br>
Se crea el archivo de estilo CSS llamado index.css. <br>
A los objetos y secciones declarados en el archivo HTML se les assignó una CLASS para poder referenciarlos en el archivo de estilos. <br>
Se definen los tamaños de fuentes, Textareas, botones, colores, fondos, alineación, bordes, temaños de imagenes, etc. Con ayuda del modelo de FIGMA. <br>
Con ayuda del visor de herramientas del navegador Chrome se definen los MARGIN y PADDING de cada sección. <br>
Se declaran los objetos que inicialmente estarán ocultos como el TEXTAREA DERECHO y el BOTÓN COPIAR. <br>
<br>

### :five: Código de funcionalidad de la aplicación en JavaScript. <br>
<br>
Cabe mencionar que a los objetos declarados en el archivo HTML se les asignó un NAME y un ID para poder referencialos en el código JavaScript. <br>
Se comienza con la Función para encriptar de acuerdo a las recomendaciones de ALURA. <br>
Para hacer referencia local a objetos del HTML se utiliza la instrucción document.querySelector en la parte superior del archivo JS, asignandoles un nombre de constante local y referenciandolos por el nombre de su CLASS. <br>
Se observa que la función encriptar se tiene que dividir en 2 funciones, encriptarConTexto y encriptarSinTexto o cuando el texto es el mismo de Ingrese texto aquí. <br>
Para encriptar el texto se utiliza la recomendación que nos dieron en la última reunión de ALURA con ayuda de la instrucción replaceAll de forma anidada. <br>
Se hacen pruebas con los texto directo sobre los TEXTAREA. <br>
Se asigna el llamado de las funciones a los botones referenciandolos desde el archivo HTML. <br>
Dentro de las 2 funciones creadas para encriptar se incluyen instrucciones para ocultar o mostrar objetos de pendiendo del contenido en el TEXTAREA IZQUIERDO. <br>
Se crea la Función para desencriptar si hay texto para encriptar utilizando la misma instrucción que para encriptar llamada replaceAll pero en sentido opuesto. <br>
Para cuando no hay texto para desencriptar y cuando el texto es Ingrese texto aquí, se utilizan las mismas funciones que para Encriptar. <br>
Se crea la Función copiar y se le asigna al botón copiar con ayuda de la instrucción navigator.clipboard.writeText asignada a una variable local. <br>
<br>

### :six: Se trabaja en hacer responsiva la aplicación. <br>
<br>
Se considera la siguiente instrucción: <br>
meta name="viewport" content="width=device-width" <br>
Esta instrucción en el archivo HTML indica al navegador que adapte la página web al dispositivo que la abra. <br>
Y del lado del archivo CSS se utiliza @media screen and (max-width:480px). <br>
<br>

### Autor del proyecto: J. Alejandro Hernández S. <br>