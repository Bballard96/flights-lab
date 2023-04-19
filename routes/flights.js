import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/users
router.get('/', flightsCtrl.index)

// GET localhost:3000/movies/new
router.get('/new', flightsCtrl.new)

router.get('/:flightId', flightsCtrl.show)

router.get('/:flightId/edit', flightsCtrl.edit)

router.post('/', flightsCtrl.create)
// DELETE localhost:3000/movies/:movieId
router.post('/:flightId/tickets', flightsCtrl.createTicket)

router.post('/:flightId/meals', flightsCtrl.addToMenu)

router.delete('/:flightId', flightsCtrl.delete)

router.delete('/:flightId/tickets', flightsCtrl.delete)

router.put('/:flightId', flightsCtrl.update)

export { router }
