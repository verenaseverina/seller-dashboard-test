import React, { useState, useCallback, useEffect } from 'react'

type Props = {
  label: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  max: number;
  onChange?: (val) => void;
}

const Input = ({
  required = false,
  ...props
}: Props) => {
  const [inputVal, setInputVal] = useState<string>('');

  const onChangeVal = useCallback(
    (val: string) => (props.onChange || setInputVal)(val),
    [props.onChange]
  );

  useEffect(() => {
    setInputVal(props.value || '');
  }, [props.value]);
  return (
    <div className="w-full mb-20">
      <p className="font-medium">{props.label}
        {required && (<span className="ml-1 text-red-600">*</span>) }
      </p>
      <textarea
        value={inputVal}
        placeholder={props.placeholder}
        className="mt-0 block w-full text-gray-400 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        onChange={(e) => onChangeVal(e.target.value)}
      />
      <div className="text-right text-gray-400">{inputVal.length}/{props.max}</div>
    </div>
  )
}

export default Input
