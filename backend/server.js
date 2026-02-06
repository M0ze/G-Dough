
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = 'body-parser';


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const chefsRouter = require('./routes/chefs');

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/chefs', chefsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
