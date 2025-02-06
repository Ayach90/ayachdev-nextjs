import { Post } from "@/lib/types";
import React from "react";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <h1>HOME</h1>
      <section>
        {posts.map((post) => (
          <article key={post.id}>{post.title.rendered}</article>
        ))}
      </section>
    </>
  );
};

export default Home;
