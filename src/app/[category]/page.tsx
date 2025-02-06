import { CategoriesResponse, Category, PostsResponse } from "@/lib/types";
import { apiRequest } from "@/lib/utils";
import React from "react";

interface CategoryPageProps {
  category: string;
}

export const revalidate = 60;

const getCategories = async () => {
  const categories = await apiRequest<CategoriesResponse>(
    `${process.env.WP_URL}/categories`
  );
  return categories;
};

const getCategoryBySlug = async (slug: string) => {
  const category = await apiRequest<Category[]>(
    `${process.env.WP_URL}/categories?slug=${slug}`
  );
  return category[0];
};

const getPostsByCategory = async (id: number) => {
  const posts = await apiRequest<PostsResponse>(
    `${process.env.WP_URL}/posts?categories=${id}`
  );
  return posts;
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
  const { name, description, id } = await getCategoryBySlug(category);
  const posts = await getPostsByCategory(id);
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <section aria-labelledby="posts-heading">
        <h2 id="posts-heading" className="visually-hidden ">
          Listado de posts
        </h2>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <article>
                <header>
                  <h2>{title.rendered}</h2>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
