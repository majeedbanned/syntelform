"use client";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const StepFive = () => {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<StepFiveFormData>();

  const applicableStatements = [
    "Have you been employed by a regulated financial institution within the last 2 years?",
    "Are you accredited by the UAE Securities and Commodities Authority (SCA) or a similar supervisory authority, or represented by a body licensed by the SCA?",
    "Do you have expert knowledge and experience in the field of investment and the associated risks?",
    "Do you own assets with a combined worth of at least AED 4 million (approx. USD 1.1 million)?",
  ];

  const [classification, setClassification] = useState<string | undefined>(
    getValues("desiredClassification")
  );

  const handleClassificationChange = (classification: string) => {
    setClassification(classification);
    setValue("desiredClassification", classification);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t("step5")}</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block font-medium mb-1">
            {t("applicableStatements")}
          </label>
          <div className="flex flex-col space-y-2">
            {applicableStatements.map((statement) => (
              <label key={statement} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={statement}
                  {...register("applicableStatements")}
                  className="form-checkbox"
                />
                <span className="ml-2">{t(statement)}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-2">{t("assetsInclude")}</h3>
          <ul className="list-disc list-inside">
            <li>
              {t(
                "Real estate (excluding the current value of your primary residence)"
              )}
            </li>
            <li>{t("Any financial assets and investments")}</li>
            <li>{t("Any cash savings")}</li>
            <li>{t("Other assets of value")}</li>
          </ul>
        </div>

        <div className="mt-4">
          <p>
            {t(
              "If you have not ticked any of the boxes above, you will be classified as an Ordinary Investor. This means you will receive higher levels of protection than a Professional Investor."
            )}
          </p>
          <p className="mt-2">
            {t(
              "If you have ticked one or more of the boxes, you will be classified as a Professional Investor. This means you will not receive the same levels of protection as an Ordinary Investor."
            )}
          </p>
        </div>

        <div className="mt-4">
          <p>
            {t(
              "You can however request to be classified as an Ordinary Investor. Please confirm your desired classification:"
            )}
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Professional Investor"
                {...register("desiredClassification")}
                className="form-radio"
                onChange={() =>
                  handleClassificationChange("Professional Investor")
                }
              />
              <span className="ml-2">
                {t("I agree to be classified as a Professional Investor")}
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Ordinary Investor"
                {...register("desiredClassification")}
                className="form-radio"
                onChange={() => handleClassificationChange("Ordinary Investor")}
              />
              <span className="ml-2">
                {t("I request to be classified as an Ordinary Investor")}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;