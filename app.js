const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('INDEX SAYFASI');
});

const port = 3000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
