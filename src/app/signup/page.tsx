"use client";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";

export default function SignupPage() {
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.email.value;
    const passwordInput = e.currentTarget.password.value;
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed up successfully
        console.log("User created:", userCredential.user);
        // you can redirect to another page or show a success message here
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        // you can show an error message to the user here
      });
    console.log("Email entered:", emailInput);
    console.log("Password entered:", passwordInput);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/login">Log In</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow max-w-md w-full rounded-lg">
          <h1 className="text-black text-2xl font-bold mb-4">Sign Up</h1>
          <p className="text-black mb-4">Welcome to the mentorship app!</p>
          <form onSubmit={handleSignup}>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
