**¿Cómo programar un bloque en Godot que tenga puntos de salud sin morir en el intento?**

***(Spoiler: Quizá te rompas la cabeza un poco...)***  


Aquel día me encontraba trabajando en una pequeña build. Mi plan era simple: hacer un terreno que se pueda
romper al más estilo Minecraft o Terraria. Pensé: Es simple, solo tendré que crear un TileMapLayer; añadir su respectivo
Tile y luego crear una función para romperlo.  
  
Y no es tan así... De hecho, muchas cosas han cambiado entre Godot 3 y Godot 4 (siendo esta última la versión actual).
Cualquier tutorial que busques en línea te dará las respuestas más antiguas posibles, tristemente.

Bien, yendo al grano, en Godot 4 tenemos una función interesante para aplicar en los TileMapLayer. Se trata de nada más
y nada menos que set_cell(). ¿Quieres borrar un bloque? Usa set_cell(), ¿Quieres añadir un bloque? Usa set_cell().
¿Quieres crear un mega videojuego en dos días? Ve rezando por ello.

El punto es que utilicé set_cell() con los argumentos que pide la función: Coordenadas, que puedes obtenerlas fácilmente así:

**Ejemplo con Mouse**
Utilizas el Event con get_global_mouse_position (Te aviso de una vez, SIEMPRE utiliza global_mouse_position, de lo contrario
te devolverá un dato erróneo) y lo conviertes en coordenadas con el método local_to_map() así:

var cell_pos = tilemap.local_to_map(global_pos)

En donde global_pos es la posición global del Mouse que asignaste antes.

El segundo argumento que te pide es...

**Tile ID**
Te pide el ID de la celda que quieres poner allí. Si tienes digamos, una roca con un TileID (puedes consultarlo en el TileSet)
que es igual a 2 lo asignas así:

tilemap.set_cell(cell_pos , 2 ) --> Siendo 2 el ID de Roca

En mi caso, utilicé -1 ya que este es por defecto el ID de una celda vacía.

Pero pará emoción, falta aún un tercer argumento:

**Atlas COORDS**
Las coordenadas del Atlas, este es el más simple de todos, solo tienes que hacer esto:

tilemap.set_cell(cell_pos , 2 , Vector2i.ZERO)

Esto solo es para ocupar el espacio del tercer argumento, aunque realmente no influye mucho en nuestro caso. Es importante, eso sí,
pero lo es más en casos puntuales (como cuando tienes SubTiles).


Ya con esto tendríamos nuestra lógica de quitar bloques armada. Funciona pero como que algo no cuadra: Parece Paint, porque quitas un bloque y desaparece así sin más, de un solo golpe.

Quería un sistema más realista: que te partas la mano rompiendo un pedazo de musgo del suelo. Para ello, utilicé:

**Custom Data Layers**
Resulta que cuando vas a la sección de TileSet en tu TileMapLayer te va a aparecer el CustomDataLayers, si añades una propiedad esta la heredarán los hijos de los tiles a los que se los asignes. Hay muchísimas propiedades, pero en mi caso asigné un entero con el nombre de "Life". Luego me fui a la sección de TileSet y en la sección de *Pintar* escogí la propiedad que acababa de crear y se la dí a un tile en específico. Esta parte es muy intuitiva, no tiene pierde.

Bien, ahora viene lo complejo. Godot tiene una forma un tanto curiosa de manejar los valores *null* o inexistentes para él. ¿A qué te refieres con complejo? dirás...

Resulta que para añadir a tu código la lógica de la vida de un bloque tienes que usar una función de TileMapLayer llamada get_custom_data() de manera que quede así:

var custom_data = tilemap.get_cell_tile_data(cell_pos).get_custom_data("Life)

En donde el custom_data es la propiedad que estás buscando. Ya con eso puedes crear el resto de lógica para que el bloque "desaparezca" después de varios golpes al estilo Minecraft tal que así:

var block_health = {}
var custom_data = tilemap.get_cell_tile_data(cell_pos).get_custom_data("Life")

*Asignas el valor a un diccionario para que lo guarde y el bloque no reinicie su valor"

if not block_health.has(custom_data):
    block_health[custom_data] = custom_data

*Y cada vez que el jugador golpee el bloque le vas restando vida*

block_health[custom_data] -= 1

*Y por último, añades la lógica que destruye al bloque*

if block_health[custom_data] <= 0:
    tilemap.set_cell(cell_pos, -1, Vector2i.ZERO)


###Errores comunes y estresantes

¡Bien ahí! Ahora tus bloques se eliminan... También se te eliminarán tus esperanzas de crear cuando veas que el juego crashea, te va a soltar un error de valor *null*
¿¡ Por qué !? Pensé yo, exaltado cuando me ocurrió.

Bien, pequeño Padawan. Resulta que cuando intentas obtener el valor de una celda vacía (en este caso el custom_data) te va a devolver *null*. Godot enloquece, dice: "No puedo manejar esto, mejor cerremos todo de golpe" y eso hace básicamente.

Al borde del estrés porque no encontraba la solución a este particular error por ningún lado utilicé mi arma secreta: Buscar en Reddit, entre los posts más olvidados. Un sujeto amable (y extremadamente egocéntrico) explicaba el cómo solucionarlo.

Para que no te salte este error, debes de primero validar si esa celda no devuelve *null* y luego de eso conseguir el custom_data. Algo como esto:

var cell_pos = tilemap.local_to_map(global_pos)
var tile_data = tilemap.get_cell_tile_data(cell_pos)

	if tile_data != null:
		if not block_health.has(cell_pos):
			block_health[cell_pos] = tile_data.get_custom_data("life")

		block_health[cell_pos] -= 1

		if block_health[cell_pos] <= 0:
			tilemap.set_cell(cell_pos, -1, Vector2i.ZERO)
			block_health.erase(cell_pos)

Con esto, no explotará porque validas si el valor es *null*. En caso de serlo, no hará nada, pero si no es *null* entonces va a ejecutar el resto del código en donde guarda la información del bloque en un diccionario y tras eliminarlo elimina esa información. Si eres buen observador (o lector en este caso) notarás que ahora no estoy guardando el custom_data en el diccionario, sino la posición en coordenadas del tile.

Esto es en principio para que no te ocurra el bug que me pasó a mí: Si estás a punto de romper un bloque y presionas a otro, se romperá el otro aunque tenga toda su vida. Esto porque guardas el dato de la vida, no de la posición del bloque y sus variantes.

Así que sí, mejor guarda en el diccionario la posición de la celda y sus porpiedades como hice aquí para que no te pase ese curioso bug.


Si llegaste hasta acá ¡felicidades! Ya puedes enloquecer y hacer tu propio mundo lleno de juegos de azar, mujerzuelas y bloques que explotan al tocarlos.

Si te gustó mi Blog, sigue pendiente para próximas actualizaciones. Estoy seguro que mis futuros proyectos me darán de qué hablar... Y mucho.