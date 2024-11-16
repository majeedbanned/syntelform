"use client";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const StepTen = () => {
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
        {"Appropriateness"}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block font-medium mb-1">
            {
              "I would like to receive information from the CMS Financial and any associated or selected partners about any products, services or offers that maybe relevant to me via phone, SMS or email."
            }
          </label>
        </div>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("receiveinformation", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("receiveinformation", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
        <h3 className=" font-bold mb-2">Declaration</h3>I have read, understood
        and agree to be bound by the following and any subsequent versions which
        may be updated from time to time.
        <div className="mt-6">
          <h3 className="font-medium mb-2">{t("")}</h3>
          <ul className="list-disc list-inside">
            <li className="underline font-bold">Client Agreement</li>
            <li className="underline font-bold">Order Execution Policy</li>
            <li className="underline font-bold">
              Payment Terms and Conditions
            </li>
            <li className="underline font-bold">Privacy Policy</li>
            <li className="underline font-bold">
              Conflicts of Interest Policy
            </li>
            <li className="underline font-bold">
              Client Complaint Handling Procedure
            </li>
            <li className="underline font-bold">
              Terms and Conditions of Website Use
            </li>
            <li className="underline font-bold"> Website Acceptable Use</li>
            <li className="underline font-bold"> Fraud Warning</li>
            <li className="underline font-bold"> Cookies Policy</li>
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
              I have read, understood and agree to the risks of trading CFDs as
              disclosed in the Risk Warning Disclosure notice and confirm that I
              have adequate financial resources to bear such risks.
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
              I understand that the information supplied by me is covered by the
              full provisions of the terms and conditions governing my
              relationship with CMS Financial LLC and govern how CMS Financial
              LLC may use and share this information.
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
              I acknowledge that the information contained in this form and
              information may be provided to the tax authorities of the country
              in which this account(s) is maintained and exchanged with tax
              authorities of another country or countries in which I may be tax
              registered pursuant to intergovernmental agreements to exchange
              financial account information. I irrevocably permit CMS Financial
              LLC to make such disclosures to any such authorities without
              obtaining further written or oral permission from me.
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
              I confirm that I am aged 18 years or over and that the information
              provided by me in this account application form is true and
              correct. I confirm that I will notify CMS Financial LLC
              immediately of any changes to the information I have provided. 
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTen;
