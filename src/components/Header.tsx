export default function Header() {
    return (
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                My Blog
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</a>
              <a href="/posts" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Posts</a>
              <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</a>
            </div>
          </nav>
        </div>
      </header>
    );
  }