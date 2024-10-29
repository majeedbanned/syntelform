"use client";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
        "name",
        "lastName",
        "passportNumber",
        "country",
      ]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 3));
      }
    } else if (step === 2) {
      const isValid = await methods.trigger(["address", "age", "education"]);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 3));
      }
    }
  };
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md space-y-6"
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
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Section 1</h2>
            <div>
              <input
                className="w-full p-2 border rounded"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <input
                className="w-full p-2 border rounded"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div>
              <input
                className="w-full p-2 border rounded"
                placeholder="Passport Number"
                {...register("passportNumber", {
                  required: "Passport number is required",
                })}
              />
              {errors.passportNumber && (
                <span className="text-red-500 text-sm">
                  {errors.passportNumber.message}
                </span>
              )}
            </div>
            <div>
              <input
                className="w-full p-2 border rounded"
                placeholder="Country"
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && (
                <span className="text-red-500 text-sm">
                  {errors.country.message}
                </span>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Section 2</h2>
            <div>
              <input
                className="w-full p-2 border rounded"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <span className="text-red-500 text-sm">
                  {errors.address.message}
                </span>
              )}
            </div>
            <div>
              <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Age"
                {...register("age", { required: "Age is required" })}
              />
              {errors.age && (
                <span className="text-red-500 text-sm">
                  {errors.age.message}
                </span>
              )}
            </div>
            <div>
              <input
                className="w-full p-2 border rounded"
                placeholder="Education"
                {...register("education", {
                  required: "Education is required",
                })}
              />
              {errors.education && (
                <span className="text-red-500 text-sm">
                  {errors.education.message}
                </span>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Section 3</h2>
            <div>
              <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Income"
                {...register("income", { required: "Income is required" })}
              />
              {errors.income && (
                <span className="text-red-500 text-sm">
                  {errors.income.message}
                </span>
              )}
            </div>
            <div>
              <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Salary"
                {...register("salary", { required: "Salary is required" })}
              />
              {errors.salary && (
                <span className="text-red-500 text-sm">
                  {errors.salary.message}
                </span>
              )}
            </div>
          </div>
        )}

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
          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
          {step === 3 && (
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
