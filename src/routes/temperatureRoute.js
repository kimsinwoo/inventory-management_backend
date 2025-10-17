import { Router } from "express";

const router = Router()

router.post('/temperature', AddTemperature)
router.get('/temperature', GetTemperature)