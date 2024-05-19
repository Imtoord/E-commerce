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
