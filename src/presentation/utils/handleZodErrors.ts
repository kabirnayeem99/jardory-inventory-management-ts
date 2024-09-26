import {
  ZodError,
  ZodInvalidTypeIssue,
} from "https://deno.land/x/zod@v3.23.8/ZodError.ts";

export function toGenericIssuesList({ error }: { error: any }): string[] {
  if (error instanceof ZodError) {
    return (error as ZodError).issues.map((pr) => {
      if ((pr as ZodInvalidTypeIssue).received === "undefined") {
        return `${pr.path.join(", ")} is missing.`;
      }
      return `${pr.path.join(", ")} expected ${
        (pr as ZodInvalidTypeIssue).expected
      }, but recieved ${(pr as ZodInvalidTypeIssue).received}.`;
    });
  }
  return [];
}
