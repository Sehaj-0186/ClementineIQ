import React from 'react'
import logo from '../images/logo1.png'
import Image from 'next/image';
import { useBedrockPassport } from "@bedrock_org/passport";

const Navbar = () => {
  const { isLoggedIn } = useBedrockPassport();

  return (
    <div className="w-full flex justify-between items-center h-[20vh] absolute top-0">
      <div className="flex items-center mx-16">
        <Image src={logo} alt="logo" width={60} height={60} />
        <span className="font-cinzel font-semibold bg-gradient-to-r text-transparent bg-clip-text from-gray-500 via-gray-400 to-gray-500 text-xl">
          Clementine IQ
        </span>
      </div>
      <div className="mx-16">
        <button 
          onClick={() => window.dispatchEvent(new Event('BEDROCK_SHOW_LOGIN'))}
          className="bg-transparent border-[1px] border-zinc-600 rounded-md px-6 py-2 text-gray-300 transition-all ease-in-out duration-300 hover:bg-gradient-to-br hover:from-pink-500 hover:to-blue-500 hover:text-white"
        >
          {isLoggedIn ? 'Connected' : 'Connect Wallet'}
        </button>
      </div>
    </div>
  );
}

export default Navbar