const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Arithmetic Microservice! Use /add, /subtract, /multiply, /divide, /power, /sqrt, or /mod endpoints with appropriate query parameters.');
});

// Middleware
app.use(express.json());

// Helper function to validate two numeric inputs
const validateNumbers = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Both num1 and num2 should be valid numbers.';
  }
  return null;
};

// Helper for single number (e.g., sqrt)
const validateSingleNumber = (num) => {
  if (isNaN(num)) {
    return 'The input should be a valid number.';
  }
  return null;
};

// Addition
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: Number(num1) + Number(num2) });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: Number(num1) - Number(num2) });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: Number(num1) * Number(num2) });
});

// Division
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });
  if (Number(num2) === 0) return res.status(400).json({ error: 'Division by zero is not allowed.' });

  res.json({ result: Number(num1) / Number(num2) });
});

// Exponentiation (num1 raised to the power of num2)
app.get('/power', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: Math.pow(Number(num1), Number(num2)) });
});

// Square root (only num1 is used)
app.get('/sqrt', (req, res) => {
  const { num1 } = req.query;
  const error = validateSingleNumber(num1);
  if (error) return res.status(400).json({ error });
  if (Number(num1) < 0) return res.status(400).json({ error: 'Cannot compute square root of a negative number.' });

  res.json({ result: Math.sqrt(Number(num1)) });
});

// Modulo (num1 % num2)
app.get('/mod', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });
  if (Number(num2) === 0) return res.status(400).json({ error: 'Modulo by zero is not allowed.' });

  res.json({ result: Number(num1) % Number(num2) });
});

// Start server
app.listen(PORT, () => {
  console.log(`Arithmetic microservice running at http://localhost:${PORT}`);
});