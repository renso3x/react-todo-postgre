import React, { useState, ChangeEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { SubTask as ISubTask, updateSubTask } from '../actions';

import CheckBox from './checkBox';

interface Props {
  task: ISubTask,
  updateSubTask: Function;
}

const SubTask: React.FC<Props> = ({
  task,
  updateSubTask
}) => {
  const {title, status } = task;
  const [isCompleted, setStatus] = useState(status === 'completed');

  useEffect(() => {
    return setStatus(() => (task.status === 'completed' || false));
  }, [task.status]);

  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(!isCompleted);
    updateSubTask({ ...task, status: isCompleted ? 'pending' : 'completed' });
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <CheckBox status={isCompleted} handleChange={handleChangeStatus} />
        <label className="form-check-label">{title}</label>
      </div>
    </li>
  );
}

export default connect(null, { updateSubTask })(SubTask);