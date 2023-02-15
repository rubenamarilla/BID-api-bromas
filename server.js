const express = require('express')
const app = express()
const port = 8000

require("./conf/mongoose.conf");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})