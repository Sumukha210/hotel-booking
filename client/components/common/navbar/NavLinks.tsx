import { useRouter } from "next/router";
import Link from "next/link";

const NavLinks = () => {
  const { pathname } = useRouter();

  return (
    <>
      {NavLinkOptions.map(({ name, path }: INavLinks) => (
        <Link href={path} key={name}>
          <a className={`nav-link text-dark ${pathname === path}`}>{name}</a>
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
