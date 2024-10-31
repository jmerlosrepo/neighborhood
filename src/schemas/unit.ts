import { z } from "zod";

export const unitFormSchema = z.object({
  complex: z.string({ required_error: "" }),
  number: z.string({ required_error: "" }),
  description: z.number(),
});
