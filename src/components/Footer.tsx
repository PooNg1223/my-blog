export default function Footer() {
    return (
      <footer className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400">© 2024 My Blog. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://github.com" className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                GitHub
              </a>
              <a href="https://twitter.com" className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }