import { FiEdit, FiPlus } from "react-icons/fi";
import Link from "next/link";
import { getColor } from "@/app/library/api-call";
import DeleteBtn from "@/component/admin/DeleteBtn";
import StatusBtn from "@/component/admin/StatusBtn";

export default async function ViewColorPage() {
  const colorJSON = await getColor();
  const colors = await colorJSON?.colors


  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Color / View</h2>

          <Link className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition" href="/admin/color/add">  <FiPlus className="text-lg" />
            Add Color</Link>

        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Code</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {/* Example rows */}
              {Array.isArray(colors) && colors.map((color, index) => (
                <tr key={color._id} className=" shadow hover:bg-gray-50">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 font-medium">{color.name}</td>
                  <td className="p-4">{color.slug}</td>
                  <td className="p-4">{color.Hexcode}</td>
                  <td className="p-4">
                    <StatusBtn statusURl={`color/status/${color._id}`} status={color.status} />
                  </td>

                  <td className="p-4 flex justify-center gap-4">
                    <Link href={`/admin/color/edit/${color._id}`}>
                      <button className="text-yellow-500 hover:text-yellow-600 transition">
                        <FiEdit className="text-lg" />
                      </button>
                    </Link>
                    <DeleteBtn deleteURL={`color/delete/${color._id}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
