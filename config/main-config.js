require("dotenv").config();
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "docs");
const bodyParser = require("body-parser");

module.exports = {
    init(app, express) {
        app.set("views", viewsFolder);
        app.set("view engine", "ejs");
        app.use(express.static(path.join(__dirname, "..", "assets")));
        app.use(bodyParser.urlencoded({ extended: true }));
    }
};