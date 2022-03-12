import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ImagePreview from "../components/ImagePreview";
import UploadThumbnail from "../components/UploadThumbnail";
import UploadImage from "../components/UploadImage";
import Input from "../components/Input";
import RadioInput from "../components/RadioInput";
import TextArea from "../components/TextArea"
import Tag from "../components/Tag";
import Tabs from "../components/Tabs";

const IndexPage = () => {
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [selectedImg, setSelectedImg] = useState<string>('');
  const [productName, setProductName] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  
  useEffect(() => {
    if (!imageUrl.length) {
      setSelectedImg('')
    } else if (!imageUrl.includes(selectedImg)) {
      setSelectedImg(imageUrl[0])
    } else if (!selectedImg && imageUrl.length) {
      setSelectedImg(imageUrl[0])
    }
  }, [imageUrl, selectedImg])

  return (
    <Layout>
      <div className="grid grid-cols-2 divide-x">
        <div className="flex justify-center px-8">
          <Tabs
            tabs={[
              {
                key: 'gallery',
                name: 'Image Gallery',
                children: (
                  <div className="flex flex-col justify-center">
                    <div className="h-80 flex items-center justify-center w-full relative">
                      {
                        selectedImg ? (
                          <>
                            <img className="h-full" src={selectedImg}/>
                            <button className="absolute top-0 right-0" onClick={() => {
                              setImageUrl((prev) => {
                                return prev.filter((item) => item !== selectedImg)
                              })
                            }}>
                              <img src="/cross-button.svg" />
                            </button>
                          </>
                        ) : (
                          <div className="border-2 w-80 h-full flex items-center justify-center">
                            <UploadImage 
                              onChange={(url) => {
                                setImageUrl((prev) => {
                                  const newValue = [...prev]
                                  newValue.push(url)
                                  return newValue
                                })
                              }}
                            />
                          </div>
                        )
                      }
                    </div>
                    <div className="flex items-center justify-center w-full mt-8 h-20 gap-4">
                      {
                        imageUrl.filter(Boolean).map((img) => {
                          return (
                            <div
                              className="h-20"
                              key={img}
                              onClick={() => {
                                setSelectedImg(img);
                              }}
                            >
                              <img src={img} className="h-full" />
                            </div>
                          )
                        })
                      }
                      {
                        imageUrl.length > 0 && imageUrl.length < 5 && (
                          <div className="h-20">
                            <UploadImage 
                              onChange={(url) => {
                                setImageUrl((prev) => {
                                  const newValue = [...prev]
                                  newValue.push(url)
                                  return newValue
                                })
                              }}
                            />
                          </div>
                        )
                      }
                    </div>
                    {
                      imageUrl.length === 0 && (<p className="text-gray-400 text-center">You may upload up to 5 images (including thumbnail)<br></br>Supported file types: jpeg, jpg, png</p>)
                    }
                    {
                      imageUrl.length > 0 && (<p className="text-gray-400 text-center">You may upload up to {5 - imageUrl.length} images (including thumbnail)<br></br>Supported file types: jpeg, jpg, png</p>)
                    }
                  </div>
                )
              },
              {
                key: 'preview',
                name: 'Preview',
                children: (    
                  <div className="flex justify-center">
                    <ImagePreview
                      imgValue={imageUrl[0]}
                      nameValue={productName}
                      priceValue={priceValue}
                    />
                  </div>
                )
              },
            ]}
          />
        </div>
        <div className="flex flex-col items-center px-8 py-16">
          <Input
            label="Product Name"
            value={productName}
            required={true}
            onChange={(e) => setProductName(e)}
          />
          <div className="w-full flex gap-4">
            <RadioInput
              label="Category"
              required={true}
              options={["Collectibles", "Accesories", "T-Shirts"]}
            />
            <UploadThumbnail
              label="Thumbnail Image"
              value={imageUrl[0]}
              onChange={(url) => {
                setImageUrl((prev) => {
                  const newValue = [...prev]
                  if (!url) {
                    newValue.shift()
                  } else {
                    newValue.unshift(url)
                  }
                  return newValue
                })
              }}
            />
          </div>
          <Tag 
            label="Brand (up to 2)"
            required={true}
            placeholder="Add a keyword and press Enter"
          />
          <TextArea 
            label="Description"
            required={true}
            max={200}
          />
          <div className="w-full">
            <RadioInput
              label="Condition"
              options={["Bad", "Fair", "Good", "New"]}
            />
          </div>
          <div className="grid grid-cols-2 w-full gap-8">
            <Input label="Season" />
            <Input label="Release Date" />
          </div>
          <div className="grid grid-cols-2 w-full gap-8">
            <Input label="Dimensions" />
            <Input
              label="Retail"
              value={priceValue}
              onChange={(e) => setPriceValue(e)}
            />
          </div>
          <div className="w-full mb-16">
            <p className="font-medium mb-4">Authenticity</p>
            <p className="font-thin">100%</p>
          </div>
          <div className="w-full mb-16">
            <p className="font-medium mb-4">Declaration</p>
            <div className="flex gap-4">
              <input
                type="checkbox"
                className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black mt-1"
              />
              <p className="font-thin">
                I hereby declare that the information given in this application
                is true and correct to the best of my knowledge and belief. In
                case any information given in this application proves to be
                false or incorrect, I shall be responsible for the consequences.
              </p>
            </div>
          </div>
          <div className="w-full mb-16">
            <p>
              <span className="ml-1 text-red-600">*</span> indicates required
            </p>
          </div>
          <div className="flex justify-end w-full gap-6">
            <button className="border border-black w-24 h-10">Cancel</button>
            <button className="bg-black text-white w-24 h-10">Publish</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
