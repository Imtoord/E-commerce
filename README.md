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

<h3>Category Routes</h3>
<ul>
  <li>GET /api/categories: Get all categories.</li>
  <li>POST /api/categories: Create a new category.</li>
  <li>GET /api/categories/:id: Get a specific category by ID.</li>
  <li>PUT /api/categories/:id: Update a specific category by ID.</li>
  <li>DELETE /api/categories/:id: Delete a specific category by ID.</li>
  <li>GET /api/categories/:categoryId/subcategories: Get all subcategories of a specific category.</li>
  <li>GET /api/categories/:categoryId/products: Get all products of a specific category.</li>
</ul>

<h3>Subcategory Routes</h3>
<ul>
  <li>GET /api/subcategories: Get all subcategories.</li>
  <li>POST /api/subcategories: Create a new subcategory.</li>
  <li>GET /api/subcategories/:id: Get a specific subcategory by ID.</li>
  <li>PUT /api/subcategories/:id: Update a specific subcategory by ID.</li>
  <li>DELETE /api/subcategories/:id: Delete a specific subcategory by ID.</li>
</ul>

<h3>Brand Routes</h3>
<ul>
  <li>GET /api/brands: Get all brands.</li>
  <li>POST /api/brands: Create a new brand.</li>
  <li>GET /api/brands/:id: Get a specific brand by ID.</li>
  <li>PUT /api/brands/:id: Update a specific brand by ID.</li>
  <li>DELETE /api/brands/:id: Delete a specific brand by ID.</li>
</ul>

<h3>Product Routes</h3>
<ul>
  <li>GET /api/products: Get all products.</li>
  <li>POST /api/products: Create a new product.</li>
  <li>GET /api/products/:id: Get a specific product by ID.</li>
  <li>PUT /api/products/:id: Update a specific product by ID.</li>
  <li>DELETE /api/products/:id: Delete a specific product by ID.</li>
  <li>GET /api/products/search: Search for products.</li>
</ul>

<h3>Review Routes</h3>
<ul>
  <li>GET /api/products/:productId/reviews: Get all reviews for a specific product.</li>
  <li>POST /api/products/:productId/reviews: Create a new review for a specific product.</li>
  <li>GET /api/reviews/:id: Get a specific review by ID.</li>
  <li>PUT /api/reviews/:id: Update a specific review by ID.</li>
  <li>DELETE /api/reviews/:id: Delete a specific review by ID.</li>
</ul>

<h3>User Routes</h3>
<ul>
  <li>GET /api/users/me: Get the authenticated user's details.</li>
  <li>PUT /api/users/updateUser: Update the authenticated user's details.</li>
  <li>PUT /api/users/changePassword: Change the authenticated user's password.</li>
  <li>GET /api/users: Get all users (admin only).</li>
  <li>POST /api/users: Create a new user (admin only).</li>
  <li>GET /api/users/:id: Get a specific user by ID (admin only).</li>
  <li>PUT /api/users/:id: Update a specific user by ID (admin only).</li>
  <li>DELETE /api/users/:id: Delete a specific user by ID (admin only).</li>
</ul>

<h3>Authentication Routes</h3>
<ul>
  <li>POST /api/auth/signup: Register a new user.</li>
  <li>POST /api/auth/login: Login with credentials.</li>
  <li>DELETE /api/auth/logout: Logout the authenticated user.</li>
</ul>

<h3>Cart Routes</h3>
<ul>
  <li>GET /api/addToCarts: Get logged-in user's cart.</li>
  <li>POST /api/addToCarts: Add a product to the cart.</li>
  <li>DELETE /api/addToCarts: Clear logged-in user's cart.</li>
  <li>DELETE /api/addToCarts/:id: Delete a specific item from the cart.</li>
  <li>PUT /api/addToCarts/:id: Update a specific item in the cart.</li>
  <li>PUT /api/addToCarts/applycoupon: Apply coupon to the cart.</li>
</ul>

<h3>Wishlist Routes</h3>
<ul>
  <li>POST /api/wishList: Add a product to the wishlist.</li>
  <li>DELETE /api/wishList/:productId: Remove a product from the wishlist.</li>
  <li>GET /api/wishList: Get logged-in user's wishlist.</li>
</ul>

<h3>Address Routes</h3>
<ul>
  <li>POST /api/addresses: Add an address for the logged-in user.</li>
  <li>DELETE /api/addresses/:addressId: Remove an address for the logged-in user.</li>
  <li>GET /api/addresses: Get all addresses of the logged-in user.</li>
</ul>

<h3>Coupon Routes</h3>
<ul>
  <li>GET /api/coupons: Get all coupons.</li>
  <li>POST /api/coupons: Create a new coupon.</li>
  <li>GET /api/coupons/:id: Get a specific coupon by ID.</li>
  <li>PUT /api/coupons/:id: Update a specific coupon by ID.</li>
  <li>DELETE /api/coupons/:id: Delete a specific coupon by ID.</li>
</ul>

<h3>Forget Password Routes</h3>
<ul>
  <li>POST /api/forgetpassword: Check password for reset.</li>
  <li>GET /api/forgetpassword/:email/:token: Reset password page.</li>
  <li>POST /api/forgetpassword/:email/:token: Update reset password.</li>
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
