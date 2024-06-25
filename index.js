const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { userConnect } = require("./src/middlewares/userConnect");
const { router } = require("./src/routes/newsRouter");

const app = express();
dotenv.config();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(userConnect);

app.use("/api", router);

const PORT = process.env.PORT || 3000;

// Global error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
