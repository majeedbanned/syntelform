"use client";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const StepThree = () => {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const [employmentStatus, setEmploymentStatus] = useState<string>(
    getValues("employmentStatus")
  );

  const handleEmploymentStatusChange = (status: string) => {
    setEmploymentStatus(status);
    setValue("employmentStatus", status);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t("step3")}</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">
            {t("employmentDetails")}{" "}
            {errors.employmentStatus && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.employmentStatus.message}</strong>
              </span>
            )}
          </label>
          <div className="flex flex-col space-y-2">
            {[
              "Employed",
              "Self Employed",
              "Retired",
              "Unemployed",
              "Student",
              "House Wife",
            ].map((status) => (
              <label key={status} className="inline-flex items-center">
                <input
                  type="radio"
                  value={status}
                  {...register("employmentStatus", {
                    required: t("employmentStatus is required"),
                  })}
                  className="form-radio"
                  onChange={() => handleEmploymentStatusChange(status)}
                />
                <span className="ml-2">{t(status)}</span>
              </label>
            ))}
          </div>
        </div>

        {employmentStatus === "Other" && (
          <div>
            <label className="block font-medium mb-1">
              {t("otherSpecify")}{" "}
              {errors.otherEmploymentDetails && (
                <span className="text-red-600 text-sm ml-2">
                  <strong>{errors.otherEmploymentDetails.message}</strong>
                </span>
              )}
            </label>
            <Input
              {...register("otherEmploymentDetails", {
                required: t("otherEmploymentDetails is required"),
              })}
              placeholder={t("otherSpecify")}
            />
          </div>
        )}

        <div>
          <label className="block font-medium mb-1">
            {t("employmentIndustryProfession")}{" "}
            {errors.employmentIndustry && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.employmentIndustry.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("employmentIndustry", {
              required: t("employmentIndustryProfession is required"),
            })}
            placeholder={t("employmentIndustryProfession")}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("companyBusinessName")}{" "}
            {errors.companyName && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.companyName.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("companyName", {
              required: t("companyBusinessName is required"),
            })}
            placeholder={t("companyBusinessName")}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("boardMember")}{" "}
            {errors.isBoardMember && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.isBoardMember.message}</strong>
              </span>
            )}
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="true"
                {...register("isBoardMember", {
                  required: t("boardMember is required"),
                })}
                className="form-radio"
              />
              <span className="ml-2">{t("yes")}</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="false"
                {...register("isBoardMember", {
                  required: t("boardMember is required"),
                })}
                className="form-radio"
              />
              <span className="ml-2">{t("no")}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
