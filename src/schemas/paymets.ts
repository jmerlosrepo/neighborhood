import { z } from "zod";

export const paymentsFormSchema = z.object({
  complex: z.string({ required_error: "" }),
  unit: z.string({ required_error: "" }),
  neighbor: z.string({ required_error: "" }),
  amount: z.number({ required_error: "" }).min(1),
  date: z.date({ required_error: "" }),
  description: z.number(),
});
