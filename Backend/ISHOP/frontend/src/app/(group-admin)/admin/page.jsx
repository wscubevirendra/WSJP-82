import { FaDatabase, FaUserFriends, FaCubes, FaClipboardList, FaChartLine, FaServer } from 'react-icons/fa';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Database Categories</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <FaDatabase className="text-blue-600 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">SQL Databases</h2>
          <p className="text-gray-500 text-sm">Manage relational data with structured query language.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <FaUserFriends className="text-green-600 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">User Data</h2>
          <p className="text-gray-500 text-sm">Store and manage user profiles, sessions, and authentication.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <FaCubes className="text-purple-600 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Inventory</h2>
          <p className="text-gray-500 text-sm">Organize product catalogs, stock, and logistics data.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center">
          <div className="bg-yellow-100 p-4 rounded-full mb-4">
            <FaClipboardList className="text-yellow-600 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Task Management</h2>
          <p className="text-gray-500 text-sm">Database for project tasks, tracking, and deadlines.</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <FaChartLine className="text-red-600 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Analytics</h2>
          <p className="text-gray-500 text-sm">Store and process analytical data and business insights.</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center">
          <div className="bg-indigo-100 p-4 rounded-full mb-4">
            <FaServer className="text-indigo-600 text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Server Logs</h2>
          <p className="text-gray-500 text-sm">Maintain backend server logs, errors, and activity monitoring.</p>
        </div>
      </div>
    </div>
  );
};

export default page;
