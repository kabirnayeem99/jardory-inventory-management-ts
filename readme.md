# Jardory Inventory Management

Jardory Inventory Management is a backend web application built with TypeScript to manage inventory efficiently. The project serves as a learning platform for exploring the use of TypeScript in backend web development, focusing on managing products, suppliers, and customer orders. It implements RESTful API architecture to provide endpoints for product creation, updates, stock tracking, and order management, following best practices like Clean Architecture for code organization and maintainability.

## Planning

- Implement Product Management all features as in-memory solutions
- Add Bruno playground for API testing, and add the `txt` file in this repo.
- Implement SQLite database.
- Implement inventory tracking.
- Implement user-authentication.
- Implement user-roles and user authorization.
- Implement supplier management.
- Implement purchase order management.
- Implement proper database connection.
- Implement user authentication and role management.
- Implement stock adjustment and auditing.
- Implement categories and tags.
- Implement frontend by KMP.
- Implement in-memory caching and server management.

## Planned Features

### 1. **Product Management**

- **Add New Product**: Create a new product with details like name, SKU, category, supplier, cost price, selling price, and description.
- **Update Product**: Modify product information such as price, description, and supplier details.
- **Delete Product**: Remove a product from the system (may include soft deletion).
- **View Product Details**: Retrieve detailed information about a specific product.
- **List All Products**: Display all available products with options to paginate, sort, and filter (e.g., by category, supplier, stock status).
- **Search Products**: Search for products by SKU, name, or category.

### 2. **Inventory Tracking**

- **View Stock Levels**: Display current stock levels for all products.
- **Update Stock Levels**: Modify stock quantity when items are added to or removed from inventory (e.g., purchase orders, sales orders).
- **Low Stock Alerts**: Notify users when stock levels fall below a defined threshold.
- **Inventory Valuation**: Calculate the total value of inventory based on cost price or selling price.

### 3. **Supplier Management**

- **Add New Supplier**: Register new suppliers with details like name, contact information, and product categories supplied.
- **Update Supplier**: Edit existing supplier details.
- **Delete Supplier**: Remove a supplier from the system (soft deletion).
- **View Supplier Details**: Retrieve supplier contact details and linked products.
- **List All Suppliers**: Show all suppliers, with filtering and sorting options.

### 4. **Purchase Order Management**

- **Create Purchase Order**: Create and send purchase orders to suppliers when inventory needs restocking.
- **View Purchase Orders**: List all purchase orders, filter by status (pending, completed, canceled).
- **Update Purchase Order Status**: Mark purchase orders as fulfilled or canceled.
- **Receive Goods**: Update stock levels when goods are received from a supplier.

### 5. **Sales Order Management**

- **Create Sales Order**: Record sales orders when products are sold.
- **Update Stock Based on Sales**: Automatically reduce stock levels when sales orders are fulfilled.
- **View Sales Orders**: List all sales orders, filter by status (pending, completed, returned).
- **Return Sales**: Handle returns and update inventory accordingly.

### 6. **User Authentication & Role Management**

- **User Registration**: Allow users to register with appropriate roles (admin, manager, staff).
- **Login & Authentication**: Use JWT or session-based authentication for users.
- **Role-Based Access Control**: Restrict access to certain functions (e.g., only admins can delete products).
- **Audit Logs**: Track user actions such as product updates, stock changes, and order creation.

### 7. **Reporting & Analytics**

- **Stock Movement Reports**: View reports on stock movements (inward from purchase, outward from sales).
- **Inventory Turnover Reports**: Track how fast inventory is moving (e.g., how many times stock is sold and restocked over a period).
- **Sales vs Purchases**: Compare total sales with total purchases to measure profitability.
- **Product Performance**: Identify top-selling and slow-moving products.
- **Inventory Valuation Reports**: Generate reports to assess total stock value at any given time.

### 8. **Stock Adjustment & Auditing**

- **Manual Stock Adjustment**: Adjust stock levels manually in case of damage, theft, or errors.
- **Stock Audits**: Perform periodic inventory audits to ensure physical stock matches system records.
- **Audit Logs**: Record adjustments and the reasons for them.

### 9. **Categories & Tags**

- **Add/Edit Categories**: Categorize products by type (e.g., electronics, groceries).
- **Tag Products**: Add custom tags to products for easier filtering and searching (e.g., “new”, “best seller”).

### 10. **Miscellaneous Features**

- **Search & Filter**: Implement search and filtering options for products, suppliers, orders, etc.
- **Pagination**: Add pagination for large datasets (products, orders, etc.).
- **Barcode Integration**: Integrate barcode scanning for product lookup and stock updates.

These functions lay the groundwork for a functional inventory management system. You can expand on each of these with advanced features like notifications, batch processing, or integration with third-party APIs (e.g., payment gateways, shipping providers).
