const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");


const swaggerSpec = require("../config/swagger");

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

const authRoutes = require("./auth/auth.routes");
app.use("/api/auth", authRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));