import { z } from "zod";

export const complexFormSchema = z.object({
  name: z.string({ required_error: "" }),
  country: z.string({ required_error: "" }),
  state: z.string({ required_error: "" }),
  city: z.string({ required_error: "" }),
  street: z.string({ required_error: "" }),
  number: z.number(),
  numberOfUnits: z.number({ required_error: "" }),
  description: z.string({ required_error: "" }),
});
