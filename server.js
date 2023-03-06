const express=require('express');
const app = express();
const mongoose = require('mongoose');
const cors=require("cors");


try {
    mongoose.connect("mongodb+srv://aks123:123@assgn.bpeatqy.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));


app.listen(5000, () => {
    console.log("Backend Server running at 5000");
  });
  