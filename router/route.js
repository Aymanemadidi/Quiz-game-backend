import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from "../controllers/controller.js";

/** Questions Routes API */

router
	.route("/questions")
	.post(controller.insertQuestions) /** POST Request */
	.get(controller.getQuestions) /** GET Request */
	.delete(controller.dropQuestions); /** DELETE Request */

router
	.route("/result")
	.get(controller.getResult)
	.post(controller.storeResult)
	.delete(controller.dropResult);

export default router;
