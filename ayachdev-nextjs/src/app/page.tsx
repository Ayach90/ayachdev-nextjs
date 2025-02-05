import { POSTS_PER_PAGE, STRAPI_POPULATE } from "@/lib/constants";
import Home from "@/lib/pages/Home";
import { Post, StrapiResponse } from "@/lib/types";
import { apiRequest } from "@/lib/utils";

export const revalidate = 3600;

export default async function Page() {
  const posts = await apiRequest<StrapiResponse<Post>>(
    `${process.env.STRAPI_URL}/posts${STRAPI_POPULATE}&pagination[page]=1&pagination[pageSize]=${POSTS_PER_PAGE}`
  );

  return <Home posts={posts.data} />;
}
