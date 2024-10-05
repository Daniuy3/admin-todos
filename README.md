# Development

Pasos para levantar el app en desarrollo

1. levantar la base de datos
    ```
    docker compose up -d
    ```
2. Renombrar el .env.template
3. Sustituir las variables de entorno
4. Ejecutar el comando ``` npm i ```
5. Ejecutar el comando ``` npm run dev ```
6. Ejecutar el comando ``` npx prisma migrate dev ```
7. Ejecutar el comando ``` npx prisma generate ```
8. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)

## Prisma Commands
```
    npx prisma init
    npx prisma migrate dev
    npx prisma generate
```
