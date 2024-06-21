const express = require('express')
const path = require('path')
const app = express();
const port = 3050;
const methodOverride = require("method-override");
const session = require("express-session")
const createSessionFromCookies = require("./src/middlewares/createSessionFromCookies")
const insertDataLocal = require('./src/middlewares/insertDataLocal');
const cookieParse = require("cookie-parser")
const cors = require("cors")


/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../grupo_7_luxury-drinks/src/views"));


/* MIDDLEWARE */
app.use(cors())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"))
/* app.use(session({secret: "msj"})); */
app.use(cookieParse())
app.use(session({secret:"PALABRA SECRETA", saveUninitialized: true, resave: true}))
app.use(createSessionFromCookies)
app.use(insertDataLocal);



/* ENRUTADORES */
/* MVC */
const otherRoutes = require("./src/routes/other.routes");
const authRoutes = require("./src/routes/auth.routes");
const cartRoutes = require("./src/routes/cart.routes");
const productDetail = require("./src/routes/products.routes");
const adminRoutes = require("./src/routes/admin.routes");

/* API */
const apiOtherRoutes = require("./src/routes/api/other.api");
const apiAuthRoutes = require("./src/routes/api/auth.api");
const apiCartRoutes = require("./src/routes/api/cart.api");
const apiProductRoutes = require("./src/routes/api/products.api");
const apiAdminRoutes = require("./src/routes/api/admin.api");

/* RUTAS */
app.use("/", otherRoutes);
app.use("/", authRoutes);
app.use("/", cartRoutes);
app.use("/", productDetail);
app.use("/admin", adminRoutes);

app.use("/api", apiOtherRoutes);
app.use("/api/auth", apiAuthRoutes);
app.use("/api/cart", apiCartRoutes);
app.use("/api/product", apiProductRoutes);
app.use("/api/admin", apiAdminRoutes);



/* SERVER */
app.listen(port, () => console.log(`http://localhost:${port}`))