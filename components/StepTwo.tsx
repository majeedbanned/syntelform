"use client";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  // More countries can be added here
];

const StepTwo = () => {
  const { t } = useTranslation();
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    getValues("country")
  );

  const [selectedCurrentCountry, setSelectedCurrentCountry] = useState<
    string | undefined
  >(getValues("currentCountry"));

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setValue("country", country);
  };

  const handleCurrentCountryChange = (country: string) => {
    setSelectedCurrentCountry(country);
    setValue("currentCountry", country);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t("step2")}</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">
            {t("buildingNoAndStreet")}{" "}
            {errors.buildingNoAndStreet && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.buildingNoAndStreet.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("buildingNoAndStreet", {
              required: t("buildingNoAndStreet is required"),
            })}
            placeholder={t("buildingNoAndStreet")}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("townOrCity")}{" "}
            {errors.townOrCity && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.townOrCity.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("townOrCity", {
              required: t("townOrCity is required"),
            })}
            placeholder={t("townOrCity")}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("state")}{" "}
            {errors.state && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.state.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("state", { required: t("state is required") })}
            placeholder={t("state")}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            {t("country")}{" "}
            {errors.country && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.country.message}</strong>
              </span>
            )}
          </label>
          <Select
            value={selectedCountry}
            onValueChange={(value) => handleCountryChange(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("country")} />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <>
          <div>
            <label className="block font-medium mb-1">
              {t("currentBuildingNoAndStreet")}{" "}
              {errors.currentBuildingNoAndStreet && (
                <span className="text-red-600 text-sm ml-2">
                  <strong>{errors.currentBuildingNoAndStreet.message}</strong>
                </span>
              )}
            </label>
            <Input
              {...register("currentBuildingNoAndStreet", {
                required: t("currentBuildingNoAndStreet is required"),
              })}
              placeholder={t("currentBuildingNoAndStreet")}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              {t("currentState")}{" "}
              {errors.currentState && (
                <span className="text-red-600 text-sm ml-2">
                  <strong>{errors.currentState.message}</strong>
                </span>
              )}
            </label>
            <Input
              {...register("currentState", {
                required: t("currentState is required"),
              })}
              placeholder={t("currentState")}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              {t("currentCountry")}{" "}
              {errors.currentCountry && (
                <span className="text-red-600 text-sm ml-2">
                  <strong>{errors.currentCountry.message}</strong>
                </span>
              )}
            </label>
            <Select
              value={selectedCurrentCountry}
              onValueChange={(value) => handleCurrentCountryChange(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("currentCountry")} />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              {t("currentPOBox")}{" "}
              {errors.currentPOBox && (
                <span className="text-red-600 text-sm ml-2">
                  <strong>{errors.currentPOBox.message}</strong>
                </span>
              )}
            </label>
            <Input
              {...register("currentPOBox", {
                required: t("currentPOBox is required"),
              })}
              placeholder={t("currentPOBox")}
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default StepTwo;
