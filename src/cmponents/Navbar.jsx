import React from "react";
import Navbaritem from "./Navbaritem";

export default function Navbar() {
  return (
    <div
      className="flex justify-center
     dark:bg-gray-600 bg-amber-100 py-4 lg:text-lg gap-6"
    >
      <Navbaritem title="Trending" param="fetchTrending" />
      <Navbaritem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
