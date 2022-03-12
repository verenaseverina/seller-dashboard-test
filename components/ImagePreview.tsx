import React from "react";

type Props = {
  imgValue?: string;
  nameValue?: string;
  priceValue?: string;
};

const ImagePreview = (props: Props) => {
  return (
    <div className="h-fit img-preview-container flex flex-col items-center justify-center text-center shadow-md">
      {props.imgValue ? (
        <>
          <img className="w-full" src={props.imgValue} alt="thumbnail" />
          {props.nameValue && <p>{props.nameValue}</p>}
          {props.priceValue && <p>{props.priceValue}</p>}
        </>
      ) : (
        <>
          <p className="font-medium text-gray-400">Nothing to preview!</p>
          <p className="font-medium text-gray-400">
            Start adding product details on the right.
          </p>
        </>
      )}
    </div>
  );
};

export default ImagePreview;
