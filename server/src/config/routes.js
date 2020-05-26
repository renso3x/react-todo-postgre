const todosRouter = require('../api/todos/router');

module.exports = (app) => {
  app.use('/todos', todosRouter);

  app.use('*', function(req,res){
    res.status(404)
    res.json({ message: 'Cannot find API.' });
  });
}