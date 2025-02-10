import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="flex items-center text-gray-900 dark:text-white hover:text-blue-600"
            >
              홈
            </Link>
            <Link 
              href="/about" 
              className="flex items-center text-gray-900 dark:text-white hover:text-blue-600"
            >
              소개
            </Link>
            <Link 
              href="/posts" 
              className="flex items-center text-gray-900 dark:text-white hover:text-blue-600"
            >
              블로그
            </Link>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}