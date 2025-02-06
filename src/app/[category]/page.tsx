import { STRAPI_POPULATE } from "@/lib/constants";
import { Category, Post, StrapiResponse } from "@/lib/types";
import { apiRequest } from "@/lib/utils";
import React from "react";

interface CategoryPageProps {
  category: string;
}

export const revalidate = 60;

const getCategories = async () => {
  const categories = await apiRequest<StrapiResponse<Category>>(
    `${process.env.STRAPI_URL}/categories`
  );
  return categories.data;
};

const getCategoryBySlug = async (slug: string) => {
  const category = await apiRequest<StrapiResponse<Category>>(
    `${process.env.STRAPI_URL}/categories?filters[slug][$eq]=${slug}`
  );
  return category.data[0];
};

const getPostsByCategory = async (slug: string) => {
  const posts = await apiRequest<StrapiResponse<Post>>(
    `${process.env.STRAPI_URL}/posts${STRAPI_POPULATE}&filters[categories][slug][$eq]=${slug}`
  );
  return posts.data;
};

export async function generateStaticParams() {
  const categories = await getCategories();
  const pages = categories.map(({ slug }) => ({
    category: slug,
  }));
  return pages;
}

export default async function Page({
  params,
}: {
  params: Promise<CategoryPageProps>;
}) {
  const { category } = await params;
  const { name, description } = await getCategoryBySlug(category);
  const posts = await getPostsByCategory(category);
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <section aria-labelledby="posts-heading">
        <h2 id="posts-heading" className="visually-hidden ">
          Listado de posts
        </h2>
        <ul>
          {posts.map(({ id, title, subtitle }) => (
            <li key={id}>
              <article>
                <header>
                  <h2>{title}</h2>
                </header>
                <p>{subtitle}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
