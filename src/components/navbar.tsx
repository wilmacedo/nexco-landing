"use client";

import { tabs } from "@/config/navbar";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed z-20 bg-background w-screen flex items-center justify-center px-4 lg:px-16">
      <div className="py-4 w-full flex flex-col gap-4 items-center justify-between md:gap-0 md:flex-row lg:max-w-7xl">
        <Link href={"/"} className="inline-flex items-center gap-2">
          <Logo />
          <h1 className="text-xl tracking-widest">NEXCO</h1>
        </Link>
        <div data-tab={"#prices"} className="group inline-flex gap-1">
          {tabs.map((tab, index) => (
            <Button variant="ghost" key={index} className="text-sm" asChild>
              <Link href={"/#" + tab.value}>{tab.label}</Link>
            </Button>
          ))}
        </div>
        <div className="inline-flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/signin">Entrar</Link>
          </Button>

          <Button asChild>
            <Link
              href="/register"
              className="px-5 py-1.5 text-sm bg-[#D9E8B7] rounded-3xl"
            >
              Começar
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
