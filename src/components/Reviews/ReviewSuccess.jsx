import { Alert } from "@mui/material";
import React from "react";

const ReviewSuccess = ({ setReviewSuccess }) => {
    return (
        <div>
            <Alert
                severity="success"
                variant="filled"
                // onClose={() => setOrderSuccess(false)}
            >
                <div className="flex flex-col items-center">
                    <p>Ваш отзыв находится в обработке</p>
                    <button
                        onClick={() => setReviewSuccess(false)}
                        className="mt-2 w-16 border-white border text-white rounded"
                    >
                        ok
                    </button>
                </div>
            </Alert>
        </div>
    );
};

export default ReviewSuccess;
