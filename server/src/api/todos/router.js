const express = require('express');
const controller = require('./controller');
const middleware = require('./middleware');
const schemas = require('./schemas');

const router = express.Router();

router.get('/', controller.getTodos);
router.post('/', middleware(schemas.todoPOST), controller.creatTodo);
router.put('/:id', middleware(schemas.todoPUT), controller.updateTodo);
router.post('/subtask', middleware(schemas.subTaskPOST), controller.createSubTask);
router.put('/subtask/:id', middleware(schemas.todoPUT), controller.updateSubTask);

module.exports = router;