import express from "express";
const app = express();
import userRoutes from "./routes/user.route.js";
import FoodRoutes from "./routes/Food.route.js";
import cartRoutes from "./routes/cart.route.js";

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/foods", FoodRoutes);
app.use("/api/v1/cart", cartRoutes);
export default app;
