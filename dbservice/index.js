fetch = require('node-fetch');
express = require('express');
app = express();
port = 3000;

app.listen(port, () => {
   console.log("listening on port: " + port);
})

app.get('/', (req, res) => {
   fetch('http://emilia:1234@localhost:5984/')
      .then(response => response.json())
      .then(data => res.send(data));
})

