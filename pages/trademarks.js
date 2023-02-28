import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Privacy = () => {
    return (
        <div>
            <div className=" bg-green-500 h-[40vh] flex items-end">
                <h1 className=" text-5xl text-white mb-10 ml-10 uppercase">
                    TRADEMARKS
                </h1>
            </div>
            <button
                className=" bg-gray-500 text-white px-4 py-1 rounded-lg border-2 border-gray-500 hover:bg-white hover:text-black transition-all duration-300 absolute top-[45vh] right-4"
                onClick={() => {
                    window.print();
                }}
            >
                PRINT
            </button>
            <div className="flex flex-col p-10 gap-8 leading-[1.9] font-[400] text-[#444444] mt-10">
                <div>
                    <p>
                        IT Xcelerate is a registered trademark of our company.
                        The IT Xcelerate logo, as well as other logos and
                        graphics used on our website, are also trademarks of IT
                        Xcelerate. These trademarks are protected by national
                        and international trademark laws.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Prohibited Uses</h2>
                    <p>
                        You may not use any of the IT Xcelerate trademarks
                        without our express written consent. This includes using
                        our trademarks in any way that is likely to cause
                        confusion or suggest endorsement or affiliation with IT
                        Xcelerate. Prohibited uses of our trademarks include,
                        but are not limited to:
                        <br />
                        <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                        Registering domain names that include our trademarks
                        without our permission.
                        <br />
                        <KeyboardArrowRightIcon className=" text-blue-500" />{" "}
                        Using our trademarks in any way that is likely to cause
                        confusion or dilute their distinctiveness.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Reporting Trademark Infringement
                    </h2>
                    <p>
                        If you believe that your intellectual property rights
                        have been infringed by IT Xcelerate or by a third party
                        using our trademarks without permission, please contact
                        us at [contact information]. We take all reports of
                        trademark infringement seriously and will investigate
                        any such reports promptly.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Third-Party Trademarks</h2>
                    <p>
                        We respect the trademarks of others and expect our
                        customers and users to do the same. Any third-party
                        trademarks used on our website or in our materials are
                        the property of their respective owners. We make no
                        claim to any rights in those trademarks.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">Changes to This Policy</h2>
                    <p>
                        We reserve the right to modify this Trademarks page at
                        any time without prior notice. Your continued use of our
                        website after any changes to this page constitutes your
                        acceptance of the modified policy.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Links to Third-Party Websites
                    </h2>
                    <p>
                        Our website may contain links to third-party websites
                        that are not under our control. We are not responsible
                        for the content or privacy practices of any linked
                        websites. We encourage you to review the privacy
                        policies of any linked websites.
                    </p>
                </div>
                <div>
                    <h2 className=" text-2xl mb-2">
                        Changes to This Privacy Statement
                    </h2>
                    <p>
                        We reserve the right to modify this privacy statement at
                        any time without prior notice. Your continued use of our
                        website or our services after any changes to this
                        privacy statement constitutes your acceptance of the
                        modified privacy statement.
                    </p>
                </div>
                <div>
                    <h4>
                        <span className=" font-bold">Last Updated : </span>
                        March 1, 2023
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
