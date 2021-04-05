import { useRouter } from "next/router";
import Link from "next/link";

interface NavLinksProps {
  handleCloseNav: Function;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleCloseNav }) => {
  const { pathname } = useRouter();

  return (
    <>
      {NavLinkOptions.map(({ name, path }: INavLinks) => (
        <Link href={path} key={name}>
          <a
            className={`nav-link text-dark ${pathname === path}`}
            onClick={() => handleCloseNav()}>
            {name}
          </a>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;

export interface INavLinks {
  name: string;
  path: string;
}

const NavLinkOptions: INavLinks[] = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "rooms", path: "/rooms" },
  { name: "gallery", path: "/gallery" },
  { name: "contact", path: "/contact" },
];
