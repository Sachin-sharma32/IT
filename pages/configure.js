import React, { useState } from "react";

const Configure = () => {
    const [active, setActive] = useState(0);
    const [completed, setCompleted] = useState(false);
    return (
        <div className=" p-20 min-h-screen flex">
            <div className=" bg-black">
                <div className="flex">
                    {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
                        <div className="flex items-center" key={i}>
                            <button
                                className={`${
                                    active === i
                                        ? "bg-purple-500 border-purple-500 text-white"
                                        : "bg-gray-300"
                                } h-6 w-6 rounded-full border-2 hover:border-purple-500 flex justify-center items-center`}
                                onClick={() => {
                                    setActive(i);
                                }}
                            >
                                {item}
                            </button>
                            <div
                                className={`${
                                    i === 4 ? "hidden" : ""
                                } h-[1px] w-[200px]  bg-gray-300`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-[50%]"></div>
        </div>
    );
};

export default Configure;
