import { combineReducers } from 'redux';
import { Todo } from '../actions';
import { todoReducer } from './todos';

// Shape of our state
export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
  todos: todoReducer
})