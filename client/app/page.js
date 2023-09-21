"use client";

import Link from "next/link";
import Login from "./pages/login/page";
import Home from "./pages/home/page";

export default function App() {
  return (
    <>
      <div className="flex justify-between mt-3 mb-5">
        <div className="bg-red-400 p-3 rounded-lg">Icon</div>
        <div className="flex">
          <div className="bg-red-400 p-3 rounded-lg">Post a job</div>

          <div className="mx-3">
            <Login />
          </div>
        </div>
      </div>
      <div>
        <Home />
      </div>
    </>
  );
}
