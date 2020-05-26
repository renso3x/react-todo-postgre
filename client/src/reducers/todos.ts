import {
  Todo,
  Action,
  TodoActionTypes,
  SubTask
} from '../actions';

const updateSubTaskTodo = (task: Todo, subTask: SubTask) => {
  return {
    ...task,
    subtasks: task.subtasks?.map(subtask => {
      if (subtask.id === subTask.id) {
        return { ...subtask, status: subTask.status };
      }
      return subtask;
    })
  }
}

const updateTask = (task: Todo, payload: Todo) => {
  return {
    ...payload,
    subtasks: payload.subtasks?.map(subtask => {
      if (payload.status === 'completed') {
        return { ...subtask, status: 'completed' };
      }
      return subtask;
    })
  }
}

export const todoReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case TodoActionTypes.fetchTodos:
      return action.payload;

    case TodoActionTypes.addTodo:
      return [...state, action.payload];

    case TodoActionTypes.addSubTask:
      return state.map(task => {
        if (task.id === action.payload.todoId) {
          return {
            ...task,
            subtasks: [
              ...task.subtasks,
              action.payload
            ]
          };
        }
        return task;
      })

    case TodoActionTypes.updateTodo:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return updateTask(task, action.payload);
        }
        return task;
      })

    case TodoActionTypes.updateSubTask:
      return state.map(task => {
        if (task.id === action.payload.todoId) {
          return updateSubTaskTodo(task, action.payload);
        }
        return task;
      })

    default:
      return state;
  }
}