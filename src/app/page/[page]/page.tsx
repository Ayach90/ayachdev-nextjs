import { POSTS_PER_PAGE } from "@/lib/constants";
import Paginated from "@/lib/pages/Paginated";
import { Post } from "@/lib/types";
import { apiRequest } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

interface PaginatedPageProps {
  page: string;
}

export const revalidate = 86400;

async function getTotalPages(): Promise<number> {
  try {
    const posts = await fetch(`${process.env.WP_URL}/posts`);
    const totalPosts = Number(posts.headers.get("X-WP-Total"));
    return Math.ceil(totalPosts / POSTS_PER_PAGE);
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
}

async function getPostsByPage(page: number, limit: number): Promise<Post[]> {
  const posts = await apiRequest<Post[]>(
    `${process.env.WP_URL}/posts?per_page=${limit}&offset=${(page - 1) * limit}`
  );
  return posts;
}

export async function generateStaticParams() {
  const totalPages = await getTotalPages();
  const pages = Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: (i + 2).toString(),
  }));
  return pages;
}

export default async function Page({
  params,
}: {
  params: Promise<PaginatedPageProps>;
}) {
  const paramsData = await params;
  const currentPage = parseInt(paramsData.page, 10);
  const postsPerPage = 5;
  const posts = await getPostsByPage(currentPage, postsPerPage);

  if ((!posts.length && currentPage !== 1) || currentPage === 1) {
    notFound();
  }

  return <Paginated posts={posts} currentPage={currentPage} />;
}
