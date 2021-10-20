# clothes-shop

##### Pasos a seguir para levantar la app:

1. Clonar el repositorio con git clone (sin forkear).
2. Crear base de datos en PostgreSQL con el nombre 'clothesshop'.
3. Crear archivo .env en la carpeta 'api'. De la siguiente manera: <br />
    DB_HOST={nombre del host} <br />
    DB_USER={nombre de usuario de psql} <br />
    DB_NAME={nombre de bd en psql}
    DB_PASSWORD={contraseña de usuario de psql} <br/>
    PORT={puerto en donde esta alojada la bd de postgre} <br />
    CLIENT={url completa del lado del cliente}
    SERVER={url completa del lado del servidor}
    SECRET={clave para encriptar informacion sensible, a elección}
    GOOGLE_CLIENT_ID={credenciales oauth client de google}
    GOOGLE_CLIENT_SECRET={credenciales oauth client de google}
Recordatorio: Por defecto el host es 'localhost' y el usuario es 'postgres'.
4. Crear archivo .env en la carpeta 'client'. De la siguiente manera: <br />
    REACT_APP_API={url completa del lado del servidor}
    REACT_APP_GOOGLE={url de llamado al servidor + /auth/google}
Si se usa otro host u otro puerto, cambiar el valor de las respectivas constantes. <br/>
6. Ejecutar npm install en las carpetas 'api' y 'client'
7. Ejecutar npm start en la carpeta api y en la carpeta client para levantar la app.
