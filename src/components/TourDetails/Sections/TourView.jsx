import React, { useState } from "react";
import "../TourDetails.scss";
import { tour } from "../../../consts";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TourView = () => {
    const [sliderRef, setSliderRef] = useState(null);
    const [activeSlide, setActiveSlide] = useState(1);

    const sliderSettings = {
        // removes default buttons
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
        // afterChange: (current) => setActiveSlide(current),
    };
    return (
        <div>
            <div className="mt-10 rounded-[10px] font-montserrat bg-gradient-to-b from-[#bbd7f9] to-[#deedff]/40 border p-4">
                <p className="text-lg text-left text-black">
                    Окунитесь в волшебство природы озера Сары-Челек в
                    Кыргызстане! Здесь, среди покачивающихся травяных полян, вас
                    обволакивает свежий горный воздух, напоенный ароматами
                    цветов. Озеро само по себе – это изумрудное зеркало,
                    ласкающее взгляд своей невероятной чистотой и отражающее
                    величественные вершины Тянь-Шаня. Живописные тропы вокруг
                    приглашают на вдохновляющие прогулки, а закаты, окрашивающие
                    небеса в оттенки огня, создают удивительную картину,
                    запечатлеваемую в сердцах каждого путешественника. Освежите
                    свой разум и душу этим райским уголком природы!
                </p>
            </div>
            <div>
                <div className="flex justify-between my-16">
                    <p className="text-2xl font-semibold">
                        Впечатления этого путешествия
                    </p>
                    <div className="flex items-center">
                        <svg
                            className="cursor-pointer"
                            onClick={sliderRef?.slickPrev}
                            width={70}
                            height={22}
                            viewBox="0 0 70 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.9479 21.6147C18.8016 21.4571 19.2836 20.9214 19.0633 20.3751C19.0009 20.2204 16.7244 18.7566 12.2484 15.9931L5.52725 11.8434L37.2133 11.8216L68.8992 11.7999L69.2855 11.6237C69.4979 11.5268 69.7612 11.2914 69.8707 11.1005C70.049 10.7893 70.0462 10.723 69.8418 10.4591C69.7165 10.2972 69.4451 10.0966 69.2385 10.0132C68.88 9.86853 67.4192 9.86061 37.1938 9.83988L5.52479 9.81805L12.1807 5.71056C15.8415 3.45141 18.902 1.49622 18.9817 1.36577C19.3166 0.818339 18.9752 0.306811 18.1287 0.0875356C17.1729 -0.160055 17.3591 -0.258991 8.43846 5.2426C2.83449 8.69867 0.0991944 10.4427 0.0376378 10.599C-0.012565 10.7264 -0.0125635 10.9351 0.0377761 11.0625C0.0993326 11.2185 2.8204 12.9567 8.36268 16.3802C15.3954 20.7245 17.1758 21.7582 17.5152 21.6945C17.5364 21.6906 17.731 21.6546 17.9479 21.6147Z"
                                fill="#00499f"
                            />
                        </svg>
                        <p className="text-3xl text-[#00499f] font-semibold mx-8 noselect">
                            {parseInt(activeSlide / 3 + 1)}/
                            {tour.memories.length / 3}
                        </p>
                        <svg
                            className="cursor-pointer"
                            onClick={sliderRef?.slickNext}
                            width={70}
                            height={22}
                            viewBox="0 0 70 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M52.0521 0.0826113C51.1984 0.240115 50.7164 0.77583 50.9367 1.32216C50.9991 1.47689 53.2756 2.94069 57.7516 5.70421L64.4727 9.85383L32.7867 9.87566L1.10084 9.8974L0.714542 10.0736C0.502104 10.1704 0.238778 10.4059 0.129345 10.5968C-0.0490326 10.908 -0.0461599 10.9742 0.158208 11.2382C0.28351 11.4 0.554905 11.6007 0.761462 11.684C1.11999 11.8287 2.5808 11.8367 32.8062 11.8574L64.4752 11.8792L57.8193 15.9867C54.1585 18.2459 51.098 20.201 51.0183 20.3315C50.6834 20.8789 51.0248 21.3905 51.8713 21.6097C52.8271 21.8573 52.6409 21.9563 61.5615 16.4547C67.1655 12.9986 69.9008 11.2546 69.9624 11.0983C70.0126 10.9708 70.0126 10.7622 69.9622 10.6348C69.9007 10.4788 67.1796 8.7406 61.6373 5.31706C54.6046 0.972773 52.8242 -0.0609875 52.4848 0.00272193C52.4636 0.0066827 52.269 0.0426665 52.0521 0.0826113Z"
                                fill="#00499f"
                            />
                        </svg>
                    </div>
                </div>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {tour.memories.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className="w-[95%]  rounded-[10px] bg-[#e2effe]">
                                <div className="p-4">
                                    <p className="text-xl text-left text-black">
                                        {item.memoriesTitle}
                                    </p>
                                </div>
                                <img
                                    className="w-full rounded-[10px] aspect-square object-cover"
                                    src={item.memoriesImage}
                                    alt=""
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TourView;
