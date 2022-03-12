import React, { useState } from 'react'
import Layout from '../components/Layout'
import ImagePreview from '../components/ImagePreview'
import UploadThumbnail from '../components/UploadThumbnail'
import Input from '../components/Input'
import RadioInput from '../components/RadioInput'

const IndexPage = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [priceValue, setPriceValue] = useState<string>('');
  
  return (
    <Layout>
      <div className="grid grid-cols-2 divide-x">
        <div className="flex justify-center">
          <ImagePreview
            imgValue={imageUrl}
            nameValue={productName}
            priceValue={priceValue}
          />
        </div>
        <div className="flex flex-col items-center px-8 py-16">
          <Input 
            label="Product Name"
            value={productName}
            required={true}
            onChange={(e) => setProductName(e.target.value)}
          />
          <div className="w-full flex gap-4">
            <RadioInput
              label="Category"
              required={true}
              options={['Collectibles', 'Accesories', 'T-Shirts']}
            />
            <UploadThumbnail 
              label="Thumbnail Image"
              value={imageUrl}
              onChange={(url) => setImageUrl(url)}
            />
          </div>
          <div className="w-full">
            <RadioInput
              label="Condition"
              options={['Bad', 'Fair', 'Good', 'New']}
            />
          </div>
          <div className="grid grid-cols-2 w-full gap-8">
            <Input 
              label="Season"
            />
            <Input 
              label="Release Date"
            />
          </div>
          <div className="grid grid-cols-2 w-full gap-8">
            <Input 
              label="Dimensions"
            />
            <Input 
              label="Retail"
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </div>
          <div className="w-full mb-16">
            <p className="font-medium mb-4">Authenticity</p>
            <p className="font-thin">100%</p>
          </div>
          <div className="w-full mb-16">
            <p className="font-medium mb-4">Declaration</p>
            <div className="flex gap-4">
              <input type="checkbox" 
                className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black mt-1"
              />
              <p className="font-thin">I hereby declare that the information given in this application is true and correct to the best of my knowledge and belief. In case any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.</p>
            </div>
          </div>
          <div className="w-full mb-16">
            <p><span className="ml-1 text-red-600">*</span> indicates required</p>
          </div>
          <div className="flex justify-end w-full gap-6">
            <button className="border border-black w-24 h-10">Cancel</button>
            <button className="bg-black text-white w-24 h-10">Publish</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
