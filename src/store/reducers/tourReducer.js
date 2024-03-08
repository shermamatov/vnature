import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db, storage } from "../../fire";
import { deleteObject, ref } from "firebase/storage";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const stater = {
    tours: [],
    reviews: [],
    allReviews: [],
    allAcceptedReviews: [],
    tourists: [],
    oneTour: {},
    oneReview: {},
    oneTourReviews: [],
    lang: localStorage.getItem("lang") || "eng",
    user: "",
    cookies: true,
};

const toursRef = collection(db, "tours");
const toursReviewRef = collection(db, "reviews");

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
            if (data?.data()?.mainImg) {
                deleteFile(data?.data()?.mainImg);
                console.log("удалена mainImg");
            }
            if (
                data?.data()?.memories?.length !== 0 &&
                data?.data()?.memories
            ) {
                data?.data()?.memories?.forEach((item) => {
                    deleteFile(item?.memoriesImage);
                });
                console.log("удалена memoriesImage");
            }
            if (data?.data()?.galery?.length !== 0 && data?.data()?.galery) {
                data?.data()?.galery?.forEach((item) => deleteFile(item));
                console.log("удалена galery");
            }
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
            await addDoc(toursReviewRef, review);
            setSuccess(true);
            setLoader(false);
        } catch (e) {
            console.log(e);
        }
    };
};

export const getReviews = () => {
    return async (dispatch) => {
        try {
            let data = await getDocs(toursReviewRef);
            dispatch({
                type: reduxTypes.GET_REVIEWS,
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

export const getOneTourReviews = (id) => {
    return async (dispatch) => {
        try {
            let q = query(
                toursReviewRef,
                where("tourId", "==", id),
                where("isAccepted", "==", true)
            );
            // let q2 = query(q, where("isAccepted", "==", true));
            let data = await getDocs(q);
            dispatch({
                type: reduxTypes.GET_ONE_TOUR_REVIEWS,
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

export const getAllReviews = () => {
    return async (dispatch) => {
        try {
            let q = query(toursReviewRef, where("isAccepted", "==", false));
            let data = await getDocs(q);
            dispatch({
                type: reduxTypes.GET_ALL_REVIEWS,
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

export const getAllAcceptedReviews = () => {
    return async (dispatch) => {
        try {
            let q = query(toursReviewRef, where("isAccepted", "==", true));
            let data = await getDocs(q);
            dispatch({
                type: reduxTypes.GET_ALL_ACCEPTED_REVIEWS,
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

export const editReview = (id, data) => {
    return async (dispatch) => {
        try {
            const oneReviewRef = doc(db, "reviews", id);
            await updateDoc(oneReviewRef, data);
            dispatch(getAllAcceptedReviews());
            dispatch(getAllReviews());
            console.log("все готово все изменил");
        } catch (e) {
            console.log("все говно");
            console.log(e);
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

export const deleteReview = (id) => {
    return async (dispatch) => {
        try {
            const reviewDeleteRef = doc(db, "reviews", id);
            await deleteDoc(reviewDeleteRef);
            dispatch(getAllAcceptedReviews());
            dispatch(getAllReviews());
        } catch (e) {
            console.log("ЖОПА" + e);
        }
    };
};
