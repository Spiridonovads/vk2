import React, { FC, ReactNode } from "react";

interface labelProps {
  children: ReactNode;
}

const Label: FC<labelProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default Label;
