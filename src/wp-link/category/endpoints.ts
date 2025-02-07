import { apiRequest } from "../utils";
import { Category, CategoryFilters } from "./types";

export const getCategories = async (
  wpApiUrl: string | undefined,
  filters: CategoryFilters = {}
) => {
  let url = `${wpApiUrl}/categories?`;
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      url += `${key}=${filters[key as keyof CategoryFilters]}&`;
    }
  }
  url = url.slice(0, -1);
  const posts = await apiRequest<Category[]>(url);
  return posts;
};
