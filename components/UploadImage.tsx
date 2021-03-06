import React, { useState, useEffect, useCallback } from 'react'

type Props = {
  value?: string;
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


const UploadThumbnail = (props: Props) => {
  const [url, setUrl] = useState<string>('');

  const onChangeFile = useCallback(async (e: any) => {
    const selectedFile = e.target.files[0]
    const urlFile = await getBase64(selectedFile)
    if (props.onChange) {
      props.onChange(urlFile, 
        selectedFile);
    } else {
      setUrl(urlFile)
    }
  }, [props.onChange])

  const removeFile = () => {
    props.onChange?.('', null);
    setUrl('');
  }

  useEffect(() => {
    setUrl(props.value)
  }, [props.value]);

  return (
    <div>
      {
        url ? (
          <div className="relative w-full">
            <img className="h-full" src={url} />
            <button className="absolute top-0 right-0" onClick={() => removeFile()}>
              <img src="/cross-button.svg" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center relative">
            <img src="/add-img-black.svg" />
            <span className="text-black">Add Image</span>
            <input 
              className="absolute w-full h-full top-0 left-0 opacity-0 hover:cursor-pointer"
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
