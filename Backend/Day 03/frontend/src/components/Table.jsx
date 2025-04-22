import Link from "next/link";
import StatusBtn from "./StatusBtn";
import DeleteBtn from "./DeleteBtn";
const Table = ({ data }) => {


    return (
        <div className="p-6">
            <Link href={"/add"} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mb-4" >
                Add New Student

            </Link>
            <h2 className="text-2xl font-bold mb-4">User Table</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Age</th>
                            <th className="px-4 py-2 text-left">Contact</th>
                            <th className="px-4 py-2 text-left">Course</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, id) => (
                            <tr key={id} className="border-t border-gray-200">
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.age}</td>
                                <td className="px-4 py-2">{user.contact}</td>
                                <td className="px-4 py-2">{user.course}</td>
                                <td className="px-4 py-2 space-x-2">
                                    <StatusBtn id={user._id} status={user.status} />
                                </td>
                                <td className="px-4 py-2 space-x-2">
                                    <Link href={"/update/"+user._id}>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                        >
                                            Update
                                        </button></Link>

                                    <DeleteBtn id={user._id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
