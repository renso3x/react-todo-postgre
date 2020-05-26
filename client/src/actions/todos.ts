import axios from 'axios';
import { Dispatch } from 'redux';

const API = 'http://localhost:4000';

export interface Todo {
  id?: number;
  title: string;
  status: string;
  subtasks?: SubTask[];
}

export interface SubTask {
  id?: number;
  title: string;
  status: string;
  todoId: number;
}

// Action Types Enum
export enum TodoActionTypes {
  addTodo,
  updateTodo,
  fetchTodos,
  addSubTask,
  updateSubTask
}

export const getTodos = (todos: Todo[]): GetTodosAction => {
  return {
    type: TodoActionTypes.fetchTodos,
    payload: todos
  }
}

export const addTodo = (todo: Todo): AddTodosAction => {
  return {
    type: TodoActionTypes.addTodo,
    payload: todo
  }
}

export const updateTodos = (todo: Todo): UpdateTodosAction => {
  return {
    type: TodoActionTypes.updateTodo,
    payload: todo
  }
}

export const addSubTask = (subTask: SubTask): CreateSubtaskAction => {
  return {
    type: TodoActionTypes.addSubTask,
    payload: subTask
  }
}

export const updateSubtaskTodo = (subTask: SubTask): UpdateSubtaskAction => {
  return {
    type: TodoActionTypes.updateSubTask,
    payload: subTask
  }
}

// Type dispatch function
export interface GetTodosAction {
  type: TodoActionTypes.fetchTodos,
  payload: Todo[]
}

export interface AddTodosAction {
  type: TodoActionTypes.addTodo,
  payload: Todo
}

export interface UpdateTodosAction {
  type: TodoActionTypes.updateTodo,
  payload: Todo
}

export interface CreateSubtaskAction {
  type: TodoActionTypes.addSubTask,
  payload: SubTask
}

export interface UpdateSubtaskAction {
  type: TodoActionTypes.updateSubTask,
  payload: SubTask
}

// Type Action as Union
export type Action = UpdateTodosAction | AddTodosAction | GetTodosAction | CreateSubtaskAction | UpdateSubtaskAction;

export const getAllTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${API}/todos`);
      dispatch(getTodos(response.data));
    } catch (e) {
      console.error(e);
    }
  }
}

export const createTodo = (todo: Todo) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${API}/todos`, todo);
      dispatch(addTodo(response.data));
    } catch (e) {
      console.error(e);
    }
  }
}


export const updateTodo = (todo: Todo) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${API}/todos/${todo.id}`, {
        status: todo.status
      });
      dispatch(updateTodos(response.data));
    } catch (e) {
      console.error(e);
    }
  }
}

export const createSubTask = (task: SubTask) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${API}/todos/subtask`, task);
      dispatch(addSubTask(response.data));
    } catch (e) {
      console.error(e);
    }
  }
}

export const updateSubTask = (task: SubTask) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${API}/todos/subtask/${task.id}`, {
        status: task.status
      });
      dispatch(updateSubtaskTodo(response.data));
    } catch (e) {
      console.error(e);
    }
  }
}