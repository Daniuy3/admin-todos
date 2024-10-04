# Development

Pasos para levantar el app en desarrollo

1. levantar la base de datos
    ```
    docker compose up -d
    ```
2. Renombrar el .env.template
3. Sustituir las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](http://localhost:3000/api/seed)
## Prisma Commands
```
    npx prisma init
    npx prisma migrate dev
```
