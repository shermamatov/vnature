import { Alert } from "@mui/material";
import React from "react";

const OrderSuccess = ({ setOrderSuccess }) => {
    return (
        <div>
            <Alert
                severity="success"
                variant="filled"
                // onClose={() => setOrderSuccess(false)}
            >
                <div className="flex flex-col items-center">
                    <p>Ваша заявка принята, скоро мы свяжемся с вами</p>
                    <button
                        onClick={() => setOrderSuccess(false)}
                        className="mt-2 w-16 border-white border text-white rounded"
                    >
                        ok
                    </button>
                </div>
            </Alert>
        </div>
    );
};

export default OrderSuccess;
