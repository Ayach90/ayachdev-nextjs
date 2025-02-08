import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "wpjs-api";

type Props = { menu: Menu[] };

export const Header = ({ menu }: Props) => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <Image alt="logo Ayach.dev" src="/logo.webp" width="200" height="45" />
      </Link>
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
