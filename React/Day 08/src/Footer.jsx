export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6 mt-10 border-t border-gray-300">
        <div className="container mx-auto flex flex-col items-center text-gray-700">
          <p className="text-lg font-semibold">EcoShop</p>
          <nav className="mt-4">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-600">Contact</a></li>
            </ul>
          </nav>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} EcoShop. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  