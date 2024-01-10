import express from 'express';
import { activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updateUserInfo } from "../controller/user.controller";
import { isAutheticated } from '../middleware/auth';
const userRouter = express.Router();

userRouter.post('/registration', registrationUser);
userRouter.post('/activate-user', activateUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', isAutheticated, logoutUser);
userRouter.get('/refresh', updateAccessToken);
userRouter.get('/me', isAutheticated, getUserInfo);
userRouter.get('/social-auth', socialAuth);
userRouter.get('/update-user-info', isAutheticated, updateUserInfo);

export default userRouter;
 