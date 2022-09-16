const express = require("express");
const AppError = require("./utils/appError");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use("/admin", require("./routes/admin/adminRouter"));
app.use("/users", require("./routes/users/userRouter"));
app.use("/public", require("./routes/public/publicRouter"));

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(require("./controllers/errorController"));

module.exports = app;
