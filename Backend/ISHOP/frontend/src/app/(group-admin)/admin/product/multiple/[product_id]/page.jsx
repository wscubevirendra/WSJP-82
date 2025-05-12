'use client';
import { FaPlus } from 'react-icons/fa';
import { axiosApiInstance } from '@/app/library/helper';
import { notify } from '@/app/library/helper';

export default function AddProductImage({ params }) {
    const id = params.product_id;

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let image of e.target.productImage.files) {
            formData.append("image", image)
        }

        axiosApiInstance.post("product/multiple-images/" + id, formData).then(
            (response) => {
                notify(response.data.msg, response.data.flag)
                if (response.data.flag === 1) {
                    console.log(response)
                }
            }

        ).catch(
            (err) => {
                notify("Something went wrong", 0)
            }
        )


    }

    return (
        <section className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Add a New Product</h2>
                <form onSubmit={submitHandler} className="space-y-6">


                    <div>
                        <label htmlFor="productImage" className="text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="productImage"
                            name="productImage"
                            multiple
                            required
                            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition"
                        >
                            <FaPlus />
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
