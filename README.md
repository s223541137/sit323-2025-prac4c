Overview
This updated Node.js and Express-based Arithmetic Microservice now includes both basic and advanced arithmetic operations. It supports addition, subtraction, multiplication, division, exponentiation, square root, and modulo. Each operation can be accessed through specific API endpoints using GET requests with query parameters.
How to Run
1. Install Node.js (if not already installed): https://nodejs.org/
2. Save the code in a file named server.js.
3. Install dependencies (navigate to the folder in terminal and run):
npm init -y
npm install express
4. Start the server: node server.js
5. The service will run at: http://localhost:3000
Available Endpoints
All endpoints expect query parameters as noted below.
GET /add?num1=10&num2=5
Returns the sum of num1 and num2.
GET /subtract?num1=10&num2=5
Returns the result of num1 - num2.
GET /multiply?num1=10&num2=5
Returns the product of num1 and num2.
GET /divide?num1=10&num2=5
Returns the result of num1 divided by num2. Error if num2 is 0.
GET /power?num1=2&num2=3
Returns num1 raised to the power of num2.
GET /sqrt?num1=9
Returns the square root of num1. Error if num1 is negative.
GET /mod?num1=10&num2=3
Returns the remainder when num1 is divided by num2. Error if num2 is 0.
Input Validation
All endpoints validate whether inputs are valid numbers. Division, modulo, and square root operations include additional logic to handle invalid or edge cases (e.g., division by zero or square root of a negative number).
Example Usage
curl "http://localhost:3000/add?num1=3&num2=7"
curl "http://localhost:3000/subtract?num1=15&num2=5" curl "http://localhost:3000/multiply?num1=4&num2=6" curl "http://localhost:3000/divide?num1=20&num2=4" curl "http://localhost:3000/power?num1=2&num2=3" curl "http://localhost:3000/sqrt?num1=16"
curl "http://localhost:3000/mod?num1=10&num2=3"
Code Structure Breakdown
1. Dependencies & Initialization
const express = require('express'); const app = express();
const PORT = 3000;
2. Middleware
app.use(express.json());
3. Root Route
app.get('/', (req, res) => {
res.send('Welcome to the Arithmetic Microservice! ...');
});
4. Input Validation Functions
validateNumbers(num1, num2): Checks if both are valid numbers. validateSingleNumber(num): Checks if one input is a valid number.
5. Basic Arithmetic Routes
/add, /subtract, /multiply, /divide — all operate using num1 and num2.
6. Advanced Arithmetic Routes
/power (num1^num2), /sqrt (√num1), /mod (num1 % num2)
7. Server Start
app.listen(PORT, () => {
console.log(`Arithmetic microservice running at http://localhost:${PORT}`);
});
