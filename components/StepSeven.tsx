import { useFormContext } from "react-hook-form";

const StepSeven = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h2 className="text-xl mb-5 text-blue-600 border-[0px] flex items-center font-semibold">
          FATCA
        </h2>
        <p>
          In accordance with The Foreign Account Tax Compliance Act, please
          answer the following questions:
        </p>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Are you a US person?:
          </label>
          {errors.Employment && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.Employment.message}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("AreyouMemberof", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("AreyouMemberof", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Are you a Tax resident in any other countries?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("residentothercountries", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("residentothercountries", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
        {errors.residentothercountries && (
          <span className="text-red-500 text-sm">
            {errors.residentothercountries.message}
          </span>
        )}
      </div>

      {watch("residentothercountries") === "Yes" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            If yes, please specify :
          </label>
          <input
            className="w-full p-2 border rounded"
            {...register("residentothercountriesTxt", {
              required: "Current position is required if you're a board member",
            })}
          />
          {errors.residentothercountriesTxt && (
            <span className="text-red-500 text-sm">
              {errors.residentothercountriesTxt.message}
            </span>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Do you have a Tax Identification Number for your TAX residence?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("IdentificationTAX", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("IdentificationTAX", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
        {errors.IdentificationTAX && (
          <span className="text-red-500 text-sm">
            {errors.IdentificationTAX.message}
          </span>
        )}
      </div>

      {watch("IdentificationTAX") === "Yes" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            If yes, please provide Tax Identification Number :
          </label>
          <input
            className="w-full p-2 border rounded"
            {...register("IdentificationTAXTxt", {
              required: "Current position is required if you're a board member",
            })}
          />
          {errors.IdentificationTAXTxt && (
            <span className="text-red-500 text-sm">
              {errors.IdentificationTAXTxt.message}
            </span>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Are you a Politically Exposed Person?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("ExposedPerson", {
                required: "This field is required",
              })}
            />{" "}
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="No"
              {...register("ExposedPerson", {
                required: "This field is required",
              })}
            />{" "}
            No
          </label>
        </div>
        {errors.ExposedPerson && (
          <span className="text-red-500 text-sm">
            {errors.ExposedPerson.message}
          </span>
        )}
      </div>

      {watch("ExposedPerson") === "Yes" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            If yes, please provide Tax Identification Number :
          </label>
          {/* <input
            className="w-full p-2 border rounded"
            {...register("ExposedPersontxt", {
              required: "Current position is required if you're a board member",
            })}
          /> */}

          <select
            className="w-full  h-11 p-2 border rounded"
            {...register("ExposedPersontxt", {
              required: " details are required",
            })}
          >
            <option value="">Select Status</option>
            <option value="A senior military">A senior military </option>
            <option value="Government">Government</option>
            <option value="State-owned executive">State-owned executive</option>
            <option value="Political">Political</option>
            <option value="an immediate family member of such person">
              an immediate family member of such person
            </option>
          </select>

          {errors.IdentificationTAXTxt && (
            <span className="text-red-500 text-sm">
              {errors.ExposedPersontxt.message}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StepSeven;
