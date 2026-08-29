// @flow strict
import Link from "next/link";
import ThemeToggle from "./theme/theme-toggle";

function Navbar() {
  return (
    <nav className="site-nav bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
           Kanika Aggarwal
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="nav-link text-sm">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="nav-link text-sm">EXPERIENCE</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="nav-link text-sm">SKILLS</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="nav-link text-sm">EDUCATION</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="nav-link text-sm">BLOGS</div></Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="nav-link text-sm">PROJECTS</div></Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;