const express = require('express');
const productApi = require('./api/productApi')

const app = express();
app.use(express.json());
productApi(app);

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>console.log(`server started on ${PORT}`))