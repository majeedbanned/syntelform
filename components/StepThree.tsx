import { useFormContext } from "react-hook-form";

const StepThree = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <h2 className="text-xl font-semibold">3. Profession</h2>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Employment Details:
          </label>
          {errors.Employment && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.Employment.message}
            </span>
          )}
        </div>
        <select
          className="w-full p-2 border rounded"
          {...register("Employment", {
            required: "Employment details are required",
          })}
        >
          <option value="">Select Employment Status</option>
          <option value="Self Employed">Self Employed</option>
          <option value="Retired">Retired</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Student">Student</option>
          <option value="House Wife">House Wife</option>
        </select>
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Other, please specify:
          </label>
          {errors.EmploymentOther && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.EmploymentOther.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("EmploymentOther", {
            required: "This field is required",
          })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Please specify your Employment Industry Profession:
          </label>
          {errors.Profession && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.Profession.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("Profession", { required: "This field is required" })}
        />
      </div>

      <div>
        <div className="flex flex-row">
          <label className="block text-sm font-medium text-gray-700">
            Company/Business Name:
          </label>
          {errors.CompanyName && (
            <span className="text-red-500 text-sm ml-auto">
              {errors.CompanyName.message}
            </span>
          )}
        </div>
        <input
          className="w-full p-2 border rounded"
          {...register("CompanyName", { required: "This field is required" })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Are you a Member of any Board of Directors or Executive Management
          Team?
        </label>
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
        {errors.AreyouMemberof && (
          <span className="text-red-500 text-sm">
            {errors.AreyouMemberof.message}
          </span>
        )}
      </div>

      {watch("AreyouMemberof") === "Yes" && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Current Position/Designation:
          </label>
          <input
            className="w-full p-2 border rounded"
            {...register("CurrentPosition", {
              required: "Current position is required if you're a board member",
            })}
          />
          {errors.CurrentPosition && (
            <span className="text-red-500 text-sm">
              {errors.CurrentPosition.message}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StepThree;
