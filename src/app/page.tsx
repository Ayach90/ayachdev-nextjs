import Home from "@/lib/pages/Home";
import { Post } from "@/lib/types";
import { apiRequest } from "@/lib/utils";

export const revalidate = 3600;

export default async function Page() {
  const posts = await apiRequest<Post[]>(`${process.env.WP_URL}/posts`);

  return <Home posts={posts} />;
}
