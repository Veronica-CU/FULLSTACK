# Exp5 - Lokesh Product REST API

Spring Boot RESTful API with layered architecture and CRUD operations.

## Features

- Layered architecture (Controller → Service → Repository)
- Full CRUD operations
- H2 in-memory database
- Validation with @Valid
- Exception handling with proper HTTP status codes
- Swagger/OpenAPI documentation

## Run

```bash
mvn spring-boot:run
```

## API Endpoints

- POST /api/v1/products - Create product
- GET /api/v1/products - Get all products
- GET /api/v1/products/{id} - Get product by ID
- PUT /api/v1/products/{id} - Update product
- DELETE /api/v1/products/{id} - Delete product

## Swagger UI

http://localhost:8080/swagger-ui.html

## H2 Console

http://localhost:8080/h2-console
