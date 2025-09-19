import React, { useState } from "react";
import { CiTrash } from "react-icons/ci";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f5f3ee",
    border: ".8px solid #C4A484",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
};

const CheckoutPage = ({ cartItems }: { cartItems: any[] }) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <div className="mb-2 cursor-pointer self-end">
                            <CiTrash size={24} color="red" />
                        </div>
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold text-[#3E2723]">
                                {item.name?.toUpperCase()}
                            </p>
                            <p className="text-xl font-bold text-[#6F4E37]">
                                RWF {item.price?.toLocaleString()}
                            </p>
                        </div>
                        <p className="text-sm font-normal italic">{item.description}</p>

                    </div>
                ))
            )}
            {cartItems.length > 0 && (
                <div className="flex gap-3">
                    <button className="flex-1 border-2 border-[#6F4E37] text-[#6F4E37] font-medium px-4 py-2 rounded-lg hover:bg-[#F5F3EE] transition">
                        Cancel
                    </button>

                    <button
                        onClick={handleOpen}
                        className="flex-1 bg-[#6F4E37] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#5C4033] transition"
                    >
                        Pay Now
                    </button>
                    <div></div>
                </div>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Enter Momo Number
                    </Typography>
                    <div className="mt-4">
                        <PhoneInput
                            country="US"
                            value={value}
                            onChange={setValue} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
};
export default CheckoutPage;
