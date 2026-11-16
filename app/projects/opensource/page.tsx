import Link from "next/link";

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#7073cf]">Open Source Projects</h1>
        <Link href="/api/projects?type=opensource">API Endpoint - GET Open Source Projects</Link>
      </section>
    </main>
  );
}