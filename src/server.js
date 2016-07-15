/* eslint-disable no-console */
import express from 'express';
import path from 'path';
// import handleRender from '../build/server.js';

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '..', 'build')));
// app.get('*', handleRender);

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
