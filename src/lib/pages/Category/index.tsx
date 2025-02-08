import CardLargePost from "@/components/CardLargePost";
import { Boxed } from "@/lib/layout/Boxed";
import React from "react";
import { Category as CategoryType, Post } from "wpjs-api";

type Props = { category: CategoryType; posts: Post[] };

const Category = ({ category, posts }: Props) => {
  const { name, description } = category;
  return (
    <section className="p-4">
      <h1 className="text-center">{name}</h1>
      <p className="text-center px-60">{description}</p>
      <Boxed className="py-24">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <article>
                <CardLargePost post={post} />
              </article>
            </li>
          ))}
        </ul>
      </Boxed>
    </section>
  );
};

export default Category;
