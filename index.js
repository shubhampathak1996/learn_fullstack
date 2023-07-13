const express = require("express");
require("./services/passport")
const keys = require("./config/keys")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")

const app = express()



mongoose.connect(keys.mongoURI);





authRoutes(app)




const PORT = process.env.PORT || 5000
app.listen(PORT );