import { z } from "zod";

// task schema
const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  dueDate: z.date(),
  status: z.enum(["Not Started", "In Progress", "Completed"]),
  priority: z.enum(["Low", "Medium", "High"]),
  isAdded: z.boolean(),
  icon: z.unknown(),
});

//* define taskArray schema with custom validation
export const stepThreeSchema = z.object({
  tasks: z.array(taskSchema).refine(
    (tasks) => tasks.some((task) => task.isAdded), // Ensure at least one task is added
    {
      message: "At least one task must be added to the project.", // Error message
    }
  ),
});

export type stepThreeFormData = z.infer<typeof stepThreeSchema>;