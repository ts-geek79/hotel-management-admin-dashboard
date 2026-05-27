import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

export function parseClerkError(err: unknown): string {
  if (isClerkAPIResponseError(err)) {
    return err.errors[0].longMessage ?? err.errors[0].message;
  }
  return "An unexpected error occurred. Please try again.";
}
