import { z } from "zod";

export const userProfileFormSchema = z.object({
  username: z.string({ required_error: "" }).min(6),
  password: z.string({ required_error: "" }).min(6),
  name: z.string({ required_error: "" }).min(3),
  lastName: z.string({ required_error: "" }).min(3),
  email: z.string({ required_error: "" }),
  phone1: z.string({ required_error: "" }).min(10),
  phone2: z.string(),
});
