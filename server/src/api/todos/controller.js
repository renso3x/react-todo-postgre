const models = require('../../models');

const { Todo, SubTask } = models;

exports.getTodos = async (req, res) => {
  const todos = await Todo.findAll({
    include: [SubTask],
    attributes: { exclude: ['updatedAt'] }
  });
  return res.send(todos);
}

exports.creatTodo = async(req, res) => {
  const payload = req.body;

  const todo = await Todo.create({
    ...payload,
    status: 'pending'
  });
  return res.send(todo)
}

exports.updateTodo = async(req, res) => {
  const id = req.params.id;
  const payload = req.body;

  let todo = await Todo.findOne({
    where: { id },
    include: [SubTask]
  });

  await Promise.all(
    todo.subtasks.map(async (sub) => {
      await sub.update({ status: 'completed' });
      return sub;
    })
  )

  if (!todo) return res.status(404).send('Cannot find todo');

  await todo.update(payload);

  return res.send(todo);
}

exports.createSubTask = async(req, res) => {
  const payload = req.body;

  const subTask = await SubTask.create({
    ...payload,
    status: 'pending'
  });

  return res.send(subTask)
}

exports.updateSubTask = async(req, res) => {
  const id = req.params.id;
  const payload = req.body;

  let subTask = await SubTask.findOne({
    where: { id },
    include: [Todo]
  });

  if (payload.status === 'pending') {
    await subTask.todo.update({ status: 'pending' });
  }

  if (!subTask) return res.status(404).send('Cannot find subtask');

  await subTask.update(payload);

  return res.send(subTask);
}