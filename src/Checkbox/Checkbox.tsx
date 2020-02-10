import * as React from "react";

type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = ({
  checked,
  disabled,
  id,
  required,
  name,
  onChange
}: CheckboxProps) => (
  <input
    type="checkbox"
    checked={checked}
    disabled={disabled}
    id={id}
    required={required}
    name={name}
    onChange={onChange}
  />
);

export default Checkbox;
