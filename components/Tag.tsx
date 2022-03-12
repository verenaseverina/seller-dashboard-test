import React, { useState, useCallback, useEffect } from 'react'

type Props = {
  label: string;
  placeholder?: string;
  value?: string[];
  required?: boolean;
  onChange?: (val) => void;
}

const Tag = ({
  required = false,
  ...props
}: Props) => {
  const [inputVal, setInputVal] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>('')

  const add = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        (props.onChange || setInputVal)([...inputVal, keyword])
        setKeyword('')
      }
    },
    [props.onChange, keyword]
  );

  const removeTag = (tag: string) => {
    setInputVal((prev) => prev.filter(item => item !== tag))
  }

  useEffect(() => {
    setInputVal(props.value || []);
  }, [props.value]);
  return (
    <div className="w-full mb-20">
      <p className="font-medium">{props.label}
        {required && (<span className="ml-1 text-red-600">*</span>) }
      </p>
      <input
        type="text"
        value={keyword}
        placeholder={props.placeholder}
        className="mt-0 block w-full text-gray-400 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        onKeyDown={add}
        // @ts-ignore
        onInput={(e) => setKeyword(e.target.value)}
      />
      <div className="flex items-center gap-4 mt-2">
        <span>E.g.</span>
        {
          inputVal.map((tag) => {
            return (
              <div
                className="border border-black w-24 h-10 text-gray-400 flex justify-between items-center px-2"
                key={tag}
              >
                <span>{tag}</span>
                <button onClick={() => removeTag(tag)}>x</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tag
