import { z } from "zod";

//* user schema
const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["Owner", "Member", "Viewer"]),
  isAdded: z.boolean(),
  isLeader: z.boolean(),
});

//* define userArray schema with custom validation
export const stepTwoSchema = z.object({
  users: z.array(userSchema).refine(
    (users) => users.some((user) => user.isAdded), // Custom validation logic
    {
      message: "At least one user must be added to the project.", // Error message
    }
  ),
});

export type stepTwoFormData = z.infer<typeof stepTwoSchema>;
