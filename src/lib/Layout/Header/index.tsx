import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Category } from "@/lib/types";
import Link from "next/link";

type Props = { categories: Category[] };

const Header = ({ categories }: Props) => {
  return (
    <header>
      <NavigationMenu aria-label="Menú de navegación">
        <ul className="relative z-10 flex max-w-max flex-1 items-center justify-center gap-2">
          {categories.map(({ id, slug, name }) => (
            <li key={id}>
              <Link href={slug} passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {name}
                </NavigationMenuLink>
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenu>
    </header>
  );
};

export default Header;
