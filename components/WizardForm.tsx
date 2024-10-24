"use client";

import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

i18n.changeLanguage("en");

const stepSchemas = [
  {
    countryOfResidency: "",
    areYouResident: false,
    areYouNationality: false,
    countryOfNationality: "",
    passportNumber: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
    nationality: "",
    email: "",
    dateOfBirth: "",
    password: "",
  },
  {
    buildingNoAndStreet: "",
    townOrCity: "",
    state: "",
    country: "",
    currentState: "",
    currentCountry: "",
    currentPOBox: "",
  },
  {
    employmentStatus: "",
    otherEmploymentDetails: "",
    employmentIndustry: "",
    companyName: "",
    isBoardMember: "",
  },
  {
    annualIncome: "",
  },
  {
    applicableStatements: [],
    desiredClassification: "",
  },
];

const WizardForm = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState<number>(3);
  const methods = useForm({
    defaultValues: stepSchemas[step - 1],
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();

  const onNext: SubmitHandler<any> = (data) => {
    console.log("next");

    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    } else {
      console.log("Validation Errors", errors);
    }
  };

  const onPrev = () => {
    console.log("previews");

    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    alert("Form submitted successfully");
    router.push("/success");
  };

  return (
    <FormProvider {...methods}>
      <Card className="p-6">
        <Tabs value={`step-${step}`} className="mb-6">
          <TabsList>
            <TabsTrigger value="step-1" disabled>
              {t("step1")}
            </TabsTrigger>
            <TabsTrigger value="step-2" disabled>
              {t("step2")}
            </TabsTrigger>
            <TabsTrigger value="step-3" disabled>
              {t("step3")}
            </TabsTrigger>
            <TabsTrigger value="step-4" disabled>
              {t("step4")}
            </TabsTrigger>
            <TabsTrigger value="step-5" disabled>
              {t("step5")}
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div>
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
          {step === 5 && <StepFive />}

          <div className="mt-4 flex space-x-2">
            {step > 1 && (
              <Button variant="secondary" onClick={onPrev}>
                {t("previous")}
              </Button>
            )}
            {step < 5 && (
              <Button onClick={methods.handleSubmit(onNext)}>
                {t("next")}
              </Button>
            )}
            {step === 5 && (
              <Button onClick={methods.handleSubmit(onSubmit)}>
                {t("submit")}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </FormProvider>
  );
};

export default WizardForm;
