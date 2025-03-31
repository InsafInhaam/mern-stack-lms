import express from "express";
import { isAutheticated, authorizeRoles } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controller/notification.controller";
const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  isAutheticated,
  authorizeRoles("admin"),
  getNotifications
);

notificationRoute.put('/update-notification/:id', isAutheticated, authorizeRoles('admin'), updateNotification);

export default notificationRoute;
