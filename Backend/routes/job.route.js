// routes/job.route.js
import express from "express";
import authenticateToken from "../middleware/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

// anyone can see jobs
router.route("/get").get(getAllJobs);
router.route("/get/:id").get(getJobById);

// must be logged in to create or see admin-only list
router.route("/post").post(authenticateToken, postJob);
router.route("/getadminjobs").get(authenticateToken, getAdminJobs);

export default router;
