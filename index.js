const express = require("express");
require("./services/passport")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const app = express()



var db = "mongodb://192.168.1.9:27017/emaily-dev";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const conSuccess = mongoose.connection
conSuccess.once('open', _ => {
  console.log('Database connected:', db)
})





authRoutes(app)




const PORT = process.env.PORT || 5000
app.listen(PORT );