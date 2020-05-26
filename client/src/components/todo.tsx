import React, { useState, ChangeEvent, useEffect } from 'react';
import { Collapse } from 'reactstrap';

import { Todo as ITodo, SubTask as ISubTask } from '../actions';
import TaskBadge from './taskBadge';
import SubTask from './subTask';
import CheckBox from './checkBox';
import AddTodo from './addTodo';

interface Props {
  todo: ITodo;
  onUpdateTodo: (todo: ITodo) => void;
  onCreateSubTask: (task: ISubTask) => void;
}

const Todo: React.SFC<Props> = ({
  todo,
  onUpdateTodo,
  onCreateSubTask
}) => {
  const {
    title,
    status,
    subtasks,
  } = todo;

  const [isCompleted, setStatus] = useState(status === 'completed');
  const [isOpen, setIsOpen] = useState(subtasks && subtasks?.filter(sb => sb.status === 'pending').length > 0);

  useEffect(() => {
    return setStatus(() => (todo.status === 'completed' || false));
  }, [todo.status]);

  const toggle = () => setIsOpen(!isOpen);

  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(!isCompleted);
    onUpdateTodo({
      ...todo,
      status: isCompleted ? 'pending' : 'completed'
    });
  }

  const handleNewSubTask = (title: string) => {
    if (todo.id) {
      onCreateSubTask({ title, todoId: todo.id, status: 'pending' });
    }
  }

  return (
    <div className="my-2">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <CheckBox status={isCompleted} handleChange={handleChangeStatus} />
          <label className="form-check-label">{title}</label>
        </div>
        <div>
          {subtasks && <TaskBadge subTasks={subtasks} />}{' '}
          <button onClick={toggle} className="btn btn-light">{isOpen ? 'Collapse' : 'Show'}</button>
        </div>
      </li>
      <Collapse isOpen={isOpen}>
        <AddTodo
          formLayout="col px-md-5 my-2"
          placeholder="Add Sub Task"
          onSubmit={handleNewSubTask}
        />
        <ul className="list-group list-group-flush">
          {subtasks && subtasks.map(subTask => <SubTask task={subTask} key={subTask.id} />)}
        </ul>
      </Collapse>
    </div>
  );
}

export default Todo;