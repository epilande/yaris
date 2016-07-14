/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import handleRender from './build/server.js';

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, 'build')));
app.get('*', handleRender);

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
