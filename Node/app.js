
//mongodb+srv://luisjuarez:GenericPassword@cluster0.bc2nlem.mongodb.net/apiDB?retryWrites=true&w=majority

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConect = require('./config/mongo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

// Routes
app.use("/api", require("./routes/"));

app.listen(
    port, () => { console.log(`Example app listening on http://localhost:${port}`) 
});

dbConect();