/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import handleRender from '../build/server.js';

const app = express();
const PORT = 3000;

app.get('*', handleRender);
app.use('/build', express.static(path.join(__dirname, '..', 'build')));

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
