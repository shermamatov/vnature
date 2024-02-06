import React from "react";
import arrowRight from "../../assets/arrowRight.svg";
import { useNavigate } from "react-router-dom";
const TourCard = ({ item }) => {
    let navigate = useNavigate();
    return (
        <div>
            <div
                onClick={() => navigate(`/tour/${item.title}/${item.id}`)}
                className="rounded-[10px] border border-[#00499f] font-montserrat p-8"
                style={{
                    filter: "drop-shadow(0px 4px 14px rgba(0,73,159,0.36))",
                }}
            >
                <div>
                    <img src={item.mainImg} alt="" />
                </div>
                <p className="text-2xl font-medium text-left capitalize text-black mt-4">
                    Сары Челек
                </p>
                <p className="text-xl text-left text-black mt-2">
                    Уголок рая на юге Кыргызстана
                </p>
                <p className="text-xl text-left text-[#00499f] mt-1">
                    Сложность : Высокая
                </p>
                <p className="text-xl text-left text-[#00499f] mt-1">
                    Май - Август
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-xl text-left text-[#00499f] mt-1">
                        10 дней
                    </p>
                    <img className="w-[20%]" src={arrowRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TourCard;
