import React from 'react'
import { UseFormReturn } from "react-hook-form";
import { stepOneFormData } from './schemas/step1-schema';

type Step1Props = {
  purpose: string;
  subtext: string;
  methods: UseFormReturn<stepOneFormData>; //specific to step 1
}

const Step1 = ({ purpose, subtext, methods }: Step1Props) => {
  return <div>step-1</div>;
};

export default Step1
