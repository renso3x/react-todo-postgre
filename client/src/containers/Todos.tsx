import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Heading from '../components/heading';
import AddTodo from '../components/addTodo';
import Todo from '../components/todo';
import { StoreState } from '../reducers';
import { getAllTodos, Todo as ITodo, createTodo, updateTodo, createSubTask, SubTask } from '../actions/todos';

export interface TodoProps {
  todos: ITodo[];
  getAllTodos: Function;
  createTodo: Function;
  updateTodo: Function;
  createSubTask: Function;
}

const Todos: React.SFC<TodoProps> = ({
  todos,
  getAllTodos,
  createTodo,
  updateTodo,
  createSubTask
}) => {
  useEffect(() => {
    getAllTodos();
  }, [getAllTodos])

  const addNewtodo = (title: string) => {
    createTodo({ title });
  }

  const handleUpdateTodo = (todo: ITodo) => {
    updateTodo(todo);
  }

  const handleCreateSubTask = (task: SubTask) => {
    createSubTask(task);
  }

  return (
    <div className="container">
      <Heading title="Todo App" />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <AddTodo onSubmit={addNewtodo} />
          <ul className="list-group list-group-flush">
            {todos.map(todo => <Todo key={todo.id} todo={todo} onUpdateTodo={handleUpdateTodo} onCreateSubTask={handleCreateSubTask} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {
  getAllTodos,
  createTodo,
  updateTodo,
  createSubTask
})(Todos);