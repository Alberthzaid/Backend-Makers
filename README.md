API Documentation
Base URL


https://backend-makers.onrender.com

Gemini Endpoint
POST /api/v1/gemini

Description: Analyzes customer intentions based on the prompt provided.

Request Body Example:

json

{
  "prompt": "Hola quiero informacion sobre un iphone 18"
}

Routes for Products
POST /api/v1/add/product

Description: Add a new product.

Request Body Example:

json

{
  "product_name": "xxx",
  "stock_quantity": 20,
  "category": "xxx",
  "brand": "xxx",
  "price": 10
}

GET /api/v1/get/product

Description: Retrieve all products.
PUT /api/v1/update/product/

Description: Update an existing product.

Request Body Example:

json

{
  "product_name": "Televisor",
  "stock_quantity": 20,
  "category": "Electrodomestico",
  "brand": "Samsung",
  "price": 10
}

DELETE /api/v1/update/delete/

Description: Delete a product.
Routes for Sales
POST /api/v1/add/sale

Description: Record a new sale.

Request Body Example:

json

{
  "product_id": 1,
  "quantity": 2,
  "amount": 1999.98,
  "sale_date": "2024-10-19",
  "client_id": 1
}

GET /api/v1/get/sales

Description: Retrieve all sales.
PUT /api/v1/update/sale/

Description: Update an existing sale.

Request Body Example:

json

{
  "product_id": 1,
  "quantity": 2,
  "amount": 1999.98,
  "sale_date": "2024-10-19",
  "client_id": 1
}

DELETE /api/v1/delete/sale/

Description: Delete a sale.
Routes for Clients
POST /api/v1/add/client

Description: Add a new client.

Request Body Example:

json

{
  "name": "John Doe",
  "age": 30,
  "adress": "123 Main St"
}

GET /api/v1/get/clients

Description: Retrieve all clients.
PUT /api/v1/update/client/

Description: Update an existing client.

Request Body Example:

json

{
  "name": "Jane Doe",
  "age": 28,
  "adress": "456 Elm St"
}

DELETE /api/v1/delete/client/

Description: Delete a client.
