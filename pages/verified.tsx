import React from "react";
import WestIcon from "@mui/icons-material/West";
import Link from "next/link";

const Verified = () => {
  return (
    <div className="bg-secondary h-screen w-screen flex items-center justify-center flex-col text-3xl text-white">
      <p className="text-primary">Your email has been successfully verified.</p>
      <p>Our team will contact you shortly.</p>
      <Link
        href="/"
        className="text-xl mt-4 bg-fourth px-10 py-2 rounded-full flex items-center gap-2 hover:gap-4 transition-all duration-300 border-white border"
      >
        <WestIcon />
        Home
      </Link>
    </div>
  );
};

export default Verified;
