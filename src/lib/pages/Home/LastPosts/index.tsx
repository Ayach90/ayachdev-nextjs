import CardLargePost from "@/components/CardLargePost";
import { Boxed } from "@/lib/layout/Boxed";
import { FullWidth } from "@/lib/layout/FullWidth";
import React from "react";
import { Post } from "wpjs-api";

type Props = {
  posts: Post[];
};

export const LastPosts = ({ posts }: Props) => {
  return (
    <FullWidth className="bg-gray-100">
      <Boxed className="py-24" noSection>
        <h2 className="text-center">Últimos posts</h2>
        <ul className="flex flex-col gap-4 pt-8 justify-start align-start left">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <CardLargePost post={post} />
              </li>
            );
          })}
        </ul>
      </Boxed>
    </FullWidth>
  );
};
