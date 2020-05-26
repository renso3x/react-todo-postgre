const Joi = require('joi');

const schemas = {
  todoPOST: Joi.object().keys({
    title: Joi.string().required()
  }),
  todoPUT: Joi.object().keys({
    status: Joi.valid('pending', 'completed').required()
  }),
  subTaskPOST: Joi.object().keys({
    title: Joi.string().required(),
    todoId: Joi.number().required()
  })
};

module.exports = schemas;