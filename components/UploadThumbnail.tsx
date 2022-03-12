import React from 'react'

type Props = {
  label: string;
  value?: File;
  required?: boolean;
  onChange?: (val) => void;
}

const UploadThumbnail = ({
    required = true,
    ...props
  }: Props) => (
  <div>
    <p>{props.label}</p>
    <div>
      <span>Add Image</span>
      <input type="file"
        accept="image/png, image/jpeg, image/jpg"></input>
    </div>
  </div>
)

export default UploadThumbnail
