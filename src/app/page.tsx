import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex space-x-4">
        <Link href="/">Log in</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
