import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = { menu: MenuItem[] };

export const Header = ({ menu }: Props) => {
  return (
    <header className="flex items-center justify-between p-4">
      <Image alt="logo Àngel" src="/logo.webp" width="200" height="45" />
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
