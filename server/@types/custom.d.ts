import { NextFunction, Request, Response } from "express";
import { Iuser } from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: Iuser;
    }
  }
}
