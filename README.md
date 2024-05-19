<h1>Overview</h1>
<p>This project is a Node.js application built with Express.js and MongoDB, designed to provide a backend for an e-commerce platform. It includes models for managing products, categories, brands, carts, orders, users, reviews, and coupons. Additionally, it features utility classes for error handling and implementing common MongoDB query functionalities.</p>

<h2>Project Structure</h2>
<p>The project consists of several modules organized into folders:</p>

<h3>Models</h3>
<p>Contains MongoDB schema definitions and models for various entities such as products, categories, brands, carts, orders, users, reviews, and coupons.</p>

<h3>Utils</h3>
<p>Includes utility classes for error handling (ErrorHandler) and implementing common MongoDB query features (ApiFeatures).</p>
  
<h3>Utils/Validator</h3>
<p>Designed validator functions to validate incoming data and ensure data integrity.
Implemented validation middleware to validate request data before processing.</p>

<h3>Controller and Middleware</h3>
<p>Developed controller functions to handle incoming requests and interact with the database.
Implemented middleware functions for request validation, authentication, and error handling.</p>
  
<h2>Models</h2>
<h3>Product</h3>
<p>Represents a product with attributes like title, description, price, quantity, and associated entities like category, brand, and reviews.</p>
<h3>Category</h3>
<p>Defines product categories with attributes such as name and image.</p>
<h3>Brand</h3>
<p>Represents brands with attributes like name and image.</p>
<h3>Cart</h3>
<p>Represents user carts with details about the products, quantities, prices, and total prices.</p>
<h3>Order</h3>
<p>Represents user orders with details like cart items, payment method, and delivery status.</p>
<h3>User</h3>
<p>Represents users with attributes like username, email, password, addresses, and wishlist.</p>
<h3>Review</h3>
<p>Represents product reviews with attributes like title, rating, user, and product association.</p>
<h3>Coupon</h3>
<p>Represents discount coupons with attributes like name, expiration date, and discount percentage.</p>
<h3>SubCategory</h3>
<p>Defines subcategories associated with parent categories.</p>
  
<h2>Utilities</h2>
<h3>ErrorHandler</h3>
<p>Provides a custom error class for handling errors with status codes.</p>
<h3>ApiFeatures</h3>
<p>Offers utility methods for pagination, sorting, filtering, field selection, and searching in MongoDB queries.</p>

<h2>Usage</h2>
<ol>
  <li>Clone the repository from GitHub.</li>
  <li>Install dependencies using npm install.</li>
  <li>Set up environment variables like MongoDB URI, JWT secret key, and expiration time.</li>
  <li>Run the application using npm start.</li>
</ol>

<h2>Topics</h2>
<p>1. Authentication and Authorization</p>
<p>2. Product Management</p>
<p>3. Order Management</p>
<p>4. Cart Management</p>
<p>5. Reviews and Ratings</p>
<p>6. Coupon and Discount Management</p>
<p>7. Category and Subcategory Management</p>
<p>8. Pagination, Sorting, and Filtering</p>
<p>9. Error Handling and Utilities</p>
<p>10. User Profile and Wishlist</p>

<h2>Routes</h2>
<p>1. User Authentication</p>
<p>2. Product Management</p>
<p>3. Order Management</p>
<p>4. Cart Management</p>
<p>5. Reviews and Ratings</p>
<p>6. Coupon and Discount Management</p>
<p>7. Category and Subcategory Management</p>
<p>8. Other Features</p>

<h3>User Authentication</h3>
<ul>
  <li>POST /api/auth/register: User registration.</li>
  <li>POST /api/auth/login: User login.</li>
  <li>GET /api/auth/logout: User logout.</li>
  <li>GET /api/auth/me: Get logged-in user profile.</li>
  <li>GET /api/auth/users: Get all users (admin only).</li>
  <li>GET /api/auth/users/:id: Get, update, or delete user by ID (admin only).</li>
</ul>
  
<h3>Product Management</h3>
<p>Features: CRUD operations for products, product categorization, and association with brands.</p>
<h4>Products</h4>
<ul>
  <li>GET /api/products: Get all products, create a new product.</li>
  <li>GET /api/products/:id: Get, update, delete product by ID.</li>
</ul>
<h4>Categories</h4>
<ul>
  <li>GET /api/categories: Get all categories, create a new category.</li>
  <li>GET /api/categories/:id: Get, update, delete category by ID.</li>
</ul>
<h4>Brands</h4>
<ul>
  <li>GET /api/brands: Get all brands, create a new brand.</li>
  <li>GET /api/brands/:id: Get, update, delete brand by ID.</li>
</ul>

<h3>Order Management</h3>
<p>Features: CRUD operations for orders, order status tracking, and payment method handling.</p>
<h4>Orders</h4>
<ul>
  <li>GET /api/orders: Get all orders, create a new order.</li>
  <li>GET /api/orders/:id: Get, update, delete order by ID.</li>
</ul>

<h3>Cart Management</h3>
<p>Features: Adding, removing, and updating items in the cart, calculation of total prices and discounts.</p>
<h4>Cart</h4>
<ul>
  <li>GET /api/cart: Get cart items, and add items to the cart.</li>
  <li>PUT /api/cart/:id: Update the item in the cart by ID.</li>
  <li>DELETE /api/cart/:id: Remove the item from the cart by ID.</li>
</ul>

<h3>Reviews and Ratings</h3>
<p>Features: Submit product reviews and ratings, calculation of average ratings for products.</p>
<h4>Reviews</h4>
<ul>
  <li>GET /api/products/:productId/reviews: Get product reviews, and submit a new review.</li>
</ul>

<h3>Coupon and Discount Management</h3>
<p>Features: Creation and application of coupons for discounts, coupon validation, and discount calculations in orders.</p>
<h4>Coupons</h>
<ul>
  <li>GET /api/coupons: Get all coupons, and create a new coupon.</li>
  <li>GET /api/coupons/:id: Get, update, delete coupons by ID.</li>
</ul>
<h3>Category and Subcategory Management</h3>
<p>Features: CRUD operations for categories and subcategories, association of products with categories.</p>
<h4>Categories</h4>
<ul>
  <li>GET /api/categories: Get all categories, and create a new category.</li>
  <li>GET /api/categories/:id: Get, update, delete categories by ID.</li>
</ul>
<h4>Subcategories</h4>
<ul>
  <li>GET /api/subcategories: Get all subcategories, and create a new subcategory.</li>
  <li>GET /api/subcategories/:id: Get, update, and delete subcategories by ID.</li>
</ul>
<h3>Other Features</h3>
<ul>
  <li>User Profile and Wishlist</li>
  <li>Pagination, Sorting, and Filtering, search</li>
  <li>Error Handling and Utilities</li>
</ul>
<h2>Utilities</h2>
<h3>ErrorHandler</h3>
<p>Provides a custom error class for handling errors with status codes.</p>
<h3>ApiFeatures</h3>
<p>Offers utility methods for pagination, sorting, filtering, field selection, and searching in MongoDB queries.</p>
<h2>Usage</h2>
<ol>
  <li>Clone the repository from GitHub.</li>
  <li>Install dependencies using npm install.</li>
  <li>Set up environment variables like MongoDB URI, JWT secret key, and expiration time.</li>
  <li>Run the application using npm start.</li>
</ol>
