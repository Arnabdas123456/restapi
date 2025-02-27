const express = require("express");
require("./db/conn");
const app = express();
const studentRouter = require("./router/students-route");
const port = process.env.PORT || your PORT no;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`port listen on ${port}`);
})

