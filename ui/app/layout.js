"use client";
import "./globals.css";
import Providers from "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import { AppWrapper } from "../components/context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { BedrockPassportProvider } from "@bedrock_org/passport";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BedrockPassportProvider
          baseUrl="https://api.bedrockpassport.com"
          authCallbackUrl="https://loacalhost:3000/dashboard/overview"
          tenantId="orange-xkkhmqyshn"
          walletConnectId="c60d838bc7682699062e8af4283518b3"
        >
          <AppWrapper>
            <Providers>
              {children}
              <SpeedInsights />
              <Analytics />
            </Providers>
          </AppWrapper>
        </BedrockPassportProvider>
      </body>
    </html>
  );
}
