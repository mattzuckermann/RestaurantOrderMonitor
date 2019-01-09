const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "public")));

connection.connect(function (err) {
    if (err) throw err;
    else console.log(`Your connection to ID #${connection.config.port} was successful!\n`);
});

require("./controllers/burgers_controller")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});