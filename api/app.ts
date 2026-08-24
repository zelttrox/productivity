import express from 'express'
import cors from 'cors'

import route_habit from './routes/habit.ts'

const app = express()
const port = 3030

app.use(cors())
app.use(express.json())

const router = express.Router()
router.use('/habits', route_habit)

app.use('/api', router)
app.listen(port, function () {
    console.log("Listening on port", port)
})
