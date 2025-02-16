const express = require('express');
const app = express();

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
});

//Proper error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});