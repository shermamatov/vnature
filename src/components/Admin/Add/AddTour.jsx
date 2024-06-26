import React, { useEffect, useState } from "react";
import "../Admin.css";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../../fire";
import {
    deleteFile,
    posterFunction,
    reduxTypes,
    replaceUrlToImageKit,
} from "../../../store/reducers/tourReducer";
import AddMemoriesModal from "../../elements/AddMemoriesModal";
import EditMemoriesModal from "../../elements/EditMemoriesModal";
import AccordionElement2 from "../../TourDetails/Elements/AccordionElement2";
import AddModal from "../../elements/AddModal";
import EditModal from "../../elements/EditModal";
import AccordionElement from "../../TourDetails/Elements/Accordion";
import { api, months } from "../../../consts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTour = () => {
    let loader = useSelector((item) => item.tours.loader);
    let [inputCount, setInputCount] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
    let [memoriesModal, setMemoriesModal] = useState(false);
    let [memoriesModalEdit, setMemoriesModalEdit] = useState(false);
    let [importantModal, setImportantModal] = useState(false);
    let [importantModalEdit, setImportantModalEdit] = useState(false);
    let [dayModal, setDayModal] = useState(false);
    let [dayModalEdit, setDayModalEdit] = useState(false);
    let [optionalModal, setOptionalModal] = useState(false);
    let [optionalModalEdit, setOptionalModalEdit] = useState(false);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    // ! modal states
    let [oneMemories, setOneMemories] = useState({});
    let [oneMemoriesEng, setOneMemoriesEng] = useState({});
    let [oneImportant, setOneImportant] = useState({});
    let [oneImportantEng, setOneImportantEng] = useState({});
    let [oneDay, setOneDay] = useState({});
    let [oneDayEng, setOneDayEng] = useState({});
    let [oneOptional, setOneOptional] = useState({});
    let [oneOptionalEng, setOneOptionalEng] = useState({});
    // ! data states
    let [title, setTitle] = useState("");
    let [titleEng, setTitleEng] = useState("");
    let [slogan, setSlogan] = useState("");
    let [sloganEng, setSloganEng] = useState("");
    let [description, setDescription] = useState("");
    let [descriptionEng, setDescriptionEng] = useState("");
    let [level, setLevel] = useState("средняя");
    let [days, setDays] = useState(1);
    let [cardImg, setCardImg] = useState("");
    let [gallery, setGalery] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]);
    let [programmDesc, setProgrammDesc] = useState("");
    let [programmDescEng, setProgrammDescEng] = useState("");
    let [age, setAge] = useState(7);
    let [month1, setMonth1] = useState("1");
    let [month2, setMonth2] = useState("3");
    let [price1, setPrice1] = useState(0);
    let [price2, setPrice2] = useState(0);
    let [price3, setPrice3] = useState(0);
    let [price4, setPrice4] = useState(0);
    let [price5, setPrice5] = useState(0);
    let [price6, setPrice6] = useState(0);
    let [price7, setPrice7] = useState(0);
    let [price8, setPrice8] = useState(0);
    let [price9, setPrice9] = useState(0);
    let [price10, setPrice10] = useState(0);
    let [memories, setMemories] = useState([]);
    let [memoriesEng, setMemoriesEng] = useState([]);

    let [important, setImportant] = useState([]);
    let [importantEng, setImportantEng] = useState([]);

    let [programmDays, setProgrammDays] = useState([]);
    let [programmDaysEng, setProgrammDaysEng] = useState([]);

    let [optional, setOptional] = useState([]);
    let [optionalEng, setOptionalEng] = useState([]);

    const [uploadProgress, setUploadProgress] = useState(null);

    const [tourId, setTourId] = useState("");

    function dataCheck() {
        if (
            title &&
            titleEng &&
            slogan &&
            sloganEng &&
            description &&
            descriptionEng &&
            level &&
            days &&
            cardImg &&
            gallery[0] !== null &&
            gallery[1] !== null &&
            gallery[2] !== null &&
            gallery[3] !== null &&
            gallery[4] !== null &&
            gallery[5] !== null &&
            programmDesc &&
            programmDescEng &&
            age &&
            memories.length !== 0 &&
            memoriesEng.length !== 0 &&
            importantEng.length !== 0 &&
            importantEng.length !== 0 &&
            programmDays.length !== 0 &&
            programmDaysEng.length !== 0
        ) {
            return true;
        } else {
            return false;
        }
    }

    const uploadFile = (
        stateName,
        setStateName,
        isLoop = false,
        index = false
    ) => {
        if (stateName) {
            let x = Math.floor(Math.random() * 100 + 1);
            const storageRef = ref(storage, "images/" + stateName.name + x);
            const uploadTask = uploadBytesResumable(storageRef, stateName);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress !== 100 ? true : false);
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case "storage/unauthorized":
                            // User doesn't have permission to access the object
                            break;
                        case "storage/canceled":
                            // User canceled the upload
                            break;
                        // ...
                        case "storage/unknown":
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                        default:
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            let downloadObj = {
                                imgUrl: replaceUrlToImageKit(downloadURL),
                            };
                            if (isLoop) {
                                let psevdoArr = [...gallery];
                                if (index !== false) {
                                    let deleteItem = psevdoArr.splice(
                                        index,
                                        1,
                                        downloadObj
                                    );
                                    let psevdoInputCountArr = [...inputCount];
                                    psevdoInputCountArr.splice(
                                        index,
                                        1,
                                        downloadObj
                                    );
                                    setInputCount(psevdoInputCountArr);
                                    if (
                                        deleteItem[0] !== "" &&
                                        deleteItem.length != 0 &&
                                        deleteItem[0] !== null
                                    ) {
                                        deleteFile(deleteItem[0].imgUrl);
                                    }
                                } else {
                                    psevdoArr.push(downloadObj);
                                }
                                setStateName(psevdoArr);
                            } else {
                                setStateName(replaceUrlToImageKit(downloadURL));
                            }
                            // setUploadProgress(downloadURL && true);
                            console.log(
                                "File available at",
                                replaceUrlToImageKit(downloadURL)
                            );
                        }
                    );
                }
            );
        }
    };

    async function dataConstructor() {
        let filtredGalery = [...gallery]?.filter((item) => item !== null);
        let priceArr = [
            {
                price: price1,
                id: 1,
                peopleCount: 1,
            },
            {
                price: price2,
                id: 2,
                peopleCount: 2,
            },
            {
                price: price3,
                id: 3,
                peopleCount: 3,
            },
            {
                price: price4,
                id: 4,
                peopleCount: 4,
            },
            {
                price: price5,
                id: 5,
                peopleCount: 5,
            },
            {
                price: price6,
                id: 6,
                peopleCount: 6,
            },
            {
                price: price7,
                id: 7,
                peopleCount: 7,
            },
            {
                price: price8,
                id: 8,
                peopleCount: 8,
            },
            {
                price: price9,
                id: 9,
                peopleCount: 9,
            },
            {
                price: price10,
                id: 10,
                peopleCount: 10,
            },
        ];
        let obj = {
            title,
            titleEng,
            slogan,
            sloganEng,
            daysCount: days,
            level,
            age,
            start: month1,
            end: month2,
            description,
            descriptionEng,
            programmDescription: programmDesc,
            programmDescriptionEng: programmDescEng,
            mainImg: cardImg,
            gallery: [],
            programmDays: [],
            programmDaysEng: [],
            important: [],
            importantEng: [],
            memories: [],
            memoriesEng: [],
            optional: [],
            optionalEng: [],
            price: [],
        };
        try {
            let tourResponse = await axios.post(api.tours, obj);
            const newTourId = tourResponse.data.id;
            setTourId(newTourId);
            posterFunction(filtredGalery, newTourId, api.gallery);
            posterFunction(programmDays, newTourId, api.programmDays);
            posterFunction(programmDaysEng, newTourId, api.programmDaysEng);
            posterFunction(important, newTourId, api.important);
            posterFunction(importantEng, newTourId, api.importantEng);
            posterFunction(memories, newTourId, api.memories);
            posterFunction(memoriesEng, newTourId, api.memoriesEng);
            posterFunction(optional, newTourId, api.optional);
            posterFunction(optionalEng, newTourId, api.optionalEng);
            posterFunction(priceArr, newTourId, api.price);
            dispatch({ type: reduxTypes.CLOSE_LOADER });
            navigate("/admin/tours");
        } catch (e) {
            dispatch({
                type: reduxTypes.OPEN_ERROR,
                payload: e,
            });
            dispatch({ type: reduxTypes.CLOSE_LOADER });
            console.log(e);
        }
    }

    function addMemories(memoriesTitle, memoriesImage) {
        let psevdoMemoriesArr = [...memories];
        psevdoMemoriesArr.push({
            memoriesTitle: memoriesTitle,
            memoriesImage: memoriesImage,
        });
        setMemories(psevdoMemoriesArr);
    }
    function addMemoriesEng(memoriesTitle, memoriesImage) {
        let psevdoMemoriesArr = [...memoriesEng];
        psevdoMemoriesArr.push({
            memoriesTitle: memoriesTitle,
            memoriesImage: memoriesImage,
        });
        setMemoriesEng(psevdoMemoriesArr);
    }
    function deleteMemories(index) {
        let psevdoMemoriesArr = memories.filter(
            (item, itemIndex) => itemIndex !== index
        );
        let psevdoMemoriesArrEng = memoriesEng.filter(
            (item, itemIndex) => itemIndex !== index
        );
        let deleteItem = memories.find(
            (item, itemIndex) => index === itemIndex
        );
        deleteFile(deleteItem.memoriesImage);
        setMemories(psevdoMemoriesArr);
        setMemoriesEng(psevdoMemoriesArrEng);
    }
    function editMemories(item, index) {
        let psevdoMemoriesArr = [...memories];
        psevdoMemoriesArr.splice(index, 1, item);
        setMemories(psevdoMemoriesArr);
    }
    function editMemoriesEng(item, index) {
        let psevdoMemoriesArr = [...memoriesEng];
        psevdoMemoriesArr.splice(index, 1, item);
        setMemoriesEng(psevdoMemoriesArr);
    }

    function addImportant(title, desc) {
        let psevdoImportant = [...important];
        psevdoImportant.push({
            title,
            desc,
        });
        setImportant(psevdoImportant);
    }
    function addImportantEng(title, desc) {
        let psevdoImportant = [...importantEng];
        psevdoImportant.push({
            title,
            desc,
        });
        setImportantEng(psevdoImportant);
    }

    function editImportant(item, index) {
        let psevdoImportant = [...important];
        psevdoImportant.splice(index, 1, item);
        setImportant(psevdoImportant);
    }
    function editImportantEng(item, index) {
        let psevdoImportant = [...importantEng];
        psevdoImportant.splice(index, 1, item);
        setImportantEng(psevdoImportant);
    }
    function deleteImportant(index) {
        let psevdoImportant = important.filter(
            (item, itemIndex) => itemIndex !== index
        );
        let psevdoImportantEng = importantEng.filter(
            (item, itemIndex) => itemIndex !== index
        );
        setImportant(psevdoImportant);
        setImportantEng(psevdoImportantEng);
    }

    function addProgrammDay(title, desc) {
        let psevdoArr = [...programmDays];
        let obj = {
            title,
            desc,
            day: psevdoArr.length + 1,
        };
        psevdoArr?.push(obj);
        setProgrammDays(psevdoArr);
    }
    async function addProgrammDayEng(title, desc) {
        let psevdoArr = [...programmDaysEng];
        let obj = {
            title,
            desc,
            day: psevdoArr.length + 1,
        };
        psevdoArr?.push(obj);
        setProgrammDaysEng(psevdoArr);
    }
    function editProgrammDay(item, index) {
        let psevdoDay = [...programmDays];
        psevdoDay.splice(index, 1, item);
        setProgrammDays(psevdoDay);
    }
    function editProgrammDayEng(item, index) {
        let psevdoDay = [...programmDaysEng];
        psevdoDay.splice(index, 1, item);
        setProgrammDaysEng(psevdoDay);
    }
    function deleteProgrammDay(index) {
        let psevdoArr = programmDays.filter(
            (item, itemIndex) => itemIndex !== index
        );
        let psevdoArrEng = programmDaysEng.filter(
            (item, itemIndex) => itemIndex !== index
        );
        setProgrammDays(psevdoArr);
        setProgrammDaysEng(psevdoArrEng);
    }

    function addOptional(title, desc) {
        let psevdoArr = [...optional];
        psevdoArr.push({
            title,
            desc,
        });
        setOptional(psevdoArr);
    }
    function addOptionalEng(title, desc) {
        let psevdoArr = [...optionalEng];
        psevdoArr.push({
            title,
            desc,
        });
        setOptionalEng(psevdoArr);
    }
    function editOptional(item, index) {
        let psevdoOptional = [...optional];
        psevdoOptional.splice(index, 1, item);
        setOptional(psevdoOptional);
    }
    function editOptionalEng(item, index) {
        let psevdoOptional = [...optionalEng];
        psevdoOptional.splice(index, 1, item);
        setOptionalEng(psevdoOptional);
    }
    function deleteOptional(index) {
        let psevdoOptional = optional.filter(
            (item, itemIndex) => itemIndex !== index
        );
        let psevdoOptionalEng = optionalEng.filter(
            (item, itemIndex) => itemIndex !== index
        );
        setOptional(psevdoOptional);
        setOptionalEng(psevdoOptionalEng);
    }

    function deleteImageFromGalery(index = 0) {
        let findDeleteImgRef = gallery.find(
            (item, itemIndex) => itemIndex === index
        );

        let filteredGalery = gallery.filter(
            (item, itemIndex) => itemIndex !== index
        );
        let filteredInputCount = inputCount.filter(
            (item, itemIndex) => itemIndex !== index
        );

        findDeleteImgRef && deleteFile(findDeleteImgRef.imgUrl);
        setGalery(filteredGalery);
        setInputCount(filteredInputCount);
    }

    // useEffect(() => {
    //     if (parseInt(days) < 50) {
    //         let psevdo = [];
    //         for (let i = 0; i < parseInt(days); i++) {
    //             psevdo.push({
    //                 title: `заголовок`,
    //                 desc: `описание`,
    //                 day: i + 1,
    //             });
    //             setProgrammDays(psevdo);
    //             setProgrammDaysEng(psevdo);
    //         }
    //     }
    // }, [days]);

    return (
        <div>
            {uploadProgress && (
                <div className="fixed z-30 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center">
                    <div className="loaderAdmin"></div>
                </div>
            )}
            {memoriesModal && (
                <div
                    onClick={() => setMemoriesModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center"
                >
                    <AddMemoriesModal
                        addMemoriesEng={addMemoriesEng}
                        uploadFile={uploadFile}
                        setMemoriesModal={setMemoriesModal}
                        addMemories={addMemories}
                    />
                </div>
            )}
            {memoriesModalEdit && (
                <div
                    onClick={() => setMemoriesModalEdit(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center"
                >
                    <EditMemoriesModal
                        editMemoriesEng={editMemoriesEng}
                        uploadFile={uploadFile}
                        setMemoriesModal={setMemoriesModalEdit}
                        editMemories={editMemories}
                        oneMemories={oneMemories}
                        oneMemoriesEng={oneMemoriesEng}
                    />
                </div>
            )}
            {importantModal && (
                <div
                    onClick={() => setImportantModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center"
                >
                    <AddModal
                        addEng={addImportantEng}
                        add={addImportant}
                        setModal={setImportantModal}
                        placeholder="важно знать"
                    />
                </div>
            )}
            {importantModalEdit && (
                <div
                    onClick={() => setImportantModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center"
                >
                    <EditModal
                        oneItemEng={oneImportantEng}
                        editFunctionEng={editImportantEng}
                        editFunction={editImportant}
                        oneItem={oneImportant}
                        setModal={setImportantModalEdit}
                        isDay={false}
                    />
                </div>
            )}
            {optionalModal && (
                <div
                    onClick={() => setOptionalModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center"
                >
                    <AddModal
                        add={addOptional}
                        addEng={addOptionalEng}
                        setModal={setOptionalModal}
                        placeholder="дополнительно"
                    />
                </div>
            )}
            {optionalModalEdit && (
                <div
                    onClick={() => setOptionalModalEdit(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center"
                >
                    <EditModal
                        oneItem={oneOptional}
                        oneItemEng={oneOptionalEng}
                        editFunction={editOptional}
                        editFunctionEng={editOptionalEng}
                        setModal={setOptionalModalEdit}
                        isDay={false}
                    />
                </div>
            )}
            {dayModal && (
                <div
                    onClick={() => setDayModal(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center"
                >
                    <AddModal
                        addEng={addProgrammDayEng}
                        add={addProgrammDay}
                        setModal={setDayModal}
                        placeholder={"программа тура"}
                    />
                </div>
            )}
            {dayModalEdit && (
                <div
                    onClick={() => setDayModalEdit(false)}
                    className="fixed z-20 top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center items-center"
                >
                    <EditModal
                        editFunction={editProgrammDay}
                        editFunctionEng={editProgrammDayEng}
                        oneItem={oneDay}
                        oneItemEng={oneDayEng}
                        setModal={setDayModalEdit}
                        isDay={true}
                    />
                </div>
            )}
            <div className="content pb-32">
                <h1 className="text-5xl font-bold text-white mt-4 mb-4">
                    новый тур
                </h1>
                <div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            название тура
                        </label>
                        <div className="grid md:gap-2 grid-cols-1 md:grid-cols-2">
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="название тура на русском"
                                className="input"
                                type="text"
                            />
                            <input
                                onChange={(e) => setTitleEng(e.target.value)}
                                placeholder="название тура на английском"
                                className="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            слоган
                        </label>
                        <div className="grid md:gap-2 grid-cols-1 md:grid-cols-2">
                            <input
                                onChange={(e) => setSlogan(e.target.value)}
                                placeholder="слоган тура на русском"
                                className="input"
                                type="text"
                            />
                            <input
                                onChange={(e) => setSloganEng(e.target.value)}
                                placeholder="слоган тура на английском"
                                className="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            количество дней
                        </label>
                        <input
                            onChange={(e) => setDays(e.target.value)}
                            placeholder="количество дней"
                            className="input"
                            type="number"
                        />
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            возраст
                        </label>
                        <select
                            defaultValue={"7"}
                            onChange={(e) => setAge(e.target.value)}
                            // placeholder=""
                            className="input"
                        >
                            <option value="7">от 7 лет</option>
                            <option value="8">от 8 лет</option>
                            <option value="9">от 9 лет</option>
                            <option value="10">от 10 лет</option>
                            <option value="11">от 11 лет</option>
                            <option value="12">от 12 лет</option>
                            <option value="13">от 13 лет</option>
                            <option value="14">от 14 лет</option>
                            <option value="15">от 15 лет</option>
                            <option value="16">от 16 лет</option>
                            <option value="17">от 17 лет</option>
                            <option value="18">от 18 лет</option>
                        </select>
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            сложность тура
                        </label>
                        <select
                            defaultValue={"средняя"}
                            onChange={(e) => setLevel(e.target.value)}
                            placeholder="сложность тура"
                            className="input"
                        >
                            <option value="высокая">высокая</option>
                            <option value="выше среднего">выше среднего</option>
                            <option value="средняя">средняя</option>
                            <option value="низкая">низкая</option>
                        </select>
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            сезонность тура
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            <select
                                // defaultValue={month1}
                                onChange={(e) => setMonth1(e.target.value)}
                                className="input"
                            >
                                {months.map((item, index) => (
                                    <option value={index + 1} key={index}>
                                        {item}:{index + 1}
                                    </option>
                                ))}
                            </select>
                            <select
                                // defaultValue={month1}
                                onChange={(e) => setMonth2(e.target.value)}
                                className="input"
                            >
                                {months.map((item, index) => (
                                    <option value={index + 1} key={index}>
                                        {item}:{index + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            цена тура пишите в числах
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                            <input
                                onChange={(e) => setPrice1(e.target.value)}
                                placeholder="цена за 1 человека"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice2(e.target.value)}
                                placeholder="цена за 2 человека"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice3(e.target.value)}
                                placeholder="цена за 3 человека"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice4(e.target.value)}
                                placeholder="цена за 4 человека"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice5(e.target.value)}
                                placeholder="цена за 5 человек"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice6(e.target.value)}
                                placeholder="цена за 6 человек"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice7(e.target.value)}
                                placeholder="цена за 7 человек"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice8(e.target.value)}
                                placeholder="цена за 8 человек"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice9(e.target.value)}
                                placeholder="цена за 9 человек"
                                className="input"
                                type="number"
                            />
                            <input
                                onChange={(e) => setPrice10(e.target.value)}
                                placeholder="цена за 10 человек"
                                className="input"
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="mt-2 p-4 backdrop-blur-sm flex flex-col items-center">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            фото карточки тура кликните чтобы выбрать фото
                        </label>
                        <div className="w-full max-w-96 aspect-video">
                            <div className="flex items-center justify-center w-full mt-2">
                                <label
                                    style={{
                                        backgroundImage: `url(${cardImg})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full aspect-video border-0 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            кликните чтобы загрузить фото
                                        </p>
                                    </div>
                                    <input
                                        onChange={(e) =>
                                            uploadFile(
                                                e.target.files[0],
                                                setCardImg
                                            )
                                        }
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            описание тура
                        </label>
                        <div className="grid md:gap-2 grid-cols-1 md:grid-cols-2">
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="описание тура на русском"
                                className="inputArea h-[200px]"
                            ></textarea>
                            <textarea
                                onChange={(e) =>
                                    setDescriptionEng(e.target.value)
                                }
                                placeholder="описание тура на английсокм"
                                className="inputArea h-[200px]"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-2 p-2 shadowInput backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Главные фото тура
                        </label>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-2 mb-2 items-center">
                            {inputCount.slice(0, 5).map((item, index) => (
                                <div key={index} className={`w-full max-w-96`}>
                                    <div className="flex items-center justify-center w-full mt-2">
                                        <div
                                            style={{
                                                backgroundImage: `url(${item?.imgUrl})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                            className={`relative flex flex-col items-center justify-center w-full ${
                                                index === 1 ||
                                                index === 2 ||
                                                index === 4
                                                    ? "aspect-square"
                                                    : "aspect-video"
                                            } border-0 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg
                                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                    />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    кликните чтобы загрузить
                                                    фото{" "}
                                                    {index === 1 ||
                                                    index === 2 ||
                                                    index === 4
                                                        ? "1 / 1"
                                                        : "16 / 9"}
                                                </p>
                                            </div>
                                            <input
                                                onChange={(e) =>
                                                    uploadFile(
                                                        e.target.files[0],
                                                        setGalery,
                                                        true,
                                                        index
                                                    )
                                                }
                                                id="dropzone-file2"
                                                type="file"
                                                className="absolute top-0 left-0 bottom-0 right-0 opacity-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <br />
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Галерея тура
                        </label>
                        <div className="flex justify-between flex-wrap items-center">
                            {inputCount.slice(5).map((item, index) => (
                                <div
                                    key={index}
                                    className={`md:w-[30%] w-full max-w-96`}
                                >
                                    <div className="relative flex items-center justify-center w-full mt-2">
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.imgUrl})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                            className={`relative flex flex-col items-center justify-center w-full  aspect-video
                                            } border-0 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg
                                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                    />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    кликните чтобы загрузить
                                                    фото
                                                </p>
                                            </div>
                                            <input
                                                onChange={(e) =>
                                                    uploadFile(
                                                        e.target.files[0],
                                                        setGalery,
                                                        true,
                                                        index + 5
                                                    )
                                                }
                                                id="dropzone-file2"
                                                type="file"
                                                className="absolute top-0 left-0 bottom-0 right-0 opacity-0"
                                            />
                                        </div>
                                        <h3
                                            className="absolute right-2 top-1 z-20 text-xl cursor-pointer text-red-500"
                                            onClick={() =>
                                                deleteImageFromGalery(index + 5)
                                            }
                                        >
                                            ✖
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="input"
                            onClick={() => {
                                setInputCount((e) => [...e, 1]);
                                setGalery((e) => [...e, null]);
                            }}
                        >
                            добавить еще фото
                        </button>
                    </div>
                    <div className="mt-2 p-2 shadowInput backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            описание программы
                        </label>
                        {/* <input
                            onChange={(e) => setProgrammDesc(e.target.value)}
                            id="programmDesc"
                            placeholder="описание программы"
                            className="input"
                            type="text"
                        /> */}
                        <div className="grid md:gap-2 grid-cols-1 md:grid-cols-2">
                            <textarea
                                onChange={(e) =>
                                    setProgrammDesc(e.target.value)
                                }
                                placeholder="описание программы на русском"
                                id="programmDesc"
                                className="inputArea h-[200px] text-xs sm:text-base"
                                type="text"
                            ></textarea>
                            <textarea
                                onChange={(e) =>
                                    setProgrammDescEng(e.target.value)
                                }
                                placeholder="описание программы на английском"
                                id="programmDesc"
                                className="inputArea h-[200px] text-xs sm:text-base"
                                type="text"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-2 p-2 shadowInput backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            программа тура
                        </label>
                        <br />
                        <label
                            htmlFor="inputname"
                            className="text-sm font-normal text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            *если хотите чтобы текст перенесся на новую строку
                            поставте знак " ; " используйте его только в тех
                            местах где хотите переноса строки
                        </label>
                        {programmDays.map((item, index) => (
                            <AccordionElement
                                key={index}
                                item={{ ...item, id: index }}
                                isModal={true}
                                deleteFunction={deleteProgrammDay}
                                setModal={setDayModalEdit}
                                setOneItem={setOneDay}
                                setOneItemEng={setOneDayEng}
                                itemEng={{
                                    ...programmDaysEng[index],
                                    id: index,
                                }}
                                index={index + 1}
                            />
                        ))}
                        <button
                            className="input"
                            onClick={() => {
                                setDayModal(true);
                            }}
                        >
                            добавить еще
                        </button>
                    </div>
                    <div className="mt-2 p-2 shadowInput backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            важно знать
                        </label>
                        <br />
                        {important.map((item, index) => (
                            <AccordionElement2
                                key={index}
                                item={{ ...item, id: index }}
                                deleteFunction={deleteImportant}
                                setModal={setImportantModalEdit}
                                setOneItem={setOneImportant}
                                setOneItemEng={setOneImportantEng}
                                itemEng={{ ...importantEng[index], id: index }}
                                isModal={true}
                            />
                        ))}
                        <button
                            className="input"
                            onClick={() => {
                                setImportantModal(true);
                            }}
                        >
                            добавить еще
                        </button>
                    </div>
                    <div className="mt-2 p-2 backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Дополнительно
                        </label>
                        {optional.map((item, index) => (
                            <AccordionElement2
                                key={index}
                                item={{ ...item, id: index }}
                                deleteFunction={deleteOptional}
                                setModal={setOptionalModalEdit}
                                setOneItem={setOneOptional}
                                setOneItemEng={setOneOptionalEng}
                                itemEng={{ ...optionalEng[index], id: index }}
                                isModal={true}
                            />
                        ))}
                        <button
                            className="input"
                            onClick={() => {
                                setOptionalModal(true);
                            }}
                        >
                            добавить еще
                        </button>
                    </div>

                    <div className="mt-2 p-2 shadowInput backdrop-blur-sm">
                        <label
                            htmlFor="inputname"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            впечатления тура
                        </label>
                        <div className="px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {memories.map((item, index) => (
                                <div
                                    onClick={() => {
                                        setMemoriesModalEdit(true);
                                        setOneMemories({ ...item, id: index });
                                        setOneMemoriesEng({
                                            ...memoriesEng[index],
                                            id: index,
                                        });
                                    }}
                                    key={index}
                                    className="w-[1fr] relative rounded-[10px] bg-[#ffff] h-auto"
                                >
                                    <div className="w-full flex flex-col justify-between h-full rounded-[10px] bg-[#ffff]">
                                        <div className="p-2">
                                            <div className="flex justify-end">
                                                <svg
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteMemories(index);
                                                    }}
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    className="w-4 h-4  cursor-pointer"
                                                    preserveAspectRatio="none"
                                                >
                                                    <g clipPath="url(#clip0_2304_661)">
                                                        <path
                                                            d="M20 0H0V20H20V0Z"
                                                            fill="url(#pattern0)"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <pattern
                                                            id="pattern0"
                                                            patternContentUnits="objectBoundingBox"
                                                            width={2}
                                                            height={2}
                                                        >
                                                            <use
                                                                xlinkHref="#image0_2304_661"
                                                                transform="scale(0.00195312)"
                                                            />
                                                        </pattern>
                                                        <clippath id="clip0_2304_661">
                                                            <rect
                                                                width={20}
                                                                height={20}
                                                                fill="white"
                                                            />
                                                        </clippath>
                                                        <image
                                                            id="image0_2304_661"
                                                            width={512}
                                                            height={512}
                                                            xlinkHref="data:image/png;base64,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"
                                                        />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs md:text-base text-left text-black">
                                                    {item.memoriesTitle}
                                                </p>
                                            </div>
                                        </div>
                                        <img
                                            className="w-full aspect-square h-auto rounded-[10px] object-cover"
                                            src={item.memoriesImage}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            ))}
                            <div
                                onClick={() => setMemoriesModal(true)}
                                className="w-[1fr] rounded-[10px] bg-[#ffff]  aspect-[3/4] h-auto flex flex-col justify-center items-center"
                            >
                                <h3 className="text-5xl">+</h3>
                                <p className="font-medium text-xs md:text-base">
                                    добавить впечатления тура
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            dataConstructor();
                            // dataCheck() && dataConstructor();
                            dispatch({ type: reduxTypes.OPEN_LOADER });
                        }}
                        // onClick={dataConstructor}
                        className={`doneButton mt-8 ${
                            dataCheck()
                                ? "bg-green-500 text-white"
                                : "bg-gray-500 text-white"
                        }`}
                    >
                        готово
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTour;
