import { apiRequest } from "../utils";
import { MenusResponse } from "./types";

export const getMenus = async (wpApiUrl: string | undefined) => {
  const posts = await apiRequest<MenusResponse>(`${wpApiUrl}/menus`);
  return posts;
};
