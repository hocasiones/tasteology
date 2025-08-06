import { gql } from '@apollo/client/core'

const GET_SECTION_1 = gql`
  query MyQuery {
    page(by: { id: "2" }, status: any) {
      id
      section_1_image_1: metaValue(key: "section_1_image_1")
      section_1_image_2: metaValue(key: "section_1_image_2")
      section_1_image_3: metaValue(key: "section_1_image_3")
      section_1_title: metaValue(key: "section_1_title")
      section_1_description: metaValue(key: "section_1_description")
    }
  }
`

const GET_SECTION_2 = gql`
  query Colours {
    posts {
      id
      title
      content
      featuredImage {
        url
      }
    }
  }
`

const GET_MEDIA = gql`
  query Media($ids: String!) {
    mediaItems(filter: { ids: $ids }, sort: { order: ASC }) {
      id
      url
    }
  }
`

export { GET_SECTION_1, GET_SECTION_2, GET_MEDIA }
