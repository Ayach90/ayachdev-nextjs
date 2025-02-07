import Link from "next/link";
import Image from "next/image";
import { Category, Post } from "@/wp-link";
import style from "./style.module.css";

interface Props {
  posts: Post[];
  categories: Category[];
}

export const Home = ({ posts, categories }: Props) => {
  return (
    <>
      <section
        className={`flex ${style.heroBanner} py-48 px-4 justify-center items-center`}
      >
        <h1 className="text-white">
          <i>console.log(</i> "Hola dev" <i>)</i>
        </h1>
      </section>
      <section className="px-4 pt-24 flex flex-col items-center">
        <h2>Qué te interesa?</h2>
        <ul className="flex gap-4 flex-wrap justify-center pt-8">
          {categories.map(({ id, name, acf, slug }) => (
            <li
              key={id}
              style={{ backgroundColor: acf.bgColor }}
              className="rounded shadow hover:shadow-none transition-shadow"
            >
              <Link href={`/${slug}`}>
                <div className="flex items-center justify-center w-72 h-48">
                  <h3 style={{ color: acf.textColor }}>{name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="px-24 py-24">
        <h2 className="text-center">Últimos posts</h2>
        <ul className="flex flex-col gap-4 pt-8 justify-start align-start left">
          {posts.map(
            ({
              id,
              title,
              slug,
              excerpt,
              featured_image_alt,
              featured_image_url,
            }) => {
              // const { source_url, alt_texkt } = _embedded["wp:featuredmedia"][0];

              return (
                <li key={id} className="rounded shadow flex hover:bg-gray-100">
                  <Link href={`/${slug}`} className="flex items-start">
                    <Image
                      alt={featured_image_alt || "Default Image"}
                      src={featured_image_url}
                      width={144}
                      height={128}
                    />
                    <div className="p-4">
                      <h3>{title.rendered}</h3>
                      <p>{excerpt.rendered}</p>
                      {/* //TODO: put in a use client component to use dangerouslySetInnerHTML */}
                    </div>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </>
  );
};
