'use client'

import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSyncAlt, FaPlus } from 'react-icons/fa';
import Link from 'next/link';

export default function CategoryView() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', status: 'Active' },
    { id: 2, name: 'Clothing', status: 'Inactive' },
    { id: 3, name: 'Home Appliances', status: 'Active' },
  ]);

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleToggleStatus = (id) => {
    setCategories(categories.map((category) =>
      category.id === id
        ? { ...category, status: category.status === 'Active' ? 'Inactive' : 'Active' }
        : category
    ));
  };

  const handleCreateCategory = () => {
    // Just adding a dummy category for now
    const newCategory = {
      id: categories.length + 1,
      name: `New Category ${categories.length + 1}`,
      status: 'Active',
    };
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="p-6">
      {/* Top Section: Title + Create Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Category List</h1>
       <Link href="/admin/category/add">
       <button
          onClick={handleCreateCategory}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
        >
          <FaPlus />
          Create Category
        </button>
       </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-3 border-b">ID</th>
              <th className="px-6 py-3 border-b">Name</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">{category.id}</td>
                <td className="px-6 py-4 border-b">{category.name}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${category.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {category.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b flex space-x-3">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700"
                    title="Toggle Status"
                    onClick={() => handleToggleStatus(category.id)}
                  >
                    <FaSyncAlt />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                    onClick={() => handleDelete(category.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
