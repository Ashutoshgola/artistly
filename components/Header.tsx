"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Artistly
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/artists">Browse Artists</Link>
          <Link href="/onboarding">Become Artist</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        <div className="sm:hidden">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="text-gray-700">
                <Menu size={24} />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />

              <Dialog.Content
                className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl
                           p-6 pt-12 flex flex-col gap-4 transition-transform duration-300"
              >
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 text-gray-600 hover:text-black">
                    <X size={22} />
                  </button>
                </Dialog.Close>

                <Dialog.Title className="text-lg font-bold">Menu</Dialog.Title>

                <Link href="/artists" className="text-gray-800 hover:underline">
                  Browse Artists
                </Link>
                <Link href="/onboarding" className="text-gray-800 hover:underline">
                  Become Artist
                </Link>
                <Link href="/dashboard" className="text-gray-800 hover:underline">
                  Dashboard
                </Link>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  );
};

export default Header;
