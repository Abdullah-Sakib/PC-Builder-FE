import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-200 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{/* <a>Item 1</a> */}</li>
            <li>
              <a>Categories</a>
              <ul className="p-2 w-48 z-50">
                <li>
                  <Link href="/categories/CPU - Processor">
                    CPU - Processor
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/RAM">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/Power Supply Unit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Storage Device">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/Monitor">Monitor</Link>
                </li>
              </ul>
            </li>
            <li>{/* <a>Item 3</a> */}</li>
          </ul>
        </div>
        <Link href="/">
          <button className="btn btn-ghost normal-case text-xl">
            BuildXpert
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{/* <a>Item 1</a> */}</li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 w-48 z-50">
                <li>
                  <Link href="/categories/CPU - Processor">
                    CPU - Processor
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/RAM">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/Power Supply Unit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Storage Device">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/Monitor">Monitor</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>{/* <a>Item 3</a> */}</li>
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user?.name ? (
          <>
            <button
              onClick={() => signOut()}
              className="btn btn-error text-white mr-2"
            >
              Log out
            </button>
            <Link href="/pc-builder">
              <button className="btn btn-accent text-white">PC Builder</button>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <button className="btn btn-accent text-white mr-2">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
