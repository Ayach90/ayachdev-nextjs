import Link from "next/link";
import { Category } from "wpjs-api";
import { Boxed } from "@/lib/layout/Boxed";

type Props = {
  categories: Category[];
};

export const Categories = ({ categories }: Props) => {
  return (
    <Boxed className="py-24">
      <h2 className="text-center">Qué te interesa?</h2>
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
    </Boxed>
  );
};
