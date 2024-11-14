## Prueba

Crear un sistema en Laravel con frontend en VueJS o React y TailwindCss
El sistema debe permitir hacer login, registrar un nuevo usuario y recuperar la contraseña.
El sistema debe tener una vista de lista de Ordenes
Al dar click sobre cada orden se puede ver el detalle de la orden: Cliente (catalogo), datos generales de la orden (fecha, numero, etc) y el listado de productos (catalogo)
El sistema puede crear o cancelar ordenes pero no puede eliminar.
El sistema puede agregar, editar, eliminar items a la orden y el subtotal debe ir cambiando sin refrescar la página.

Subir el proyecto a un repositorio publico (cualquier proveedor).
Poner las instrucciones para correr el proyecto en el README
Compartir el repositorio a la dirección de email fernando@devoost.com

## Detalles

-- DB --

1. users
2. order
3. order_item
4. client
5. product

-- API --

Auth

1. login
2. register
3. recover pass

Orders

1. Obtener ordenes
2. Obtener orden
3. Registro de orden
4. Editar orden
5. Cancelar orden

Item Orders

1. Nuevo item
2. Editar item
3. Eliminar item

Clientes

1. Obtener cliente

Productos 2. Obtener producto

-- Cliente --

Auth

1. Vista para logue de usuario
2. Vista para registro de usuarios
3. Vista para recuperar contraseña

Orders

1. Vista con lista de ordenes registradas
2. Vista para crear una nueva orden
3. Vista para el detalle de orden (cliente, detalles, productos)
4. Vista para editar la orden (edicion por item)
5. Opcion para cancelar orden
6. Funcionalidad para el calculo de totales
