import React, { useState } from 'react';

export interface AddTodoProps {
  onSubmit: (title: string) => void;
  placeholder?: string;
  formLayout?: string;
}

const AddTodo: React.SFC<AddTodoProps> = ({
  onSubmit,
  placeholder = 'Add Todo',
  formLayout
}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (): void => {
    onSubmit(title);
    setTitle('');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  }

  return (
    <div className={formLayout}>
      <div className="form-row align-items-center">
        <div className="col-sm-9">
          <label className="sr-only">Title</label>
          <input value={title} type="text" className="form-control" name="title" placeholder={placeholder} onChange={handleChange} />
        </div>
        <div className="col-sm-3 my-1">
          <button className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;