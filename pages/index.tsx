import React, { useState } from 'react'
import Layout from '../components/Layout'
import ImagePreview from '../components/ImagePreview'
import UploadThumbnail from '../components/UploadThumbnail'

const IndexPage = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  
  return (
    <Layout>
      <div className="grid grid-cols-2 divide-x">
        <div className="flex justify-center">
          <ImagePreview
            imgValue={imageUrl}
          />
        </div>
        <div className="flex justify-center">
          <UploadThumbnail 
            label="Thumbnail Image"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
