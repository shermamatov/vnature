import { storage } from "../../fire";
import { deleteObject, ref } from "firebase/storage";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import axios from "axios";
import { api } from "../../consts";

const stater = {
    tours: [],
    reviews: [],
    allReviews: [],
    allAcceptedReviews: [],
    oneTour: {},
    oneReview: {},
    oneTourReviews: [],
    lang: localStorage.getItem("lang") || "eng",
    user: "",
    cookies: true,
    loader: false,
    error: { isError: false, errorMess: {} },
};

export const reduxTypes = {
    GET_TOURS: "GET_TOURS",
    ADD_TOUR: "ADD_TOUR",
    ADD_REVIEW: "ADD_REVIEW",
    GET_ONE_TOUR: "GET_ONE_TOUR",
    SET_LANG: "SET_LANG",
    SET_USER: "SET_USER",
    SET_COOKIES: "SET_COOKIES",
    GET_REVIEWS: "GET_REVIEWS",
    GET_ALL_REVIEWS: "GET_ALL_REVIEWS",
    GET_ALL_ACCEPTED_REVIEWS: "GET_ALL_ACCEPTED_REVIEWS",
    GET_ONE_TOUR_REVIEWS: "GET_ONE_TOUR_REVIEWS",
    GET_ONE_REVIEW: "GET_ONE_REVIEW",
    OPEN_LOADER: "OPEN_LOADER",
    CLOSE_LOADER: "CLOSE_LOADER",
    OPEN_ERROR: "OPEN_ERROR",
    CLOSE_ERROR: "CLOSE_ERROR",
};

export const tourReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxTypes.GET_TOURS:
            return { ...state, tours: action.payload };
        case reduxTypes.GET_ONE_TOUR:
            return { ...state, oneTour: action.payload };
        case reduxTypes.ADD_TOUR:
            return { ...state, tours: [...state.tours, action.payload] };
        case reduxTypes.SET_LANG:
            return { ...state, lang: action.payload };
        case reduxTypes.SET_COOKIES:
            return { ...state, cookies: action.payload };
        case reduxTypes.SET_USER:
            return { ...state, user: action.payload };
        case reduxTypes.GET_REVIEWS:
            return { ...state, reviews: action.payload };
        case reduxTypes.GET_ALL_REVIEWS:
            return { ...state, allReviews: action.payload };
        case reduxTypes.GET_ALL_ACCEPTED_REVIEWS:
            return { ...state, allAcceptedReviews: action.payload };
        case reduxTypes.ADD_REVIEW:
            return { ...state, reviews: [...state.reviews, action.payload] };
        case reduxTypes.GET_ONE_TOUR_REVIEWS:
            return { ...state, oneTourReviews: action.payload };
        case reduxTypes.OPEN_LOADER:
            return { ...state, loader: true };
        case reduxTypes.CLOSE_LOADER:
            return { ...state, loader: false };
        case reduxTypes.OPEN_ERROR:
            return {
                ...state,
                error: { isError: true, errorMess: action.payload },
            };
        case reduxTypes.CLOSE_ERROR:
            return { ...state, error: { isError: false, errorMess: {} } };
        default:
            return state;
    }
};

export const getTours = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(api.tours);
            dispatch({
                type: reduxTypes.GET_TOURS,
                payload: data,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        } catch (e) {
            console.log(e);
            dispatch({
                type: reduxTypes.OPEN_ERROR,
                payload: e,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        }
    };
};

export const addTour = (tour) => {
    return async (dispatch) => {
        try {
            await axios.post(api.tours, tour);
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        } catch (e) {
            console.log(e);
            dispatch({
                type: reduxTypes.OPEN_ERROR,
                payload: e,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        }
    };
};

export const posterFunction = async (arr, tourId, api) => {
    for (const obj of arr) {
        obj.tour = tourId;
        try {
            await axios.post(api, obj);
        } catch (e) {
            console.log(e);
        }
    }
};

export const editorFunction = async (arr, tourId, api) => {
    for (const obj of arr) {
        obj.tour = tourId;
        try {
            await axios.patch(`${api}${obj.id}/`, obj);
        } catch (e) {
            console.log(e);
        }
    }
};

export const deleterFunction = async (arr, api) => {
    for (const obj of arr) {
        try {
            await axios.delete(`${api}${obj.id}/`);
        } catch (e) {
            console.log(e);
        }
    }
};

export const getOneTour = (id) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`${api.tours}${id}/`);
            dispatch({
                type: reduxTypes.GET_ONE_TOUR,
                payload: data,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        } catch (e) {
            console.log(e);
            dispatch({
                type: reduxTypes.OPEN_ERROR,
                payload: e,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        }
    };
};

export const editTour = (id, data) => {
    return async (dispatch) => {
        try {
            await axios.patch(`${api.tours}${id}/`, data);
            dispatch(getTours());
            console.log("все готово все изменил");
            dispatch({ type: reduxTypes.CLOSE_LOADER });
            return true;
        } catch (e) {
            console.log("все говно");
            console.log(e);
            dispatch({
                type: reduxTypes.OPEN_ERROR,
                payload: e,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
            return false;
        }
    };
};

export const deleteTour = (id) => {
    return async (dispatch) => {
        try {
            const data = await axios.get(`${api.tours}${id}/`);
            if (data?.mainImg) {
                deleteFile(data?.mainImg);
                console.log("удалена mainImg");
            }
            if (data?.memories?.length !== 0 && data?.memories) {
                data?.memories?.forEach((item) => {
                    deleteFile(item?.memoriesImage);
                });
                console.log("удалена memoriesImage");
            }
            if (data?.gallery?.length !== 0 && data?.gallery) {
                data?.gallery?.forEach((item) => deleteFile(item));
                console.log("удалена gallery");
            }
            await axios.delete(`${api.tours}${id}/`);
            dispatch(getTours());
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        } catch (e) {
            dispatch({
                type: reduxTypes.OPEN_ERROR,
                payload: e,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
            console.log(e);
        }
    };
};

export const deleteFile = (deleteItem) => {
    const deleteRef = ref(storage, replaceUrlToFire(deleteItem));
    try {
        deleteObject(deleteRef)
            .then(() => {
                console.log("удалено");
                // File deleted successfully
            })
            .catch((error) => {
                console.log("ОШИБКА" + error);
                // Uh-oh, an error occurred!
            });
    } catch (e) {
        console.log(e);
    }
};

export const handleLogin = (email, password, setErrorMess, navigate) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((item) => {
                navigate("/admin");
                dispatch({
                    type: reduxTypes.SET_USER,
                    payload: item.user.email,
                });
            })
            .catch((err) => {
                console.log(err);
                switch (err.code) {
                    case "auth/user-disabled":
                        setErrorMess(err.message);
                        break;
                    case "auth/invalid-email":
                        setErrorMess(err.message);
                        break;
                    case "auth/user-not-found":
                        setErrorMess(err.message);
                        break;
                    case "auth/wrong-password":
                        setErrorMess(err.message);
                        break;
                    case "auth/invalid-credential":
                        setErrorMess(err.message);
                        break;
                    default:
                        break;
                }
            });
    };
};

export const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
};

export const authListener = () => {
    return (dispatch) => {
        let auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                console.log(user);
                dispatch({ type: reduxTypes.SET_USER, payload: user.email });
            } else {
                dispatch({ type: reduxTypes.SET_USER, payload: "" });
            }
        });
    };
};

export const addReview = (review, setSuccess, setLoader) => {
    return async () => {
        try {
            await axios.post(api.reviews, review);
            setSuccess(true);
            setLoader(false);
        } catch (e) {
            console.log(e);
            setSuccess(false);
            setLoader(false);
        }
    };
};
export const getReviews = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(api.reviews);
            dispatch({
                type: reduxTypes.GET_REVIEWS,
                payload: data,
            });
        } catch (e) {
            console.log(e);
        }
    };
};
export const getOneTourReviews = (id = 1) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(
                `${api.reviews}?isAccepted=true&tourId=${id}`
            );
            dispatch({
                type: reduxTypes.GET_ONE_TOUR_REVIEWS,
                payload: data,
            });
        } catch (e) {
            console.log(e);
        }
    };
};
export const getAllReviews = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`${api.reviews}?isAccepted=false`);
            dispatch({
                type: reduxTypes.GET_ALL_REVIEWS,
                payload: data,
            });
        } catch (e) {
            console.log(e);
        }
    };
};
export const getAllAcceptedReviews = () => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`${api.reviews}?isAccepted=true`);
            dispatch({
                type: reduxTypes.GET_ALL_ACCEPTED_REVIEWS,
                payload: data,
            });
        } catch (e) {
            console.log(e);
        }
    };
};
export const editReview = (id, data) => {
    return async (dispatch) => {
        try {
            await axios.patch(`${api.reviews}${id}/`, data);
            // const oneReviewRef = doc(db, "reviews", id);
            // await updateDoc(oneReviewRef, data);
            dispatch(getAllAcceptedReviews());
            dispatch(getAllReviews());
            console.log("все готово все изменил");
        } catch (e) {
            console.log("все говно");
            console.log(e);
        }
    };
};
export const deleteReview = (id) => {
    return async (dispatch) => {
        try {
            axios.delete(`${api.reviews}${id}`);
            dispatch(getAllAcceptedReviews());
            dispatch(getAllReviews());
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        } catch (e) {
            console.log("ЖОПА" + e);
            dispatch({
                type: reduxTypes.OPEN_ERROR,
                payload: e,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
        }
    };
};

export function getInitials(name) {
    let nameArr = name.split(" ");
    if (nameArr.length > 1) {
        return nameArr[0][0] + nameArr[1][0];
    } else {
        return nameArr[0][0] + nameArr[0][0];
    }
}

export function translateLevel(level = "средняя") {
    if (level === "высокая") {
        return "high";
    } else if (level === "средняя") {
        return "medium";
    } else if (level === "низкая") {
        return "low";
    } else if (level === "выше среднего") {
        return "above average";
    }
}

export function wordTransformer(day = 5) {
    if (day === 1) {
        return "день";
    } else if (day > 1 && day < 5) {
        return "дня";
    } else if (day >= 5) {
        return "дней";
    }
}

export function nightsTransformer(nights) {
    if (nights === 1) {
        return "ночь";
    } else if (nights > 1 && nights < 5) {
        return "ночи";
    } else if (nights >= 5) {
        return "ночей";
    }
}

export function replaceUrlToImageKit(fireUrl) {
    let fireUrlConst = fireUrl;
    return fireUrlConst.replace(
        "https://firebasestorage.googleapis.com",
        "https://ik.imagekit.io/vnature"
    );
}

export function replaceUrlToFire(imageKitUrl) {
    let imageKitUrlConst = imageKitUrl;
    return imageKitUrlConst.replace(
        "https://ik.imagekit.io/vnature",
        "https://firebasestorage.googleapis.com"
    );
}
