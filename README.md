# clothes-shop

##### Pasos a seguir para levantar la app:

1. Clonar el repositorio con git clone (sin forkear).
2. Crear base de datos en PostgreSQL con el nombre 'clothesshop'.
3. Crear archivo .env en la carpeta 'api'. De la siguiente manera: <br />
    DB_HOST={nombre del host} <br />
    DB_USER={nombre de usuario de psql} <br />
    DB_PASSWORD={contraseña de usuario de psql} <br/>
Recordatorio: Por defecto el host es 'localhost' y el usuario es 'postgres'.
4. Crear archivo portConsts.js en la carpeta 'consts', que se encuentra dentro de 'client'. El archivo debe tener la siguiente estructura: <br/>
    const HOST = 'localhost'; 
    const PORT = '3001';
    module.exports = { HOST, PORT };
Si se usa otro host u otro puerto, cambiar el valor de las respectivas constantes.
6. Ejecutar npm install en las carpetas 'api' y 'client'
7. Ejecutar npm start en la carpeta api y en la carpeta client para levantar la app.
