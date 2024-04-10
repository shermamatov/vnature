import React from "react";
import shapka from "../../assets/shapka_banner.webp";

const ForClientEng = () => {
    return (
        <div className="relative">
            <img
                className="absolute brightness-[.60] top-0 left-0 right-0 md:h-[55vh] h-[25vh] w-[100%] object-cover object-bottom"
                src={shapka}
                alt=""
            />
            <div className="content font-montserrat relative z-10">
                <div className="md:h-[55vh] h-[25vh] whiteTextImportant flex justify-center items-center flex-col">
                    <h1 className="text-2xl md:text-4xl text-white mt-6">
                        <>
                            <span className="font-medium text-center text-white">
                                How to Book and Pay for a Tour?
                            </span>
                        </>
                    </h1>
                </div>
                <div className="mt-16 font-montserrat">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Step 1: Submit an Application
                    </h2>
                    <p className="text-lg md:text-2xl font-medium mt-4">
                        Browse the tour collection and choose where you would
                        like to go. If necessary, ask clarifying questions to
                        our managers: call{" "}
                        <a className="text-[#00499f]" href="tel:+996554034477">
                            +996 554 034 477
                        </a>{" "}
                        or send a message on{" "}
                        <a
                            className="text-[#00499f]"
                            href="https://wa.me/554034477"
                        >
                            WhatsApp
                        </a>
                        ,{" "}
                        <a
                            className="text-[#00499f]"
                            href="https://t.me/vnaturekg"
                        >
                            Telegram
                        </a>
                        , or email{" "}
                        <a
                            className="text-[#00499f]"
                            href="mailto:vnature@gmail.com"
                        >
                            vnaturekg@gmail.com
                        </a>
                        . Once you have made a decision, submit an application
                        through the form on the selected tour page. <br />
                        <br /> <strong>Important: </strong>
                        The application is not a booking confirmation. We will
                        check the availability of seats, the relevance of the
                        location, and give you an answer within one day.
                        <br />
                        <br /> <strong>Important: </strong> If you want to add
                        additional services to the tour, such as air travel,
                        insurance, or single accommodation, please inform the
                        manager. (we will add a commission fee of 500 som to the
                        purchase amount)
                    </p>
                    <br />
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Step 2: Pay for the Tour
                    </h2>
                    <p className="text-lg md:text-2xl font-medium mt-4">
                        Based on the data received, we will prepare all the
                        necessary documents for you to familiarize yourself
                        with. After that, we will offer to pay for the tour in a
                        convenient way: - by transfer to VISA card - in cash, if
                        possible <br />
                        <br /> <strong>Important: </strong> when booking a tour
                        less than 2 weeks before departure, it is necessary to
                        pay 100% of the cost immediately. When booking a tour
                        more than 2 weeks before departure, you can first pay
                        30% of the tour cost, and pay the remaining 70% no later
                        than 2 weeks before departure. Please do not delay
                        payment.
                    </p>
                    <br />
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Step 3: Go on a Journey
                    </h2>
                    <p className="text-lg md:text-2xl font-medium mt-4">
                        Everything is ready! The tour is paid for, onwards to
                        adventures! Enjoy your trip, share your impressions,
                        post photos with the hashtag #vnature
                    </p>
                    <br />
                    <hr />
                    <br />
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Can I get a refund if I change my mind about going?
                    </h2>
                    <p className="text-lg md:text-2xl font-medium mt-4">
                        Yes, of course. The refund amount will depend on the
                        cancellation period. If there are more than 2 weeks left
                        before the trip, we will refund 100% of the tour cost.
                        More than 10 days - 70%. More than 5 days - 50%. If you
                        cancel the tour less than 5 days before its start, the
                        cost is not refunded. In case of cancellation of the
                        trip due to illness or difficult family circumstances,
                        with a certificate, a full refund is possible, excluding
                        direct expenses incurred. If you paid for the tour in
                        cash, we will return the money in cash. If by card, we
                        will transfer it to the card. Refunds are made within 10
                        days.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForClientEng;
