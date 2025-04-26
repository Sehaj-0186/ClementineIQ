"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import bg from "../images/bgLandingPage.jpg";
import Image from "next/image";
import Hero from "./Hero";
import { useAppContext } from "./context/index";
import { LoginPanel, useBedrockPassport } from "@bedrock_org/passport";
import "@bedrock_org/passport/dist/style.css";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const { isClicked } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);
  const { isLoggedIn } = useBedrockPassport();
  const router = useRouter();

  // Redirect after login
  React.useEffect(() => {
    if (isLoggedIn) {
      setShowLogin(false);
      router.push("/dashboard/overview");
    }
  }, [isLoggedIn, router]);

  // Handler for Hero button
  const handleGetStarted = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <Image
        src={bg}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="background"
        className="opacity-95"
      />
      <Navbar />
      <Hero onGetStarted={handleGetStarted} />
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-2xl p-4 max-w-[480px] w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={() => setShowLogin(false)}
            >
              &times;
            </button>
            <LoginPanel
              title="Sign in to"
              logo="https://irp.cdn-website.com/e81c109a/dms3rep/multi/orange-web3-logo-v2a-20241018.svg"
              logoAlt="Orange Web3"
              walletButtonText="Connect Wallet"
              showConnectWallet={false}
              separatorText="OR"
              features={{
                enableWalletConnect: true,
                enableAppleLogin: true,
                enableGoogleLogin: true,
                enableEmailLogin: true,
              }}
              titleClass="text-xl font-bold"
              logoClass="ml-2 md:h-8 h-6"
              panelClass="container p-2 md:p-8 rounded-2xl max-w-[480px]"
              buttonClass="hover:border-orange-500"
              separatorTextClass="bg-orange-900 text-gray-500"
              separatorClass="bg-orange-900"
              linkRowClass="justify-center"
              headerClass="justify-center"
            />
          </div>
        </div>
      )}
      {isClicked && (
        <p className="text-green-500 text-center">
          Redirecting to dashboard...
        </p>
      )}
    </div>
  );
};

export default LandingPage;
