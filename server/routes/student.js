// // import express from "express";
// // import StudentInformation from "../models/student.js";
// // import {
// //   getStudents,
// //   createStudents,
// //   deleteStudents,
// // } from "../controllers/student.js";

// const express = require("express");
// const { Router } = require("express");
// const controllers = require("../controllers/students");

// const router = Router();
// router.get("/", getStudents);
// router.post("/", createStudents);
// router.delete("/:id", deleteStudents);

// // export default router;

// module.exports = router;

import express from "express";
import StudentInformation from "../models/student.js";
import {
  getStudents,
  createStudents,
  deleteStudents,
} from "../controllers/student.js";

const router = express.Router();
router.get("/", getStudents);
router.post("/", createStudents);
router.delete("/:id", deleteStudents);

export default router;
