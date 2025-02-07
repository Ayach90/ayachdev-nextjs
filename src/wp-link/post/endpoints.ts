import { apiRequest } from "../utils";
import { Post, PostFilters } from "./types";

export const getPosts = async (
  wpApiUrl: string | undefined,
  filters: PostFilters = {}
) => {
  let url = `${wpApiUrl}/posts?`;
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      url += `${key}=${filters[key as keyof PostFilters]}&`;
    }
  }
  url = url.slice(0, -1);
  const posts = await apiRequest<Post[]>(url);
  return posts;
};

export const getTotalPages = async (per_page: number = 10): Promise<number> => {
  try {
    const posts = await fetch(`${process.env.WP_API_URL}/posts`);
    const totalPosts = Number(posts.headers.get("X-WP-Total"));
    return Math.ceil(totalPosts / per_page);
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
};
