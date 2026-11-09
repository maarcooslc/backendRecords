import { Router } from "express";
import type{Express,Request,Response} from "express";
import { deleteWorkout, getAllWorkouts, getWorkouts, patchWorkout, postWorkout, getAllRecords, getWorkoutRecord, deleteWorkoutRecord, patchWorkoutRecord } from "../../controller/controller";
import apicache from "apicache";
import { postWorkoutRecord } from "../../services/recordService";


const router:Router = Router();
const cache = apicache.middleware;
router.get("/workouts/", cache("1 minutes"), getAllWorkouts);
router.get("/workouts/:id",getWorkouts);
router.post("/workouts/",postWorkout);
router.patch("/workouts/:id",patchWorkout);
router.delete("/workouts/:id",deleteWorkout)

router.get("/records/", cache("1 minutes"), getAllRecords);
router.get("/records/:id",getWorkoutRecord);
router.post("/records/",postWorkoutRecord);
router.patch("/records/:id",patchWorkoutRecord);
router.delete("/records/:id",deleteWorkoutRecord)
export default router;

