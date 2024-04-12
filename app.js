const express = require('express')
const path = require('path')
const app = express();
const port = 3050;
const methodOverride = require("method-override")
const createSessionFromCookies = require("./middleware/createSessionFromCookies")
const insertDataLocal = require('./middleware/insertDataLocal');
const cookieParse = require("cookie-parser")
const session = require("express-session")

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));


/* MIDDLEWARE */
app.use(express.static('public'));
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParse())
app.use(session({secret:"PALABRA SECRETA"}))
app.use(createSessionFromCookies)
app.use(insertDataLocal);



/* ENRUTADORES */
const otherRoutes = require("./routes/other.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const productDetail = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");



/* RUTAS */
app.use("/", otherRoutes);
app.use("/", authRoutes);
app.use("/", cartRoutes);
app.use("/", productDetail);
app.use("/admin", adminRoutes);



/* SERVER */
app.listen(port, () => console.log(`http://localhost:${port}`))