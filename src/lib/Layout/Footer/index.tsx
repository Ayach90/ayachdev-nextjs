import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FooterItem } from "@/lib/types";
import Link from "next/link";

type Props = { menuItems: FooterItem[] };

const Footer = ({ menuItems }: Props) => {
  return (
    <footer>
      <NavigationMenu aria-label="Menú de pie de página">
        <ul className="relative z-10 flex max-w-max flex-1 items-center justify-center gap-2">
          {menuItems.map(({ id, slug, name }) => (
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
    </footer>
  );
};

export default Footer;
