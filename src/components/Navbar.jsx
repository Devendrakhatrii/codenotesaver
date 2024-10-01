import React from "react";
import { Outlet, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-6 bg-white px-28 sticky top-0 z-50">
        <div className="">
          <h1 className="text-2xl font-bold">CodeNoteSaver</h1>
        </div>
        <div className="">
          <Link to="/create">
            <Button className=" px-6 py-4">Create</Button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
