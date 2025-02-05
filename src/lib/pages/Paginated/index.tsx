import { Post } from "@/lib/types";
import React from "react";

type Props = {
  currentPage: number;
  posts: Post[];
};

const Paginated = ({ currentPage, posts }: Props) => {
  return (
    <main>
      <h1>Página {currentPage}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Paginated;
