# 🚀 Cypress API Automation - ServeRest

[![Cypress](https://img.shields.io/badge/cypress-v15.6.0-green)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/node.js-v18+-blue)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Design Patterns](#design-patterns)
- [Contributing](#contributing)
- [Author](#author)

## 🎯 About

This project is a comprehensive API test automation suite built with **Cypress** for the **ServeRest** platform. It demonstrates modern test automation practices including the Builder Pattern, custom commands, and dynamic data generation using Faker.js.

The ServeRest API is a REST API that simulates an e-commerce backend, providing endpoints for user management, authentication, and product operations.

## ✨ Features

- 🔧 **Complete API Testing Coverage** - Users, Authentication, Products
- 🏗️ **Builder Pattern Implementation** - Clean and maintainable test data creation
- 🎲 **Dynamic Data Generation** - Using Faker.js for realistic test data
- 🔄 **Custom Cypress Commands** - Reusable automation components
- ✅ **Positive & Negative Test Scenarios** - Comprehensive validation coverage
- 📊 **Clean Test Reports** - Built-in Cypress reporting
- 🚀 **Easy Setup** - Minimal configuration required

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Cypress** | v15.6.0 | API Testing Framework |
| **Faker.js** | v10.1.0 | Test Data Generation |
| **JavaScript** | ES6+ | Programming Language |
| **Node.js** | v18+ | Runtime Environment |


## 🔧 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **Git** (for cloning the repository)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd cypress-serverest-api-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx cypress --version
   ```

## 🏃‍♂️ Running Tests

### Interactive Mode (Recommended for Development)
```bash
# Open Cypress Test Runner
npx cypress open
```

### Headless Mode (CI/CD)
```bash
# Run all tests in headless mode
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/api/login.cy.js"

# Run with specific browser
npx cypress run --browser chrome
```

### Custom Scripts (Add to package.json)
```json
{
  "scripts": {
    "test": "cypress run",
    "test:open": "cypress open",
    "test:headless": "cypress run --headless",
    "test:api": "cypress run --spec 'cypress/e2e/api/**/*'"
  }
}
```

## 🧪 Test Scenarios

### 👤 User Management (`createNewUser.cy.js`)
- ✅ Create regular user successfully
- ✅ Create administrator user successfully
- ❌ Handle duplicate email validation
- ❌ Handle invalid data scenarios

### 🔐 Authentication (`login.cy.js`)
- ✅ Login with valid regular user
- ✅ Login with valid administrator user
- ❌ Login with unregistered user
- ❌ Login with invalid email format
- ❌ Login without required fields

### 📦 Product Management (`createProduct.cy.js`)
- ✅ Create product successfully (admin only)
- ✅ Delete product successfully (admin only)
- ❌ Create product without authorization
- ❌ Handle invalid product data

## 🏗️ Design Patterns

### Builder Pattern
The project implements the Builder Pattern for clean and maintainable test data creation

```javascript
// Creating a regular user
const regularUser = NewRegularUsersBuilder.new().build();

// Creating an admin user
const adminUser = NewAdministratorUsersBuilder.new().build();

// Creating a product
const product = ProductsBuilder.new().build();
```

### Custom Commands
Reusable Cypress commands for common operations:

```javascript
// Login as admin and get token
cy.loginAsAdmin().then((token) => {
    // Use token for authenticated requests
});

// Create product with authentication
cy.createProduct(token, productData);
```

### Data Generation
Dynamic test data using Faker.js:

```javascript
{
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(8, true),
    administrador: 'false'
}
```


## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Best Practices Implemented

- ✅ **Separation of Concerns** - Clear separation between test data, test logic, and utilities
- ✅ **DRY Principle** - Reusable components and custom commands
- ✅ **Page Object Model** - Structured approach to API endpoints
- ✅ **Dynamic Data Generation** - Avoiding hardcoded test data
- ✅ **Error Handling** - Proper handling of negative test scenarios
- ✅ **Maintainable Code Structure** - Clean and organized codebase

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Cypress Documentation](https://docs.cypress.io/)
2. Review the [ServeRest API Documentation](https://serverest.dev/)
3. Create an issue in this repository

## 👨‍💻 Author

**Gleisson Santos**
- GitHub: [@GleissonSantos](https://github.com/GleissonSantos)


⭐ **If this project helped you, please give it a star!** ⭐