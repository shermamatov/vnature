import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../fire";

const stater = {
    mainData: {},
};
export const adminReducer = (state = stater, action) => {
    switch (action.type) {
        case "GET_MAIN_DATA":
            return { ...state, mainData: action.payload };
        default:
            return state;
    }
};

let mainDataRef = doc(db, "admin", "mainData");

export const getMainData = () => {
    return async (dispatch) => {
        try {
            let data = await getDoc(mainDataRef);
            dispatch({
                type: "GET_MAIN_DATA",
                payload: {
                    ...data.data(),
                    id: data.id,
                },
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const editMainData = (data) => {
    return async (dispatch) => {
        try {
            await updateDoc(mainDataRef, data);
            dispatch(getMainData());
            console.log("все готово все изменил");
        } catch (e) {
            console.log("все говно");
            console.log(e);
        }
    };
};
