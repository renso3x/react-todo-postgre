import * as React from 'react';
import { SubTask } from '../actions/todos';

export interface TaskBadgeProps {
  subTasks: SubTask[];
}

const TaskBadge: React.SFC<TaskBadgeProps> = ({ subTasks }) => {
  const countPendingTask = subTasks.filter(task => task.status === 'completed');

  if (!subTasks || subTasks.length === 0) return null;

  return <span className="badge badge-primary badge-pill">{countPendingTask.length} / {subTasks.length} completed</span>;
}

export default TaskBadge;