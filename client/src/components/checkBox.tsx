import React from 'react';

interface Props {
  status: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const checkBox: React.SFC<Props> = ({
  status,
  handleChange
}) => {
  return (
    <input type="checkbox" checked={status} className="form-check-input" defaultChecked={status} onChange={handleChange} />
  );
}

export default checkBox;