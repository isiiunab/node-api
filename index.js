const express = require('express');
const app = express();

app.get('/echo', (req, res) => {
  console.log('===> endpoint /echo ');
  res.send(`echo`);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('simple API escuchando en el puerto: ', port);
});
