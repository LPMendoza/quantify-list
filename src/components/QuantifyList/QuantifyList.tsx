import React from 'react';

interface QuantifyListProps {
  title: string;
  children: React.ReactElement;
}

const QuantifyList = ({ title, children }: QuantifyListProps) => {
  return (
    <div>
      <span>{title}</span>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { title });
      })}
    </div>
  );
};

export default QuantifyList;
