"use client";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const StepNine = () => {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<any>();

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
      <h2 className="text-xl mb-5 text-blue-600 border-[0px] flex items-center font-semibold">
        {"Conflict of Interest"}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block font-medium mb-1">
            {
              "Please read the below declaration carefully. As a regulated entity, we are required to assess if there is a conflict of interest prior to opening an Account. If you have any doubts or concerns, we recommend that you provide full and complete details of any relationships you may have that fit the criteria stated below:"
            }
          </label>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-2">{t("")}</h3>
          <ul className="list-disc list-inside">
            <li>{t("CMS Financial")}</li>
            <li>{t("CMS Financial’s board of directors")}</li>
            <li>
              {t(
                "any capital market institutions, any companies publicly listed in the UAE, any other entities licensed by SCA or the board of directors of any such entities"
              )}
            </li>
          </ul>
        </div>
        <div>
          <label className="block font-medium mb-1"></label>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              {...register("relationshipabove")}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <label className="block text-sm font-medium text-gray-700">
              I confirm that I have no relationship with any of the above
              parties.
            </label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1"></label>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              {...register("havearelationshipwith")}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <label className="block text-sm font-medium text-gray-700">
              I declare that I have a relationship with
            </label>
            <input
              className="w-64 p-2 border rounded"
              {...register("relationshipwith", {
                required: "This field is required",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepNine;
