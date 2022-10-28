import express from "express";

import {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    showStats
} from '../controllers/jobs.js'

const jobsRouter = express.Router()

jobsRouter.route('/').post(createJob).get(getAllJobs)
jobsRouter.route('/stats').get(showStats)
jobsRouter.route('/:id').delete(deleteJob).patch(updateJob)

export default jobsRouter