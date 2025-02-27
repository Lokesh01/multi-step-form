import { z } from "zod";

//* project name schema
const projectNameSchema = z.object({
  name: z
    .string()
    .min(3, "Project name must be at least 3 characters")
    .nonempty("Project name is required"),
});

//* project description schema
const projectDescriptionSchema = z.object({
  description: z
    .string()
    .min(135, "Project description must have atleast 135 characters")
    .nonempty("Project description is required"),
});

//* project category schema
const projectCategorySchema = z.object({
  category: z.enum([
    "Marketing",
    "Software Development",
    "Construction",
    "Education",
    "Healthcare",
  ]),
});

//* start date schema
const projectStartDateSchema = z.object({
  startDate: z.date({ required_error: "Start Date is required" }),
});

//END DATE SCHEMA
const projectEndDateSchema = z.object({
  endDate: z.date({ required_error: "End Date is required" }),
});

//CLIENT NAME
const projectClientNameSchema = z.object({
  clientName: z.string().optional(),
});

export const stepOneSchema = z.object({
  ...projectNameSchema.shape,
  ...projectDescriptionSchema.shape,
  ...projectCategorySchema.shape,
  ...projectStartDateSchema.shape,
  ...projectEndDateSchema.shape,
  ...projectClientNameSchema.shape,
});

// Infer the type for the step 4 form data
export type stepOneFormData = z.infer<typeof stepOneSchema>;