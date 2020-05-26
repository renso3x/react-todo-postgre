import * as React from 'react';

export interface HeadingProps {
  title: string;
}

const Heading: React.SFC<HeadingProps> = ({ title }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">{title}</h1>
    </div>
  );
}

export default Heading;