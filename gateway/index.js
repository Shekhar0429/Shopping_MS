const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');  // redirects to another server basedd on the endpoint
const app = express();

app.use(express.json());
app.use(cors());

app.use('/customer', proxy('http://localhost:8001'));
app.use('/shopping', proxy('http://localhost:8003'));
app.use('/', proxy('http://localhost:8002'));

app.listen(8000, () => {
  console.log('Gateway is Listening to Port 8000');
});
