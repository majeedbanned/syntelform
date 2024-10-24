"use client";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const StepFour = () => {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const annualIncomeOptions = [
    "Below $10,000",
    "$10,000-$49,999",
    "$50,000-$249,999",
    "$250,000- $499,999",
    "$500,000-1 million",
    "Above 1 million",
  ];

  const savingsOptions = [
    "Below - $10,000",
    "$10,000 - $50,000",
    "$50,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000 - $1 million",
    "Above $1 million",
  ];

  const initialDepositOptions = [
    "$1,000 - $4,999",
    "$5,000 - $49,999",
    "$50,000 - $249,999",
    "$250,000 - $499,999",
    "$500,000 - $1 million",
    "Above $1 million",
  ];

  const investmentObjectives = [
    "Asset Diversification",
    "Investment Opportunities",
    "Planning for the Future",
    "Asset Preservation",
    "Increase Sources of Income",
  ];

  // State to manage the selection of controlled components
  const [selectedAnnualIncome, setSelectedAnnualIncome] = useState<
    string | undefined
  >(getValues("annualIncome"));

  const [selectedSavings, setSelectedSavings] = useState<string | undefined>(
    getValues("valueOfSavings")
  );

  const [selectedInitialDeposit, setSelectedInitialDeposit] = useState<
    string | undefined
  >(getValues("expectedInitialDeposit"));

  const handleAnnualIncomeChange = (value: string) => {
    setSelectedAnnualIncome(value);
    setValue("annualIncome", value);
  };

  const handleSavingsChange = (value: string) => {
    setSelectedSavings(value);
    setValue("valueOfSavings", value);
  };

  const handleInitialDepositChange = (value: string) => {
    setSelectedInitialDeposit(value);
    setValue("expectedInitialDeposit", value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t("step4")}</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">
            {t("annualIncome")}{" "}
            {errors.annualIncome && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.annualIncome.message}</strong>
              </span>
            )}
          </label>
          <Select
            value={selectedAnnualIncome}
            onValueChange={handleAnnualIncomeChange}
            {...register("annualIncome", {
              required: t("annualIncome is required"),
            })}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("annualIncome")} />
            </SelectTrigger>
            <SelectContent>
              {annualIncomeOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("valueOfSavings")}{" "}
            {errors.valueOfSavings && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.valueOfSavings.message}</strong>
              </span>
            )}
          </label>
          <Select
            value={selectedSavings}
            onValueChange={handleSavingsChange}
            {...register("valueOfSavings", {
              required: t("valueOfSavings is required"),
            })}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("valueOfSavings")} />
            </SelectTrigger>
            <SelectContent>
              {savingsOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("sourceOfWealth")}{" "}
            {errors.sourceOfWealth && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.sourceOfWealth.message}</strong>
              </span>
            )}
          </label>
          <div className="flex flex-col space-y-2">
            {[
              "Employment Income",
              "Savings/Investments/Pension",
              "Family Income/Inheritance",
              "Other",
            ].map((source) => (
              <label key={source} className="inline-flex items-center">
                <input
                  type="radio"
                  value={source}
                  {...register("sourceOfWealth", {
                    required: t("sourceOfWealth is required"),
                  })}
                  className="form-radio"
                />
                <span className="ml-2">{t(source)}</span>
              </label>
            ))}
          </div>
          {getValues("sourceOfWealth") === "Other" && (
            <Input
              {...register("otherSourceOfWealth", {
                required: t("otherSourceOfWealth is required"),
              })}
              placeholder={t("otherSpecify")}
              className="mt-2"
            />
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("expectedInitialDeposit")}{" "}
            {errors.expectedInitialDeposit && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.expectedInitialDeposit.message}</strong>
              </span>
            )}
          </label>
          <Select
            value={selectedInitialDeposit}
            onValueChange={handleInitialDepositChange}
            {...register("expectedInitialDeposit", {
              required: t("expectedInitialDeposit is required"),
            })}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("expectedInitialDeposit")} />
            </SelectTrigger>
            <SelectContent>
              {initialDepositOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* <div>
          <label className="block font-medium mb-1">
            {t("investmentObjective")}{" "}
            {errors.investmentObjective && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.investmentObjective.message}</strong>
              </span>
            )}
          </label>
          <div className="flex flex-col space-y-2">
            {investmentObjectives.map((objective) => (
              <label key={objective} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={objective}
                  {...register("investmentObjective", {
                    required: t("investmentObjective is required"),
                  })}
                  className="form-checkbox"
                />
                <span className="ml-2">{t(objective)}</span>
              </label>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default StepFour;
