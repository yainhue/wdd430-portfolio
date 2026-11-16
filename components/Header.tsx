import NavLinks from '../components/NavLinks';

export default function Header() {
  return (
    <header className="bg-purple-900 text-white py-4 shadow-md">
      <div id="header-title" className="text-2xl font-bold text-center">Yain Huento</div>
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex gap-6">
          <li><NavLinks></NavLinks></li>
        </ul>
      </nav>
    </header>
  );
}