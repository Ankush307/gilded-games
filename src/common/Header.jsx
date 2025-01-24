import React, { useState, useEffect } from "react";
import { HEADER_LIST } from "../utils/Helper";
import { DiscordIcon } from "../utils/icons";
import PageLogo from "../assets/images/png/page-logo.png"

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex justify-between bg-black/80">
            <div className="max-w-[1320px] flex justify-between w-full mx-auto xl:py-[21px] lg:py-4 py-3 items-center max-xl:px-6">
                <button onClick={handleOpen} className={`hidden size-7 justify-center max-lg:absolute max-lg:right-5 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white relative after:w-full after:h-full  after:absolute after:top-0 after:left-0 ${open ? "rotate-45 after:rotate-90 after:bg-white !bg-white" : ""}`}></span>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white ${open ? "hidden" : ""}`}></span>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white after:!bg-white ${open ? "-translate-x-10 !bg-white" : ""}`}></span>
                </button>
                <a href="/">
                    <img className="xl:max-w-[286px] z-[70] relative lg:max-w-44 max-w-40" src={PageLogo} alt="page-logo" />
                </a>
                <div className={`flex xl:gap-[39px] items-center max-lg:px-4 relative w-full max-lg:bg-black mx-auto justify-end lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern max-lg:duration-300 max-lg:justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                    <div className="gap-10 flex max-lg:flex-col justify-center items-center">
                        {HEADER_LIST.map((item, index) => (
                            <a onClick={handleOpen} key={index} href={item.link} className="font-bold xl:text-[22px] lg:text-lg text-base text-white transition-all duration-300 ease-linear hover:text-blue-700">{item.title}</a>
                        ))}
                    </div>
                    <button onClick={handleOpen} className="bg-gradient gap-2.5 py-[14px] px-[34px] rounded-[79px] flex justify-center items-center hover:scale-110 transition-all duration-300 ease-linear cursor-pointer text-white lg:text-2xl md:text-xl text-base font-medium "> <DiscordIcon /> Discord</button>
                </div>
            </div>
        </div>
    );
};

export default Header;