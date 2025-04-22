'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';


const AddPage = () => {
    const router = useRouter();
    const notify = (msg, flag) => toast(msg, { type: flag == true ? "sucess" : "error" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            age: e.target.age.value,
            contact: e.target.contact.value,
            course: e.target.course.value
        }
        axios.post("http://localhost:5000/student/register", data).then(
            (response) => {
                notify(response.data.msg, response.data.flag)
                if (response.data.flag === 1) {
                    router.push("/")
                
                }
            }
        ).catch(
            (err) => {
                console.log(err)

            }
        )

    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <ToastContainer />
            <Link href={"/"} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mb-4" >
                Back to Home Page
            </Link>

            <h2 className="text-2xl font-semibold mb-6 text-center">User Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={"virendra"}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        

                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"

                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block mb-1 font-medium">Age</label>
                    <input
                        type="number"
                        name="age"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"

                    />
                </div>

                {/* Contact */}
                <div>
                    <label className="block mb-1 font-medium">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"

                    />
                </div>

                {/* Course */}
                <div>
                    <label className="block mb-1 font-medium">Course</label>
                    <select name="course"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="">Select 0ption</option>
                        <option value="Web Development">Web Development</option>
                        <option value="DM">DM</option>
                        <option value="Python">Python</option>
                    </select>

                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPage;
