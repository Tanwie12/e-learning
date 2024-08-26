import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            E-Learning Platform
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/dashboard" className="hover:underline">
            My Dashboard
          </Link>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
