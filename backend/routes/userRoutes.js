import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { signupUser, loginUser,logoutUser,followUnFollowUser, updateUser,getUserProfile} from "../controllers/userController.js";
const router =express.Router();


router.get("/profile/:query", getUserProfile);
router.post("/signup",(signupUser));
router.post("/login",(loginUser));
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.post("/update/:id", protectRoute, updateUser);
export default router;