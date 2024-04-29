import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center ml-6">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="text-gray-300 rounded-full outline-none focus:outline-none">
          <span className="sr-only">Light Mode</span>
          <SunIcon className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="text-gray-400 rounded-full outline-none focus:outline-none">
          <span className="sr-only">Dark Mode</span>
          <MoonIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
