import { SignIn } from "@clerk/nextjs";
import { Building2 } from "lucide-react";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-600">
          <Building2 size={32} color="white" />
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Hotel Admin
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Sign in to manage your hotel operations
          </p>
        </div>

        <SignIn
          routing="path"
          path="/login"
          forceRedirectUrl="/dashboard"
          fallbackRedirectUrl="/dashboard"
        />
      </div>
    </main>
  );
};

export default LoginPage;
