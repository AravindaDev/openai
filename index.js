const express = require("express");
const env = require("dotenv").config();
const port = process.env.PORT || 5005;

const app = express();

// Enable body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
