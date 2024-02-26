import React, { useEffect, useState } from "react";
import "../../../App.css";
import TourView from "../Sections/TourView";
import TourProgram from "../Sections/TourProgram";
import TourImportant from "../Sections/TourImportant";
import NavigationPanel from "../Elements/NavigationPanel";
import SideForm from "../Elements/SideForm";
import { useSelector } from "react-redux";
import TourForm from "../Sections/TourForm";
import PriceTable from "../Sections/PriceTable";
import TourGalery from "../Sections/TourGalery";
import TourReviews from "../Sections/TourReviews";
import TourIncludeSection from "../Sections/TourIncludeSection";
const TourBlock2 = ({
    setPriceModal,
    tour,
    section,
    setSection,
    setCalendar,
    setFormModal,
    setGalery,
    setGaleryStart,
    setReviewsModal,
}) => {
    let width = window.innerWidth;
    let minusWidth = width < 768 ? 300 : 500;
    let minusWidth2 = width < 768 ? 450 : 700;
    let lang = useSelector((item) => item.tours.lang);
    document.querySelectorAll('a[href^="#"').forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let href = this.getAttribute("href").substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = 120;
            const elementPosition = scrollTarget?.getBoundingClientRect()?.top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
            });
        });
    });
    window.addEventListener("scroll", function (e) {
        let programmAnchor = Math.ceil(
            document.getElementById("programmAnchor")?.offsetTop
        );
        let viewAnchor = Math.ceil(
            document.getElementById("viewAnchor")?.offsetTop
        );
        let importantAnchor = Math.ceil(
            document.getElementById("importantAnchor")?.offsetTop
        );
        let bronAnchor = Math.ceil(
            document.getElementById("bronAnchor")?.offsetTop - minusWidth2
        );

        let reviewsAnchor = Math.ceil(
            document.getElementById("reviewsAnchor")?.offsetTop - minusWidth2
        );
        let windowScroll = Math.ceil(window.scrollY) - minusWidth;
        if (windowScroll >= viewAnchor && windowScroll <= programmAnchor) {
            section !== 1 && setSection(1);
        } else if (
            windowScroll >= programmAnchor &&
            windowScroll <= importantAnchor
        ) {
            section !== 2 && setSection(2);
        } else if (
            windowScroll >= importantAnchor &&
            windowScroll <= bronAnchor
        ) {
            section !== 3 && setSection(3);
        } else if (
            windowScroll >= bronAnchor &&
            windowScroll <= reviewsAnchor
        ) {
            section !== 4 && setSection(4);
        } else if (windowScroll >= reviewsAnchor) {
            section !== 5 && setSection(5);
        }
        if (width >= 768) {
            let nav2 = document.getElementById("navigation2");
            let nav1 = document.getElementById("navigation1");
            if (bronAnchor <= windowScroll) {
                nav2?.classList.replace("hidden", "navPanel2");
                nav1?.classList.replace("navPanel", "hidden");
            } else {
                nav1?.classList.replace("hidden", "navPanel");
                nav2?.classList.replace("navPanel2", "hidden");
            }
        }
    });
    useEffect(() => {
        let navigationAnchor = document.getElementById("navigationAnchor");
        if (section === 2 || section === 1) {
            navigationAnchor?.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        }
        if (section === 3) {
            navigationAnchor?.scrollTo({
                left: 100,
                behavior: "smooth",
            });
        }
        if (section === 4) {
            navigationAnchor?.scrollTo({
                left: 250,
                behavior: "smooth",
            });
        }
        if (section === 5) {
            navigationAnchor?.scrollTo({
                left: 350,
                behavior: "smooth",
            });
        }
    }, [section]);

    return (
        <div>
            {width > 768 && (
                <div id="navigation2" className="hidden">
                    <div className="content">
                        <div className="w-full md:w-[69%]">
                            <NavigationPanel
                                section={section}
                                setSection={setSection}
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="font-montserrat">
                <div className="content">
                    <div className="mt-8 my-0 md:my-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl md:text-5xl font-medium font-montserrat">
                                {lang === "rus"
                                    ? tour?.title || "название тура"
                                    : tour?.titleEng || "tour title"}
                            </h1>
                            <button
                                onClick={() => setPriceModal(true)}
                                className="block text-xs md:hidden py-1 px-6 text-white rounded-md bg-[#00499f]"
                            >
                                $ {lang === "rus" ? "Цена тура" : "Tour price"}
                            </button>
                        </div>
                        <h2 className="text-lg md:text-2xl font-normal font-montserrat mt-4">
                            {lang === "rus"
                                ? tour?.slogan || "слоган тура"
                                : tour?.sloganEng || "slogan title"}
                        </h2>
                    </div>
                </div>

                {width < 768 && (
                    <div className="navPanel">
                        <div className="content">
                            <NavigationPanel
                                section={section}
                                setSection={setSection}
                            />
                        </div>
                    </div>
                )}

                <div className="content flex justify-between">
                    <div className="md:w-[69%] w-full relative">
                        {width > 768 && (
                            <div
                                id="navigation1"
                                className="hidden md:navPanel"
                            >
                                <NavigationPanel
                                    section={section}
                                    setSection={setSection}
                                />
                            </div>
                        )}
                        <TourView tour={tour} />
                        <div className="block md:hidden">
                            <SideForm
                                setFormModal={setFormModal}
                                isMobile={true}
                                tour={tour}
                                setPriceModal={setPriceModal}
                            />
                        </div>
                        <div className="block md:hidden -mt-8">
                            <TourIncludeSection tour={tour} />
                        </div>
                        <TourProgram tour={tour} />
                        <TourImportant tour={tour} />
                    </div>
                    <div className="md:block hidden w-[29%] mt-6">
                        <SideForm
                            setFormModal={setFormModal}
                            tour={tour}
                            setPriceModal={setPriceModal}
                        />
                    </div>
                </div>

                <div className="content">
                    <TourForm
                        tour={tour}
                        setFormModal={setFormModal}
                        setCalendar={setCalendar}
                        setPriceModal={setPriceModal}
                    />
                    <PriceTable tour={tour} />
                    <TourIncludeSection tour={tour} />
                    <div>
                        <TourReviews
                            setReviewsModal={setReviewsModal}
                            tour={tour}
                        />
                        <TourGalery
                            setGalery={setGalery}
                            setGaleryStart={setGaleryStart}
                            tour={tour}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourBlock2;
