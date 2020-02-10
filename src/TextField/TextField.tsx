import React from "react";

type TextFieldProps = {
  type: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?(): void;
  placeholder?: string;
  required?: boolean;
  value?: any;
  hasError?: boolean;
};

const TextField = ({
  type,
  disabled,
  id,
  name,
  onChange,
  onClick,
  placeholder,
  required,
  value,
  hasError
}: TextFieldProps) => {
  return (
    <div>
      <input
        className={`input${hasError ? " error" : ""}`}
        type={type}
        id={id}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
        disabled={disabled}
      />
      {hasError && <small>This field is required</small>}
    </div>
  );
};

export default TextField;
