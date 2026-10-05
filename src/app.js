import express from "express";
const app = express();
import userRoutes from "./routes/user.route.js";
import FoodRoutes from "./routes/Food.route.js";
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/foods", FoodRoutes);

export default app;
