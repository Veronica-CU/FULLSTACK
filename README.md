# Experiment 2.1 - RESTful Services with Spring Boot + React

This experiment demonstrates:
- Layered architecture (`controller -> service -> repository -> entity`)
- DTOs with validation
- JPA/Hibernate database integration
- Exception handling
- API versioning (`/api/v1`, `/api/v2`)
- React integration with REST APIs

## Project Structure

- `backend/` - Spring Boot REST API
- `frontend/` - React (Vite) API client

## Backend Setup (Spring Boot)

### Prerequisites
- Java 17+
- Maven 3.9+
- MySQL or PostgreSQL running locally

### Configure DB
Default profile is MySQL (`application.yml`).

For MySQL (`backend/src/main/resources/application-mysql.yml`):
- DB: `experiment21_db`
- Username: `root`
- Password: `root`

For PostgreSQL (`backend/src/main/resources/application-postgres.yml`):
- DB: `experiment21_db`
- Username: `postgres`
- Password: `postgres`

### Run backend

```bash
cd backend
mvn spring-boot:run
```

By default, backend now starts with `h2` profile (in-memory DB), so no local DB setup is required.

To run with PostgreSQL profile:

```bash
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=postgres
```

To run with MySQL profile:

```bash
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=mysql
```

## API Endpoints

### v1
- `POST /api/v1/products`
- `GET /api/v1/products`
- `GET /api/v1/products/{id}`
- `PUT /api/v1/products/{id}`
- `DELETE /api/v1/products/{id}`

### v2
- `GET /api/v2/products`

`v2` extends representation with `stockStatus` (`IN_STOCK` / `OUT_OF_STOCK`).

## Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` and integrates with backend on `http://localhost:8080`.

## Validation and Exception Handling

- Validation annotations are used in `ProductRequestDto`
- Global exception handler returns standardized JSON errors for:
  - Validation errors (400)
  - Resource not found (404)
  - Unexpected server errors (500)
