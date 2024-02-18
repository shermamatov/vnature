import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../fire";
import { deleteObject, ref } from "firebase/storage";

const stater = {
    tours: [],
    reviews: [],
    tourists: [],
    oneTour: {},
    oneReview: {},
    lang: localStorage.getItem("lang") || "lang",
};

const toursRef = collection(db, "tours");
// const toursRefEng = collection(db, "toursEng");

export const reduxTypes = {
    GET_TOURS: "GET_TOURS",
    ADD_TOUR: "ADD_TOUR",
    GET_REVIEWS: "GET_REVIEWS",
    ADD_REVIEW: "ADD_REVIEW",
    GET_TOURISTS: "GET_TOURISTS",
    GET_ONE_TOUR: "GET_ONE_TOUR",
    GET_ONE_REVIEW: "GET_ONE_REVIEW",
    SET_LANG: "SET_LANG",
};

export const tourReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxTypes.GET_TOURS:
            return { ...state, tours: action.payload };
        case reduxTypes.GET_REVIEWS:
            return { ...state, reviews: action.payload };
        case reduxTypes.GET_TOURISTS:
            return { ...state, tourists: action.payload };
        case reduxTypes.GET_ONE_TOUR:
            return { ...state, oneTour: action.payload };
        case reduxTypes.SET_LANG:
            return { ...state, lang: action.payload };
        case reduxTypes.ADD_TOUR:
            return { ...state, tours: [...state.tours, action.payload] };
        default:
            return state;
    }
};

export const getTours = () => {
    return async (dispatch) => {
        try {
            let data = await getDocs(toursRef);
            dispatch({
                type: reduxTypes.GET_TOURS,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const addTour = (tour) => {
    return async () => {
        try {
            await addDoc(toursRef, tour);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("done");
        }
    };
};

export const getOneTour = (id) => {
    return async (dispatch) => {
        try {
            const oneTourRef = doc(db, "tours", id);
            const data = await getDoc(oneTourRef);
            dispatch({
                type: reduxTypes.GET_ONE_TOUR,
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

export const editTour = (id, data) => {
    return async (dispatch) => {
        try {
            const oneTourRef = doc(db, "tours", id);
            await updateDoc(oneTourRef, data);
            dispatch(getTours());
            console.log("все готово все изменил");
        } catch (e) {
            console.log("все говно");
            console.log(e);
        }
    };
};

export const deleteTour = (id) => {
    return async (dispatch) => {
        try {
            const tourDeleteRef = doc(db, "tours", id);
            const data = await getDoc(tourDeleteRef);
            deleteFile(data.data().mainImg);
            data.data().memories.forEach((item) => {
                deleteFile(item.memoriesImage);
            });
            data.data().galery.forEach((item) => deleteFile(item));
            await deleteDoc(tourDeleteRef);
            dispatch(getTours());
        } catch (e) {
            console.log("ЖОПА" + e);
        }
    };
};

export function translateLevel(level = "средняя") {
    if (level === "высокая") {
        return "high";
    } else if (level === "средняя") {
        return "medium";
    } else if (level === "низкая") {
        return "low";
    }
}

export const deleteFile = (deleteItem) => {
    const deleteRef = ref(storage, deleteItem);
    deleteObject(deleteRef)
        .then(() => {
            console.log("удалено");
            // File deleted successfully
        })
        .catch((error) => {
            console.log("ОШИБКА" + error);
            // Uh-oh, an error occurred!
        });
};
