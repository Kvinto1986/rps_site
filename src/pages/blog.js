import React from 'react'
import {graphql} from 'gatsby'
import BlogPosts from '../components/pagesContent/BlogPosts'
import Page404 from './404'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {Container} from "react-bootstrap";

export const query = graphql`
  query MyQuery {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          id
          uid
          type
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
            date
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
const BlogPage = ({data}) => {
    if (!data) {
        return (
            <>
                <Page404/>
            </>
        )
    }
    const posts = data.allPrismicPost.edges

    return (
        <>
            <Header/>
            <Container><h3 style={{textAlign: "center"}} className="mt-5">RoadmApp</h3></Container>
            <BlogPosts posts={posts}/>
            <Footer/>
        </>
    )
}

export default BlogPage
