import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "@/lib/types";
import Link from "next/link";
import styles from "./style.module.css";

type Props = { menu: MenuItem[] };

export const Footer = ({ menu }: Props) => {
  return (
    <footer
      className={`flex flex-col justify-center items-center gap-4 px-4 py-10 ${styles.footer}`}
    >
      <NavigationMenu aria-label="Menú de pie de página">
        <ul className="relative z-10 flex max-w-max flex-1 items-center justify-center gap-2">
          {menu.map(({ ID, url, title }) => (
            <li key={ID}>
              <Link href={url} passHref legacyBehavior>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-transparent hover:text-gray-300`}
                >
                  {title}
                </NavigationMenuLink>
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenu>
      <p className={styles.copyright}>
        Copyright Ayach.dev {new Date().getFullYear()} - All rights reserved
      </p>
    </footer>
  );
};
