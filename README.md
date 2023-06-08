# Dragon Store - Aplicación de e-commerce de productos de computación

Dragon Store es una aplicación de e-commerce para la venta de productos de computación. Permite a los usuarios ver una lista de productos disponibles, agregar productos al carrito de compras, ver el carrito de compras y realizar órdenes de compra. Está desarrollada utilizando las siguientes tecnologías:

## Tecnologías utilizadas:

- React: Una biblioteca de JavaScript para construir interfaces de usuario interactivas.
- React Router: Una biblioteca para gestionar la navegación en una aplicación de React.
- Firebase: Una plataforma de desarrollo de aplicaciones web que proporciona servicios de backend como almacenamiento en la nube, autenticación, base de datos en tiempo real, etc.
- Bootstrap-React: Una biblioteca de componentes de interfaz de usuario para React que facilita el diseño y la estilización de la aplicación.

## Funcionalidades

La aplicación Dragon Store ofrece las siguientes funcionalidades:

1. Ver una lista de productos disponibles: Los usuarios pueden explorar una lista de productos de computación disponibles en la tienda. Cada producto muestra su nombre, descripción, precio y disponibilidad de stock.

2. Agregar productos al carrito de compras: Los usuarios pueden seleccionar la cantidad deseada de un producto y agregarlo al carrito de compras. El stock se actualiza automáticamente después de agregar un producto.

3. Ver el carrito de compras: Los usuarios pueden ver el contenido actualizado de su carrito de compras. Pueden ver los productos agregados, la cantidad seleccionada y el subtotal.

4. Realizar una orden de compra: Los usuarios pueden finalizar la compra y generar una orden de compra. Deben proporcionar su nombre, apellido, teléfono y dirección de correo electrónico. Una vez completada la orden, se mostrará un número de orden único.

## Configuración de Firebase

Para utilizar Firebase en esta aplicación, sigue los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.

2. En la sección "Authentication" de Firebase, habilita el proveedor de autenticación de correo electrónico y contraseña para permitir a los usuarios registrarse y autenticarse en la aplicación.

3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solo a usuarios autenticados.

4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web. Se te proporcionarán las credenciales de Firebase necesarias para la configuración.

5. Copia las credenciales de Firebase (apiKey, authDomain, projectId, etc.) y configura las variables de entorno en el archivo `.env` de tu proyecto. Puedes utilizar un paquete como `dotenv` para cargar las variables de entorno desde el archivo `.env`.

## Uso de Vite

Para ejecutar la aplicación Dragon Store, se utiliza Vite, un entorno de desarrollo rápido para aplicaciones web modernas. Sigue los pasos a continuación para instalar y ejecutar la aplicación con Vite:

1. Asegúrate de tener Node.js instalado en tu máquina.

2. Abre una terminal y navega hasta el directorio del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:
   ```
   npm install
   ```

4. Ejecuta el siguiente comando para iniciar la aplicación:
   ```
   npm run dev
   ```

5. La aplicación se ejecutará

 en `http://localhost:5175/`. Abre tu navegador web y ve a esa dirección para ver la aplicación en funcionamiento.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información sobre los términos de la licencia.