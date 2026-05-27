"use client";

import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { parseClerkError } from "@/lib/clerk-error";

interface SignInFormProps {
  onToggle: () => void;
}

const SignInForm = ({ onToggle }: SignInFormProps) => {
  const [identifier, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!signIn || !setActive) return;

    try {
      setIsLoading(true);
      const result = await signIn.create({
        strategy: "password",
        identifier,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      setError(parseClerkError(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to access your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="space-y-1.5">
          <Label htmlFor="identifier">Email</Label>
          <Input
            id="identifier"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={identifier}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setIdentifier(e.target.value);
              setError("");
            }}
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setError("");
            }}
            disabled={isLoading}
            required
          />
        </div>

        {error && (
          <p
            role="alert"
            className="text-sm font-medium text-destructive"
          >
            {error}
          </p>
        )}

        <Button
          type="submit"
          className={cn("w-full", isLoading && "cursor-not-allowed opacity-70")}
          disabled={!isLoaded || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
              Signing in…
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onToggle}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

export default SignInForm;