import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "@/lib/types";
import Link from "next/link";

type Props = { menu: MenuItem[] };

const Footer = ({ menu }: Props) => {
  return (
    <footer>
      <NavigationMenu aria-label="Menú de pie de página">
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
    </footer>
  );
};

export default Footer;
