import { POSTS_PER_PAGE, STRAPI_POPULATE } from "@/lib/constants";
import Paginated from "@/lib/pages/Paginated";
import { Post, StrapiResponse } from "@/lib/types";
import { apiRequest } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

interface PaginatedPageProps {
  params: {
    page: string;
  };
}

export const revalidate = 60;

async function getTotalPages(): Promise<number> {
  const posts = await apiRequest<StrapiResponse<Post>>(
    `${process.env.STRAPI_URL}/posts?pagination[page]=1&pagination[pageSize]=${POSTS_PER_PAGE}`
  );
  return posts.meta.pagination.pageCount;
}

async function getPostsByPage(page: number, limit: number): Promise<Post[]> {
  const posts = await apiRequest<StrapiResponse<Post>>(
    `${process.env.STRAPI_URL}/posts${STRAPI_POPULATE}&pagination[page]=${page}&pagination[pageSize]=${limit}`
  );
  return posts.data;
}

export async function generateStaticParams() {
  const totalPages = await getTotalPages();
  const pages = Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: (i + 2).toString(),
  }));
  return pages;
}

export default async function Page({ params }: PaginatedPageProps) {
  const paramsData = await params;
  const currentPage = parseInt(paramsData.page, 10);
  const postsPerPage = 5;
  const posts = await getPostsByPage(currentPage, postsPerPage);

  if ((!posts.length && currentPage !== 1) || currentPage === 1) {
    notFound();
  }

  return <Paginated posts={posts} currentPage={currentPage} />;
}
