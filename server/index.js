const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
  let config = {
    method: "GET",
    //maxBodyLength: Infinity,
    url: 'https://api.jsonbin.io/v3/b/6654d654acd3cb34a84e8a8f',
    headers: {
      'Content-Type': 'application/json',
      "X-Master-Key": "$2a$10$tXYZjUGhzvUyEAi/f/aE0.4Rk496UQhLjWM6B7cO05xSPwBvOxovK"
    }
  };
  axios(config)
   .then(result => {
      res.send(result.data.record);
    })
});

const user = require("./controller/UserControllers");
app.post("/registro-usuario", user.register);
//app.post("/login", user.login);

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto ", PORT);
});
