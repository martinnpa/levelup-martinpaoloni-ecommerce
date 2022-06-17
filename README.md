# Proyecto Ecommerce Level Up - Bootcamp CoderHouse Telecom -

---
![CoderPizza screen](https://i.imgur.com/rhR19JA.gif)
[Más calidad](https://i.imgur.com/sCau0nR.gifv)
---
## Librerías utilizadas
- Tailwind CSS [Link](https://tailwindcss.com/) 
  - Tailwind plugin line clamp [Link](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- Headless UI [Link](https://headlessui.dev/react/)
- Heroicons [Link](https://heroicons.com/)
- React router dom
- Formik [Link](https://github.com/jaredpalmer/formik)
  - yup [Link] (https://github.com/jquense/yup)
### Uso de las mismas
- Decidí utilizar la librería de Tailwind para los estilos y Headless UI para algunos componentes por la simplicidad de la misma, anteriormente he usado librerías como Ant Design y quise utilizar algo más sencillo y que está creciendo en popularidad. Estilar componentes con Tailwind se hace bastante rápido sin necesidad de escribir css.

- Utilice la librería Formik ya que nunca había usado una similar y esta es de las mas populares o la más popular y recomendada para el manejo de formularios, además también de ser nombrada en clase. A su vez la documentación de la misma recomienda la librería yup para la validación de los formularios.

## CODER PIZZA

- El proyecto como denota el nombre copia el estilo de diseño que tiene la plataforma CoderHouse, se me hizo más rápido imitar el diseño al no utilizar librerías con componentes pre estilados y no tener que pensar un diseño propio.

## Estructura y nombres
- Separe las llamadas a la api, los assets y el context de los componentes que renderizan contenido.
- El nombre de los componentes es descriptivo y en caso de los componentes llamados index.js es porque había visto ese tipo de estructura por la guía de Airbnb (es reconocida y recomendada en blogs y en los foros de desarrollo). En el caso de ItemList y de ItemDetail no los modifique por las tareas del curso que indicaba dichos nombres. (https://airbnb.io/javascript/react/)
- En la estructura y en los nombres de los componentes vale aclarar que tambien seguí la recomendación de la documentación que nos dice de no sobrepensarlo tanto. (https://es.reactjs.org/docs/faq-structure.html)

## Vistas
- Listado de productos
- Listado de productos por categoría (/category/pizzas)
- Carrito (/cart)
- Orden generada (por id) (order/id)
- 404, al intentar ingresar a una dirección inexistente.

## Funciones y detalles
- Carrito guardado en localStorage para su persistencia.
- Banner (descuento) con flag de si se muestra o no (cuando lo cerras) guardado en sessionStorage, para que pueda volver a aparecer si queres el descuento después de cerrar la web.
- Cart Widget, resumen del carrito dinámico con notificación de cantidad de productos, visualización en el menú de los productos agregados y posibilidad de eliminarlos en el mismo.
- Manejador de cantidades donde se puede sumar o restar cantidad de un mismo producto, de forma explícita le mostramos al usuario para evitar confusiones cuando muestra el producto ya agregado quita o suma cantidades del mismo.
- En el carrito utilice otro manejador de cantidades donde a medida que vas tocando los signos + o - va cambiando la cantidad sin necesidad de un botón.
- En el producto extendido el cuadro de stock va cambiando de icono y de color de fondo de acuerdo a la cantidad de stock disponible.
- En el carrito extendido valida si no hay productos agregados muestra un mensaje y un link para ir al listado.
- Carrito extendido y Widget productos agrupados según la categoría.
- Posibilidad de agregar un cupón de descuento con un máximo de descuento (los cupones están en base de datos).
- Formulario de checkout con validaciones.
- Validación y actualización de stock en el momento de generar una nueva orden, en caso de haber productos sin stock se muestran en una lista cuales son. También con manejo de errores por si algo sale mal.
- Loaders en todas las pantallas donde puede haber una demora en la conexión con la base.
- Vista de pedido realizado, se puede acceder a las órdenes ya generadas (además de los productos, muestra la info del comprador, horario de compra y descuento aplicado si tiene.)
- Teco mode, un switch estilo dark mode pero con los colores de Telecom.
- Full Responsive.

### Detalle
- Tanto la carpeta trash como algunas funciones comentadas, no exportadas o no utilizadas las deje en el proyecto intencionalmente, mi idea es tomar este proyecto para testear o refrescar como hice algunas cosas a futuro, espero que no molesten!.
- El Teco Mode fue un agregado de prueba (no uso localStorage en este caso dado que no me gusta como quedan los colores del modo).

## Create React App

Proyecto inicializado con [Create React App](https://github.com/facebook/create-react-app).
---
### Scripts disponibles

### `npm start`
### `npm test`
### `npm run build`
