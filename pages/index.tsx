import Layout from '../components/Layout'
import ImagePreview from '../components/ImagePreview'
import UploadThumbnail from '../components/UploadThumbnail'

const IndexPage = () => (
  <Layout>
    <div>
      <ImagePreview />
    </div>
    <div>
      <UploadThumbnail 
        label="Thumbnail Image"
      />
    </div>
  </Layout>
)

export default IndexPage
