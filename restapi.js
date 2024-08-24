
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Sample data
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});


// Description for code
/**
 * This is a RESTful API built with Express.js for managing a collection of items.
 * It provides the following endpoints:
 * 
 * GET /api/items - Retrieves all items
 * GET /api/items/:id - Retrieves a specific item by ID
 * POST /api/items - Creates a new item
 * PUT /api/items/:id - Updates an existing item
 * DELETE /api/items/:id - Deletes an item
 * 
 * The API uses JSON for data exchange and implements basic CRUD operations.
 * It includes error handling for cases such as item not found.
 * 
 * The server runs on the specified port (default: 3000) and uses middleware
 * for parsing JSON, URL-encoded data, and enabling CORS.
 */

app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  
  item.name = req.body.name;
  res.json(item);
});

app.delete('/api/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Item not found');
  
  items.splice(index, 1);
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

