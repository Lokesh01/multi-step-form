import { z } from "zod";

//* schema for total budget
const totalBudgetSchema = z.object({
  totalBudget: z.number().gt(0, "Budget must be greater than 0"),
});

//* schema for cost tracking method
const costTrackingMethodSchema = z.enum(["fixed-budget", "hourly-billing"]);

//* schema for resource allocation
const resourceAllocationSchema = z.object({
  resourceAllocation: z
    .string()
    .nonempty("Resource allocation is required")
    .max(135, "Resource allocation must not exceed 135 characters"),
});

//* combined schema for step4
export const stepFourSchema = z.object({
  totalBudget: totalBudgetSchema.shape.totalBudget,
  costTrackingMethod: costTrackingMethodSchema,
  resourceAllocation: resourceAllocationSchema.shape.resourceAllocation,
});

// Infer the type for the step 4 form data
export type StepFourFormData = z.infer<typeof stepFourSchema>;

