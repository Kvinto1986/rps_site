import React from 'react'
import {graphql} from 'gatsby'
import {RichText} from 'prismic-reactjs'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container, Image} from "react-bootstrap";
import "../styles/blogPosts.css"

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        title_image {
                alt
                url
            }
            title_text {
            raw
            }
            title {
              raw
            }
        body {
          ... on PrismicPostBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPostBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              image {
                alt
                url
              }
              caption {
                raw
              }
            }
          }
        }
      }
    }
  }
`

const PostSlices = ({slices}) =>
    slices.map((slice, index) => {
        return (() => {
            switch (slice.slice_type) {
                case 'text':
                    return (
                        <Container key={index + slice.slice_type} className="mt-4">
                            <RichText
                                key={index}
                                render={slice.primary.text.raw || []}
                            />
                        </Container>
                    )

                case 'quote':
                    return (
                        <blockquote
                            key={index + slice.slice_type}>
                            {RichText.asText(slice.primary.quote.raw)}
                        </blockquote>
                    )

                case 'image_with_caption':
                    return (
                        <Container key={index + slice.slice_type}>
                            <Image
                                className="postImage mt-4"
                                src={slice.primary.image.url}/>
                        </Container>
                    )

                default:
            }
        })()
    })

const PostBody = ({blogPost, id}) => {
    return (
        <>
            <Container fluid className="d-flex flex-wrap justify-content-center mt-5"
                       key={id}>
                <Container className="d-flex flex-wrap justify-content-center">
                    <h4 className="title">
                        {RichText.asText(blogPost.title.raw).length !== 0
                        && RichText.asText(blogPost.title.raw)
                        }
                    </h4>
                    <p style={{textAlign: "center"}}>{RichText.asText(blogPost.title_text.raw).length !== 0
                    && RichText.asText(blogPost.title_text.raw)}</p>
                </Container>
                <Container>
                    <Image className="postImage" src={blogPost.title_image.url}/>
                </Container>
            </Container>
            <Container className="postText d-flex flex-wrap justify-content-center">
                <PostSlices slices={blogPost.body}/>
            </Container>

        </>
    )
}

const Post = ({data}) => {
    if (!data) return null
    const post = data.prismicPost.data
    return (
        <>
            <Header/>
            <PostBody blogPost={post} id={data.prismicPost.data.title_image.url.charAt(8)}/>
            <Footer/>
        </>
    )
}

export default Post
