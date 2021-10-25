# Hard Rosario 

### Hard Rosario es un e-commerce desarrollado en React Js con create-react-app y con mucho esfuerzo y sacrificio. Tiene secciones que permite al usuario filtrar segun lo que se desee, ya sea productos, equipos armados o hardware individual. 
<br><br>

## [Link al Sitio Web](https://hard-rosario-proyecto.vercel.app/)
## Demostración del Sitio Web

<img src="./Hard Rosario - Gif Compra.gif"/>
<br><br>

# Este e-commerce está construido con:
<br>

* Create-React-App (React Js)
* Firebase
* Estilos de Material UI (Core & Icons)
* Context
* Vercel 

<br><br>

# Instalación para poder usarlo
<br>

### 1- Instalar las dependencias de React Js.
<br>

``` 
npm i 
```
<br>

### 2- Clonar el archivo `.env.example` con el nombre de `env` y reemplazar los datos por los provistos por firebase. 
<br>

```
cp .env.example .env
``` 
<br>

### 3- Iniciar el servidor.
<br>

```
npm start
```

<br>

### 4- Disfrutar del Sitio Web.

<br>

# Creación del E-commerce
## Components:

#### En la carpeta `components` vas a encontrar todos los componentes con los que se realizó el proyecto. Los componentes que se comunican con la base de datos de firebase son los siguientes:

* **ItemListContainer:** utiliza la funcion getProducts importada desde ( Services/firebase.js ) para que aparezcan todos los productos.
<br>

* **ItemDetailContainer:** utiliza la funcion getProductById importada desde ( Services/firebase.js ) para que aparezca el producto que seleccionó el usuario.
<br>

* **Checkout y Review:** utilizan las funciones createOrder y getUserId importada desde ( Services/firebase.js ) para crear la orden de los productos que compro el usuario y enviarla a la colección **orders** que está en firebase.

<br>

## Context

#### En la carpeta `context/CartContext.js` se encuentra toda la lógica con la que se desarrolló el carrito de compras y las funciones para remover, agregar, vaciar productos del carrito.

<br>

## Firebase

#### En la carpeta `Services/firebase.js` se encuentra toda la lógica con la que se desarrollaron las funciones para que aparezcan todos los productos, el producto seleccionado por el usuario, y tambien la función para crear una orden de compra con los datos del usuario y los productos que fueron comprados.

<br>

## Material UI Core/Icons

#### Utilicé Material UI para que el e-commerce se vea lindo además de lo funcional hice uso de la librería `@material-ui/core`  y  `@material-ui/icons` para darle estilos a los botones, a los productos del carrito, etc.

<br>

## Bootstrap

#### Utilicé bootstrap para que el `Navbar` sea responsive además del menú hamburguesa, para el `Carousel` del componente `Home` y por último lo usé para las `Cards` de cada producto.

<br>

# Autor

Gonzalo Signanini - Curso de ReactJs - CoderHouse 2021.