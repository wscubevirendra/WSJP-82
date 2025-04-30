import { FiEdit, FiPlus } from "react-icons/fi";
import Link from "next/link";
import { getCategory } from "@/app/library/api-call";
import DeleteBtn from "@/component/admin/DeleteBtn";
import StatusBtn from "@/component/admin/StatusBtn";

export default async function ViewCategoryPage() {
  const categoryJSON = await getCategory();
  const categories = await categoryJSON?.categories


  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Product / View</h2>

          <Link className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition" href="/admin/product/add">  <FiPlus className="text-lg" />
            Add Product</Link>

        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {/* Example rows */}
              {Array.isArray(categories) && categories.map((cat, index) => (
                <tr key={cat._id} className=" shadow hover:bg-gray-50">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 font-medium">{cat.name}</td>
                  <td className="p-4">{cat.slug}</td>
                  <td className="p-4">
                    <img width='25px' src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/category/${cat.categoryImage}`} alt="" />
                  </td>
                  <td className="p-4">
                    <StatusBtn statusURl={`category/status/${cat?._id}`} status={cat.status} />
                  </td>

                  <td className="p-4 flex justify-center gap-4">
                    <Link href={`/admin/category/edit/${cat?._id}`}>
                      <button className="text-yellow-500 hover:text-yellow-600 transition">
                        <FiEdit className="text-lg" />
                      </button>
                    </Link>
                    <DeleteBtn deleteURL={`category/delete/${cat?._id}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div >
    </div >
  );
}
