import React, { useState, useEffect, useCallback } from "react";

type Props = {
  label: string;
  value?: string;
  required?: boolean;
  onChange?: (val: string) => void;
  options: string[];
};

const RadioInput = ({ options, required, ...props }: Props) => {
  const [selected, setSelected] = useState<string>(options?.[0]);

  const onChangeSelected = useCallback(
    (val: string) => (props.onChange || setSelected)(val),
    [props.onChange]
  );

  useEffect(() => {
    setSelected(props.value);
  }, [props.value]);

  return (
    <div className="w-full mb-20">
      <p className="font-medium">
        {props.label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </p>
      <div className="flex gap-4">
        {options.map((option: string) => {
          if (selected === option)
            return (
              <button
                className="bg-black text-white w-24 h-10"
                key={option}
                onClick={() => onChangeSelected(option)}
              >
                {option}
              </button>
            );
          return (
            <button
              className="border border-black w-24 h-10"
              key={option}
              onClick={() => onChangeSelected(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RadioInput;
