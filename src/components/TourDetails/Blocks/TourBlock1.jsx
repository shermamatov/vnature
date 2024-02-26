import React from "react";

const TourBlock1 = ({ tour, setGaleryStart, setGalery }) => {
    return (
        <div className="content">
            {tour.galery ? (
                <div className="grid gap-2 md:gap-4 grid-cols-6 md:grid-cols-4 grid-rows-2 mt-8 max-h-[260px] md:max-h-[420px]">
                    <div className="col-span-4 row-span-1 md:col-span-2 md:row-span-2">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(0);
                            }}
                            className="w-[100%] object-cover h-[100%] rounded-md cursor-pointer"
                            src={tour?.galery[0]}
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(1);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md cursor-pointer"
                            src={tour?.galery[1]}
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(2);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md cursor-pointer"
                            src={tour?.galery[2]}
                            alt=""
                        />
                    </div>
                    <div className="col-span-4 row-span-2 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(3);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src={tour?.galery[3]}
                            alt=""
                        />
                    </div>
                    <div className="hidden md:block col-span-2 row-span-2 md:col-span-1 md:row-span-1 cursor-pointer">
                        <img
                            onClick={() => {
                                setGalery(true);
                                setGaleryStart(4);
                            }}
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src={tour?.galery[4]}
                            alt=""
                        />
                    </div>
                </div>
            ) : (
                <div className="grid gap-2 md:gap-4 grid-cols-6 md:grid-cols-4 grid-rows-2 mt-8 max-h-[260px] md:max-h-[420px]">
                    <div className="col-span-4 row-span-1 md:col-span-2 md:row-span-2">
                        <img
                            className="w-[100%] object-cover h-[100%] rounded-md"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Ff3%2Fe1%2F6cf3e10ab7049ee6f64dcabba001b385.jpg&f=1&nofb=1&ipt=f878a9458ede2f44dc2492b1360f72404a88ec24ee73f5ce6cc3ab6d53e87fbc&ipo=images"
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-1 md:col-span-1 md:row-span-1 ">
                        <img
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Ff3%2Fe1%2F6cf3e10ab7049ee6f64dcabba001b385.jpg&f=1&nofb=1&ipt=f878a9458ede2f44dc2492b1360f72404a88ec24ee73f5ce6cc3ab6d53e87fbc&ipo=images"
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 ">
                        <img
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Ff3%2Fe1%2F6cf3e10ab7049ee6f64dcabba001b385.jpg&f=1&nofb=1&ipt=f878a9458ede2f44dc2492b1360f72404a88ec24ee73f5ce6cc3ab6d53e87fbc&ipo=images"
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 ">
                        <img
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Ff3%2Fe1%2F6cf3e10ab7049ee6f64dcabba001b385.jpg&f=1&nofb=1&ipt=f878a9458ede2f44dc2492b1360f72404a88ec24ee73f5ce6cc3ab6d53e87fbc&ipo=images"
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-1 ">
                        <img
                            className="w-[100%] object-cover  h-[100%] rounded-md"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Ff3%2Fe1%2F6cf3e10ab7049ee6f64dcabba001b385.jpg&f=1&nofb=1&ipt=f878a9458ede2f44dc2492b1360f72404a88ec24ee73f5ce6cc3ab6d53e87fbc&ipo=images"
                            alt=""
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TourBlock1;
