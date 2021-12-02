import React from "react";

interface Props {
  title: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: string;
  pattern?: string;
  required?: boolean;
}
const Input: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="flex items-center my-4">
      <p className="mr-4 text-gray-300 flex-1 text-left">{props.title}</p>
      <input
        className="rounded text-white p-2 bg-secondary border border-primary"
        {...props}
      />
    </div>
  );
};

export default Input;
