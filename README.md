# Shopping Cart Application - Full-Stack E-commerce Solution

## Project Overview

A comprehensive shopping cart application demonstrating modern full-stack development practices with React frontend, .NET Core Web API backend, and production-ready architecture following Clean Architecture principles.

**Repository**: [yourusername/shopping-cart-app](https://github.com/yourusername/shopping-cart-app)

---

## Objective

Demonstrate hands-on experience in full-stack development by building a complete e-commerce shopping cart application showcasing:

- **Frontend**: React 18 with TypeScript, Redux Toolkit, responsive design
- **Backend**: .NET 8 Web API with Clean Architecture
- **Database**: SQL Server with Entity Framework Core
- **Authentication**: JWT-based security with role-based access control
- **Testing**: Comprehensive unit and integration testing (80%+ coverage)

---

## User Stories

| As a... | I want to... | So that... |
|---------|-------------|------------|
| **Shopper** | Browse products with images and prices | I can see what's available for purchase |
| **Shopper** | View detailed product information | I can make informed purchasing decisions |
| **Shopper** | Add products to my shopping cart | I can collect items for purchase |
| **Shopper** | Update item quantities in my cart | I can buy the right amount of each item |
| **Shopper** | Remove items from my cart | I can change my mind about purchases |
| **Shopper** | View cart total and item count | I know how much I'll spend |
| **Shopper** | Complete checkout process | I can finalize my purchase |
| **Customer** | Register and login to my account | My cart is saved and I can track orders |
| **Customer** | View my order history | I can track my past purchases |
| **Admin** | Add, edit, and delete products | I can manage the product catalog |

---

## Architecture Overview

### Frontend (React + TypeScript)
- **Components**: ProductList, ProductCard, ShoppingCart, Checkout, Authentication
- **State Management**: Redux Toolkit for global state
- **Routing**: React Router v6 for navigation
- **Styling**: Tailwind CSS for responsive design
- **API Integration**: Axios with interceptors for HTTP requests

### Backend (.NET 8 Web API)
- **Clean Architecture**: Domain, Application, Infrastructure, API layers
- **Authentication**: JWT with role-based authorization
- **Database**: Entity Framework Core with SQL Server
- **Validation**: FluentValidation for input validation
- **Logging**: Serilog for structured logging

### Database Schema
```
Users → Carts → CartItems → Products
Users → Orders → OrderItems → Products
Products → Categories
```

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `POST /api/auth/refresh` - Token refresh

### Products
- `GET /api/products` - List products (with pagination/filtering)
- `GET /api/products/{id}` - Get product details
- `POST /api/products` - Add product (Admin only)
- `PUT /api/products/{id}` - Update product (Admin only)
- `DELETE /api/products/{id}` - Delete product (Admin only)

### Shopping Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/items` - Add item to cart
- `PUT /api/cart/items/{id}` - Update item quantity
- `DELETE /api/cart/items/{id}` - Remove item from cart
- `DELETE /api/cart` - Clear entire cart

### Orders
- `POST /api/orders` - Create order (checkout)
- `GET /api/orders` - Get user's order history
- `GET /api/orders/{id}` - Get order details

---

## Planning and Estimation

### Project Timeline: 21 Days (168 Hours)

#### Phase 1: Foundation (Days 1-3, 24 hours)
- **Setup & Planning** (8h): Repository, environment, documentation
- **Database Design** (8h): ER diagram, entity relationships
- **Backend Structure** (8h): Clean Architecture setup, project configuration

#### Phase 2: Backend Development (Days 4-10, 72 hours)
- **Domain Layer** (12h): Entities, value objects, business rules
- **Data Layer** (16h): Entity Framework, repositories, migrations
- **Authentication** (16h): JWT implementation, user management
- **Business Logic** (20h): Product, cart, order services
- **API Layer** (8h): Controllers, middleware, validation

#### Phase 3: Frontend Development (Days 11-16, 48 hours)
- **Project Setup** (8h): React, TypeScript, Redux configuration
- **Authentication UI** (8h): Login, register, protected routes
- **Product Features** (16h): Product listing, details, search/filter
- **Cart & Checkout** (16h): Cart management, checkout process

#### Phase 4: Integration & Testing (Days 17-19, 24 hours)
- **API Integration** (8h): Connect frontend to backend APIs
- **Unit Testing** (8h): Backend services, frontend components
- **Integration Testing** (8h): End-to-end user flows

#### Phase 5: Polish & Documentation (Days 20-21, 8 hours)
- **Code Review & Refactoring** (4h): Code quality improvements
- **Documentation** (4h): API docs, setup instructions

### Risk Assessment
- **High Risk**: Authentication integration (20% buffer)
- **Medium Risk**: API integration, cart state management (10% buffer)
- **Low Risk**: UI components, database operations (5% buffer)

### Resource Allocation
- **Backend Development**: 43% (72h)
- **Frontend Development**: 29% (48h)
- **Testing**: 14% (24h)
- **Setup & Planning**: 10% (16h)
- **Documentation**: 5% (8h)

---

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library

### Backend
- **.NET**: .NET 8 Web API
- **Architecture**: Clean Architecture pattern
- **Database**: SQL Server with Entity Framework Core
- **Authentication**: JWT Bearer tokens
- **Testing**: xUnit framework
- **Logging**: Serilog

---

## Prerequisites

- **Node.js** (v18 or higher)
- **.NET 8 SDK**
- **SQL Server** (LocalDB or SQL Server Express)
- **Visual Studio Code** or **Visual Studio 2022**

---

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/shopping-cart-app.git
cd shopping-cart-app
```

### 2. Backend Setup
```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run --project ShoppingCart.API
```
Backend will run on `https://localhost:7001`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend will run on `http://localhost:3000`

### 4. Configuration

Create `backend/ShoppingCart.API/appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=ShoppingCartDB;Trusted_Connection=true"
  },
  "JwtSettings": {
    "Secret": "your-super-secret-key-here-make-it-long",
    "Issuer": "ShoppingCartApp",
    "Audience": "ShoppingCartApp",
    "ExpiryMinutes": 60
  }
}
```

Create `frontend/.env`:
```
REACT_APP_API_URL=https://localhost:7001/api
```

---

## Running Tests

### Backend Tests
```bash
cd backend
dotnet test --collect:"XPlat Code Coverage"
```

### Frontend Tests
```bash
cd frontend
npm test -- --coverage
```

**Coverage Goal**: 80%+ for both backend and frontend

---

## Demo Features

1. **User Registration & Login**: Secure authentication with JWT
2. **Product Browsing**: Responsive product grid with search/filter
3. **Product Details**: Detailed view with add to cart functionality
4. **Shopping Cart**: Add/remove items, update quantities, view totals
5. **Checkout Process**: Order summary and completion
6. **Order History**: View past orders (authenticated users)
7. **Admin Panel**: Product management (admin users only)

---

## Project Structure

```
shopping-cart-app/
├── backend/
│   ├── ShoppingCart.API/          # Web API controllers
│   ├── ShoppingCart.Application/  # Business logic
│   ├── ShoppingCart.Domain/       # Domain entities
│   ├── ShoppingCart.Infrastructure/ # Data access
│   └── ShoppingCart.Tests/        # Unit tests
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── pages/               # Page components
│   │   ├── store/               # Redux store
│   │   ├── services/            # API services
│   │   └── types/               # TypeScript types
│   └── public/
└── docs/                        # Documentation
```

---

## Testing Strategy

### Backend Testing (xUnit)
- **Unit Tests**: Service layer business logic
- **Integration Tests**: API endpoints with in-memory database
- **Repository Tests**: Data access layer

### Frontend Testing (Jest + RTL)
- **Component Tests**: Individual component rendering and behavior
- **Integration Tests**: User interactions and API integration
- **Hook Tests**: Custom React hooks

---

## Deployment

### Backend
- **Production**: Azure App Service or AWS EC2
- **Database**: Azure SQL Database or AWS RDS
- **CI/CD**: GitHub Actions workflow

### Frontend
- **Production**: Netlify, Vercel, or AWS S3 + CloudFront
- **Build**: `npm run build` generates optimized production bundle

---

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

**Developer**: Your Name  
**Email**: your.email@example.com  
**LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)  
**Project Link**: [https://github.com/yourusername/shopping-cart-app](https://github.com/yourusername/shopping-cart-app)