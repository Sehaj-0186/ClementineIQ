"use client";
import React, { useState } from "react";
import { useAppContext } from "./context/index";
import { useAccount } from "wagmi";
import "../app/globals.css";

const Hero = ({ onGetStarted }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setIsClicked } = useAppContext();
  const { isConnected } = useAccount();

  return (
    <div className="flex flex-col absolute top-32 w-full h-[60vh] items-center justify-evenly">
      <div>
        <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-[7vw] text-9xl text-transparent font-[Cinzel] font-thin">
          Clementine IQ
        </span>
      </div>
      <div className="text-center font-light text-gray-300">
        <span>"Your Guide to Smarter NFT Investments."</span>
        <br />
        <span>
          Track collection health, detect wash trades, and analyze holder
          loyalty in one place.
        </span>
        <br />
        <span>Make smarter decisions with real-time insights.</span>
      </div>
      <div className="mt-4 relative">
        {!isConnected && isHovered && (
          <div
            className={`absolute bottom-[120%] text-center w-64 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-zinc-900 text-gray-200 text-sm rounded transition-opacity duration-300 opacity-100`}
          >
            Connect your Wallet first!
          </div>
        )}

        <button
          className={`bg-transparent border-[1px] border-zinc-600 rounded-md px-6 py-2 text-gray-300 transition-all ease-in-out duration-300 ${
            !isConnected
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gradient-to-br hover:text-transparent bg-clip-text from-pink-500 to-blue-500"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onGetStarted}
          disabled={!isConnected}
        >
          {!isConnected ? "Connect Wallet First" : "Get Started!"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
