import { ZodError } from "https://deno.land/x/zod@v3.23.8/ZodError.ts";

export function toGenericIssuesList({ error }: { error: any }): string[] {
  if (error instanceof ZodError) {
    return (error as ZodError).issues.map((pr) => {
      if (pr.recieved == undefined) {
        return `"${pr.path[0]}" is missing.`;
      }
      return `${pr.code}: "${pr.path[0]}" expected ${pr.expected}, but recieved ${pr.recieved}.`;
    });
  }
  return [];
}
