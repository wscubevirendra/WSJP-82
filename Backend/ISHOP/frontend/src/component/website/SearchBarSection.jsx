import { FaChevronDown, FaSearch } from "react-icons/fa";

export default function SearchBarSection() {
  return (
    <div className="bg-teal-600 py-4 px-6  text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Search bar */}
        <div className="flex w-full lg:w-[40%] bg-white text-black rounded-full items-center overflow-hidden shadow-md">
          {/* Category Dropdown */}
          <div className="flex items-center px-4 py-2 font-semibold text-sm whitespace-nowrap">
            All Categories
            <FaChevronDown className="ml-2 text-xs" />
          </div>
          {/* Divider */}
          <div className="w-px bg-gray-300 h-6 mx-2" />
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-grow bg-transparent outline-none text-sm placeholder-gray-500"
          />
          {/* Search Icon */}
          <div className="px-4 cursor-pointer text-gray-700 hover:text-black">
            <FaSearch className="w-4 h-4" />
          </div>
        </div>

        {/* Info Badges */}
        <div className="flex gap-8 text-sm font-semibold text-white text-center">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>
    </div>
  );
}
