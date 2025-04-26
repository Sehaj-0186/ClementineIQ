'use client';

import { useBedrockPassport } from '@bedrock_org/passport';
import { useEffect } from 'react';

export default function AuthCallback() {
  const { loginCallback } = useBedrockPassport();

  useEffect(() => {
    const login = async (token: string, refreshToken: string) => {
      const success = await loginCallback(token, refreshToken);
      if (success) {
        window.location.href = "/";
      }
    };

    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    const refreshToken = params.get("refreshToken");

    if (token && refreshToken) {
      login(token, refreshToken);
    }
  }, [loginCallback]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-xl text-white">Signing in...</div>
    </div>
  );
}