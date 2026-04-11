"use client";

import Link from "next/link";
import { Menu as MenuIcon, ShoppingCart, UserIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
        <ModeToggle />
        <Link href="/cart" className={buttonVariants({ variant: "ghost" })}>
          <ShoppingCart />
          Cart
        </Link>
        <Link href="/sign-in" className={buttonVariants({ variant: "default" })}>
          <UserIcon />
          Sign In
        </Link>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <MenuIcon />
            <span className="sr-only">Toggle mobile menu</span>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4">
            <SheetTitle className="text-left font-bold text-xl">Menu</SheetTitle>
            <div className="flex flex-col gap-4 mt-4">
              <ModeToggle />
              <Link
                href="/cart"
                className={buttonVariants({ variant: "ghost", className: "w-full justify-start" })}
              >
                <ShoppingCart className="mr-2" />
                Cart
              </Link>
              <Link
                href="/sign-in"
                className={buttonVariants({ variant: "default", className: "w-full justify-start" })}
              >
                <UserIcon className="mr-2" />
                Sign In
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
