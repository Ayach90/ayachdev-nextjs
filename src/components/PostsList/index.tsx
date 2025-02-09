import { Boxed } from "@/lib/layout/Boxed";
import React from "react";
import { Post } from "wpjs-api";
import CardLargePost from "../CardLargePost";
import CardSmallPost from "../CardSmallPost";

type Props = {
  name: string;
  description?: string;
  page?: number;
  posts: Post[];
  cardsType?: "large" | "small";
};

const PostsList = ({
  name,
  description,
  posts,
  page = 1,
  cardsType = "large",
}: Props) => {
  return (
    <section className="p-4">
      <h1 className="text-center">{name}</h1>
      {page === 1 && description && (
        <p className="text-center px-60">{description}</p>
      )}
      {page > 1 && `Page ${page}`}
      <Boxed className="py-24">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <article>
                {cardsType === "large" ? (
                  <CardLargePost post={post} />
                ) : (
                  <CardSmallPost post={post} />
                )}
              </article>
            </li>
          ))}
        </ul>
      </Boxed>
    </section>
  );
};

export default PostsList;
