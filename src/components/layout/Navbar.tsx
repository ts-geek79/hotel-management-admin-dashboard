"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const getTitle = () => {
    if (pathname.includes("rooms")) return "Room Management";
    if (pathname.includes("bookings")) return "Booking Management";
    if (pathname.includes("guests")) return "Guest Management";
    return "Dashboard";
  };

  return (
    <nav className="w-full border-b border-gray-200 px-6 py-3 bg-white">
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold text-xl text-zinc-900">{getTitle()}</p>

        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
