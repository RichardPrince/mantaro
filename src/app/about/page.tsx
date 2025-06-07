import Link from "next/link";
export default function About() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/login">Log In</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">About Mantaro</h1>
        <p className="text-gray-700 mb-4">
          Mantaro is a mentorship app designed to connect mentors and mentees in
          a meaningful way. It provides a platform for individuals to share
          knowledge, skills, and experiences, fostering personal and
          professional growth. The app aims to create a supportive community
          where users can find guidance, advice, and inspiration from
          experienced mentors in various fields. Whether you're looking to
          advance your career, learn new skills, or simply seek advice, Mantaro
          is here to help you on your journey.
        </p>
      </div>
    </>
  );
}
