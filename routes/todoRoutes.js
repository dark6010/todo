const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController.js')

/*
 * GET
 */
router.get('/', todoController.list)

/*
 * GET
 */
router.get('/:id', todoController.show)

/*
 * POST
 */
router.post('/', todoController.create)

/*
 * PUT
 */
router.put('/:id', todoController.update)

/*
 * DELETE
 */
router.delete('/:id', todoController.remove)

module.exports = router
