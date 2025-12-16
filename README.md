# Exámen Final Backend - NodeJS Tp2

## Requisitos
- Version de Node: ^22.13.0

## Instalar dependencias
```bash
npm install
```

## Crear archivo .env
Duplicar el archivo `.env.example`

Luego levantamos el proyecto con:
```bash
npm start
```
```bash
npm run dev
```

## Endpoints

Base URL:
```
http://localhost:8080/xxx
```

### Crear (POST)
```
POST /xxx
Content-Type: application/json

{
  "id": 1,
  "temperatura": 25
}
```

### Obtener por ID (GET)
```
GET /xxx/:id
```

### Obtener todos (GET)
```
GET /xxx
```
