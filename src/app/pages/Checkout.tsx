import React from "react";
import { CiTrash } from "react-icons/ci";

const CheckoutPage = ({ cartItems }: { cartItems: any[] }) => {
    return (
        <div className="w-full min-w-[30em] max-w-[30rem] h-[100vh] px-10 rounded-2xl flex flex-col gap-6 bg-white shadow -lg p-6 border-l-4 border-[#6F4E37]">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Your Order</h3>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">No items added yet.</p>
            ) : (
                cartItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-300 rounded-xl p-4 flex flex-col gap-2"
                    >
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold text-[#3E2723]">
                                {item.name?.toUpperCase()}
                            </p>
                            <p className="text-xl font-bold text-[#6F4E37]">
                                RWF {item.price}
                            </p>
                        </div>
                        <p className="text-sm font-normal italic">{item.description}</p>
                        <div className="mt-2 cursor-pointer self-end">
                            <CiTrash size={24} color="red" />
                        </div>
                    </div>
                ))
            )}
            {cartItems.length > 0 && (
                <div className="flex gap-3">
                    <button className="flex-1 border-2 border-[#6F4E37] text-[#6F4E37] font-medium px-4 py-2 rounded-lg hover:bg-[#F5F3EE] transition">
                        Cancel
                    </button>

                    <button className="flex-1 bg-[#6F4E37] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#5C4033] transition">
                        Pay Now
                    </button>
                </div>
            )}
        </div>
    );
};
export default CheckoutPage;
