"use client";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({ mode: "onSubmit" });
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    // Handle final submission here (e.g., API call)
    alert("Form submitted successfully!");
    router.push("/thank-you");
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await methods.trigger([
        "title",
        "firstName",
        "middleName",
        "lastName",
        "passportNumber",
        "email",
        "countryOfResidence",
        "otherNationality",
        "otherNationalityCountry",
        "residentOtherCountries",
        "residentOtherCountriesName",
      ]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 7));
      }
    } else if (step === 2) {
      const isValid = await methods.trigger([
        "BuildingNo",
        "TownCity",
        "State",
        "country",
        "POBox",
        "currentresidential",
        "cuBuildingNo",
        "cuTownCity",
        "cuState",
        "cucountry",
        "cuPOBox",
      ]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 7));
      }
    } else if (step === 3) {
      const isValid = await methods.trigger([
        "Employment",
        "EmploymentOther",
        "Profession",
        "CompanyName",
        "AreyouMemberof",
        "CurrentPosition",
      ]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 7));
      }
    } else if (step === 4) {
      const isValid = await methods.trigger([
        "AnnualIncome",
        "ValueofSavings",
        "SourceofWealth",
        "Otherpleasespecify",
        "expecteddeposit",
        "InvestmentObjective",
      ]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 7));
      }
    } else if (step === 5) {
      const isValid = await methods.trigger([
        "employedbyfinancial",
        "ValueofSavings",
        "SourceofWealth",
        "Otherpleasespecify",
        "expecteddeposit",
        "InvestmentObjective",
      ]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 7));
      }
    } else if (step === 6) {
      const isValid = await methods.trigger([
        "ExchangeTradedDerivatives",
        "CounterDerivatives",
        "mostlytraded",
        "independentlytraded",
        "Previoustradingvolume",
        "experienceintradingleverage",
        "levelofeducation",
      ]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 7));
      }
    } else if (step === 7) {
      const isValid = await methods.trigger(["ExchangeTradedDerivatives"]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 7));
      }
    }
  };
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-xl mx-auto p-4 bg-white rounded-lg shadow-md space-y-6"
      >
        <div className="flex justify-between mb-4">
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`px-4 py-2 ${
              step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Section 1
          </button>
          <button
            type="button"
            onClick={() => setStep(2)}
            className={`px-4 py-2 ${
              step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Section 2
          </button>
          <button
            type="button"
            onClick={() => setStep(3)}
            className={`px-4 py-2 ${
              step === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Section 3
          </button>

          <button
            type="button"
            onClick={() => setStep(4)}
            className={`px-4 py-2 ${
              step === 4 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Section 4
          </button>

          <button
            type="button"
            onClick={() => setStep(5)}
            className={`px-4 py-2 ${
              step === 5 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Section 5
          </button>

          <button
            type="button"
            onClick={() => setStep(6)}
            className={`px-4 py-2 ${
              step === 6 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Section 6
          </button>
        </div>

        {step === 1 && <StepOne></StepOne>}

        {step === 2 && <StepTwo></StepTwo>}

        {step === 3 && <StepThree></StepThree>}

        {step === 4 && <StepFour></StepFour>}
        {step === 5 && <StepFive></StepFive>}
        {step === 6 && <StepSix></StepSix>}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Previous
            </button>
          )}
          {step < 7 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
          {step === 7 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default WizardForm;
