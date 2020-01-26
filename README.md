# practicaFrontAvanzado
Código para la práctica del módulo de Frontend Avanzado de Bootcamp Keepcoding

# Objetivo

Crear un site en el que se muestre un listado de cervezas y poder hacer una búsqueda por texto así como un filtrado por fecha. 

# Funcionamiento
Para poder ver la web en funcionamiento es necesario installar las dependecias del package.json aplicando un npm i, y seguidamente, escribir en la consola de comandos **node server.js** para lanzar el servidor en *localhost:3001*

##Memoria

He intentado cumplir con todas las especificaciones dadas en el enunciado de la práctica, teniendo en cuenta el header con imagen usando atributo srcset, así como la búsqueda y filtrado de cervezas por año y la capacidad de la web para guardar comentarios y likes.

Para esta web he utilizado Axios como motor conector con la API facilitada por el instructor.

El filtrado por fecha lo he hecho de la siguiente manera: 
- He traido las 10 cervezas que dan los resultados de la búsqueda.
- Por otra parte, he creado otra función que recoge todos los años del array de cervezas y los ha acumulado en otro array, eliminando duplicados. De esta forma, elimino la posibilidad de error al filtrar, ya que sólo se va a filtrar por las fechas que devuelven las cervezas. Para esto usé *array.map()*.
- Para hacer el filtro, he usado la función *array.filter()*.  
- Por último, devuelvo la función que pinta cervezas en la home con el array resultante del filtro. 
- Para restablecer el filtro, se me ocurrió hacerlo renderizando todas las cervezas nuevamente, pero con el dato de búsqueda guardado en localStorage. Es posible que exista otro método para hacerlo, pero en este momento usé esa forma de restablecer el filtro.

He jugado también con los eventos y con la funcionalidad Intersectio Observer, que me pareció muy interesante en el curso y quería implementarla para mostrar una barra de búsqueda alternativa cuando se oculta la barra del header, esto lo pensé como elemento de usabilidad y sobretodo en vista mobile, cuando se hace tanto scroll. 

He manejado el error cuando la búsqueda no devuelve resultados, mostrando un mensaje tipo warning.

El diseño es first mobile y las variaciones de estilo se hacen usando anchos mínimos.
 
 He usado bootstrap como motor de css para agilizar el diseño de los elementos y centrarme en la funcionalidad.
 
 *los comentarios de este proyecto están en inglés, así como los mensajes de commits, para ir forzándome poco a poco a hacerlo así, nunca sabes cuándo vas a trabajar con un equipo internacional. Algunos comentarios están en español por la rapidez a la hora de crear las funcionalidades, perdón de antemano*

