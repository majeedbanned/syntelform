import { useFormContext } from "react-hook-form";

const StepOne = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <h2 className="text-xl text-blue-600 border-[0px] flex items-center font-semibold">
        Personal Information
      </h2>

      <div>
        <div className="flex flex-row">
          <label className="block font-light text-sm  text-gray-700">
            Title
          </label>
          {errors.title && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.title.message}
            </span>
          )}
        </div>

        <select
          className="w-full p-2 h-11 border rounded"
          {...register("title", { required: "Title is required" })}
        >
          <option value="">Please Select</option>
          <option value="MR">MR</option>
          <option value="Ms">Ms</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-light text-gray-700">
            First Name
          </label>
          {errors.firstName && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          placeholder=" "
          {...register("firstName", {
            required: "First name is required",
          })}
        />
      </div>

      <div>
        <label className="block text-sm font-light text-gray-700">
          Middle Name
        </label>
        <input
          className="w-full p-2 border rounded"
          placeholder=""
          {...register("middleName")}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-light text-gray-700">
            Last Name
          </label>
          {errors.lastName && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          placeholder=""
          {...register("lastName", { required: "Last name is required" })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-light text-gray-700">
            Passport Number
          </label>
          {errors.passportNumber && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.passportNumber.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          placeholder=""
          {...register("passportNumber", {
            required: "Passport number is required",
          })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-light text-gray-700">
            Email
          </label>
          {errors.email && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.email.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder=""
          {...register("email", { required: "Email is required" })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-light text-gray-700">
            Country of Residence
          </label>
          {errors.countryOfResidence && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.countryOfResidence.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 h-11 border rounded"
          {...register("countryOfResidence", {
            required: "Country of residence is required",
          })}
        >
          <option value="">Please Select</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-light text-gray-700">
          Are you holding any other nationality?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("otherNationality", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("otherNationality", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
        {errors.otherNationality && (
          <span className="text-red-500 text-sm">
            {errors.otherNationality.message}
          </span>
        )}

        {watch("otherNationality") === "Yes" && (
          <div>
            <label className="block text-sm font-light text-gray-700">
              Please specify the country name
            </label>
            <input
              className="w-full p-2 border rounded"
              placeholder=""
              {...register("otherNationalityCountry", {
                required:
                  "Country name is required if holding another nationality",
              })}
            />
            {errors.otherNationalityCountry && (
              <span className="text-red-500 text-sm">
                {errors.otherNationalityCountry.message}
              </span>
            )}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-light text-gray-700">
          Are you a resident of any other countries?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("residentOtherCountries", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("residentOtherCountries", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
        {errors.residentOtherCountries && (
          <span className="text-red-500 text-sm">
            {errors.residentOtherCountries.message}
          </span>
        )}
        {watch("residentOtherCountries") === "Yes" && (
          <div>
            <label className="block text-sm font-light text-gray-700">
              Please specify the country name
            </label>
            <input
              className="w-full p-2 border rounded"
              placeholder=""
              {...register("residentOtherCountriesName", {
                required:
                  "Country name is required if resident of another country",
              })}
            />
            {errors.residentOtherCountriesName && (
              <span className="text-red-500 text-sm">
                {errors.residentOtherCountriesName.message}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOne;
