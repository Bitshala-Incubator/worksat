"use client";

import Link from "next/link";
import Login from "./pages/login/page";
import Home from "./pages/home/page";

export default function App() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex justify-center ">
          <div className="flex-col">
            <Link href="/pages/login">
              <Login />
            </Link>
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}
