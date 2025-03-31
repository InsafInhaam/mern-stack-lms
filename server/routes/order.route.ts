import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { createOrder, geyAllOrders } from "../controller/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAutheticated, createOrder);
orderRouter.get("/get-order", isAutheticated, authorizeRoles('admin'), geyAllOrders);

export default orderRouter;
