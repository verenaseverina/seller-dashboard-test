import React, { useState, useEffect, useCallback } from 'react'

type Props = {
  label: string;
  value?: string;
  required?: boolean;
  onChange?: (url: string, file: File) => void;
}

function getBase64 (file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result as string);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  })
}


const UploadThumbnail = ({
    required = true,
    ...props
  }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>('');

  const onChangeFile = useCallback(async (e: any) => {
    const selectedFile = e.target.files[0]
    const urlFile = await getBase64(selectedFile)
    if (props.onChange) {
      props.onChange(urlFile, 
        selectedFile);
      setFile(selectedFile)
    } else {
      setFile(selectedFile)
      setUrl(urlFile)
    }
  }, [props.onChange])

  const removeFile = () => {
    props.onChange?.('', null);
    setUrl('');
    setFile(null);
  }

  useEffect(() => {
    setUrl(props.value)
  }, [props.value]);

  return (
    <div>
      <p>{props.label}</p>
      {
        url ? (
          <div>
            <img src={url} />
            <button onClick={() => removeFile()}>Delete</button>
          </div>
        ) : (
          <div>
            <span>Add Image</span>
            <input 
              type="file"
              onChange={onChangeFile}
              accept="image/png, image/jpeg, image/jpg">
            </input>
          </div>
        )
      }
    </div>
  )
}

export default UploadThumbnail
