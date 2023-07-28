"use client";

import Image from "next/image";
import NavBar from "./components/navbar";
import { selectUser, useSelector, userSlice } from "@/lib/redux";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

export default function Home() {
  const user = useSelector(selectUser);
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center p-5 px-10 font-mono">
      {session ? (
        <div>
          <h1>Welcome back {session.user?.name}!</h1>
        </div>
      ) : (
        <div
          onClick={() =>
            dispatch(userSlice.actions.set({ username: "Boymeat Girl" }))
          }
        >
          <h1 className="text-pink mt-auto mb-2">
            Welcome to <strong className="text-pink">music.five3v3r.com</strong>
            ,{" "}
          </h1>
          <a href="/api/auth/signin" className="w-48 bg-pink rounded-full">
            Login/Signup
          </a>
        </div>
      )}
      <div className="flex flex-col gap-2 mt-auto">
        <strong>Brought to you by</strong>
        <a
          className="pointer-events-auto flex text-end h-32 w-64 relative"
          href="https://github.com/boymeat-girl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/boymeat-girl-logo.svg"
            alt="Vercel Logo"
            objectFit="contain"
            layout="fill"
          />
        </a>
      </div>
    </main>
  );
}
