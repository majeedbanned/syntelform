// StepOne component without Zod validation
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
];

const StepOne = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    getValues("nationality")
  );

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setValue("nationality", country);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Personal Information</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">
            First Name
            {errors.firstName && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.firstName.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("firstName", { required: "First Name is required" })}
            placeholder="First Name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Last Name
            {errors.lastName && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.lastName.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("lastName", { required: "Last Name is required" })}
            placeholder="Last Name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Passport Number
            {errors.passportNumber && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.passportNumber.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("passportNumber", {
              required: "Passport Number is required",
            })}
            placeholder="Passport Number"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Phone Number
            {errors.phoneNumber && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.phoneNumber.message}</strong>
              </span>
            )}
          </label>
          <Input
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Title
            {errors.title && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.title.message}</strong>
              </span>
            )}
          </label>
          <Select
            value={getValues("title")}
            onValueChange={(value) => setValue("title", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr">Mr</SelectItem>
              <SelectItem value="Ms">Ms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            Nationality
            {errors.nationality && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.nationality.message}</strong>
              </span>
            )}
          </label>
          <Select
            value={selectedCountry}
            onValueChange={handleCountryChange}
            className={errors.nationality ? "error" : ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Nationality" />
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
            Email
            {errors.email && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.email.message}</strong>
              </span>
            )}
          </label>
          <Input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Date of Birth
            {errors.dateOfBirth && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.dateOfBirth.message}</strong>
              </span>
            )}
          </label>
          <Input
            type="date"
            {...register("dateOfBirth", {
              required: "Date of Birth is required",
            })}
            placeholder="Date of Birth"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Password
            {errors.password && (
              <span className="text-red-600 text-sm ml-2">
                <strong>{errors.password.message}</strong>
              </span>
            )}
          </label>
          <Input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            placeholder="Password"
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
