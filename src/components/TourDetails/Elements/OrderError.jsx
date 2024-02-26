import { Alert } from "@mui/material";
import React from "react";

const OrderError = ({ setOrderError }) => {
    return (
        <div>
            <Alert
                variant="filled"
                severity="error"
                onClose={() => setOrderError(false)}
            >
                Упс что-то пошло не так, попробуйте связатся с нами
            </Alert>
        </div>
    );
};

export default OrderError;
