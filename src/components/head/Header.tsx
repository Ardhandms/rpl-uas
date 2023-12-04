"use client";

import Link from "next/link";
import Image from "next/image";
import useGetUser from "@/hooks/useGetUser";
import { Button } from "@/app/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  const { user, token, logout } = useGetUser();

  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-12 text-gray-700 items-center">
        <Link className="text-blue-700 font-bold text-2xl" href="/">
          Mr. Cleansz
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/tentang"}>Tentang</Link>
        <Link href={"#aboutus"}>Contact</Link>
      </nav>

      <nav className="flex items-center gap-10 font-semibold">
        <Link href={"/order"}>
          <FiShoppingCart fontSize={24} />
        </Link>
        {!user || !token ? (
          <>
            <Link href={"/login"}>
              <Button variant="ghost" className="border-0">
                Login
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button className="rounded-full bg-blue-500 border-0">
                Signup
              </Button>
            </Link>
          </>
        ) : (
          <Button
            onClick={logout}
            className="bg-red-500 rounded-full text-white px-8 py-2 border-0"
          >
            Logout
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
