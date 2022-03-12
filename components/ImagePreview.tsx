import React from 'react'

type Props = {
  imgValue?: string;
  nameValue?: string;
  priceValue?: string;
}

const ImagePreview = (props: Props) => {
  return (
    <div>
      {
        props.imgValue ? (
          <>
            <img src={props.imgValue} alt="thumbnail"/>
            {props.nameValue && <p>{props.nameValue}</p>}
            {props.priceValue && <p>{props.priceValue}</p>}
          </>
        ) :
        (
          <p>
            Nothing to preview! Start adding product details on the right.
          </p>
        )
      }
    </div>
  )
}


export default ImagePreview
