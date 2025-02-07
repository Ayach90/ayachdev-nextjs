import { getCategories, getPosts, PostFilters } from "wpjs-api";

interface CategoryPageProps {
  category: string;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const categories = await getCategories(process.env.WP_API_URL);
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
  const categories = await getCategories(process.env.WP_API_URL, {
    slug: category,
  });
  const { id, name, description } = categories[0];

  const postFilters: PostFilters = { categories: [id] };
  const posts = await getPosts(process.env.WP_API_URL, postFilters);

  return (
    <section className="p-4">
      <h1 className="text-center">{name}</h1>
      <p className="text-center px-60">{description}</p>
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
    </section>
  );
}
