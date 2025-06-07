"use client";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";

export default function LoginPage() {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in:", userCredential.user);
      // Redirect or show success message
    } catch (error) {
      console.error("Login error:", error);
      // Show error to user
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow max-w-md w-full rounded-lg">
          <h1 className="text-black text-2xl font-bold mb-4">Log In</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-black block mb-1 font-semibold"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="text-black w-full border border-gray-300 rounded p-2"
              />
              <label
                htmlFor="password"
                className="text-black block mb-1 font-semibold"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="text-black w-full border border-gray-300 rounded p-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
