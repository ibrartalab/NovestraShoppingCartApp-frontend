# Getting Started - First Steps

## Day 1: Project Setup & Repository Structure

### 1. Create GitHub Repository
```bash
# Create and clone your repository
git clone https://github.com/yourusername/shopping-cart-app.git
cd shopping-cart-app

# Create initial structure
mkdir frontend backend docs database
touch README.md
```

### 2. Initialize Projects

#### Backend Setup (.NET 8 Web API)
```bash
cd backend

# Create solution and projects
dotnet new sln -n ShoppingCartApp

# Create projects following Clean Architecture
dotnet new webapi -n ShoppingCart.API
dotnet new classlib -n ShoppingCart.Application  
dotnet new classlib -n ShoppingCart.Domain
dotnet new classlib -n ShoppingCart.Infrastructure
dotnet new xunit -n ShoppingCart.Tests

# Add projects to solution
dotnet sln add ShoppingCart.API/ShoppingCart.API.csproj
dotnet sln add ShoppingCart.Application/ShoppingCart.Application.csproj
dotnet sln add ShoppingCart.Domain/ShoppingCart.Domain.csproj
dotnet sln add ShoppingCart.Infrastructure/ShoppingCart.Infrastructure.csproj
dotnet sln add ShoppingCart.Tests/ShoppingCart.Tests.csproj

# Add project references
cd ShoppingCart.API
dotnet add reference ../ShoppingCart.Application/ShoppingCart.Application.csproj
dotnet add reference ../ShoppingCart.Infrastructure/ShoppingCart.Infrastructure.csproj

cd ../ShoppingCart.Application
dotnet add reference ../ShoppingCart.Domain/ShoppingCart.Domain.csproj

cd ../ShoppingCart.Infrastructure
dotnet add reference ../ShoppingCart.Domain/ShoppingCart.Domain.csproj
dotnet add reference ../ShoppingCart.Application/ShoppingCart.Application.csproj

cd ../ShoppingCart.Tests
dotnet add reference ../ShoppingCart.API/ShoppingCart.API.csproj
dotnet add reference ../ShoppingCart.Application/ShoppingCart.Application.csproj
```

#### Frontend Setup (React + TypeScript)
```bash
cd ../frontend

# Create React app with TypeScript
npx create-react-app . --template typescript

# Install essential dependencies
npm install @reduxjs/toolkit react-redux react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npm install @auth0/auth0-react # if using Auth0

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### 3. Install Backend NuGet Packages
```bash
cd ../backend/ShoppingCart.API
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Swashbuckle.AspNetCore
dotnet add package Serilog.AspNetCore
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection

cd ../ShoppingCart.Infrastructure
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore
```

## Day 2: Core Domain Models & Database Setup

### 1. Create Domain Entities

Create these files in `ShoppingCart.Domain/Entities/`:

#### BaseEntity.cs
```csharp
namespace ShoppingCart.Domain.Entities;

public abstract class BaseEntity
{
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
```

#### User.cs
```csharp
namespace ShoppingCart.Domain.Entities;

public class User : BaseEntity
{
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Role { get; set; } = "User";
    
    // Navigation properties
    public Cart? Cart { get; set; }
    public ICollection<Order> Orders { get; set; } = new List<Order>();
}
```

#### Product.cs
```csharp
namespace ShoppingCart.Domain.Entities;

public class Product : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public int Stock { get; set; }
    public int CategoryId { get; set; }
    
    // Navigation properties
    public Category Category { get; set; } = null!;
    public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}
```

### 2. Set Up Entity Framework Context

Create `ShoppingCart.Infrastructure/Data/ApplicationDbContext.cs`:
```csharp
using Microsoft.EntityFrameworkCore;
using ShoppingCart.Domain.Entities;

namespace ShoppingCart.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
        : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Cart> Carts { get; set; }
    public DbSet<CartItem> CartItems { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure entity relationships and constraints
        base.OnModelCreating(modelBuilder);
        
        // User configurations
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.Email).IsUnique();
            entity.Property(e => e.Email).HasMaxLength(255);
        });
        
        // Product configurations
        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
        });
    }
}
```

### 3. Configure Services

Update `ShoppingCart.API/Program.cs`:
```csharp
using Microsoft.EntityFrameworkCore;
using ShoppingCart.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
```

### 4. Add Connection String

Add to `ShoppingCart.API/appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=ShoppingCartDB;Trusted_Connection=true;MultipleActiveResultSets=true"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### 5. Create Initial Migration

```bash
cd ShoppingCart.API
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Initial Commit & GitHub Setup

```bash
# From root directory
git add .
git commit -m "Initial project setup with Clean Architecture structure"
git push origin main

# Create development branch
git checkout -b develop
git push -u origin develop
```

## Project Management Setup

### Create GitHub Issues for Each Task
1. Set up project structure ✅
2. Create domain entities ✅  
3. Implement User Management API
4. Implement Product Management API
5. Implement Cart Management API
6. Set up authentication
7. Create React frontend structure
8. Implement product listing page
9. Implement cart functionality
10. Add authentication to frontend
11. Write unit tests
12. Integration testing
13. Documentation

### GitHub Project Board Columns
- **Backlog**: All planned tasks
- **In Progress**: Currently working on
- **Review**: Ready for code review
- **Done**: Completed tasks

## Next Steps (Day 3)
1. Implement repository pattern in Infrastructure layer
2. Create basic CRUD operations for Products
3. Set up dependency injection for services
4. Create your first API controller (ProductsController)
5. Test API endpoints with Swagger

This structured approach ensures you're building a solid foundation following clean architecture principles while maintaining good project management practices.