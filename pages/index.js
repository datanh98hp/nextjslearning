import Head from "next/head";
import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";


export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>DA Blog</title>
        <meta name="description" content="I post about topic" />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps(){
  const featuredPost = getFeaturedPosts();
  return {
    props:{
      posts:featuredPost
    },
    revalidate:1800
  }
}
// 1. Hero => present ourselves
// 2. Feature Post
