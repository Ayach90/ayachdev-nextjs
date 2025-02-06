import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "@/lib/types";
import Link from "next/link";

type Props = { menu: MenuItem[] };

const Header = ({ menu }: Props) => {
  return (
    <header>
      <NavigationMenu aria-label="Menú de navegación">
        <ul className="relative z-10 flex max-w-max flex-1 items-center justify-center gap-2">
          {menu.map(({ ID, url, title }) => (
            <li key={ID}>
              <Link href={url} passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {title}
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
