import Link from "next/link";

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#7073cf]">Projects Overview</h1>
        <Link href="/api/projects">API Endpoint - GET All Projects</Link>
        <ul className="m-5">
          <li><Link href="/api/projects/1">API Endpoint - GET Project ID 1</Link></li>
          <li><Link href="/api/projects/5">API Endpoint - GET Project ID 5</Link></li>
          <li><Link href="/api/projects/9">API Endpoint - GET Project ID 9</Link></li>
          </ul>
      </section>
    </main>
  );
}