import { Alert } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ReviewSuccess = ({ setReviewSuccess }) => {
    let lang = useSelector((item) => item.tours.lang);
    return (
        <div>
            <Alert
                severity="success"
                variant="filled"
                // onClose={() => setOrderSuccess(false)}
            >
                <div className="flex flex-col items-center">
                    <p>
                        {lang === "rus"
                            ? "Ваш отзыв находится в обработке"
                            : "Your review is in progress"}
                    </p>
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
