<h1>Overview</h1>
This project is a Node.js application built with Express.js and MongoDB, designed to provide a backend for an e-commerce platform. It includes models for managing products, categories, brands, carts, orders, users, reviews, and coupons. Additionally, it features utility classes for error handling and implementing common MongoDB query functionalities.

Project Structure
The project consists of several modules organized into folders:

<h3>Models<h3/>: Contains MongoDB schema definitions and models for various entities such as products, categories, brands, carts, orders, users, reviews, and coupons.

<h3>Utils<h3/>: Includes utility classes for error handling (ErrorHandler) and implementing common MongoDB query features (ApiFeatures).
  
<h3>Utils/Validator:<h3/>
Designed validator functions to validate incoming data and ensure data integrity.
Implemented validation middleware to validate request data before processing.

<h3>Controller and Middleware<h3/>:
Developed controller functions to handle incoming requests and interact with the database.
Implemented middleware functions for request validation, authentication, and error handling.
  
<h2>Models<h2/>
<h3>Product<h3/>: Represents a product with attributes like title, description, price, quantity, and associated entities like category, brand, and reviews.
<h3>Category<h3/>: Defines product categories with attributes such as name and image.
<h3>Brand<h3/>: Represents brands with attributes like name and image.
<h3>Cart<h3/>: Represents user carts with details about the products, quantities, prices, and total prices.
<h3>Order<h3/>: Represents user orders with details like cart items, payment method, and delivery status.
<h3>User<h3/>: Represents users with attributes like username, email, password, addresses, and wishlist.
<h3>Review<h3/>: Represents product reviews with attributes like title, rating, user, and product association.
<h3>Coupon<h3/>: Represents discount coupons with attributes like name, expiration date, and discount percentage.
<h3>SubCategory<h3/>: Defines subcategories associated with parent categories.
  
Utilities
ErrorHandler: Provides a custom error class for handling errors with status codes.
ApiFeatures: Offers utility methods for pagination, sorting, filtering, field selection, and searching in MongoDB queries.
Usage
Clone the repository from GitHub.
Install dependencies using npm install.
Set up environment variables like MongoDB URI, JWT secret key, and expiration time.
Run the application using npm start.

Topics
1. Authentication and Authorization
User registration and login.
JWT-based authentication.
Role-based access control (user vs. admin).
2. Product Management
CRUD operations for products.
Product categorization and brand association.
Managing product inventory and pricing.
3. Order Management
Creating and managing user orders.
Handling order status (paid, delivered).
Implementing payment methods (cash, card).
4. Cart Management
Adding and removing products from the cart.
Calculating total prices and discounts.
Managing cart items and quantities.
5. Reviews and Ratings
Allowing users to submit product reviews and ratings.
Calculating average ratings for products.
Displaying reviews on product pages.
6. Coupon and Discount Management
Creating and applying discount coupons.
Expiring coupons and validating discounts.
Calculating discounted prices in orders.
7. Category and Subcategory Management
Creating and managing product categories and subcategories.
Associating products with categories for easy navigation.
8. Pagination, Sorting, and Filtering
Paginating through large sets of data.
Sorting product lists based on different attributes.
Filtering products by various criteria like price, brand, or category.
9. Error Handling and Utilities
Custom error handling with status codes.
Utility functions for common MongoDB query operations.
Managing API features like pagination and searching.
10. User Profile and Wishlist
Managing user profiles and addresses.
Allowing users to add products to their wishlist.
Storing user preferences and order history.

Routes:
User Authentication:
POST /api/auth/register: User registration.
POST /api/auth/login: User login.
GET /api/auth/logout: User logout.
GET /api/auth/me: Get logged-in user profile.
GET /api/auth/users: Get all users (admin only).
GET /api/auth/users/:id: Get, update, or delete user by ID (admin only).
Product Management
Features:
CRUD operations for products.
Product categorization and association with brands.
Routes:
Products:
GET /api/products: Get all products, create a new product.
GET /api/products/:id: Get, update, delete product by ID.
Categories:
GET /api/categories: Get all categories, create a new category.
GET /api/categories/:id: Get, update, delete category by ID.
Brands:
GET /api/brands: Get all brands, create a new brand.
GET /api/brands/:id: Get, update, delete brand by ID.
Order Management
Features:
CRUD operations for orders.
Order status tracking and payment method handling.
Routes:
Orders:
GET /api/orders: Get all orders, create a new order.
GET /api/orders/:id: Get, update, and delete order by ID.
Cart Management
Features:
Add, remove, and update items in the cart.
Calculation of total prices and discounts for cart items.
Routes:
Cart:
GET /api/cart: Get cart items, and add items to the cart.
PUT /api/cart/:id: Update the item in the cart by ID.
DELETE /api/cart/:id: Remove the item from the cart by ID.
Reviews and Ratings
Features:
Submit product reviews and ratings.
Calculation of average ratings for products.
Routes:
Reviews:
GET /api/products/:productId/reviews: Get product reviews, and submit a new review.
Coupon and Discount Management
Features:
Creation and application of coupons for discounts.
Coupon validation and discount calculations in orders.
Routes:
Coupons:
GET /api/coupons: Get all coupons, and create a new coupon.
GET /api/coupons/:id: Get, update, delete coupons by ID.
Category and Subcategory Management
Features:
CRUD operations for categories and subcategories.
Association of products with categories.
Routes:
Categories:
GET /api/categories: Get all categories, and create a new category.
GET /api/categories/:id: Get, update, delete categories by ID.
Subcategories:
GET /api/subcategories: Get all subcategories, and create a new subcategory.
GET /api/subcategories/:id: Get, update, and delete subcategories by ID.
Other Features
User Profile and Wishlist
Pagination, Sorting, and Filtering, search
Error Handling and Utilities
